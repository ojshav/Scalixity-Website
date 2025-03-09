"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { SiteHeader } from "@/src/app/components/site-header";
import { Footer } from "@/src/app/components/footer";
import { v4 as uuidv4 } from "uuid";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [country, setCountry] = useState<string | null>(null);

  const hideLayout = [
    "/login", "/dashboard", "/dashboard/data", "/dashboard/useranalytics",
    "/dashboard/demographic", "/dashboard/technicalmetric", "/dashboard/AcquistionMatrix",
    "/dashboard/engagementmetrices", "/dashboard/home", "/dashboard/profile",
    "/dashboard/settings",
  ].includes(pathname);

  const getDeviceType = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (/mobile|android|iphone|ipod|blackberry|windows phone/.test(userAgent)) return "Mobile";
    if (/ipad|tablet|kindle|playbook/.test(userAgent)) return "Tablet";
    return "Desktop";
  };

  // Utility function for retrying failed requests
  const fetchWithRetry = async (url: string, options: RequestInit, retries = 3) => {
    for (let i = 0; i < retries; i++) {
      try {
        const response = await fetch(url, {
          ...options,
          signal: AbortSignal.timeout(5000)
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response;
      } catch (error) {
        if (i === retries - 1) throw error;
        await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1))); // Exponential backoff
      }
    }
  };

  const fetchCountry = async () => {
    try {
      const response = await fetchWithRetry("https://ipapi.co/json/", {
        cache: 'force-cache'
      });
      const data = await response.json();
      setCountry(data.country_name || "Unknown");
    } catch (error) {
      console.error("Failed to fetch country:", error);
      setCountry("Unknown");
    }
  };

  useEffect(() => {
    fetchCountry();

    let visitorId = localStorage.getItem("visitorId");
    if (!visitorId) {
      visitorId = uuidv4();
      localStorage.setItem("visitorId", visitorId);
    }

    const deviceType = getDeviceType();

    const sendEvent = (
      eventType: "page_visit" | "exit" | "inquiry",
      additionalData: Record<string, any> = {}
    ) => {
      const eventData = {
        visitorId,
        page: pathname,
        timestamp: new Date().toISOString(),
        event: eventType,
        deviceType,
        country: country || "Pending",
        ...additionalData,
      };

      console.log(`Sending ${eventType} event:`, eventData);

      fetch("http://localhost:5000/api/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventData),
      })
        .then(async (response) => {
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.error}`);
          }
          return response.json();
        })
        .then((data) => console.log(`${eventType} event successful:`, data))
        .catch((err) => console.error(`${eventType} event failed:`, err));
    };

    if (country) {
      sendEvent("page_visit");
    }

    const handleExit = () => country && sendEvent("exit");
    window.addEventListener("beforeunload", handleExit);

    return () => {
      window.removeEventListener("beforeunload", handleExit);
    };
  }, [pathname, country]);

  /** 🟢 Performance Metrics Tracking Logic */
  useEffect(() => {
    const deviceType = getDeviceType();
    let visitorId = localStorage.getItem("visitorId");
    
    const observer = new PerformanceObserver((list) => {
      const perfEntries = list.getEntries();

      let metrics: Record<string, any> = {
        visitorId: visitorId,
        page: pathname,
        deviceType: deviceType,
        country: country || "Unknown"
      };

      for (const entry of perfEntries) {
        if (entry.name === "first-contentful-paint") {
          metrics.FCP = entry.startTime;
        } else if (entry.entryType === "largest-contentful-paint") {
          metrics.LCP = entry.startTime;
        }
      }

      metrics.TTI = performance.timing.domInteractive - performance.timing.navigationStart;
      metrics.loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;

      console.log("Performance Metrics:", metrics);

      const handleMetrics = async () => {
        if (process.env.NODE_ENV !== 'production') {
          console.log('Metrics tracking disabled in development');
          return;
        }

        const metricsData = {
          ...metrics,
          timestamp: new Date().toISOString()
        };

        const storedData = JSON.parse(localStorage.getItem("performanceMetrics") || "[]");
        storedData.push(metricsData);
        localStorage.setItem("performanceMetrics", JSON.stringify(storedData));

        try {
          await fetchWithRetry(
            process.env.NEXT_PUBLIC_METRICS_API || "http://localhost:5000/api/track-metrics",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(metricsData),
            }
          );
        } catch (error) {
          console.error("Failed to send metrics:", error);
          // Store failed requests
          const failedRequests = JSON.parse(localStorage.getItem("failedMetrics") || "[]");
          failedRequests.push(metricsData);
          localStorage.setItem("failedMetrics", JSON.stringify(failedRequests));
        }
      };

      handleMetrics();
    });

    observer.observe({ type: "paint", buffered: true });
    observer.observe({ type: "largest-contentful-paint", buffered: true });

    return () => observer.disconnect();
  }, [pathname, country]);

  return (
    <>
      {!hideLayout && <SiteHeader />}
      <main className="flex-1">
        {children}
        {!hideLayout && (
          <button id="inquiry-button" className="p-2 bg-blue-500 text-white">
            Submit Inquiry (Test)
          </button>
        )}
      </main>
      {!hideLayout && <Footer />}
    </>
  );
}
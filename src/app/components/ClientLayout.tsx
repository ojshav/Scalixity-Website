"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { SiteHeader } from "@/src/app/components/site-header";
import { Footer } from "@/src/app/components/footer";
import Chatbot from "@/src/app/components/Chatbot";
import { v4 as uuidv4 } from "uuid";
const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [country, setCountry] = useState<string | null>(null);

  const hideLayout =
    [
      "/login", "/dashboard", "/dashboard/data", "/dashboard/useranalytics",
      "/dashboard/demographic", "/dashboard/technicalmetric", "/dashboard/AcquistionMatrix",
      "/dashboard/engagementmetrices", "/dashboard/home", "/dashboard/profile",
      "/dashboard/settings", "/dashboard/work", "/dashboard/contact", "/dashboard/inquiry", "/dashboard/campaign"
    ].includes(pathname) ||
    (pathname.startsWith("/dashboard/campaign/") && (pathname.endsWith("/form") || pathname.endsWith("/responses")));

  const hideHeaderOnly = [
    "/scalixity"
  ].includes(pathname);

  const getDeviceType = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    let browser = "Unknown";

    if (userAgent.includes("chrome") && !userAgent.includes("edge") && !userAgent.includes("opr")) {
      browser = "Chrome";
    } else if (userAgent.includes("firefox")) {
      browser = "Firefox";
    } else if (userAgent.includes("safari") && !userAgent.includes("chrome")) {
      browser = "Safari";
    } else if (userAgent.includes("edge")) {
      browser = "Edge";
    } else if (userAgent.includes("opr") || userAgent.includes("opera")) {
      browser = "Opera";
    } else if (userAgent.includes("msie") || userAgent.includes("trident")) {
      browser = "Internet Explorer";
    }

    let deviceType = "Desktop";
    if (/mobile|android|iphone|ipod|blackberry|windows phone/.test(userAgent)) deviceType = "Mobile";
    if (/ipad|tablet|kindle|playbook/.test(userAgent)) deviceType = "Tablet";

    return { deviceType, browser };
  };

      const fetchCountry = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        setCountry(data.country_name || "Unknown");
      } catch {
        setCountry("Unknown");
      }
    };

  useEffect(() => {
    // Clear localStorage on component mount (for testing/reset purposes)
    // localStorage.clear();
    // console.log("localStorage cleared");
  
    fetchCountry();
  
    const hasInitialized = sessionStorage.getItem(`visitInitialized_${pathname}`);
    if (hasInitialized) return;
  
    const initializeVisitor = () => {
      let visitorId = localStorage.getItem("visitorId");
      let visitCount = parseInt(localStorage.getItem("visitCount") || "0", 10);
      let isNewUser = false;
  
      if (!visitorId) {
        visitorId = uuidv4();
        localStorage.setItem("visitorId", visitorId);
        visitCount = 1;
        isNewUser = true;
        localStorage.setItem("visitCount", "1");
     
      } else {
        visitCount += 1;
        localStorage.setItem("visitCount", visitCount.toString());
   
      }
  
      sessionStorage.setItem(`visitInitialized_${pathname}`, "true");
  
      const { deviceType, browser } = getDeviceType();
  
      const sendEvent = (
        eventType: "page_visit" | "exit" | "inquiry" | "error",
        additionalData: Record<string, unknown> = {}
      ) => {
        const eventData = {
          visitorId,
          page: pathname,
          timestamp: new Date().toISOString(),
          event: eventType,
          deviceType,
          browser,
          country: country || "Pending",
          visitCount,
          userType: isNewUser ? "new" : "returning",
          ...additionalData,
        };
  
   
  
        fetch(`${baseURL}/api/track`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(eventData),
        })
          .then(async (response) => {
            if (!response.ok) {
              const errorData = await response.json();
              throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.error || "Unknown"}`);
            }
            return response.json();
          })
          .then(() => {
            // Silent success - no logging
          })
          .catch((err) => {
            // Silent error handling - no logging
            sendEvent("error", {
              errorCode: err.message.match(/\d{3}/)?.[0] || "Unknown",
              errorMessage: err.message,
              source: "fetch",
            });
          });
      };
  
      sendEvent("page_visit");
  
      const handleExit = () => sendEvent("exit");
      window.addEventListener("beforeunload", handleExit);
  
      return () => {
        window.removeEventListener("beforeunload", handleExit);
      };
    };
  
    const cleanup = initializeVisitor();
    return cleanup;
  }, [pathname, country]); 
  
  /** 🟢 Performance Metrics and Real-Time Error Tracking Logic */
  useEffect(() => {
    const { deviceType, browser } = getDeviceType();
    const visitorId = localStorage.getItem("visitorId");

    // Initialize error tracking structures
    const errorTypes: Record<string, number> = {};
    const errorsOverTime: Record<string, Record<string, number>> = {};
    const recentErrorLogs: { path: string; errorCode: string; count: number; lastOccurrence: string }[] = [];

    const sendErrorData = (data: Record<string, unknown>) => {
      fetch(`${baseURL}/api/track-error-logs`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          ...data, 
          visitorId, 
          page: pathname, 
          timestamp: new Date().toISOString(),
          deviceType,
          browser,
          country: country || "Unknown"
        }),
      })
        .then((res) => res.json())
        .then(() => {
          // Silent success - no logging
        })
        .catch(() => {
          // Silent error handling - no logging
        });
    };

    let lastErrorTime = 0;
    const ERROR_THRESHOLD = 10000; // 10 seconds

    const updateErrorTracking = (errorCode: string, errorMessage: string, source: string) => {
      const currentTime = Date.now();
      if (currentTime - lastErrorTime < ERROR_THRESHOLD) {
        return;
      }

      lastErrorTime = currentTime;
      const dateKey = new Date().toLocaleDateString("en-US", { weekday: "short" });

      // Update error types
      errorTypes[errorCode] = (errorTypes[errorCode] || 0) + 1;

      // Update errors over time
      if (!errorsOverTime[dateKey]) errorsOverTime[dateKey] = {};
      errorsOverTime[dateKey][errorCode] = (errorsOverTime[dateKey][errorCode] || 0) + 1;

      // Update recent error logs
      const existingLog = recentErrorLogs.find((log) => log.path === pathname && log.errorCode === errorCode);
      if (existingLog) {
        existingLog.count += 1;
        existingLog.lastOccurrence = new Date().toISOString();
      } else {
        recentErrorLogs.push({
          path: pathname,
          errorCode,
          count: 1,
          lastOccurrence: new Date().toISOString(),
        });
      }

      // Send all error data through single endpoint
      sendErrorData({ 
        recentErrorLogs,
        errorTypes,
        errorsOverTime,
        errorMessage,
        source
      });

      // Store in localStorage
      localStorage.setItem("errorTypes", JSON.stringify(errorTypes));
      localStorage.setItem("errorsOverTime", JSON.stringify(errorsOverTime));
      localStorage.setItem("recentErrorLogs", JSON.stringify(recentErrorLogs));
    };

    // Performance observer for metrics
    const observer = new PerformanceObserver((list) => {
      const perfEntries = list.getEntries();

      const metrics: Record<string, unknown> = {
        visitorId,
        page: pathname,
        deviceType,
        browser,
        country: country || "Unknown",
        timestamp: new Date().toISOString(), // Added for consistency
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

      // Send performance metrics to /track-metrics endpoint
      fetch(`${baseURL}/api/track-metrics`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(metrics),
      })
        .then(async (response) => {
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.error || "Unknown"}`);
          }
          return response.json();
        })
        .then(() => {
          // Silent success - no logging
        })
        .catch((err) => {
          // Silent error handling - no logging
          updateErrorTracking(
            err.message.match(/\d{3}/)?.[0] || "Unknown",
            err.message,
            "fetch-metrics"
          );
        });
    });

    observer.observe({ type: "paint", buffered: true });
    observer.observe({ type: "largest-contentful-paint", buffered: true });

    // Resource error tracking (e.g., failed images, scripts)
    const resourceObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        const resourceEntry = entry as unknown as { responseStatus: number; name: string };
        if (resourceEntry.responseStatus >= 400) {
          updateErrorTracking(
            resourceEntry.responseStatus.toString(),
            `Resource failed to load: ${resourceEntry.name}`,
            "resource"
          );
        }
      });
    });
    resourceObserver.observe({ type: "resource", buffered: true });

    // Global JS error handler
    const handleError = (event: ErrorEvent) => {
      updateErrorTracking(
        "Unknown",
        event.message || "Unknown JS error",
        "javascript"
      );
    };
    window.addEventListener("error", handleError);

    // Unhandled promise rejection handler
    const handleRejection = (event: PromiseRejectionEvent) => {
      updateErrorTracking(
        "Unknown",
        event.reason?.message || "Unhandled promise rejection",
        "promise"
      );
    };
    window.addEventListener("unhandledrejection", handleRejection);

    // Intercept fetch errors globally
    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
      try {
        const response = await originalFetch(...args);
        if (!response.ok) {
          updateErrorTracking(
            response.status.toString(),
            `Fetch failed: ${response.statusText}`,
            "fetch"
          );
        }
        return response;
      } catch (error) {
        updateErrorTracking(
          "Network",
          error instanceof Error ? error.message : "Network error",
          "fetch"
        );
        throw error;
      }
    };

    return () => {
      observer.disconnect();
      resourceObserver.disconnect();
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handleRejection);
      window.fetch = originalFetch; // Restore original fetch
    };
  }, [pathname, country]);

  return (
    <>
    <Chatbot />
      {!hideLayout && !hideHeaderOnly && <SiteHeader />}
      <main className="flex-1">
        {children}
      
      </main>
      {!hideLayout && <Footer />}
    </>
  );
}
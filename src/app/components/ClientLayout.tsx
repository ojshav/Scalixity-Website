"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { SiteHeader } from "@/src/app/components/site-header";
import { Footer } from "@/src/app/components/footer";
import { v4 as uuidv4 } from "uuid";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // List of pages where layout (header/footer) should be hidden
  const hideLayout = [
    "/login", 
    "/dashboard",
    "/dashboard/data",
    "/dashboard/useranalytics",
    "/dashboard/demographic",
    "/dashboard/technicalmetric",
    "/dashboard/AcquistionMatrix",
    "/dashboard/engagementmetrices",
    "/dashboard/home",
    "/dashboard/profile",
    "/dashboard/settings"
  ].includes(pathname);

  // Function to detect device type
  const getDeviceType = () => {
    const userAgent = navigator.userAgent.toLowerCase();

    if (/mobile|android|iphone|ipod|blackberry|windows phone/.test(userAgent)) {
      return "Mobile";
    } else if (/ipad|tablet|kindle|playbook/.test(userAgent)) {
      return "Tablet";
    } else {
      return "Desktop";
    }
  };

  useEffect(() => {
    let visitorId = localStorage.getItem("visitorId");

    if (!visitorId) {
      visitorId = uuidv4();
      localStorage.setItem("visitorId", visitorId);
    }

    const deviceType = getDeviceType();

    const sendEvent = (eventType: "page_visit" | "exit") => {
      const eventData = {
        visitorId,
        page: pathname,
        timestamp: new Date().toISOString(),
        event: eventType,
        deviceType, // Include device info
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
      .then(data => console.log(`${eventType} event successful:`, data))
      .catch((err) => console.error(`${eventType} event failed:`, err));
    };

    // Send page visit event
    sendEvent("page_visit");

    // Send exit event when user leaves
    const handleExit = () => sendEvent("exit");
    window.addEventListener("beforeunload", handleExit);

    return () => {
      window.removeEventListener("beforeunload", handleExit);
    };
  }, [pathname]);

  return (
    <>
      {!hideLayout && <SiteHeader />}
      <main className="flex-1">{children}</main>
      {!hideLayout && <Footer />}
    </>
  );
}

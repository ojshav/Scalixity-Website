"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { SiteHeader } from "@/src/app/components/site-header";
import { Footer } from "@/src/app/components/footer";
import { v4 as uuidv4 } from "uuid";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [country, setCountry] = useState<string | null>(null); // Store user's country

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
    "/dashboard/settings",
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

  // Fetch country data using a geolocation API (e.g., ipapi.co)
  const fetchCountry = async () => {
    try {
      const response = await fetch("https://ipapi.co/json/");
      const data = await response.json();
      setCountry(data.country_name || "Unknown");
    } catch (error) {
      console.error("Failed to fetch country:", error);
      setCountry("Unknown");
    }
  };

  useEffect(() => {
    // Fetch country on initial load
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
        country: country || "Pending", // Include country, fallback to "Pending" until fetched
        ...additionalData, // For inquiries or other data
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

    // Send page visit event once country is available
    if (country) {
      sendEvent("page_visit");
    }

    // Send exit event when user leaves
    const handleExit = () => country && sendEvent("exit");
    window.addEventListener("beforeunload", handleExit);

    // Example: Track inquiries (e.g., form submission or button click)
    const handleInquiry = (inquiryType: string) => {
      if (country) {
        sendEvent("inquiry", { inquiryType });
      }
    };

    // Attach inquiry tracking to a button or form (example)
    const inquiryButton = document.querySelector("#inquiry-button");
    if (inquiryButton) {
      inquiryButton.addEventListener("click", () => handleInquiry("Contact Form"));
    }

    return () => {
      window.removeEventListener("beforeunload", handleExit);
      if (inquiryButton) {
        inquiryButton.removeEventListener("click", () => handleInquiry("Contact Form"));
      }
    };
  }, [pathname, country]); // Re-run when pathname or country changes

  return (
    <>
      {!hideLayout && <SiteHeader />}
      <main className="flex-1">
        {children}
        {/* Example button for inquiry tracking */}
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
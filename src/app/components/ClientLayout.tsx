"use client";

import { usePathname } from "next/navigation";
import { SiteHeader } from "@/src/app/components/site-header";
import { Footer } from "@/src/app/components/footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
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

  return (
    <>
      {!hideLayout && <SiteHeader />}
      <main className="flex-1">{children}</main>
      {!hideLayout && <Footer />}
    </>
  );
}

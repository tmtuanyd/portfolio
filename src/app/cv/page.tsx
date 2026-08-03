import type { Metadata } from "next";
import { CvPage } from "@/components/CvPage";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `${site.name} — CV`,
  description: site.summary,
};

export default function CvRoute() {
  return <CvPage />;
}

import React from "react";
import ServicePageLayout from "@/components/layout/ServicePageLayout";
import { websiteData } from "@/data/websiteData";

const WebsiteDevelopment: React.FC = () => {
  return <ServicePageLayout {...websiteData} />;
};

export default WebsiteDevelopment;
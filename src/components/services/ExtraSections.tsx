// services/ExtraSections.tsx
import React from "react";
import { ExtraSection } from "./types";
import SoftwareTypesSection from "./SoftwareTypesSection";
import SoftwareLifecycleSection from "./SoftwareLifecycleSection";
import GenericExtraSection from "./GenericExtraSection";

interface ExtraSectionsProps {
  extraSections: ExtraSection[];
}

const ExtraSections: React.FC<ExtraSectionsProps> = ({ extraSections }) => {
  return (
    <>
      {extraSections.map((section) => {
        // Use the stable ID from the data for the key and sectionId
        const key = section.id;
        const sectionId = section.id;

        // Use the 'type' discriminator for a type-safe switch statement
        switch (section.type) {
          case "types":
            return (
              <SoftwareTypesSection
                key={key}
                section={section} // TypeScript knows 'section' is a SoftwareTypesSection here
                sectionId={sectionId}
              />
            );

          case "lifecycle":
            return (
              <SoftwareLifecycleSection
                key={key}
                section={section} // TypeScript knows 'section' is a SoftwareLifecycleSection here
                sectionId={sectionId}
              />
            );

          case "generic":
            return (
              <GenericExtraSection
                key={key}
                section={section} // TypeScript knows 'section' is a GenericExtraSection here
                sectionId={sectionId}
                // Optional: Pass an icon name for this generic section if needed
                iconName="ThumbsUp" // Example
              />
            );

          default:
            return null; // Return null for any unknown types
        }
      })}
    </>
  );
};

export default ExtraSections;
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
        // Correctly using the section's unique 'id' for the React key and the sectionId prop.
        const key = section.id;
        const sectionId = section.sectionId;
        // Using a switch statement is a great, type-safe way to render different components.
        switch (section.type) {
          case "types":
            return (
              <SoftwareTypesSection
                key={key}
                section={section}
                sectionId={sectionId} // This prop is correctly passed here.
              />
            );

          case "lifecycle":
            return (
              <SoftwareLifecycleSection
                key={key}
                section={section}
                sectionId={sectionId} // This prop needs to be used inside the component.
              />
            );

          case "generic":
            return (
              <GenericExtraSection
                key={key}
                section={section}
                sectionId={sectionId} // This prop also needs to be used.
                iconName="ThumbsUp" // Example
              />
            );

          default:
            return null; // Always good to have a fallback for unknown types.
        }
      })}
    </>
  );
};

export default ExtraSections;

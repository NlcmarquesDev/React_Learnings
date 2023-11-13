import { useState } from "react";
import Tabs from "./Tabs.jsx";
import TabButton from "./TabButton.jsx";
import { EXAMPLES } from "../../data-with-examples.js";
import Section from "./Section.jsx";

export default function Examples() {
  const [tabContent, setTabContent] = useState();

  function onSelect(selectedButton) {
    setTabContent(selectedButton);
  }
  return (
    <Section title={"Examples"} id={"examples"}>
      <Tabs
        buttonsContainer="menu"
        buttons={
          <>
            <TabButton
              isSelected={tabContent === "components"}
              onTouch={() => onSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={tabContent === "jsx"}
              onTouch={() => onSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={tabContent === "props"}
              onTouch={() => onSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={tabContent === "state"}
              onTouch={() => onSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {!tabContent ? (
          <p>Please select a topic.</p>
        ) : (
          <div id="tab-content">
            <h3>{EXAMPLES[tabContent].title}</h3>
            <p>{EXAMPLES[tabContent].description}</p>
            <pre>
              <code>{EXAMPLES[tabContent].code}</code>
            </pre>
          </div>
        )}
      </Tabs>
    </Section>
  );
}

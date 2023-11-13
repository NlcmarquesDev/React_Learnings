import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../../data-with-examples.js";
import Section from "./Section.jsx";

export default function CoreConcepts() {
  return (
    <Section id={"core-concepts"} title={"Core Concepts"}>
      <ul>
        {CORE_CONCEPTS.map((coreConceptItem) => {
          return (
            <CoreConcept key={coreConceptItem.title} {...coreConceptItem} />
          );
        })}
        {/* <CoreConcept
      title={CORE_CONCEPTS[0].title}
      description={CORE_CONCEPTS[0].description}
      image={CORE_CONCEPTS[0].image}
    />
    <CoreConcept
      title={CORE_CONCEPTS[1].title}
      description={CORE_CONCEPTS[1].description}
      image={CORE_CONCEPTS[1].image}
    /> */}
        {/* <CoreConcept {...CORE_CONCEPTS[2]} />
    <CoreConcept {...CORE_CONCEPTS[3]} /> */}
      </ul>
    </Section>
  );
}

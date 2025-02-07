/**
 * AboutSection component displays about information.
 *
 * This component renders the title and description using the `PageTitle` component,
 * followed by the `InfoSection` and `AddressSection` components.
 * 
 * @module AboutSection
 * @returns {JSX.Element} - The rendered about section with info, and address.
 */
import AddressSection from "./AddressSection";
import InfoSection from "./InfoSection";
import PageTitle from "../UI/PageTitle";
import Section from "../UI/Section";

function AboutSection() {
  return (
    <>
      <PageTitle title="Hbbdsfbsb dsdjfb">
        Nulla blandit congue neque et cursus. Mauris vel sapien varius leo
        laoreet feugiat id quis enim. Ut quis leo facilisis, interdum odio a,
        laoreet augue. Sed convallis quis mi vitae interdum. Pellentesque at
        dapibus diam. Maecenas placerat ornare mauris a ultrices. Suspendisse ac
        risus et metus scelerisque bibendum vitae vel augue. Duis eget magna
        vitae elit dignissim efficitur. Proin ut lectus nec felis condimentum
        pharetra vel in felis.
      </PageTitle>
      <Section>
        <InfoSection />
      </Section>
      <AddressSection />
    </>
  );
}

export default AboutSection;

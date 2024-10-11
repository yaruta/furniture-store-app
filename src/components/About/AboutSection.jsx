import classes from "./AboutSection.module.css";
import AddressSection from "./AddressSection";
import InfoSection from "./InfoSection";
import PageTitle from "../UI/PageTitle";

function AboutSection() {
  return (
    <section className={classes.about}>
      <PageTitle title="About">
        Mauris quam neque, ultricies quis sem non, hendrerit rhoncus urna.
        Mauris imperdiet lorem et tristique ornare. Fusce sed est diam. Vivamus
        vel vulputate ante, et tincidunt ante. Vivamus nec augue vel augue
        pellentesque egestas. Sed auctor, massa eget ornare consequat, arcu est
        eleifend nunc, id consequat magna turpis at enim.{" "}
      </PageTitle>
      <InfoSection />
      <AddressSection />
    </section>
  );
}

export default AboutSection;

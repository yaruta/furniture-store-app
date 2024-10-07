import classes from './AboutSection.module.css';
import AddressSection from './AddressSection';
import InfoSection from "./InfoSection";

function AboutSection() {
    return <section className={classes.about}>
        <InfoSection />
        <AddressSection />
    </section>
}

export default AboutSection;
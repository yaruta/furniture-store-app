import classes from "./InfoSection.module.css";
import DesignIcon from "../Icons/DesignIcon";
import BuildIcon from "../Icons/BuildIcon";
import PaymentIcon from "../Icons/PaymentIcon";
import DeliveryIcon from "../Icons/DeliveryIcon";

const INFO = [
  {
    title: "Einzigartiges Design",
    icon: <DesignIcon />,
    description:
      "Aenean lacinia eros eget dictum eleifend. Morbi non semper nibh, a mollis risus. Aliquam erat volutpat. Vivamus vel ex velit. Maecenas dolor sem, malesuada vitae justo sit amet, mattis tincidunt erat. Suspendisse quis ligula dui. Mauris rhoncus semper feugiat. Sed cursus a mi ac tempus. Curabitur elit lorem, imperdiet nec dictum ultrices, consequat sit amet massa. Sed et ante dolor.",
  },
  {
    title: "Einfacher Zusammenbau",
    icon: <BuildIcon />,
    description:
      "Fusce facilisis libero tortor. Morbi elementum dolor sed mollis tempus. Nunc pretium a lorem vitae vehicula. Vivamus accumsan tincidunt odio sit amet blandit. Quisque nec hendrerit tortor. Praesent scelerisque dolor vel interdum sodales.",
  },
  {
    title: "Einfache Bezahlung",
    icon: <PaymentIcon />,
    description:
      "Donec eget purus tellus. Nam sem risus. Duis id justo in magna vestibulum commodo. Quisque laoreet velit et ligula consectetur dictum. Suspendisse neque felis, pharetra in cursus at, sodales sed nulla. Fusce suscipit interdum ultricies. Pellentesque ultrices at odio nec facilisis. Nam porttitor semper justo vel suscipit. Cras quis vehicula elit. Ut bibendum porttitor sem ac laoreet.",
  },
  {
    title: "Schnellere Lieferung",
    icon: <DeliveryIcon />,
    description:
      "Ut dictum ac sem at cursus. Aliquam ut tincidunt orci, a volutpat libero. Nullam ut massa eu quam suscipit eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus mattis a neque sit amet facilisis. Sed lectus dui, iaculis eget purus quis, laoreet malesuada orci.",
  },
];

function InfoSection() {
  return (
    <article className={classes.infoSection}>
      <div className={classes.infoItems}>
        {INFO.map((infoItem) => (
          <div key={infoItem.title} className={classes.infoItem}>
            <h2>{infoItem.title}</h2>
            {infoItem.icon}
            <p>{infoItem.description}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

export default InfoSection;

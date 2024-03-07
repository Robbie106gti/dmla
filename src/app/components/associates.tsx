import styles from "./associates.module.css";
import AssociateCard from "./cards/associate-card";

const associates = [
  {
    image: "RodrigoBarroco.png",
    imageAlt: "",
    title: "",
    subTitle: "",
    description: "",
    blurp: "",
  },
  {
    image: "TatianiLoro.png",
    imageAlt: "",
    title: "",
    subTitle: "",
    description: "",
    blurp: "",
  },
  {
    image: "WillianGaudencio.png",
    imageAlt: "",
    title: "",
    subTitle: "",
    description: "",
    blurp: "",
  },
  {
    image: "Associated_AleArino.png",
    imageAlt: "Alexandre Ariño - graphics designer",
    title: "Alexandre Ariño",
    subTitle: "Graphic and Digital Designer",
    description:
      'Ale is a graphic designer and entrepreneur who started his career in 1998, specializing in branding and strategic design. In his opinion, design is a powerful and essential tool for developing innovation and the future of society.  He believes that everything can and must be well-designed to communicate a compelling and clear message. On a personal note, Ale loves motor racing, was a big fan of Ayrton Senna and finds being Rapha"s daddy one of his best roles.',
    blurp:
      "I had the privilege of working with Maria Paula from 2007 to 2010 when she worked for one of the most emblematic retail companies in Brazil and a case of corporate success for the world, Casas Bahia. As CEO of a design company, I collaboratively developed projects focusing on organizational culture, internal marketing, events, and corporate campaigns, among others. “I also met Robert at that time. He was already a promising designer who moved up to another area of digital marketing and communication, becoming a specialist in front-end development today. “In addition to the professionalism present in the careers of both founders, I have to highlight their human side, which is fully reflected in the operations and the excellent team assembled by Studio DMLA. I see the constant concern with having a humanized, kind, and cordial service with both partners and customers.",
  },
  {
    image: "AleFugita.png",
    imageAlt: "",
    title: "",
    subTitle: "",
    description: "",
    blurp: "",
  },
  {
    image: "MarceloBorges.png",
    imageAlt: "",
    title: "",
    subTitle: "",
    description: "",
    blurp: "",
  },
  {
    image: "MariaClaudia.png",
    imageAlt: "",
    title: "",
    subTitle: "",
    description: "",
    blurp: "",
  },
];
const associate = associates[3];

export default function Associates() {
  return (
    <div className={styles.associates}>
      <AssociateCard {...associate} />
      <div className={styles.carrosal}>
        {associates.map((associate, key) => (
          <div key={key} className={styles.select}>
            <img
              src={"/" + associate.image}
              loading="lazy"
              alt={associate.imageAlt}
              style={{
                width: "6.5rem",
                height: "auto",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

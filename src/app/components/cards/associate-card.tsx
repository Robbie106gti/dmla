import ScrollingP from "../snippets/scrolling/scrolling-p";
import styles from "./associate-card.module.css";

interface Props {
  image: string;
  imageAlt: string;
  location?: string;
  title: string;
  subTitle: string;
  description: string;
  blurp: string;
  color?: string;
}

export default function AssociateCard(props: Props) {
  return (
    <>
      <div className={styles.about}></div>
      <div className={styles.image}>
        <img
          src={"/" + props.image}
          loading="lazy"
          alt={props.imageAlt}
          style={{
            width: "auto",
            height: "15rem",
          }}
        />
      </div>
      <div className={styles.blurp}>
      <ScrollingP p={props.blurp} />
      </div>
    </>
  );
}
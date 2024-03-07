import styles from "./founder-card.module.css";

interface Props {
  image: string;
  imageAlt: string;
  title: string;
  subTitle: string;
  description: string;
  link?: string;
  meetingLink?: string;
  imageRight?: boolean;
  color?: string;
}

export default function FounderCard(props: Props) {
  const card = props.imageRight
    ? `${styles.activityCardRight}`
    : `${styles.activityCardLeft}`;
  return (
    <div className={card}>
      <div className={styles.image}>
        <img
          className={
            props.imageRight ? styles.canadaRight : styles.canadaleft
          }
          src={"/canada_circles.svg"}
          loading="lazy"
          alt={"canada location icon image"}
          style={{
            width: "5rem",
            height: "auto",
          }}
        />
        <img
          className={
            props.imageRight ? styles.mainImageRight : styles.mainImageLeft
          }
          src={"/" + props.image}
          loading="lazy"
          alt={props.imageAlt}
          style={{
            width: "17.5rem",
            height: "auto",
          }}
        />
      </div>
      <div className={styles.text}>
        <div className={props.imageRight ? styles.logoRight : styles.logoLeft}>
          <a
            className={props.imageRight ? styles.linkleft : styles.linkRight}
            href="http://"
          >
            Go to Website
          </a>
        </div>
        <h3 className={styles.title} >{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

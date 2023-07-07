import React from "react";
// resusable items for experience,project and eduction sections
import styles from "./sectionItem.module.css";
function SectionItem({ title, companyCollege, date, infoPoints }) {
  return (
    <div className={styles.box}>
      <div className={styles.title}>{title}</div>
      <div className={styles.companyCollege}>{companyCollege}</div>
      <div className={styles.date}>{date}</div>
      <div className={styles.infoPoints}>
        {infoPoints &&
          infoPoints.map((p) => <li className={styles.infoPoint}>{p}</li>)}
      </div>
    </div>
  );
}

export default SectionItem;

import React from "react";
import styles from "./skills.module.css";
function SkillsSection({ name, skills }) {
  return (
    <div>
      <div className={styles.skillHeading}>{name}</div>
      <div className={styles.skillsList}>
        {skills.map((s) => (
          <div className={styles.skillVal}>{s}</div>
        ))}
      </div>
    </div>
  );
}
function Skills() {
  return (
    <div>
      <div className={styles.box2}>
        <div className={styles.heading}>Skills</div>
        <SkillsSection
          name="Programming"
          skills={["C", "Java", "Js", "Haskell", "SQL", "Python"]}
        />
        <SkillsSection
          name="Web Development"
          skills={[
            "React",
            "Nodejs",
            "Express",
            "MongoDB",
            "SQL",
            "Azure Web Services",
            "CI/CD",
          ]}
        />
        <SkillsSection
          name="Data"
          skills={["Python", "SQL", "Numpy", "Pandas", "Data Processing"]}
        />
      </div>
    </div>
  );
}

export default Skills;

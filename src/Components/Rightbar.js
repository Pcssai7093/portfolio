import React from "react";
import styles from "./rightbar.module.css";
import SectionItem from "./SectionItem";
import { motion } from "framer-motion";
function Rightbar() {
  return (
    <motion.div
      initial={{ opacity: window.innerWidth > 1000 && 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3, delay: 4 }}
    >
      <div className={styles.box}>
        <div className={styles.education}>
          <div className={styles.heading}>EDUCATION</div>
          <SectionItem
            title="Bachelor’s in Computer Science and Engineering"
            companyCollege="Indian Institute of Information and Technology, Sricity"
            date="2020-2024"
            infoPoints={["CGPA : 8.54"]}
          />
          <SectionItem
            title="Higher Secondary School"
            companyCollege="Narayana Junior College"
            date="2018-2020"
            infoPoints={["Percentage : 96.4"]}
          />
        </div>
        <div className={styles.projects}>
          <div className={styles.heading}>PROJECTS</div>
          <SectionItem
            title="Amazon Data Scrapping Tool"
            companyCollege="Python | Web-Scrapping | Html-Parsing"
            infoPoints={[
              " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur quisquam modi quia voluptatum dolorem aperiam aliquid! Tempore autem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur quisquam modi quia voluptatum dolorem aperiam aliquid! Tempore autem",
              "a atque voluptate id tenetur, quis officia molestiae fugiat perspiciatis vero repudiandae.",
            ]}
          />

          <SectionItem
            title="Ecommerce Web Application"
            companyCollege="React | Node | Express | MongoDB"
            infoPoints={[
              " Lorem ipsum dolor, sit amet consectetur adm aperiam aliquid! Tempore autem.",
              "a atque voluptate id tenetur, quisgiat perspiciatis vero repudiandae.",
            ]}
          />
          <SectionItem
            title="Resume PortFolio"
            companyCollege="React | Node | Express | MongoDB"
            infoPoints={[
              " Lorem ipsum dolor, sre autem.",
              "a atque voluptate id tenetur, quis officia molestiae fugiat perspiciatis vero repudiandae.",
            ]}
          />
          <SectionItem
            title="Prediction of Tuberculosis Drug Resistance"
            companyCollege="React | Node | Express | MongoDB"
            infoPoints={[
              " Lorem ipsum dolor, sit amet c autem.",
              "a atque voluptate id tenetur, quis offfugiat perspiciatis vero repudiandae.",
            ]}
          />
        </div>
        <div className={styles.experience}>
          <div className={styles.heading}>EXPERIENCE</div>
          <SectionItem
            title="Technical Content Developer"
            companyCollege="TutorialsPoint"
            date="Aug 2022 - Dec 2022"
            infoPoints={[
              " Lorem ipsum dolor, sit amet c autem.",
              "a atque voluptate id tenetur, quis offfugiat perspiciatis vero repudiandae.",
            ]}
          />
          <SectionItem
            title="Freelance Technical Content Developer"
            companyCollege="Geeks For Geeks"
            date="july 2022 - Aug 2022"
            infoPoints={[
              " Lorem ipsum dolor, sit amet c autem.",
              "a atque voluptate id tenetur, quis offfugiat perspiciatis vero repudiandae.",
            ]}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Rightbar;

import React from "react";
import styles from "./leftbar.module.css";
import Profile from "./Profile";
import Skills from "./Skills";
import { motion } from "framer-motion";
function Leftbar() {
  return (
    <div>
      {/* {window.innerWidth < 1000 && "it less than 1000"} */}
      <div className={styles.box}>
        {/* <Profile /> */}
        <motion.div
          initial={{
            x: window.innerWidth > 1000 && "35vw",
            y: window.innerWidth > 1000 && "20vh",
            scale: window.innerWidth > 1000 && 1.3,
          }}
          animate={{ x: 0, y: 0, scale: 1 }}
          transition={{ duration: 3, delay: 3 }}
          className={styles.box1}
        >
          <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1671997600444-bded97fed063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
              alt=""
              srcset=""
              className={styles.dp}
            />
          </div>
          <div className={`${styles.name} lbName`}>
            POTTI{" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              CHANDRA
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              SEKHAR
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              SAI
            </motion.span>{" "}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="links"
          >
            <motion.div className={styles.link}>
              <i className="fa-brands fa-linkedin"></i>
              <a href="https://www.linkedin.com/in/potti-chandra-sekhar-sai-716987221/">
                Chandra Sekhar
              </a>
            </motion.div>
            <motion.div
              className={styles.link}

              // className={styles.link}
            >
              <i className="fa-brands fa-github"></i>
              <a href="https://github.com/Pcssai7093/">Pcssai7093</a>
            </motion.div>
            <motion.div className={styles.link}>
              <i className="fa-regular fa-envelope"></i>
              <a href="mailto:pcssai7093">pcssai7093@gmail.com</a>
            </motion.div>
            <motion.div className={styles.link}>
              <i className=" fas fa-phone "></i>
              <a href="tel:+917093692948">+917093692948</a>
            </motion.div>
          </motion.div>
        </motion.div>
        {/* <Skills /> */}
        <motion.div
          className={styles.box2}
          initial={{ opacity: window.innerWidth > 1000 && 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, delay: 4 }}
        >
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
        </motion.div>
      </div>
    </div>
  );
}

function SkillsSection({ name, skills }) {
  return (
    <div className={styles.skillsSection}>
      <div className={styles.skillHeading}>{name}</div>
      <div className={styles.skillsList}>
        {skills.map((s) => (
          <div className={styles.skillVal}>{s}</div>
        ))}
      </div>
    </div>
  );
}
export default Leftbar;

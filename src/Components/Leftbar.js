import { React, useEffect, useState } from "react";
import styles from "./leftbar.module.css";
import Profile from "./Profile";
import Skills from "./Skills";
import { motion } from "framer-motion";
import axios from "axios";
function Leftbar({ data }) {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://raw.githubusercontent.com/Pcssai7093/portfolio/master/data.json"
  //     )
  //     .then((result) => {
  //       console.log(result.data);
  //       setData((p) => result.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  return (
    <div>
      {/* {window.innerWidth < 1000 && "it less than 1000"} */}
      {data && (
        <div className={styles.box}>
          {/* <Profile /> */}
          <motion.div
            initial={{
              x: window.innerWidth > 1000 && "30vw",
              y: window.innerWidth > 1000 && "20vh",
              scale: window.innerWidth > 1000 && 1.3,
            }}
            animate={{ x: 0, y: 0, scale: 1 }}
            transition={{ duration: 3, delay: 3 }}
            className={styles.box1}
          >
            <div className={styles.imageOverlay}>
              <img
                src={data.profile_pic}
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
              skills={data.skills.PROGRAMMING}
            />
            <SkillsSection
              name="Libraries/FrameWorks"
              skills={data.skills.LIBRARIES_FRAMEWORKS}
            />
            <SkillsSection name="Databases" skills={data.skills.DATABASES} />
            <SkillsSection
              name="Tools/Platforms"
              skills={data.skills.TOOLS_PLATFORMS}
            />
            <SkillsSection name="Other" skills={data.skills.OTHER} />
          </motion.div>
        </div>
      )}
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

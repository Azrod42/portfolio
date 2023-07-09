'use client'
import React, {useEffect, useRef, useState} from "react";
import styles from "./projects.module.css";
import Project from "@/app/projects/transcendence";
import PersonalWebsite from "@/app/projects/personalWebsite";
import {Orbitron} from "next/font/google";
import {motion, useAnimationControls} from "framer-motion"

interface ProjectsProps {
}

const fontT = Orbitron({ subsets: ['latin'], weight: ['600', '800']})

const variants = {
    home: { y: 1200, transition: { duration: 0.5 } },
    hidden: { y: 1200, transition: { duration: 0.001 } },
    visible: { y :0 , transition: { duration: 0.5 } },
    exit: {y :-1200 , transition: { duration: 0.5 } }
};


const Projects: React.FC<ProjectsProps> = () => {
    const [displayProject, setDisplayProject] = useState<number>(0);
    const controls = useAnimationControls();

    function changeProject(num: number) {
        if (!num) {
            controls.start('home');
            return;
        }
        controls.start('exit');
        setTimeout(() => {
            controls.start('hidden');
        },500);
        setTimeout(() => {
            setDisplayProject(num);
            controls.start('visible');
        },600);
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <div className={styles.layer} onClick={() => setDisplayProject(0)}></div>
                <div className={styles.projects}>
                    <h1 className={[styles.h1, fontT.className].join(' ')} onClick={() => changeProject(1)}>transcendence</h1>
                    <h1 className={[styles.h1, fontT.className].join(' ')} onClick={() => changeProject(2)}>personal_website</h1>
                </div>
                <hr className={styles.hr}/>
                <motion.div className={styles.preview}
                            variants={variants}
                            initial="hidden"
                            animate={controls}
                            exit="exit"
                >
                    {displayProject == 1 ? <Project /> : <> </>}
                    {displayProject == 2 ? <PersonalWebsite /> : <> </>}

                </motion.div>
            </div>
            <div className={styles.borderTopLeft}></div>
            <div className={styles.borderTopRight}></div>
            <div className={styles.borderBottomLeft}></div>
            <div className={styles.borderBottomRight}></div>
        </div>
    )
}

export default Projects;
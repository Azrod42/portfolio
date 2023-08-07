'use client'
import React, {useEffect, useRef, useState} from "react";
import styles from "./projects.module.css";
import Project from "@/app/projects/transcendence";
import PersonalWebsite from "@/app/projects/personalWebsite";
import {Orbitron} from "next/font/google";
import {motion, useAnimationControls} from "framer-motion"
import Image from "next/image";
import Background from "@/app/(backgound)/background";
import Button from "@/app/(button)/button";
import PersonalWebsite3D from "@/app/projects/personalWebsite3D";
import Deezy from "@/app/projects/deezy";

interface ProjectsProps {
}

const fontT = Orbitron({ subsets: ['latin'], weight: ['600', '800']})

const transitionDuration = 0.2;

const variants = {
    home: { y: 1200, transition: { duration: transitionDuration } },
    hidden: { y: 1200, transition: { duration: 0.001 } },
    visible: { y :0 , transition: { duration: transitionDuration } },
    exit: {y :-1200 , transition: { duration: transitionDuration } }
};


const Projects: React.FC<ProjectsProps> = () => {
    const [displayProject, setDisplayProject] = useState<number>(0);
    const controls = useAnimationControls();

    function changeProject(num: number) {
        if (num == displayProject)
            return;
        if (!num) {
            controls.start('home');
            return;
        }
        controls.start('exit');
        setTimeout(() => {
            controls.start('hidden');
        },transitionDuration * 1000);
        setTimeout(() => {
            setDisplayProject(num);
            controls.start('visible');
        },(transitionDuration * 1000) + 100);
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <div className={styles.buttonHome}><Button buttonName={'Home'} buttonType={0} buttonUrlExtern={''} buttonUrlIntern={'/'} /></div>
                <div className={styles.layer} onClick={() => setDisplayProject(0)}></div>
                <div className={styles.projects}>
                    <h1 className={[styles.h1, fontT.className].join(' ')} onClick={() => changeProject(1)}>ft_transcendence</h1>
                    <h1 className={[styles.h1, fontT.className].join(' ')} onClick={() => changeProject(4)}>deezy</h1>
                    <h1 className={[styles.h1, fontT.className].join(' ')} onClick={() => changeProject(2)}>!_WIP_!_portfolio_3d</h1>
                    <h1 className={[styles.h1, fontT.className].join(' ')} onClick={() => changeProject(3)}>personal_website</h1>
                </div>
                <hr className={styles.hr}/>
                <motion.div className={styles.preview}
                            variants={variants}
                            initial="hidden"
                            animate={controls}
                            exit="exit"
                >
                    {displayProject == 1 ? <Project /> : <> </>}
                    {displayProject == 2 ? <PersonalWebsite3D /> : <> </>}
                    {displayProject == 3 ? <PersonalWebsite /> : <> </>}
                    {displayProject == 4 ? <Deezy /> : <> </>}

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
'use client'
import React, {useEffect, useRef, useState} from "react";
import styles from "./projects.module.css";
import Project from "@/app/projects/transcendence";
import PersonalWebsite from "@/app/projects/personalWebsite";
import {Orbitron} from "next/font/google";

interface ProjectsProps {
}

const fontT = Orbitron({ subsets: ['latin'], weight: ['600', '800']})

const Projects: React.FC<ProjectsProps> = () => {
    const [displayProject, setDisplayProject] = useState<number>(0);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <div className={styles.layer} onClick={() => setDisplayProject(0)}></div>
                <div className={styles.projects}>
                    <h1 className={[styles.h1, fontT.className].join(' ')} onClick={() => setDisplayProject(1)}>transcendence</h1>
                    <h1 className={[styles.h1, fontT.className].join(' ')} onClick={() => setDisplayProject(2)}>personal_website</h1>
                </div>
                <div className={styles.preview}>
                    {displayProject == 1 ? <Project /> : <> </>}
                    {displayProject == 2 ? <PersonalWebsite /> : <> </>}

                </div>
            </div>
            <div className={styles.borderTopLeft}></div>
            <div className={styles.borderTopRight}></div>
            <div className={styles.borderBottomLeft}></div>
            <div className={styles.borderBottomRight}></div>
        </div>
    )
}

export default Projects;
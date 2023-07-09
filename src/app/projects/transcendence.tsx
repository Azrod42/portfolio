'use client'
import React, {useEffect, useRef} from "react";
import styles from "./projectGlobal.module.css";
import {Figtree, Orbitron} from "next/font/google";
import Image from "next/image";
import {motion, useAnimationControls} from "framer-motion"

interface ProjectsProps {
}

const fontP = Figtree({ subsets: ['latin'], weight: ['400']})
const fontT = Orbitron({ subsets: ['latin'], weight: ['600', '800']})


const Transcendence: React.FC<ProjectsProps> = () => {
    return (
        <div className={styles.container}>
            <h1 className={[styles.h1, fontT.className].join(' ')}>ft_transcendence</h1>
            <div className={fontP.className}>
                <p className={styles.p}>Web development project for 42. The goal is to create an online multiplayer Pong with features such as:</p>
                <p className={styles.pSpace}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-auth (email) and OAuth2 42</p>
                <p className={styles.p}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Chat (private and channel)</p>
                <p className={styles.p}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Matchmaking (ranked, un-ranked, custom appearance...)</p>
                <p className={styles.p}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-User profile (player stats, add friend, block user...)</p>
                <p className={styles.p}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Live information (users connected, friend status ... )</p>
                {/*<p className={styles.pSpace}>Website build in Single Page Application.</p>*/}
            </div>
            <hr className={styles.hr}/>
            {/*<h2 className={[styles.h2, fontP.className].join(' ')}>build with</h2>*/}
            <div className={styles.containerStack}>
                <span className={styles.stack}>#NextJS</span>
                <span className={styles.stack}>#React</span>
                <span className={styles.stack}>#html</span>
                <span className={styles.stack}>#css</span>
                <span className={styles.stack}>#TypeScript</span>
                <span className={styles.stack}>#NestJS</span>
                <span className={styles.stack}>#PostgreSQL</span>
                <span className={styles.stack}>#Docker</span>
                <span className={styles.stack}>#Ngix</span>
            </div>
            <Image src={'/transcendence.jpeg'} alt={'transcendence'} width={600} height={300} className={styles.img}/>
        </div>
    )
}

export default Transcendence;
import React from "react";
import styles from "./projectGlobal.module.css";
import {Figtree, Orbitron} from "next/font/google";
import Image from "next/image";
import Button from "@/app/(button)/button";

interface PersonalWebsite3DProps {
}

const fontP = Figtree({ subsets: ['latin'], weight: ['400']})
const fontT = Orbitron({ subsets: ['latin'], weight: ['600', '800']})


const PersonalWebsite3D: React.FC<PersonalWebsite3DProps> = () => {
    function redirect () {
        window.open('https://v2.portfolio.tsorabel.dev/', '_blank');
    }
    return (
        <div className={styles.container}>
            <Button buttonName={'Access'} buttonType={1} buttonUrlExtern={'https://v2.portfolio.tsorabel.dev/'} buttonUrlIntern={'/'} />
            <h1 className={[styles.h1, fontT.className].join(' ')}>portfolio_3d</h1>
            <div className={fontP.className}>
                <p className={styles.p}>Rebuilding my portfolio in 3D using ThreeJs. Built in NextJS (React) TypeScript.</p>
            </div>
            <hr className={styles.hr}/>
            {/*<h2 className={[styles.h2, fontP.className].join(' ')}>build with</h2>*/}
            <div className={styles.containerStack}>
                <span className={styles.stack}>#html</span>
                <span className={styles.stack}>#css</span>
                <span className={styles.stack}>#TypeScript</span>
                <span className={styles.stack}>#React</span>
                <span className={styles.stack}>#Next</span>
                <span className={styles.stack}>#ThreeJS</span>
            </div>
            <Image src={'/3dWebsite.gif'} alt={'personal-website'} width={600} height={300} className={styles.img} onClick={redirect}/>
        </div>
    )
}

export default PersonalWebsite3D;
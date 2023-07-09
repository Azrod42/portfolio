import React from "react";
import styles from "./projectGlobal.module.css";
import {Figtree, Orbitron} from "next/font/google";
import Image from "next/image";
import Button from "@/app/(button)/button";

interface PersonalWebsiteProps {
}

const fontP = Figtree({ subsets: ['latin'], weight: ['400']})
const fontT = Orbitron({ subsets: ['latin'], weight: ['600', '800']})


const PersonalWebsite: React.FC<PersonalWebsiteProps> = () => {
    return (
        <div className={styles.container}>
            <Button buttonName={'Access'} buttonType={1} buttonUrlExtern={'https://azrod.dev'} buttonUrlIntern={'/'} />
            <h1 className={[styles.h1, fontT.className].join(' ')}>first_website</h1>
            <div className={fontP.className}>
                <p className={styles.p}>First website made in html css and JavaScript with features such as :</p>
                <p className={styles.pSpace}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Flappy bird game</p>
                <p className={styles.p}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Weather api tools</p>
                <p className={styles.p}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-so_long 42 project</p>
                <p className={styles.p}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-...</p>
                <p className={styles.pSpace}>Website build in Single Page Application.</p>
            </div>
            <hr className={styles.hr}/>
            {/*<h2 className={[styles.h2, fontP.className].join(' ')}>build with</h2>*/}
            <div className={styles.containerStack}>
                <span className={styles.stack}>#html</span>
                <span className={styles.stack}>#css</span>
                <span className={styles.stack}>#JavaScript</span>
            </div>
            <Image src={'/personal-website.jpeg'} alt={'personal-website'} width={600} height={300} className={styles.img} />
        </div>
    )
}

export default PersonalWebsite;
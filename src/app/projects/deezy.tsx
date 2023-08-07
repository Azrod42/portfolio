import React from "react";
import styles from "./projectGlobal.module.css";
import {Figtree, Orbitron} from "next/font/google";
import Image from "next/image";
import Button from "@/app/(button)/button";


interface DeezyProps {
}

const fontP = Figtree({ subsets: ['latin'], weight: ['400']})
const fontT = Orbitron({ subsets: ['latin'], weight: ['600', '800']})


const Deezy: React.FC<DeezyProps> = () => {
    function redirect () {
        window.open('http://51.254.37.204:4200/', '_blank');
    }
    return (
        <div className={styles.container}>
            <Button buttonName={'Access'} buttonType={1} buttonUrlExtern={'http://51.254.37.204:4200/'} buttonUrlIntern={'/'} />
            <h1 className={[styles.h1, fontT.className].join(' ')}>deezy</h1>
            <div className={fontP.className}>
                <p className={styles.p}>Deezy is a small web project using the Deezer api with the following functionality:  </p>
                <p className={styles.pSpace}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-OAuth2 Deezer</p>
                <p className={styles.p}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Trending song display</p>
                <p className={styles.p}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Search for any sound via the deezer api</p>
                <p className={styles.p}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Single page for each sound, with the option of listening to a preview</p>

                <p className={styles.pSpace}>Website build with Angular + Express + MangoDB host on OVH VPS.</p>
            </div>
            <hr className={styles.hr}/>
            {/*<h2 className={[styles.h2, fontP.className].join(' ')}>build with</h2>*/}
            <div className={styles.containerStack}>
                <span className={styles.stack}>#Angular</span>
                <span className={styles.stack}>#Express.js</span>
                <span className={styles.stack}>#MongoDB</span>
                <span className={styles.stack}>#HTML</span>
                <span className={styles.stack}>#TypeScript</span>
                <span className={styles.stack}>#CSS</span>
                <span className={styles.stack}>#Docker</span>
            </div>
            <Image src={'/deezy.gif'} alt={'deezy'} width={600} height={300} className={styles.img} onClick={redirect}/>
        </div>
    )
}

export default Deezy;
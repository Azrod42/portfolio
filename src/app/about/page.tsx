'use client'
import React, {useEffect, useRef} from "react";
import styles from "./about.module.css";
import Image from "next/image";
import {useRouter} from "next/navigation";
import Background from "@/app/(backgound)/background";
import Button from "@/app/(button)/button";

interface AboutProps {
}

const About: React.FC<AboutProps> = () => {

    return (
        <div className={styles.container}>
            <Button buttonName={'Home'} buttonType={0} buttonUrlExtern={''} buttonUrlIntern={'/'} />
            <div className={styles.containerHome}></div>
            <hr className={styles.hr} />
            <div className={styles.shortDesc}>
                <Image src={'/about3.jpg'} alt={'banner-about'} width={1000} height={1000} className={styles.pictureDesc}/>
                <div className={styles.containerAboutMe}>
                    <p className={styles.p}>After working in esports for 4 years, I decided to change my career path to one that had always attracted me, development.</p>
                    <p className={styles.p}>I joined the wonderful world of 42, with its project-based pedagogy, where I m currently 5/152 of my prom.</p>
                    <p className={styles.p}>At the moment, my aim is to move into web development.</p>
                    <p className={styles.pItalic}>Skills can be taught, personality is inherent. I prefer to keep learning, continue challenging myself, and do interesting things that matter.</p>
                </div>
            </div>
            <hr className={styles.hr} />
            <div className={styles.containerTechStack}>

                <h1 id="-languages-">💻 LANGUAGES:</h1>
                <p><img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&amp;logo=javascript&amp;logoColor=%23F7DF1E" alt="JavaScript"/>
                    <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&amp;logo=typescript&amp;logoColor=white" alt="TypeScript"/>
                        <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&amp;logo=css3&amp;logoColor=white" alt="CSS3"/>
                            <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&amp;logo=html5&amp;logoColor=white" alt="HTML5"/>
                                <img src="https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&amp;logo=c&amp;logoColor=white" alt="C"/>
                                    <img src="https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&amp;logo=c%2B%2B&amp;logoColor=white" alt="C++"/>
                                        <img src="https://img.shields.io/badge/rust-%23000000.svg?style=for-the-badge&amp;logo=rust&amp;logoColor=white" alt="Rust"/></p>
                <h1 id="-frameworks-platforms-libraries-">💻 FRAMEWORKS, PLATFORMS &amp; LIBRARIES:</h1>
                <p><img src="https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&amp;logo=angular&amp;logoColor=white" alt="Angular"/>
                    <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&amp;logo=react&amp;logoColor=%2361DAFB" alt="React"/>
                        <img src="https://img.shields.io/badge/Next-black?style=for-the-badge&amp;logo=next.js&amp;logoColor=white" alt="Next JS"/>
                            <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&amp;logo=express&amp;logoColor=%2361DAFB" alt="Express.js"/>
                                <img src="https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&amp;logo=nestjs&amp;logoColor=white" alt="NestJS"/>
                                    <img src="https://img.shields.io/badge/rxjs-%23B7178C.svg?style=for-the-badge&amp;logo=reactivex&amp;logoColor=white" alt="RxJS"/>
                                        <img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&amp;logo=JSON%20web%20tokens" alt="JWT"/></p>
                <h1 id="-databases-servers-">💻 DATABASES &amp; SERVERS:</h1>
                <p><img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&amp;logo=mongodb&amp;logoColor=white" alt="MongoDB"/>
                    <img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&amp;logo=postgresql&amp;logoColor=white" alt="Postgres"/>
                        <img src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&amp;logo=amazon-aws&amp;logoColor=white" alt="AWS"/>
                            <img src="https://img.shields.io/badge/DigitalOcean-%230167ff.svg?style=for-the-badge&amp;logo=digitalOcean&amp;logoColor=white" alt="DigitalOcean"/>
                                <img src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&amp;logo=vercel&amp;logoColor=white" alt="Vercel"/>
                                    <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&amp;logo=docker&amp;logoColor=white" alt="Docker"/></p>
                <h1 id="-others-">💻 OTHERS:</h1>
                <p><img src="https://img.shields.io/badge/shell_script-%23121011.svg?style=for-the-badge&amp;logo=gnu-bash&amp;logoColor=white" alt="Shell Script"/>
                    <img src="https://img.shields.io/badge/GitHub-%23121011.svg?style=for-the-badge&amp;logo=github&amp;logoColor=white" alt="GitHub"/>
                        <img src="https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&amp;logo=nginx&amp;logoColor=white" alt="Nginx"/>
                            <img src="https://img.shields.io/badge/Git-fc6d26?style=for-the-badge&amp;logo=git&amp;logoColor=white" alt="GIT"/>
                                <img src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&amp;logo=linux&amp;logoColor=black" alt="LINUX"/>
                                    <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&amp;logo=postman&amp;logoColor=white" alt="Postman"/>
                                            <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&amp;logo=node.js&amp;logoColor=white" alt="NodeJS"/></p>

            </div>
            <hr className={styles.hr} />
            <h1 className={styles.h1TechStack}>📄 CV: :</h1>
            <iframe src="/CV.pdf" width="100%" height="1200" className={styles.pdf}> </iframe>
        </div>
    )
}

export default About;
'use client'
import React, {useEffect, useRef} from "react";
import styles from "./background.module.css";
import Image from "next/image";
import {useRouter} from "next/navigation";

interface BackgroundProps {
}

const Background: React.FC<BackgroundProps> = () => {

    return (
        <div className={styles.container}>
            <article className={styles.wrapper}>
            </article>
        </div>
    )
}

export default Background;
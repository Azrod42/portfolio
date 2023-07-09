'use client'
import React, {useEffect, useRef} from "react";
import styles from "./button.module.css";
import Image from "next/image";
import {useRouter} from "next/navigation";

interface ButtonProps {
    buttonName: string;
    buttonType: number;
    buttonUrlExtern: string;
    buttonUrlIntern: string;
}

const Button: React.FC<ButtonProps> = ({buttonName, buttonType, buttonUrlIntern, buttonUrlExtern}) => {
    const {push} = useRouter();

    const refBtn: React.MutableRefObject<any> = useRef();

    useEffect(() => {
        refBtn.current.innerText = "\xa0\xa0" + `${buttonName}` + "\xa0\xa0";
        if (!buttonType) {
            refBtn.current.addEventListener('click', () => {
                push(buttonUrlIntern);
            })
        } else {
            refBtn.current.addEventListener('click', () => {
                window.open(buttonUrlExtern, '_blank');
            })
        }

    }, [])
    return (
        <div className={styles.button} ref={refBtn}>

        </div>
    )
}

export default Button;
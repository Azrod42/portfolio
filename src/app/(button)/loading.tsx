'use client'
import React, {useEffect, useRef} from "react";
import css from "./loading.module.css";

interface LoadingProps {
}

const Loading: React.FC<LoadingProps> = () => {

    return (
        <div className={css.container}>
            <div className={css.loader}>
                <div className={css.div1}></div>
                <div className={css.div2}></div>
                <div className={css.div3}></div>
                <div className={css.div4}></div>
            </div>
        </div>
    )
}

export default Loading;
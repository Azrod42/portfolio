'use client'
import styles from './page.module.css'
import Image from "next/image";

export default function Home() {

    function onClickGithub () {window.open('https://github.com/Azrod42', '_blank');}
    function onClickTwitter () {window.open('https://twitter.com/A_Azrod_FR', '_blank');}
    function onClickLinkedin () {window.open('https://www.linkedin.com/in/tom-sorabella-26a336189/', '_blank');}

        return (
    <main className={styles.main}>
      <div className={styles.container}>
          <h1 className={styles.h1}>Tom Sorabella</h1>
          <h2 className={styles.h2}>Student @ <a target={'_blank'} href={'https://42nice.fr/'} className={styles.a}>42 Nice</a></h2>
          <hr className={styles.separator}/>
          <div className={styles.navDiv} ><p className={styles.p}>ABOUT</p><hr className={styles.hr}/></div>
          <div className={styles.navDiv} ><p className={styles.p}>EXPERIENCE</p><hr className={styles.hr}/></div>
          <div className={styles.navDiv} ><p className={styles.p}>PROJECT</p><hr className={styles.hr}/></div>
          <div className={styles.rssContainer}>
              <Image src={'/github.svg'} alt={'logo-github'} width={25} height={25} className={styles.rss} onClick={onClickGithub} />
              <Image src={'/twitter.svg'} alt={'logo-github'} width={25} height={25} className={styles.rss} onClick={onClickTwitter}/>
              <Image src={'/linkedin.svg'} alt={'logo-github'} width={25} height={25} className={styles.rss} onClick={onClickLinkedin}/>
          </div>

      </div>
        <Image src={'/profile-image.png'} alt={'profile-image'} width={4096} height={4096} className={styles.profileImg}/>
    </main>
  )
}

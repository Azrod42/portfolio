'use client'
import React, {useEffect, useRef} from "react";
import styles from "./42-project.module.css";
import Image from "next/image";
import {useRouter} from "next/navigation";

interface ProjectFortyTowProps {
}

const ProjectFortyTow: React.FC<ProjectFortyTowProps> = () => {
    const refHome: React.MutableRefObject<any> = useRef();
    const {push} = useRouter();

    useEffect(() => {
        refHome.current.addEventListener('mouseover', () => {
            refHome.current.innerText = "\xa0\xa0Home.tsorabel\xa0\xa0";
            setTimeout(() => {
                if (refHome.current)
                    refHome.current.innerText = '\xa0\xa0Home\xa0\xa0';
            }, 2000)
        });
        refHome.current.addEventListener('click', () => {
            push('/');
        })
        refHome.current.innerText = '\xa0\xa0Home\xa0\xa0';
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.containerHome} ref={refHome}></div>
            <h1 className={styles.h1}>42 Cursus</h1>
            <hr className={styles.hr} />
            <div className={styles.project} id="ft_irc">
                <div className={styles.projectText}>
                    <h2 className={styles.h2}>ft_irc :</h2>
                    <p className={styles.p}>ft_irc is a group project that involves creating an IRC server (from scratch, in C++), as the
                        name suggests. The server follows the RFC 2812 specification and can therefore be used with
                        existing IRC clients.</p>
                    <div className={styles.stack}>
                        <p className={styles.stackType}>{'\xa0\xa0#C++\xa0\xa0'}</p>
                        <p className={styles.stackType}>{'\xa0\xa0#Network\xa0\xa0'}</p>
                    </div>
                    <p className={styles.p}>Repo : <a className={styles.repoLink} target="_blank" href="https://github.com/Azrod42/ft_irc">Github</a></p>
                    <p className={styles.p}>Teammate: <a className={styles.repoLink} target="_blank" href="https://lfantine.fr">flantine</a></p>
                </div>
                <div className="project-image">
                    <Image src={'/42-project/ft_irc.png'} alt={'ft_irc'} width={256} height={256} />
                </div>
            </div>
            <hr className={styles.hr} />
            <div className={styles.projectR} id="inception">
                <div className={styles.projectText}>
                    <h2 className={styles.h2}>Inception :</h2>
                    <p className={styles.p}>Docker is used extensively with docker-compose in this project with multiple constraints: hosting a multi-container wordpress, reverse-proxy and SSL certificates.</p>
                    <div className={styles.stack}>
                        <p className={styles.stackType}>{'\xa0\xa0#Docker\xa0\xa0'}</p>
                        <p className={styles.stackType}>{'\xa0\xa0#SysAdmin\xa0\xa0'}</p>
                        <p className={styles.stackType}>{'\xa0\xa0#Network\xa0\xa0'}</p>
                    </div>
                </div>
                <div className="project-image">
                    <Image src={'/42-project/inception.png'} alt={'ft_irc'} width={256} height={206} />
                </div>
            </div>
            <hr className={styles.hr} />
            <div className={styles.project} id="cub3D">
                <div className={styles.projectText}>
                    <h2 className={styles.h2}>cub3D :</h2>
                    <p className={styles.p}>cub3D is a two-person graphics project in which we create a game that resembles an old FPS, such as Wolfenstein 3D. To achieve this, we use C programming language and implement Raycasting, with a very minimalistic graphics library called MinilibX (which renders pixel by pixel).</p>
                    <div className={styles.stack}>
                        <p className={styles.stackType}>{'\xa0\xa0#C\xa0\xa0'}</p>
                        <p className={styles.stackType}>{'\xa0\xa0#3D\xa0\xa0'}</p>
                        <p className={styles.stackType}>{'\xa0\xa0#Minilibx\xa0\xa0'}</p>
                    </div>
                    <p className={styles.p}>Repo : <a className={styles.repoLink} target="_blank" href="https://github.com/Azrod42/Cube3D">Github</a></p>
                    <p className={styles.p}>Teammate: <a className={styles.repoLink} target="_blank" href="https://lfantine.fr">flantine</a></p>
                </div>
                <div className="project-image">
                    <Image src={'/42-project/cub3d.png'} alt={'ft_irc'} width={356} height={256} />
                </div>
            </div>
            <hr className={styles.hr} />
            <div className={styles.projectR} id="NetPractice">
                <div className={styles.projectText}>
                    <h2 className={styles.h2}>NetPractice :</h2>
                    <p className={styles.p}>NetPractice is a project consisting of 10 exercises designed to introduce us to networking concepts such as subnet masks, routers, switches, and more.</p>
                    <div className={styles.stack}>
                        <p className={styles.stackType}>{'\xa0\xa0#Network\xa0\xa0'}</p>
                    </div>
                </div>
                <div className="project-image">
                    <Image src={'/42-project/netpractice.png'} alt={'ft_irc'} width={356} height={256} />
                </div>
            </div>
            <hr className={styles.hr} />
            <div className={styles.project} id="PiscineC++">
                <div className={styles.projectText}>
                    <h2 className={styles.h2}>Piscine C++ :</h2>
                    <p className={styles.p}>A C++ pool consisting of 9 modules aimed at deepening the understanding of concepts such as classes and polymorphism, templates, and casts.</p>
                    <div className={styles.stack}>
                        <p className={styles.stackType}>{'\xa0\xa0#C++\xa0\xa0'}</p>
                    </div>
                </div>
                <div className="project-image">
                    <Image src={'/42-project/netpractice.png'} alt={'ft_irc'} width={356} height={256} />
                </div>
            </div>
            <hr className={styles.hr} />
            <div className={styles.projectR} id="Minishell">
                <div className={styles.projectText}>
                    <h2 className={styles.h2}>Minishell :</h2>
                    <p className={styles.p}>A major project completed in pairs, aimed at creating a command interpreter that mimics bash. Minishell handles environment variables, launches programs and manages their returns, as well as pipes and redirects. Additionally, it includes several built-in functions such as cd, echo, env, exit, export, pwd, and unset.</p>
                    <div className={styles.stack}>
                        <p className={styles.stackType}>{'\xa0\xa0#C\xa0\xa0'}</p>
                        <p className={styles.stackType}>{'\xa0\xa0#Bash\xa0\xa0'}</p>
                    </div>
                    <p className={styles.p}>Repo : <a className={styles.repoLink} target="_blank" href="https://github.com/Azrod42/Minishell">Github</a></p>
                    <p className={styles.p}>Teammate: <a className={styles.repoLink} target="_blank" href="https://lfantine.fr">flantine</a></p>
                </div>
                <div className="project-image">
                    <Image src={'/42-project/minishell.png'} alt={'ft_irc'} width={406} height={256} />
                </div>
            </div>
            <hr className={styles.hr} />
            <div className={styles.project} id="Philosophers">
                <div className={styles.projectText}>
                    <h2 className={styles.h2}>Philosophers :</h2>
                    <p className={styles.p}>Modeling the Dining Philosophers problem, first by representing each philosopher as a thread and each fork as a mutex, and secondly by representing each philosopher as a forked child process and the forks as semaphores.</p>
                    <div className={styles.stack}>
                        <p className={styles.stackType}>{'\xa0\xa0#C\xa0\xa0'}</p>
                        <p className={styles.stackType}>{'\xa0\xa0#Thread\xa0\xa0'}</p>
                    </div>
                </div>
                <div className="project-image">
                    <Image src={'/42-project/philosopher.png'} alt={'ft_irc'} width={256} height={256} />
                </div>
            </div>
            <hr className={styles.hr} />
            <div className={styles.projectR} id="push_swap">
                <div className={styles.projectText}>
                    <h2 className={styles.h2}>push_swap :</h2>
                    <p className={styles.p}>push_swap is an algorithmic project aimed at sorting a stack with the fewest possible operations using a temporary stack. We are allowed to use two operations that are not normally available on stacks: rotate and reverse rotate.</p>
                    <div className={styles.stack}>
                        <p className={styles.stackType}>{'\xa0\xa0#C\xa0\xa0'}</p>
                        <p className={styles.stackType}>{'\xa0\xa0#Algorithm\xa0\xa0'}</p>
                    </div>
                    <p className={styles.p}>Repo : <a className={styles.repoLink} target="_blank" href="https://github.com/Azrod42/push_swap_42">Github</a></p>
                </div>
                <div className="project-image">
                    <Image src={'/42-project/push_swap.gif'} alt={'ft_irc'} width={256} height={256} />
                </div>
            </div>
            <hr className={styles.hr} />
            <div className={styles.project} id="Minitalk">
                <div className={styles.projectText}>
                    <h2 className={styles.h2}>Minitalk :</h2>
                    <p className={styles.p}>The task is to enable communication between two programs, a server and a client, using two Unix signals sent with KILL, which means sending binary data through Unix signals. The challenge is to receive the bits in the order they were sent.</p>
                    <div className={styles.stack}>
                        <p className={styles.stackType}>{'\xa0\xa0#C\xa0\xa0'}</p>
                        <p className={styles.stackType}>{'\xa0\xa0#Unix\xa0\xa0'}</p>
                        <p className={styles.stackType}>{'\xa0\xa0#Signals\xa0\xa0'}</p>
                    </div>
                </div>
                <div className="project-image">
                    <Image src={'/42-project/minitalk.webp'} alt={'ft_irc'} width={456} height={256} />
                </div>
            </div>
            <hr className={styles.hr} />
            <div className={styles.projectR} id="So_long">
                <div className={styles.projectText}>
                    <h2 className={styles.h2}>So_long :</h2>
                    <p className={styles.p}>so_long is a graphical program where we generate a 2D game. The interactive map is created from a .txt file and developed using a simplistic graphics library that allows for pixel-by-pixel display.</p>
                    <div className={styles.stack}>
                        <p className={styles.stackType}>{'\xa0\xa0#C\xa0\xa0'}</p>
                        <p className={styles.stackType}>{'\xa0\xa0#Unix\xa0\xa0'}</p>
                        <p className={styles.stackType}>{'\xa0\xa0#Signals\xa0\xa0'}</p>
                    </div>
                    <p className={styles.pRed}>I recreated this game on the web : <a className={styles.repoLink} target="_blank" href="https://azrod.dev/pages/so-long/so-long.html">PLAY</a></p>
                </div>
                <div className="project-image">
                    <Image src={'/42-project/so_long.png'} alt={'so_long'} width={456} height={256} />
                </div>
            </div>
            <hr className={styles.hr} />
            <div className={styles.project} id="ft_printf">
                <div className={styles.projectText}>
                    <h2 className={styles.h2}>ft_printf :</h2>
                    <p className={styles.p}>The task is to recreate the printf function from the C standard library. ft_printf works exactly the same way as printf, but "only" with the following flags: %cspdiuxX.</p>
                    <div className={styles.stack}>
                        <p className={styles.stackType}>{'\xa0\xa0#C\xa0\xa0'}</p>
                    </div>
                </div>
                <div className="project-image">
                    <Image src={'/42-project/ft_printf.png'} alt={'so_long'} width={456} height={256} />
                </div>
            </div>
            <hr className={styles.hr} />
            <div className={styles.projectR} id="get_next_line">
                <div className={styles.projectText}>
                    <h2 className={styles.h2}>get_next_line :</h2>
                    <p className={styles.p}>The task is to recreate the getline() function from the C standard library. get_next_line allows, like getline, to return each line of a file successively. It is possible to vary the size of the buffer.</p>
                    <div className={styles.stack}>
                        <p className={styles.stackType}>{'\xa0\xa0#C\xa0\xa0'}</p>
                    </div>
                </div>
                <div className="project-image">
                    <Image src={'/42-project/gnl.png'} alt={'so_long'} width={456} height={256} />
                </div>
            </div>
            <hr className={styles.hr} />
            <div className={styles.project} id="Born2beroot">
                <div className={styles.projectText}>
                    <h2 className={styles.h2}>Born2beroot :</h2>
                    <p className={styles.p}>Installing Wordpress on a Debian server following very strict security, encryption and partitioning rules. Create a simple monitoring script using Bash.</p>
                    <div className={styles.stack}>
                        <p className={styles.stackType}>{'\xa0\xa0#Debian\xa0\xa0'}</p>
                        <p className={styles.stackType}>{'\xa0\xa0#Security\xa0\xa0'}</p>
                        <p className={styles.stackType}>{'\xa0\xa0#Encryption\xa0\xa0'}</p>
                        <p className={styles.stackType}>{'\xa0\xa0#Wordpress\xa0\xa0'}</p>
                        <p className={styles.stackType}>{'\xa0\xa0#Monitoring\xa0\xa0'}</p>
                        <p className={styles.stackType}>{'\xa0\xa0#Bash\xa0\xa0'}</p>
                    </div>
                </div>
                <div className="project-image">
                    <Image src={'/42-project/born2beroot.jpeg'} alt={'so_long'} width={356} height={256} />
                </div>
            </div>
            <hr className={styles.hr} />
            <div className={styles.projectR} id="libft">
                <div className={styles.projectText}>
                    <h2 className={styles.h2}>Born2beroot :</h2>
                    <p className={styles.p}>The goal of this project is to have us create a library containing many commonly used functions in C, but that we must code from scratch. We will use our own standard library "libft" in future 42 projects.</p>
                    <div className={styles.stack}>
                        <p className={styles.stackType}>{'\xa0\xa0#C\xa0\xa0'}</p>
                    </div>
                </div>
                <div className="project-image">
                    <Image src={'/42-project/libft.png'} alt={'so_long'} width={356} height={256} />
                </div>
            </div>
            <hr className={styles.hr} />







        </div>
    )
}

export default ProjectFortyTow;
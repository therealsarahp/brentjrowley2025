'use client';


import Link from "next/link";
import {paths} from "@/paths";
import styles from "./navbar.module.css";
import { usePathname } from 'next/navigation';
import BJRicon from '../../public/BJRicon.svg';
import Image from "next/image";
import React, {useState} from "react";
import {series} from "@/data/series";
import Dropdown from "@/components/navigation/Dropdown";


export default function NavBar() {

    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggle = () => {
        setIsOpen(old => !old);
    }

    const transClass = isOpen
        ?
        "flex"
        :
        "hidden";


    console.log("isOpen", isOpen, "series", series);
    return(
        <div className={styles.navContainer}>
            <Link className={styles.navLogo}
                href={paths.index}>
               <h1>
                    <Image src={BJRicon}
                                alt={"Initials BJR for Brent J Rowley formed into a glyph"}
                                style={{ fill: "var(--lightPrimary)",
                                    width: "3rem",
                                    height: "4rem",}}
                           />
               </h1>
            </Link>
            <div className={styles.navWrapper}>
                <ul>
                    <li>
                        <Dropdown item={series}/>

                        {/*<Link className={`${pathname.includes(paths.work) ? styles.linkActive : null}`}*/}
                        {/*      href={paths.work}>*/}
                        {/*    Work*/}
                        {/*</Link>*/}
                    </li>
                    <li>
                        <Link className={`${pathname === paths.about ? styles.linkActive : null}`}
                              href={paths.about}>
                            About
                        </Link>
                    </li>
                    {/*<li>*/}
                    {/*    <Link className={`${pathname === paths.blog.index ? styles.linkActive : null}`}*/}
                    {/*          href={paths.blog.index}>*/}
                    {/*        Blog*/}
                    {/*    </Link>*/}
                    {/*</li>*/}
                    <li>
                        <Link className={`${pathname === paths.contact ? styles.linkActive : null}`}
                              href={paths.contact}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>

    )

}
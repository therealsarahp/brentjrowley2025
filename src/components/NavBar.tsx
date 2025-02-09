'use client';


import Link from "next/link";
import {paths} from "@/paths";
import styles from "./navbar.module.css";
import { usePathname } from 'next/navigation';
import BJRicon from '../../public/BJRicon.svg';
import Image from "next/image";


export default function NavBar() {

    const pathname = usePathname();

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
                        <Link className={`${pathname === paths.gallery ? styles.linkActive : null}`}
                              href={paths.gallery}>
                            Gallery
                        </Link>
                    </li>
                    <li>
                        <Link className={`${pathname === paths.about ? styles.linkActive : null}`}
                              href={paths.about}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link className={`${pathname === paths.blog.index ? styles.linkActive : null}`}
                              href={paths.blog.index}>
                            Blog
                        </Link>
                    </li>
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
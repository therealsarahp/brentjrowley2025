'use client';


import Link from "next/link";
import {paths} from "@/paths";
import styles from "./navbar.module.css";
import { usePathname } from 'next/navigation';


export default function NavBar() {

    const pathname = usePathname();

    return(
        <div className={styles.navContainer}>
            <Link className={`${pathname === paths.index ? styles.hideLogo : styles.navLogo}`}
                href={paths.index}>
               <h1>
                   BJR
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
                        <Link className={`${pathname === paths.blog ? styles.linkActive : null}`}
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
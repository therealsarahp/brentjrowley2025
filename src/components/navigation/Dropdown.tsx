'use client';

import React, {useEffect, useRef, useState} from 'react'
import Link from 'next/link';

import styles from "@/components/navbar.module.css";
import {paths} from "@/paths";
import {series} from "@/data/series";
import {usePathname} from "next/navigation";
import {SeriesObj} from "@/data/series/Burrowings";

interface DropdownProps {
    item: SeriesObj[];
}

export default function Dropdown(props: DropdownProps) {
    const { item } = props;
    const dropdownRef = useRef(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    // const menuItems = item?.children ? item.children : [];
    const pathname = usePathname();

    const toggle = () => {
        setIsOpen(old => !old);
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    const transClass = isOpen
        ?
        "flex"
        :
        "hidden";

    return (
        <>
            <div className={styles.dropdownContainer} ref={dropdownRef}>
                <p onClick={toggle}
                   className={`${pathname.includes(paths.work) ? styles.linkActive : null}`}
                >
                    Work
                </p>
                {isOpen ?
                    <div className={styles.dropdown}>
                        {
                            series && series.map((item, i) =>
                                <Link className={`${pathname === `/work/${item.url}` ? styles.linkActive : null}`}
                                      href={`/work/${item.url}`}
                                      onClick={toggle}
                                      key={i}
                                >
                                    {item.title}
                                </Link>
                            )
                        }
                    </div>
                    : null
                }

            </div>
            {
                isOpen
                    ?
                    <div
                        className="fixed top-0 right-0 bottom-0 left-0 z-20 bg-black/40"
                        onClick={toggle}
                    ></div>
                    :
                    <></>
            }
        </>
    )
}
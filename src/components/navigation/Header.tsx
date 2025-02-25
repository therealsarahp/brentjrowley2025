import React from "react";
import Image from "next/image";
import Link from "next/link";
import Dropdown from "./Dropdown";

export interface MenuItem {
    title: string;
    route?: string;
    children?: MenuItem[];
}

const menuItems: MenuItem[] = [
    // {
    //     title: "Home",
    //     route: "/",
    // },
    {
        title: "Work",
        children: [
            {
                title: "Burrowings In All The Directions",
                route: "/work/BurrowingInAlltheDirections",
            },
            {
                title: "Diving Into The Wreck",
                route: "/work/DivingIntoTheWreck",
            },
            {
                title: "The Garden of Forking Paths",
                route: "/work/TheGardenOfForkingPaths",
            },
            {
                title: "The Light of the Body is the Eye",
                route: "/work/TheLightoftheBodyistheEye",
            },
        ],
    },
    {
        title: "About",
        route: "/about",
    },
    {
        title: "Contact",
        route: "/contact",
    }
];

export default function Header() {
    return (
        <header className="flex gap-10 items-center bg-zinc-800 py-4 px-2">
            <Link href="https://designly.biz" target="_blank">
                <Image src="/logo.svg" width={200} height={20} alt="logo" />
            </Link>
            <div className="flex gap-8 items-center text-white">
                {menuItems.map((item) => {
                    return item.hasOwnProperty("children") ? (
                        <Dropdown item={item} />
                    ) : (
                        <Link className="hover:text-blue-500" href={item?.route || ""}>
                            {item.title}
                        </Link>
                    );
                })}
            </div>
        </header>
    );
}
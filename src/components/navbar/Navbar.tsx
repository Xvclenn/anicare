import { link } from "fs";
import Link from "next/link";
import React from "react";
import style from "./Navbar.module.css";
import { FaRegUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline, IoSearchSharp } from "react-icons/io5";

const links = [
	{
		id: 1,
		title: "Home",
		url: "/",
	},
	{
		id: 2,
		title: "Dog",
		url: "/",
	},
	{
		id: 3,
		title: "Cat",
		url: "/",
	},
	{
		id: 4,
		title: "About us",
		url: "/",
	},
];

export const Navbar = () => {
	return (
		<div className="nav bg-slate-300">
			<div className=" flex flex-col items-center py-5 px-20">
				<Link href="#">
					<img className="p-3" src="logo1.png" alt="logo" width="200px" />
				</Link>
				<div className="flex justify-between w-[100%]">
					<IoSearchSharp size="25px" />
					<div className="right flex gap-2 items-center">
						<FaRegUser size="21px" />
						<IoCartOutline size="25px" />
					</div>
				</div>
				<div className="mt-[1.05rem]">
					<ul className="flex">
						{links.map((link) => (
							<li key={link.id} className="p-5">
								<Link className="uppercase" href={link.url}>
									{link.title}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

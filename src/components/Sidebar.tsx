"use client"
import { usePathname } from "next/navigation"
import { ILink } from "../interfaces/link.interface"
import { useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { Stack } from "@mui/material"

import HomeIcon from "../../public/icons/home.svg"
import HelpCenterIcon from "../../public/icons/help-center.svg"
import InfoIcon from "../../public/icons/info.svg"
import ExperienceIcon from "../../public/icons/experience.svg"
import CareerIcon from "../../public/icons/career.svg"
import ProfileSettingsIcon from "../../public/icons/profileSettings.svg"
import SkillsIcon from "../../public/icons/skills.svg"
import CertIcon from "../../public/icons/cert.svg"
import UploadIcon from "../../public/icons/upload.svg"
import SettingsIcon from "../../public/icons/settings.svg"
import { clsx } from 'clsx';

const Sidebar = () => {

	const pathname = usePathname()

	const sidebarLinks: ILink[] = useMemo(() => [
		{
			label: 'Home Page',
			href: '/',
			icon: HomeIcon,
			active: pathname === '/'
		},
		{
			label: 'General Info',
			href: '/general-info',
			icon: InfoIcon,
			active: false
		},
		{
			label: 'Qualifications / Education',
			href: '/',
			icon: CertIcon,
			active: false
		},
		{
			label: 'Experience',
			href: '/',
			icon: ExperienceIcon,
			active: false
		},
		{
			label: 'Skills',
			href: '/',
			icon: SkillsIcon,
			active: false
		},
		{
			label: 'Upload CV',
			href: '/',
			icon: UploadIcon,
			active: false
		},
		{
			label: 'Career Reference',
			href: '/',
			icon: CareerIcon,
			active: false
		},
		{
			label: 'Profile Setting',
			href: '/',
			icon: ProfileSettingsIcon,
			active: false
		}], [pathname])


	return (
		<div className="fixed z-20 bg-white flex flex-col h-screen justify-between  p-1 px-3">
			{/* Sidebar Logo */}
			<div>
				<Image
					src={"/logo.png"}
					width={120}
					height={120}
					alt="Logo"
					className="mb-1 mx-auto "
				/>

				<div className="sidebar-links grid gap-2 mb-4">
					{/* <AddAlarmIcon /> */}
					{
						sidebarLinks.map(link => (
							<Link key={link.label} className={
								clsx(
									"sidebar-link flex gap-1 p-2 py-2 text-xs items-center  hover:bg-main/20 rounded-xl",
									link.active && "bg-main/20 rounded-xl font-medium"
								)
							} href={link.href}>
							<span className="inline-block realtive -top[2px]">
								<Image
									src={link.icon}
									width={30}
									height={30}
									alt="icon"
									className="w-8 h-5"
								/>
							</span>
								{link.label}
							</Link>
						))
					}
				</div>

				<Stack spacing={1}>
					<hr className="block" />

					<h3 className="text-gray-500  font-medium">Settings</h3>


					<Link className={
						clsx(
							"sidebar-link flex gap-1 p-2 py-2 text-xs items-center  hover:bg-main/20 rounded-xl",
						)
					} href={"/"}>
					<span className="inline-block realtive -top[2px]">
						<Image
							src={SettingsIcon}
							width={30}
							height={30}
							alt="icon"
							className="w-8 h-5"
						/>
					</span>
						Settings
					</Link>

					<Link className={
						clsx(
							"sidebar-link flex gap-1 p-2 py-2 text-xs items-center  hover:bg-main/20 rounded-xl",

						)
					} href={"/"}>
					<span className="inline-block realtive -top[2px]">
						<Image
							src={HelpCenterIcon}
							width={30}
							height={30}
							alt="icon"
							className="w-8 h-5"
						/>
					</span>
						Help Center
					</Link>
				</Stack>
			</div>


			<div className={"flex mb-6 gap-4"}>
						<Image
						src={"/logged-user.png"}
						width={30}
						height={30}
						alt={"Logged user"}
						className="w-10 h-10 rounded-full "
					/>

				<p className={"grid "}>
					<span className={"font-bold text-sm"}>Jake Gyll</span>
					<span className={"text-xs"}>jakegyll@email.com</span>
				</p>

			</div>

		</div>
	)
}

export default Sidebar
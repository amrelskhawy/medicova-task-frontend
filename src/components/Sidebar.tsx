"use client"
import { usePathname } from "next/navigation"
import { ILink } from "../interfaces/link.interface"
import { useMemo } from "react"
import Image from "next/image"
import Link from "next/link"

const Sidebar = () => {

	const pathname = usePathname()

	const sidebarLinks: ILink[] = useMemo(() => [{
		label: 'Home Page',
		href: '/',
		icon: "",
		active: pathname === '/'
	},
	{
		label: 'General Info',
		href: '/general-info',
		icon: "",
		active: false
	},
	{
		label: 'Qualifications / Education',
		href: '/',
		icon: "",
		active: false
	},
	{
		label: 'Experience',
		href: '/',
		icon: "",
		active: false
	},
	{
		label: 'Skills',
		href: '/',
		icon: "",
		active: false
	},
	{
		label: 'Upload CV',
		href: '/',
		icon: "",
		active: false
	},
	{
		label: 'Career Reference',
		href: '/',
		icon: "",
		active: false
	},
	{
		label: 'Profile Setting',
		href: '/',
		icon: "",
		active: false
	}], [pathname])


	return (
		<div className="px-8 py-3">
			{/* Sidebar Logo */}
			<Image
				src={"/logo.png"}
				width={150}
				height={150}
				alt="Logo"
				className="mb-8"
			/>

			<div className="sidebar-links grid gap-4">
				{/* <AddAlarmIcon /> */}
				{
					sidebarLinks.map(link => (
						<Link className="sidebar-link" href={link.href}>{link.label}</Link>
					))
				}
			</div>


		</div>
	)
}

export default Sidebar
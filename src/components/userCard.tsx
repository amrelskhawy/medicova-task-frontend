import Button from "./Button"
import Image from 'next/image'
import React from 'react'
import Card from './Card'
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

import UserBackground from "../../public/Header-Photo.png"
import UserPic from "../../public/user-img.png"

export const UserCard = () => {
	return (
		<Card className={""}>
			{/* Photo Wrapper */}
			<div className="relative w-full h-32 ">
				<Image className='object-cover' fill src={UserBackground} alt="header photo" />
			</div>

			{/* User Info */}
			<div className='p-4 user-info  pl-36 grid gap-2 font-medium text-gray-400'>
				<h3 className='font-ClashDisplay text-xl font-bold text-[#185D43]'>Jake Gyll</h3>
				<p>Medical Ambassador at <span className='text-gray-600'>PL Hospital</span></p>
				<p>
					<span className={"mr-1"}><PlaceOutlinedIcon /> </span>
					Cairo, Eqypt
				</p>

				<Button title={"OPEN FOR OPPORTUNITIES"} icon={<OutlinedFlagIcon />} variant={"secondary"} className='bg-[#56CDAD]/10 hover:border-none outline-none border-none font-medium text-[#56CDAD] w-fit' />

			</div>


			{/* User Profile image */}
			<div className='bg-slate-300 rounded-full top-20 left-7 outline outline-8 outline-white shadow-lg shadow-slate-900/50 w-fit overflow-hidden absolute'>
				<Image width={100} height={100} src={UserPic} alt='user-img'/>
			</div>

			{/* Add Buttom to Edit Profile */}

			<Button title={"Edit Profile"} className='border-[#185D43]/20 text-[#185D43] p-3 font-bold absolute top-36 right-4' variant='secondary' />
		</Card>
	)
}

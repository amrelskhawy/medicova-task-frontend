import { Button } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Card from './Card'

export const UserCard = () => {
	return (
		<Card>
			{/* Photo Wrapper */}
			<div className="relative w-full h-32 ">
				<Image className='object-cover' fill src={"/Header-Photo.png"} alt="header photo" />
			</div>

			{/* User Info */}
			<div className='p-4 pl-36 grid gap-2 font-medium text-gray-400'>
				<h3 className='font-ClashDisplay text-xl font-bold text-[#185D43]'>Jake Gyll</h3>
				<p>Medical Ambassador at <span className='text-gray-600'>PL Hospital</span></p>
				<p>
					<span></span>
					Cairo, Eqypt
				</p>

				<Button className='bg-[#56CDAD]/10 hover:border-none outline-none border-none font-medium text-[#56CDAD] w-fit' variant="outlined">
					<span></span>
					OPEN FOR OPPORTUNITIES
				</Button>
			</div>


			{/* User Profile image */}
			<div className='bg-slate-300 rounded-full top-20 left-7 outline outline-8 outline-white shadow-lg shadow-slate-900/50 w-fit overflow-hidden absolute'>
				<Image width={100} height={100} src={"/user-img.png"} alt='user-img'/>
			</div>

			{/* Add Buttom to Edit Profile */}

			<Button className='border-[#185D43]/20 text-[#185D43] p-3 font-bold absolute top-36 right-4' variant='outlined' >
				Edit Profile
			</Button>
		</Card>
	)
}

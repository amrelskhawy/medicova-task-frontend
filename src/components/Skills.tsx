import React from 'react'
import Card from './Card'
import AddIcon from '@mui/icons-material/Add';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const Skills = () => {

	const skills = ["Communication", "Analytics", "Facebook Ads", "Content Planning",
		"Community Manager"
	]
	return (
		<Card className='p-4'>
			<div className="flex items-center justify-between">
				<h3 className="font-medium text-xl text-main">Skills</h3>
				<div className='icons-wrapper flex gap-2'>
					<AddIcon className="icon" />
					<EditOutlinedIcon className="icon" />
				</div>

			</div>

			<Stack className='my-2 mt-8' direction="row" spacing={1}>
				{skills.map(skill =>
					<Chip key={skill} label={skill} className='rounded-none p-1 text-main bg-main/10  text-[1.2rem]' />
				)}
			</Stack>
		</Card>
	)
}

export default Skills
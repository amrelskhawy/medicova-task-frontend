import React from 'react'
import Card from './Card'
import DeleteIcon from '@mui/icons-material/Delete';
import Button from './Button';

export const ResumeUpload = () => {
	return (
		<Card className='p-4'>
			<h2 className='text-2xl font-bold text-main'>Resume</h2>

			<div className='flex justify-between items-center p-2 bg-[#E3ECF0] mt-2 shadow'>
				<p className='flex gap-2 text-sm'>
					<span className='inline-block font-bold'>CV</span>
					<span className='inline-block'>jake Medical.pdf</span>
				</p>
				<DeleteIcon color='error' />
			</div>

			<div className='flex justify-center items-center gap-2 mt-4'>
				<Button 
					title='Review CV'
					variant='secondary'
				/>
				<Button 
					title='Upload CV'
					variant='primary'
				/>
			</div>
		</Card>
	)
}

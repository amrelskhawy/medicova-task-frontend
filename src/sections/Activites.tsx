import Button from '@/components/Button'
import Card from '@/components/Card'
import Image from 'next/image'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Stack } from '@mui/material';


const Activites = () => {
  return (
    <Card>
      <div className="p-4 grid gap-2">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-xl text-main">Activites</h3>
        </div>

        <Stack spacing={2} className='justify-center items-center'>
          <Image width={185} height={100} src={'/student-activites-section.png'} alt="Experience Preview" />

          <p className="text-lg text-main font-medium">
            Add and stand out to get more opportunities tailored to your preferences.
            Add Work Experience
          </p>

          <Button
            // className="mx-auto mt-4 mb-1"
            title="Add Activites"
            variant="primary"
            icon={<AddIcon />}
          />
        </Stack>


      </div>
    </Card>
  )
}

export default Activites
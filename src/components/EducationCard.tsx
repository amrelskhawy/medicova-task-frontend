import Image from 'next/image'
import React from 'react'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { IEducation } from '@/interfaces/education.interface';

const EducationCard = (props : IEducation) => {
  return (
    <>
      <div className='flex relative mt-3'>
        <Image
          src={props.universityImage}
          alt='Job'
          width={70}
          height={70}
          className='max-h-16'
        />

        <EditOutlinedIcon className="icon z-20 absolute right-0 top-1"/>
        <div className='education-info px-8 relative'>
          <h4 className='text-xl font-medium mb-4'>{props.university}</h4>
          <p>{props.degree}</p>
          <p>{props.start_year} - {props.end_year}</p>

          {props.description && <p className='mt-3 text-main text-justify'>{props.description}</p>}
        </div>

      </div>
    </>
  )
}

export default EducationCard
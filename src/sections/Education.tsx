import React, {Fragment} from 'react'
import Card from '../components/Card'
import AddIcon from '@mui/icons-material/Add';
import EducationCard from '../components/EducationCard';
import { IEducation } from '@/interfaces/education.interface';


const Education = () => {

  const educationHistory: IEducation[] = [
    {
      university: "Harvard University",
      universityImage: "/harvard-logo.png",
      degree: "Postgraduate degree, Applied Psychology",
      start_year: 2010,
      end_year: 2012,
      description: "As an Applied Psychologist in the field of Consumer and Society, I am specialized in creating business oppo rtunities by observing, analysing, researching and changing behaviour."
    },
    {
      university: "University of Toronto",
      universityImage: "/toronto-logo.png",
      degree: "Bachelor of Arts, Visual Communication",
      start_year: 2005,
      end_year: 2009,
      description: ""
    },
  ]
  return (
    <Card>
      <div className="p-4 grid gap-2">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-xl text-main">Educations</h3>
          <AddIcon className="icon" />
        </div>

        {/* Education Card */}

        <div className='grid gap-6'>
          {
            educationHistory.map((education, index) => {

              const isLast = index + 1 === educationHistory.length

                return (
                  <Fragment key={education.university} >
                    <EducationCard

                    {...education} // Spread the education object to pass its properties
                  />
                    {!isLast && <hr className={"block h-[1px] my-4 w-full bg-gray-400"}/>}
                  </Fragment>
                )
              }
            )
          }

          <p className='text-center font-bold text-main text-lg mt-4 pb-1'>Show 2 more educations</p>
        </div>


      </div>

    </Card>
  )
}

export default Education
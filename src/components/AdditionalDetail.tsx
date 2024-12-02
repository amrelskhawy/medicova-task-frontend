import React from 'react'
import Card from './Card'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';

const AdditionalDetail = () => {

  const additonalDetails = {
    email: {
      icon: <EmailOutlinedIcon className=' text-[#7C8493] text-xl relative top-[2.5px]' />,
      value: "jakegyll@email.com"
    },
    phone: {
      icon: <PhoneAndroidOutlinedIcon className=' text-[#7C8493] text-xl relative top-[2.5px]' />,
      value: "+44 1245 572 135"
    },
    languages: {
      icon: <TranslateOutlinedIcon className=' text-[#7C8493] text-xl relative top-[2.5px]' />,
      value: ["Arabic", "English", "Frensh"]
    },

  }
  return (
    <>
    {/* Additional Info */}
      <Card className='p-4'>
        <h3 className="text-lg text-main font-bold">Additional Details</h3>

        <div>
          {Object.entries(additonalDetails).map(([key, { icon, value }]) => (
            <div key={key} className='additional-card flex gap-4 mt-4'>
              {icon && icon} {/* Render icon if it exists */}
              <p>
                <span className='block text-[#7C8493] capitalize font-medium text-lg'>
                  {key}
                </span>
                <span className='block'>
                  {Array.isArray(value) ? value.join(', ') : value} {/* Handle array for languages */}
                </span>
              </p>
            </div>
          ))}
        </div>
      </Card>
    </>
  )
}

export default AdditionalDetail
import React from 'react'
import Card from './Card'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import AddIcon from '@mui/icons-material/Add';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import TwitterIcon from "../../public/icons/twitter.svg"
import InstagramIcon from "../../public/icons/instagram.svg"
import WebsiteIcon from "../../public/icons/website.svg"
import { Stack } from '@mui/material';
import Image from 'next/image';

interface ISocialLink {
  icon: string;  // Assuming the icon is a URL or string for the icon component
  value: string | string[];  // The value could be a single string or an array of strings
}

// Define the type for the socialLinks object
interface ISocialLinks {
  [key: string]: ISocialLink;
}

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

  const SocialLinks: ISocialLinks = {
    instagram: {
      icon: InstagramIcon,
      value: "instagram.com/jakegyll"
    },
    twitter: {
      icon: TwitterIcon,
      value: "twitter.com/jakegyll"
    },
    website: {
      icon: WebsiteIcon,
      value: ""
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
      <Card className='p-4'>
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-xl text-main">Social Links</h3>
          <EditOutlinedIcon className="icon" />
          </div>
          <div>

            {/* Social Links Wrapper */}
            <Stack>
              {Object.entries(SocialLinks).map(([key, { icon, value }]) => (
                <div key={key} className='additional-card flex gap-4 mt-4'>
                  {/* {icon && icon} Render icon if it exists */}

                  <Image
									src={icon}
									width={30}
									height={30}
									alt="icon"
									className="w-8 h-5 relative top-[1px]"
								/>
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
            </Stack>
        </div>

      </Card>
    </>
  )
}

export default AdditionalDetail
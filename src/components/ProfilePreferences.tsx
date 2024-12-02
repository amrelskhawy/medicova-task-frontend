import React from 'react'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Switch } from "@mui/material";
import Card from './Card';

const ProfilePreferences = () => {
  return (
    <Card className="p-4">
      <h3 className="text-lg text-main font-bold">Your Public Profile</h3>

      <ul>
        <li className="flex justify-between items-center">
          <p>Public Profile</p>
          <Switch defaultChecked />
        </li>

        <div className='bg-gray-100 p-4 text-xs flex items-center justify-between'>
          <p className='font-medium'>Here is your public profile link: <br />
            <span className='underline text-blue-700 text-[9px]'>modicava.net/me/jakegyl-77943becb8</span>
            </p>

          <EditOutlinedIcon className='text-main' />
        </div>

        <li className="flex justify-between items-center">
          <p>Profile Visibility</p>
          <Switch defaultChecked />
        </li>

        <li className="flex justify-between items-center">
          <p>Available for immediate start</p>
          <Switch />
        </li>

        <p className='bg-gray-100 p-4 text-[9px] font-medium text-center'>Let companies know you can start immediately by adding the Immediate start badge to your profile</p>
      </ul>
    </Card>
  )
}

export default ProfilePreferences
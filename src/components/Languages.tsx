"use client"

import React from 'react'
import Card from './Card'
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import AddIcon from "@mui/icons-material/Add";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";



const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#2EAE7D' : '#308fe8',
    },
  }));

const Languages = () => {

    const languagesLevels = [
        {
            name: "Arabic",
            level: 100
        },{
            name: "English",
            level: 70
        },{
            name: "French",
            level: 30
        },
    ]
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between">
      <h3 className="text-lg text-main my-2 font-bold">Languages</h3>
        <div className='icons-wrapper flex gap-2'>
          <AddIcon className="icon"/>
          <EditOutlinedIcon className="icon"/>
        </div>

      </div>

      <Stack spacing={1}>
        <div className={'mt-2'}>

          {
            languagesLevels.map(lang => (
              <div key={lang.name}>
                <p>{lang.name}</p>
                <Stack direction={"row"} className={"flex items-center gap-3"}>
                  <BorderLinearProgress className={"h-3 w-full"} variant="determinate" value={lang.level}/>
                  <p>{lang.level}%</p>
                </Stack>
              </div>

            ))
          }
        </div>


      </Stack>
    </Card>
  )
}

export default Languages
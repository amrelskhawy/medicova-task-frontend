"use client"
import Sidebar from "@/components/Sidebar";
import { clsx } from "clsx"
import { UserCard } from "@/components/userCard";
import Card from "@/components/Card";
import Education from "@/sections/Education";
import Experiences from "@/sections/Experience";
import Skills from "@/sections/Skills";
import Activites from "@/sections/Activites";
import Achievements from "@/sections/Achievements";
import ProfilePreferences from "@/components/ProfilePreferences";
import {Drawer, Stack} from "@mui/material";
import { ResumeUpload } from "@/components/ResumeUpload";
import AdditionalDetail from "@/components/AdditionalDetail";
import Languages from "@/components/Languages";
import Button from "@/components/Button";
import Image from "next/image";
import MenuIcon from '@mui/icons-material/Menu';
import {useState,useEffect} from "react";

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Set isMobile to true if the screen width is less than or equal to 768px (mobile size)
      setIsMobile(window.innerWidth <= 1280);
    };

    // Listen to window resize event
    window.addEventListener('resize', handleResize);

    // Initial check for screen size
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="home-layout">
        {/* Drawer for Desktop */}
        <Drawer
          variant="persistent"
          className={"bg-white"}
          open={!isMobile || isOpen} // Always open on desktop, toggle on mobile
        >
          <Sidebar />
        </Drawer>


        <div className="py-3 mx-auto flex flex-col xl:p-0 p-4 gap-3">

          <div className={"flex justify-between items-center"}>

            <h2 className={clsx("text-2xl my-10 font-ClashDisplay font-medium")}>My Profile</h2>
            <MenuIcon onClick={() => setIsOpen(prev => !prev)} className={"hidden max-xl:block rounded-full  w-10 h-10 bg-white p-1"}/>
          </div>

          {/* UserCard Section */}
          <UserCard />

          {/* About me Section */}

          <Card>
            <div className="p-4 grid gap-2">
              <h3 className="font-medium text-xl mb-4">About Me</h3>
              <p className="text-[#185D43] font-medium">I’m a Medical Ambassador +  I am dedicated to transforming healthcare access and education in underserved communities. My passion for promoting health equity drives me to bridge the gap between medical professionals and those in need. Through community outreach, education, and advocacy, I strive to empower individuals with the knowledge and resources they require for better health outcomes. Together, we can build a future where quality healthcare is a right, not a privilege.</p>
              <p className="text-[#185D43] font-medium">
                My experience as a Medical Ambassador spans over 10 years, during which I have worked to promote access to healthcare. I have developed health awareness programs and organized medical campaigns targeting vulnerable groups, which has helped improve health awareness and promote disease prevention
              </p>
            </div>

          </Card>

          {/* Educations Section */}

          <Education />

          {/* Experience Section */}

          <Experiences />

          {/* Skills Section */}

          <Skills />

          {/* Activites Section */}

          <Activites />

           {/* Achievements Section */}

          <Achievements />


        </div>
        <div className={"xl:mt-12 mt-0 xl:p-0 p-4 relative"} >
          <Stack spacing={1}>

            <div className={"flex justify-between items-center"}>
              <Button variant={"secondary"} title={"Back to homepage"} />
              <Image
                src={"/icons/notifications.svg"}
                width={40}
                height={40}
                alt=" notifications Logo"
                className="bg-white p-[8px] rounded-full"
              />

            </div>


            <ProfilePreferences />
            <ResumeUpload />
            <AdditionalDetail />
            <Languages />
          </Stack>
        </div>
      </div>
    </>
  );
}

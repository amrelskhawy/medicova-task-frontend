import Sidebar from "@/components/Sidebar";
import { clsx } from "clsx"
import { UserCard } from "@/components/userCard";
import Card from "@/components/Card";
import Education from "@/sections/Education";
import Experiences from "@/sections/Experience";
import Skills from "@/sections/Skills";
import Activites from "@/sections/Activites";
import Achievements from "@/sections/Achievements";

export default function Home() {
  return (
    <>
      <div style={{
        gridTemplateColumns: "280px 1fr 250px"
      }} className="wrapper grid gap-4 ">
        <div>
          <Sidebar />
        </div>
        <div className="py-3 grid gap-3">

          <h2 className={clsx("text-2xl my-10 font-ClashDisplay font-medium")}>My Profile</h2>

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
        <div>additional</div>
      </div>
    </>
  );
}

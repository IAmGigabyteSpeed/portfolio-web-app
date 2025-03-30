"use client";
import Nav from "../components/nav";
import Button from "@mui/material/Button";
import FollowCursor from "../components/cursor";
import EducationalCard from "../components/educationalcard";
import { useRef } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Skillcard from "../components/skillscard";
import ExperienceBox from "../components/experiencebox";
import AchievementsGrid from "../components/achievementgrid";
import { motion } from "framer-motion";
import Link from "next/link";
import ScrolltoTop from "../components/scrolltoTop";

export default function About() {
  const scrollRef = useRef(null);
  const topRef = useRef(null);
  const scrollToNextSection = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  let skills = [
    "Nextjs",
    "DotNET",
    "Bootstrap",
    "MsSQL",
    "Postgres",
    "jQuery",
    "Express",
    "Tailwind",
    "MySQL",
    "MongoDB",
    "Expo",
    "Redux",
    "Insomnia",
    "Jest",
    "Docker",
    "Git",
    "Figma",
    "Canva",
    "Photoshop",
    "After Effects",
  ];

  return (
    <>
      <FollowCursor />
      <Nav />
      <div className="lg:px-20">
        <ScrolltoTop topRef={topRef} />
        <section ref={topRef} className="min-h-screen">
          <div className="min-h-[96vh] flex items-center">
            <div className="flex flex-col md:flex-row items-center justify-center w-full px-10 gap-10 pt-12">
              <div className="md:w-1/2 w-full flex flex-col justify-center items-center md:items-start">
                <h1 className="text-7xl mt-5 md:mt-0 text-center md:text-start font-bold animate-[FadeIn_0.7s_ease-in-out]">
                  ABOUT ME
                </h1>
                <div className="lg:pe-40">
                  <p className="text-justify mt-5 animate-[slideDownFadeIn_0.7s_ease-in-out]">
                    Welcome! I&apos;m Darren, a computer science student focused
                    on sharpening my web development skills. I have made several
                    web applications using front-end frameworks such as Next.js,
                    React Native, jQuery and back-end frameworks such as .NET
                    Core and Express.js.
                  </p>
                  <p className="text-justify mt-5 animate-[slideDownFadeIn_0.7s_ease-in-out]">
                    Other than that, i have a passion for design and have
                    expressed my creativty through several outlets such as
                    graphic design, motion design, web design and video editing.
                    It&apos;s been a fun ride and i don&apos;t plan on stopping!
                  </p>
                </div>
                <p className="text-justify mt-5 mb-2 animate-[slideDownFadeIn_0.7s_ease-in-out]">
                  Let&apos;s continue on!
                </p>
                <motion.div
                  className="lg:w-1/4 w-3/4 flex justify-center lg:justify-start items-center animate-[slideDownFadeIn_0.7s_ease-in-out]"
                  animate={{ scale: [1.0, 1.025, 1.0] }}
                  transition={{
                    ease: "easeInOut",
                    duration: 1.2,
                    repeat: Infinity,
                    repeatType: "loop",
                    delay: 2,
                  }}
                >
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      backgroundColor: "var(--accent)",
                      color: "var(--background)",
                    }}
                    onClick={scrollToNextSection}
                  >
                    Press Me!
                  </Button>
                </motion.div>
              </div>

              <div className="md:w-1/2 w-full flex flex-col items-center justify-center">
                <img
                  alt="image"
                  className="h-3/5 w-3/5 animate-[slideRightFadeIn_0.7s_ease-in-out]"
                  src="/assets/programmer.webp"
                />
              </div>
            </div>
          </div>
          <div
            className="flex items-center justify-center cursor-pointer"
            onClick={scrollToNextSection}
          >
            <h1 className="text-center">Check Below</h1>
            <ArrowDownwardIcon
              className="inline-block animate-arrow"
              sx={{ color: "#B2C1A0" }}
            />
          </div>
        </section>
        <section className="min-h-[75vh]" ref={scrollRef}>
          <section className="px-2 md:px-20 pt-12">
            <p className="text-3xl text-center md:text-6xl md:text-start font-bold mb-5">
              Experiences
            </p>
          </section>
          <section className="">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center align-center mb-10 gap-5"
            >
              <ExperienceBox
                title={"PT.Bintang Toedjoe"}
                year={"February 2024 - February 2025"}
                position={"Web Developer Intern"}
                jobdescription={
                  "- Analyze user specifications and requirements design user interfaces with jQuery and Ajax, and build clean backend API architectures using .NET 6 Core\n - Maintain relational databases in MS SQL, manage version control with GitLab, and collaborate with Analyst & QA during development and testing\n - Research and implement new tools to improve project workflow and efficiency"
                }
              />
              <ExperienceBox
                title={"Nippon Club"}
                year={"November 2021 - December 2023"}
                position={"Board Game Community Staff"}
                jobdescription={
                  "- Responsible for the board game community with more than 100 members\n- Organize and maintain online play together gatherings bi-monthly \n- Recruit 2 new staff to facilitate a seamless transition process"
                }
              />
              <ExperienceBox
                title={"Nippon Club"}
                year={"September 2023 - October 2023"}
                position={"Event Committee"}
                jobdescription={
                  "- Collaborate with a team of 8 people as the equipment and consumption division for the Nippon Club Welcoming Party 2023 \n- Assisted in on-site registrations, verifications and inquiries during the event"
                }
              />
              <ExperienceBox
                title={"SMA Bunda Mulia"}
                year={"June 2019 - September 2019"}
                position={"Event Committee"}
                jobdescription={
                  "- Design promotional poster and waiting screens for Bunda Mulia E-Sports Competition \n- Collaborate with 1 staff to setup the video broadcasting system for the event\n- Arrange softwares and gaming equipments for tournament participants"
                }
              />
            </motion.div>
          </section>
        </section>
        <section className="min-h-[75vh]">
          <section className="px-2 md:px-20 pt-12">
            <p className="text-3xl text-center md:text-6xl md:text-start font-bold mb-5">
              Educational Background
            </p>
          </section>
          <section className="">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center align-center my-10"
            >
              <EducationalCard
                title={"Universitas Bina Nusantara"}
                year={"September 2021 - Present"}
                grade={"3.42 GPA"}
                study={"Computer Science"}
              />
              <div className="h-[150px] border-l-4 border-dashed border-[#B2C1A0]"></div>
              <EducationalCard
                title={"SMA Bunda Mulia"}
                year={"July 2018 - May 2021"}
                grade={"89.7 WA"}
                study={"Ilmu Pengetahuan Alam (IPA)"}
              />
              <div className="h-[150px] border-l-4 border-dashed border-[#B2C1A0]"></div>
              <EducationalCard
                title={"SMP Bunda Mulia"}
                year={"July 2015 - May 2018"}
                grade={"72 WA"}
                study={"Bilingual Class"}
              />
            </motion.div>
          </section>
        </section>
        <section className="min-h-screen">
          <section className="px-2 md:px-20 pt-12">
            <p className="text-3xl text-center md:text-6xl md:text-start font-bold mb-5">
              Skills
            </p>
          </section>
          <section className="mb-5">
            <Skillcard skills={skills} />
          </section>
          <h2></h2>
        </section>
        <section className="">
          <section className="px-2 md:px-20 pt-12">
            <p className="text-3xl text-center md:text-6xl md:text-start font-bold mb-5">
              Achievements
            </p>
          </section>
          <section className="mb-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center align-center mb-10 gap-5"
            >
              <AchievementsGrid
                name={"Conference Presenter & Author"}
                title={
                  "Method For Traffic Violation Detection Using Deep Learning"
                }
                organizer={
                  "2023 International Conference on Informatics, Multimedia, Cyber and Informations System (ICIMCIS)"
                }
                link={"https://ieeexplore.ieee.org/abstract/document/10349009"}
              />
            </motion.div>
          </section>
        </section>
        <section className="mt-16 mb-10">
          <p className="text-2xl text-center">
            That&apos;s the end of the road! You can get to know me better{" "}
            <Link href={"/contact"} passHref>
              <span className="text-blue-500">here!</span>
            </Link>
          </p>
        </section>
      </div>
    </>
  );
}

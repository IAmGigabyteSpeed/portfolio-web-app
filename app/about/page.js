"use client";
import Nav from "../components/nav";
import Button from "@mui/material/Button";
import FollowCursor from "../components/cursor";
import EducationalCard from "../components/educationalcard";
import { useRef } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Skillcard from "../components/skillscard";
import ExperienceBox from "../components/experiencebox";
import CerificationGrid from "../components/certificationgrid";
import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  const scrollRef = useRef(null);
  const scrollToNextSection = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  let skills = [
    "next",
    "net",
    "boot",
    "mssql",
    "notion",
    "jquery",
    "node",
    "tailwind",
    "mysql",
    "office",
    "figma",
    "canva",
    "ps",
    "ae",
    "capcut",
  ];

  return (
    <>
      <FollowCursor />
      <Nav />
      <div className="h-screen overflow-y-scroll no-scrollbar">
        <section className="min-h-screen">
          <div className="min-h-[96vh] flex items-center">
            <div className="flex flex-col md:flex-row items-center justify-center w-full px-10 gap-10 pt-12">
              <div className="md:w-1/2 w-full flex flex-col justify-center items-center md:items-start">
                <h1 className="text-4xl text-center md:text-start font-bold animate-[FadeIn_0.7s_ease-in-out]">
                  ABOUT ME
                </h1>
                <p className="text-justify md:text-start mt-5 animate-[slideDownFadeIn_0.7s_ease-in-out]">
                  Final year computer science student from Bina Nusantara
                  University with 1 year of hands-on experience in full-stack
                  web development.
                </p>
                <h2 className="pt-10 pb-3 text-center md:text-start">
                  You can view some of my works!
                </h2>
                <Button
                  variant="contained"
                  className="lg:w-1/4 w-3/4 flex items-center"
                  href="/projects"
                >
                  Check it out!
                </Button>
              </div>

              <div className="md:w-1/2 w-full flex flex-col items-center justify-center"></div>
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
                title={"Bunda Mulia E-Sports Competition"}
                year={"June 2019 - September 2019"}
                position={"Event Committee"}
                jobdescription={
                  "- Design promotional poster and waiting screen during the event\n- Prepare the video broadcasting system for the event\n- Arrange softwares and gaming equipments for tournament participants"
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
          <section className="mb-10">
            <Skillcard skills={skills} />
          </section>
          <h2></h2>
        </section>
        <section className="">
          <section className="px-2 md:px-20 pt-12">
            <p className="text-3xl text-center md:text-6xl md:text-start font-bold mb-5">
              Certifications
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <CerificationGrid
                  certificate={"sql"}
                  award={"SQL (Basic)"}
                  organizer={"hackerrank"}
                />
                <CerificationGrid
                  certificate={"sql"}
                  award={"SQL (Basic)"}
                  organizer={"hackerrank"}
                />
                <CerificationGrid
                  certificate={"sql"}
                  award={"SQL (Basic)"}
                  organizer={"hackerrank"}
                />
                <CerificationGrid
                  certificate={"sql"}
                  award={"SQL (Basic)"}
                  organizer={"hackerrank"}
                />
                <CerificationGrid
                  certificate={"sql"}
                  award={"SQL (Basic)"}
                  organizer={"hackerrank"}
                />
                <CerificationGrid
                  certificate={"sql"}
                  award={"SQL (Basic)"}
                  organizer={"hackerrank"}
                />
              </div>
            </motion.div>
          </section>
        </section>
        <section className="mt-16 mb-10">
          <p className="text-2xl text-center">
            That&apos;s the end of the road! You can get to know me better{" "}
            <Link href={"/contact"}>
              <span className="text-blue-500">here!</span>
            </Link>
          </p>
        </section>
      </div>
    </>
  );
}

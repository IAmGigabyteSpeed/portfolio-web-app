"use client";
import Link from "next/link";
import Nav from "../components/nav";
import ExampleWork from "../components/examplework";
import ExampleWorkVideo from "../components/exampleworkVideo";
import FollowCursor from "../components/cursor";
import Footer from "../components/footer";
export default function Projects() {
  let web1data = [
    "project/ForumChat1.png",
    "project/ForumChat2.png",
    "project/ForumChat3.png",
    "project/ForumChat4.png",
    "project/ForumChat5.png",
    "project/ForumChat6.png",
    "project/ForumChat7.png",
    "project/ForumChat8.png",
    "project/ForumChat9.png",
    "project/ForumChat10.png",
  ];

  let web2data = [
    "project/AnimeSearch1.png",
    "project/AnimeSearch2.png",
    "project/AnimeSearch3.png",
    "project/AnimeSearch4.png",
    "project/AnimeSearch5.png",
  ];

  let web3data = [
    "project/StoreApp1.png",
    "project/StoreApp2.png",
    "project/StoreApp3.png",
    "project/StoreApp4.png",
    "project/StoreApp5.png",
    "project/StoreApp6.png",
    "project/StoreApp7.png",
    "project/StoreApp8.png",
  ];

  let web4data = ["project/AIShowcase.webm"];

  let web5data = [
    "project/Intern1.png",
    "project/Intern2.png",
    "project/Intern3.png",
    "project/Intern4.png",
    "project/Intern5.png",
    "project/Intern6.png",
  ];

  let web6data = [
    "project/HealthyTogether1.png",
    "project/HealthyTogether2.png",
    "project/HealthyTogether3.png",
    "project/HealthyTogether4.png",
    "project/HealthyTogether5.png",
    "project/HealthyTogether6.png",
    "project/HealthyTogether7.png",
    "project/HealthyTogether8.png",
    "project/HealthyTogether9.png",
    "project/HealthyTogether10.png",
  ];

  let web7data = [
    "project/AssetKu1.png",
    "project/AssetKu2.png",
    "project/AssetKu3.png",
    "project/AssetKu4.png",
    "project/AssetKu5.png",
    "project/AssetKu6.png",
    "project/AssetKu7.png",
    "project/AssetKu8.png",
    "project/AssetKu9.png",
    "project/AssetKu10.png",
  ];

  let web8data = [
    "project/Personal2.png",
    "project/Personal1.png",
    "project/Personal3.png",
    "project/Personal4.png",
    "project/Personal5.png",
    "project/Personal6.jpg",
  ];
  return (
    <>
      <FollowCursor />
      <Nav />
      <div className="pt-12 min-h-screen xl:px-16 flex flex-col justify-between">
        <section className="min-h-screen px-2 md:px-12 xl:px-24 pt-12">
          <p className="text-3xl text-center md:text-6xl md:text-start font-bold">
            Example Works
          </p>
          <p className="text-sm md:text-lg text-center md:text-start">
            Here are some of my works that i&apos;ve done in the past!
          </p>
          <ExampleWork
            imgArr={web1data}
            year={2025}
            type={"Web Development"}
            title={"Forum Chat App"}
            description={
              "A full stack forum web application designed for open-topic discussions, featuring user authentication and state management with Redux. The frontend is built using Next.js, utilizing React Query for data handling, while the backend is powered by .NET Core 8 with MS SQL as the database."
            }
            skills={["Next.js", "React Query", "Redux", ".NET Core", "MS SQL"]}
          />
          <ExampleWork
            imgArr={web2data}
            year={2025}
            type={"Web Development"}
            title={"Anime Search"}
            description={
              "A web application built with Next.js that displays anime information sourced from MyAnimeList using the Jikan API. It features search, filtering, and pagination powered by React Query."
            }
            skills={["Next.js", "React Query", "Jikan API"]}
          />
          <ExampleWork
            imgArr={web3data}
            year={2025}
            type={"Mobile Development"}
            title={"E-Store App"}
            description={
              "A mobile e-commerce marketplace application developed using React Native and TypeScript featuring Redux for the cart management. The backend is built with Express.js and uses MongoDB as the database."
            }
            skills={[
              "React Native",
              "Typescript",
              "Redux",
              "Express.js",
              "MongoDB",
            ]}
          />
          <ExampleWorkVideo
            videos={web4data}
            year={2025}
            type={"Web Development"}
            title={"AI Chatbot App"}
            description={
              "A chatbot web application built with jQuery, featuring a chatbot powered by the Gemini AI API. The chatbot is inspired by Hololive's former Vtuber Ceres Fauna and includes an interactive character model displayed using Live2D.js."
            }
            skills={["HTML", "jQuery", "Live2D.js", "Gemini AI"]}
          />
          <ExampleWork
            imgArr={web5data}
            year={"2024 - 2025"}
            type={"Web Development"}
            title={"Internship Project"}
            description={
              "A showcase of several internal web application projects developed during my internship at PT. Bintang Toedjoe. All applications were built using jQuery for the frontend, .NET Core 6 for the backend, and MS SQL as the database."
            }
            skills={["HTML", "Bootstrap", "jQuery", ".NET Core"]}
          />
          <ExampleWork
            imgArr={web6data}
            year={"2023"}
            type={"Website Development"}
            title={"Healthy Together"}
            description={
              "A website designed to sell gym memberships, offering access to workout classes, group sessions, instructional videos, and a marketplace for gym accessories and supplements. This was created for a university group project, built with HTML and Bootstrap."
            }
            skills={["HTML", "Bootstrap", "Javascript"]}
          />
          <ExampleWork
            imgArr={web7data}
            year={"2024"}
            type={"Website Mockup"}
            title={"AssetKu"}
            description={
              "A website mockup designed to provide an e-commerce marketplace that enables 3D model and asset creators to showcase and sell their projects and services to enthusiasts. This was created for a university group project using Figma."
            }
            skills={["Figma"]}
          />
          <ExampleWork
            imgArr={web8data}
            year={"2018 - 2025"}
            type={"Graphic Design"}
            title={"Personal Projects"}
            description={
              "Several graphic designs that i've done personally which includes several graphic design poster competitions, high school projects and personal passion projects. Most were made using graphic design softwares such as Photoshop and Canva."
            }
            skills={["Photoshop", "Canva"]}
          />

          <div className="pb-5 mt-20 flex justify-center items-center">
            <p className=" md:text-xl text-center px-2">
              Found anything interesting? You can view my complete works{" "}
              <span className="text-[#B1C29E] hover:text-[#808d72] underline">
                <Link
                  href={`https://drive.google.com/drive/folders/1nst1lwDkvXR4YPi44RPlECCZRAi6Zssk?usp=drive_link`}
                  passHref
                  target="_blank"
                >
                  here
                </Link>
              </span>
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

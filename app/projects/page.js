"use client";
import Link from "next/link";
import Nav from "../components/nav";
import ExampleWork from "../components/examplework";
import ExampleWorkVideo from "../components/exampleworkVideo";
import FollowCursor from "../components/cursor";
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
  ];

  let web2data = [
    "project/AnimeSearch1.png",
    "project/AnimeSearch2.png",
    "project/AnimeSearch3.png",
    "project/AnimeSearch4.png",
    "project/AnimeSearch5.png",
  ];
  let web3data = [
    "project/Ghibli1.png",
    "project/Ghibli2.png",
    "project/Ghibli3.png",
    "project/Ghibli4.png",
    "project/Ghibli5.png",
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
    "project/Personal1.png",
    "project/Personal2.png",
    "project/Personal3.png",
    "project/Personal4.png",
    "project/Personal5.png",
    "project/Personal6.jpg",
  ];
  return (
    <>
      <FollowCursor />
      <Nav />
      <div className="pt-12 min-h-screen">
        <section className="min-h-screen px-2 md:px-12 lg:px-24 pt-12">
          <p className="text-3xl text-center md:text-6xl md:text-start font-bold">
            Example Works
          </p>
          <p className="text-sm md:text-lg text-center md:text-start">
            Here are some of my works i&apos;ve done in the past!
          </p>
          <ExampleWork
            imgArr={web1data}
            year={2025}
            type={"Website Development (Next.js + .NET Core)"}
            title={"Forum Chat App"}
            description={
              "This section shows a full stack web application that provides a forum website for people to have discussions of any topic they want.The website is created using Next.js as the front-end, .Net Core 8 as the backend and MS SQL as the database. It also incorporates JWT for Authentication, Redux for user state management and React Query for pagination, search, and filtering."
            }
          />
          <ExampleWork
            imgArr={web2data}
            year={2025}
            type={"Website Development (Next.js + Jikan API)"}
            title={"Anime Search"}
            description={
              "This section includes a web application created using Next.js and provides information regarding animes from MyAnimeList. This website uses Jikan API for its data and also incorporated Pagination, Search and Filtering using React Query."
            }
          />
          <ExampleWork
            imgArr={web3data}
            year={2025}
            type={
              "Mobile Website Development (React Native + Studio Ghibli API)"
            }
            title={"Studio Ghibli Fan Wiki"}
            description={
              "This section shows a web application built with React Native and Typescript that provides a hub for everything related to Studio Ghibli Movies. The Website incorporates Studio Ghibli API for its data and also implements pagination and search."
            }
          />
          <ExampleWorkVideo
            videos={web4data}
            year={2025}
            type={"Website Development (jQuery + Gemini API)"}
            title={"AI Chatbot App"}
            description={
              "This sections involves a web application built with jQuery and features a chatbot powered by Gemini AI API. The chatbot is based on the fan name of Hololive's former Vtuber Ceres Fauna. It also utilizes Live2D.js to display an interactive model of the character."
            }
          />
          <ExampleWork
            imgArr={web5data}
            year={"2024-2025"}
            type={"Website Development (jQuery + .NET Core)"}
            title={"Internship Project"}
            description={
              "This section includes web application projects i've done during my internship at PT.Bintang Toedjoe and includes several project i've done. All of the web applications was made using jQuery as the front-end, .Net Core 6 as the back-end and MS SQL as the database."
            }
          />
          <ExampleWork
            imgArr={web6data}
            year={"2023"}
            type={"Website Development (HTML)"}
            title={"HealthyTogether"}
            description={
              "This section involves a website design for a group university project made in HTML. The website is designed for selling gym memberships and is offering access to workout classes, group sessions, and instructional videos to educate users on exercising. Additionally it also features a marketplace for gym accessories and supplements. "
            }
          />
          <ExampleWork
            imgArr={web7data}
            year={"2024"}
            type={"Website Mockup Design (Figma)"}
            title={"AssetKu"}
            description={
              "This section involves a website design for a group university project that's made in Figma. It involves a website that focuses on providing an e-commerce marketplace for 3D model and asset creators to start selling their projects and services."
            }
          />
          <ExampleWork
            imgArr={web8data}
            year={"2018-2025"}
            type={"Graphic Design"}
            title={"Personal Projects"}
            description={
              "This sections includes several graphic designs that i've done personally. Some of them includes several poster competitions i've participated in, high school projects and personal projects. Most of them were made using tools such as Photoshop and Canva."
            }
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
    </>
  );
}

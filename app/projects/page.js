"use client";
import Link from "next/link";
import Nav from "../components/nav";
import ExampleWork from "../components/examplework";
import ExampleWorkVideo from "../components/exampleworkVideo";
import FollowCursor from "../components/cursor";
export default function Projects() {
  let web1data = [
    "project/AnimeSearch1.png",
    "project/AnimeSearch2.png",
    "project/AnimeSearch3.png",
    "project/AnimeSearch4.png",
    "project/AnimeSearch5.png",
  ];
  let web2data = [
    "project/Ghibli1.png",
    "project/Ghibli2.png",
    "project/Ghibli3.png",
    "project/Ghibli4.png",
    "project/Ghibli5.png",
  ];

  let web3data = ["project/AIShowcase.webm"];

  let web4data = [
    "project/Intern1.png",
    "project/Intern2.png",
    "project/Intern3.png",
    "project/Intern4.png",
    "project/Intern5.png",
    "project/Intern6.png",
  ];

  let web5data = [
    "project/NETCRUD1.png",
    "project/NETCRUD2.png",
    "project/NETCRUD3.png",
    "project/NETCRUD4.png",
    "project/NETCRUD5.png",
  ];

  let web6data = [
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
        <section className="min-h-screen px-2 md:px-10 pt-12">
          <p className="text-3xl text-center md:text-6xl md:text-start font-bold">
            Example Works
          </p>
          <ExampleWork
            imgArr={web1data}
            year={2025}
            type={"Website Development (Next.js, Jikan API)"}
            title={"Anime Search"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit nunc sit amet pellentesque lobortis. Curabitur at turpis tempus, bibendum nulla a, suscipit mi. Suspendisse lacinia a massa in dignissim. Etiam a nibh lacus. Quisque eget diam et quam egestas egestas eu non est. Praesent quam ex, eleifend nec libero in, varius mattis quam. Praesent placerat arcu vel gravida ultrices."
            }
          />
          <ExampleWork
            imgArr={web2data}
            year={2025}
            type={
              "Mobile Development (React Native, Typescript, Studio Ghibli API)"
            }
            title={"Studio Ghibli Fan Wiki"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit nunc sit amet pellentesque lobortis. Curabitur at turpis tempus, bibendum nulla a, suscipit mi. Suspendisse lacinia a massa in dignissim. Etiam a nibh lacus. Quisque eget diam et quam egestas egestas eu non est. Praesent quam ex, eleifend nec libero in, varius mattis quam. Praesent placerat arcu vel gravida ultrices."
            }
          />
          <ExampleWorkVideo
            videos={web3data}
            year={2025}
            type={"Website Development (Live2D.js, jQuery, Gemini AI)"}
            title={"AI Chatbot App"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit nunc sit amet pellentesque lobortis. Curabitur at turpis tempus, bibendum nulla a, suscipit mi. Suspendisse lacinia a massa in dignissim. Etiam a nibh lacus. Quisque eget diam et quam egestas egestas eu non est. Praesent quam ex, eleifend nec libero in, varius mattis quam. Praesent placerat arcu vel gravida ultrices."
            }
          />
          <ExampleWork
            imgArr={web4data}
            year={"2024-2025"}
            type={"Website Development (jQuery, .NET Core)"}
            title={"Internship Project"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit nunc sit amet pellentesque lobortis. Curabitur at turpis tempus, bibendum nulla a, suscipit mi. Suspendisse lacinia a massa in dignissim. Etiam a nibh lacus. Quisque eget diam et quam egestas egestas eu non est. Praesent quam ex, eleifend nec libero in, varius mattis quam. Praesent placerat arcu vel gravida ultrices."
            }
          />
          <ExampleWork
            imgArr={web5data}
            year={"2024"}
            type={"Website Development (jQuery, .NET Core)"}
            title={"Basic CRUD Website"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit nunc sit amet pellentesque lobortis. Curabitur at turpis tempus, bibendum nulla a, suscipit mi. Suspendisse lacinia a massa in dignissim. Etiam a nibh lacus. Quisque eget diam et quam egestas egestas eu non est. Praesent quam ex, eleifend nec libero in, varius mattis quam. Praesent placerat arcu vel gravida ultrices."
            }
          />
          <ExampleWork
            imgArr={web6data}
            year={"2018-2025"}
            type={"Graphic Design"}
            title={"Personal Projects"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit nunc sit amet pellentesque lobortis. Curabitur at turpis tempus, bibendum nulla a, suscipit mi. Suspendisse lacinia a massa in dignissim. Etiam a nibh lacus. Quisque eget diam et quam egestas egestas eu non est. Praesent quam ex, eleifend nec libero in, varius mattis quam. Praesent placerat arcu vel gravida ultrices."
            }
          />

          <div className="pb-5 mt-10 flex justify-center items-center">
            <p className=" md:text-2xl text-center px-2">
              View Complete works{" "}
              <span className="text-[#B1C29E] hover:text-[#808d72] underline">
                <Link
                  href={`https://drive.google.com/drive/folders/1nst1lwDkvXR4YPi44RPlECCZRAi6Zssk?usp=drive_link`}
                  passHref
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

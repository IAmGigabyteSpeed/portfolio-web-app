import Link from "next/link";
import FollowCursor from "./components/cursor";
import Nav from "./components/nav";

export default function Home() {
  return (
    <>
      <FollowCursor />
      <Nav />
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory motion-safe:scroll-smooth no-scrollbar">
        <div className="h-screen flex items-center justify-center bg-[#754E1A] snap-start">
          <h1 className="text-emerald-500 text-center font-bold text-3xl md:text-6xl lg:text-7xl">
            Hello{" "}
            <span className="inline-flex whitespace-nowrap">
              (´• ω •)
              <span className="inline-block animate-waving-hand">ﾉ</span>
            </span>
          </h1>
        </div>
        <div className="h-screen flex items-center justify-center bg-[#F0A04B] snap-start">
          <h1 className="text-emerald-500 text-center font-bold text-3xl md:text-6xl lg:text-7xl">
            Welcome to my website!{" "}
            <span className="inline-flex whitespace-nowrap">
              <span className="inline-block animate-jumping-hand">٩</span>(ˊᗜˋ*)
              <span className="inline-block animate-jumping-hand">و</span>
            </span>
          </h1>
        </div>
        <div className="h-screen flex flex-col items-center justify-center bg-[#FCE7C8] snap-start">
          <h1 className="text-emerald-500 text-center font-bold text-3xl md:text-6xl lg:text-7xl">
            Thanks for stopping by!{" "}
            <span className="inline-flex whitespace-nowrap">
              <span className="inline-block animate-jumping-hand">ദ്ദി</span>(
              •⩊• )
            </span>
          </h1>
          <Link className="pt-5" href={"/about"}>
            <p className="text-lg text-[#A6794D] hover:text-[#a1c479]">
              You can start from Here!
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}

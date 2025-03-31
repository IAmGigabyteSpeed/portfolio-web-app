import Image from "next/image";
import Link from "next/link";
import construction from "../../public/assets/construction.gif";

export default function NotFound404Page() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <Image src={construction} alt="Construction in Progress" width={300} />
      <h1 className="text-6xl md:text-8xl font-bold text-center">🚧404🚧</h1>
      <p className="text-xl md:text-2xl text-center">
        The page you are looking for is not here!
      </p>
      <p className="text-center">
        Come back through{" "}
        <span className="text-blue-500 hover:text-blue-900 underline">
          <Link href="/">here</Link>
        </span>
      </p>
    </div>
  );
}

import Nav from "../components/nav";
import Link from "next/link";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import FollowCursor from "../components/cursor";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Footer from "../components/footer";

const Contact = () => {
  return (
    <>
      <FollowCursor />
      <Nav />
      <div className="pt-12 min-h-screen flex flex-col justify-between">
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="text-2xl md:text-3xl lg:text-5xl my-10 font-bold">
            Let&apos;s Connect!
          </h1>
          <div className="flex lg:flex-row flex-col lg:space-x-5 lg:space-y-0 space-y-5">
            <Link
              target="_blank"
              href={`mailto:darren.tangamus@gmail.com`}
              passHref
            >
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl">
                <CardContent className="flex flex-row justify-center items-center mt-2">
                  <EmailIcon className="w-12 h-12 md:w-16 md:h-16 text-gray-500" />
                  <p>darren.tangamus@gmail.com</p>
                </CardContent>
              </Card>
            </Link>
            <Link
              target="_blank"
              href={`https://www.linkedin.com/in/darrentangamus/`}
              passHref
            >
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl">
                <CardContent className="flex flex-row justify-center items-center mt-2">
                  <LinkedInIcon className="w-12 h-12 md:w-16 md:h-16 text-blue-600" />
                  <p>Darren Tangamus</p>
                </CardContent>
              </Card>
            </Link>
            <Link
              target="_blank"
              href={`https://www.facebook.com/darren.tangamuse/`}
              passHref
            >
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl">
                <CardContent className="flex flex-row justify-center items-center mt-2">
                  <FacebookIcon className="w-12 h-12 md:w-16 md:h-16 text-blue-500" />
                  <p>Darren Tan</p>
                </CardContent>
              </Card>
            </Link>
            <Link
              target="_blank"
              href={`https://github.com/IAmGigabyteSpeed`}
              passHref
            >
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl">
                <CardContent className="flex flex-row justify-center items-center mt-2">
                  <GitHubIcon className="w-12 h-12 md:w-16 md:h-16" />
                  <p>IAmGigabyteSpeed</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Contact;

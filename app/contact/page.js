import Nav from "../components/nav";
import Link from "next/link";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FollowCursor from "../components/cursor";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const Contact = () => {
  return (
    <>
      <FollowCursor />
      <Nav />
      <div className="pt-12 min-h-screen">
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl my-10 font-bold">
            Let&apos;s Connect!
          </h1>
          <div className="flex md:flex-row flex-col md:space-x-5 md:space-y-0 space-y-5">
            <Link
              target="_blank"
              href={`mailto:darren.tangamus@gmail.com`}
              passHref
            >
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl">
                <CardContent className="flex flex-row justify-center items-center mt-2">
                  <EmailIcon className="w-12 h-12 md:w-16 md:h-16" />
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
                  <LinkedInIcon className="w-12 h-12 md:w-16 md:h-16" />
                  <p>Darren Tangamus</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;

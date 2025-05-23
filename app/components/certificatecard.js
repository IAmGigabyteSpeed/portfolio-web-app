import { Card, CardContent } from "@mui/material";
const Certificatecard = ({ company, title }) => {
  return (
    <Card className="shadow-md hover:shadow-xl transition-shadow duration-300 rounded-xl min-h-[27.5rem]">
      <CardContent className="rounded-xl">
        <div className="flex md:flex-row flex-col md:items-start items-center md:justify-start justify-center">
          <div>
            <img
              className="w-[30rem] h-[20rem] shadow-lg mb-2 hover:shadow-xl"
              alt={"certificate"}
              src={`/certificates/${title}.png`}
            />
            <div className="">
              <h2 className="text-lg text-center md:text-start font-semibold text-[#7D9A5A]">
                {company}
              </h2>
              <p className="text-gray-500 text-sm text-center md:text-start">
                {title}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Certificatecard;

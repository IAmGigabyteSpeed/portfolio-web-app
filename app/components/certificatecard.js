import { Card, CardContent } from "@mui/material";
const Certificatecard = ({ company, title }) => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl">
      <CardContent className="rounded-xl">
        <div className="flex md:flex-row flex-col md:items-start items-center md:justify-start justify-center">
          <div>
            <img
              className="w-full h-1/2"
              alt={"certificate"}
              src={`/certificates/${title}.jpg`}
            />
            <div className="">
              <h2 className="text-lg text-center md:text-start font-semibold text-emerald-500">
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

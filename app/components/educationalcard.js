import { Card, CardContent } from "@mui/material";
const EducationalCard = ({ title, year, grade, study }) => {
  return (
    <Card className="w-3/4 md:w-1/2 xl:w-1/4 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl">
      <CardContent className="rounded-xl">
        <div className="flex md:flex-row flex-col md:items-start items-center md:justify-start justify-center">
          <div className="md:me-5"></div>
          <div>
            <div className="">
              <h2 className="text-lg text-center md:text-start font-semibold text-[#7D9A5A]">
                {title}
              </h2>
              <p className="text-gray-500 text-sm text-center md:text-start">
                {year} - {grade}
              </p>
            </div>
            <div>
              <p className="text-gray-500 text-sm text-center md:text-start">
                {study}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EducationalCard;

import { Card, CardContent } from "@mui/material";
const ExperienceBox = ({ title, year, position, jobdescription }) => {
  return (
    <Card className="w-4/5 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl">
      <CardContent className="rounded-xl">
        <div className="flex md:flex-row flex-col md:items-start items-center md:justify-start justify-center">
          <div className="md:me-5"></div>
          <div>
            <div className="">
              <h2 className="text-lg text-center md:text-start font-semibold text-[#7D9A5A]">
                {title}
              </h2>
              <p className="text-gray-500 text-sm text-center md:text-start">
                {year}
              </p>
            </div>
            <div>
              <p className="text-gray-500 text-sm text-center md:text-start">
                {position}
              </p>
            </div>
            <div>
              <div>
                {jobdescription.includes("\n") ? (
                  <ul className="list-disc list-inside text-gray-500 text-sm text-center md:text-start">
                    {jobdescription.split("\n").map((item, index) => (
                      <li key={index}>{item.replace("-", "").trim()}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500 text-sm text-center md:text-start">
                    {jobdescription}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExperienceBox;

import Carousel from "./carousel";
const ExampleWork = ({ imgArr, year, type, title, description }) => {
  return (
    <div className="mb-20 md:px-10 lg:px-28 animate-[slideDownFadeIn_0.7s_ease-in-out]">
      <Carousel imgSrc={imgArr} />
      <div className="flex flex-col lg:flex-row items-center md:items-start justify-center md:justify-start md:mx-10 mt-5">
        <div className="lg:w-1/2 flex me-1 gap-x-1">
          <div className="flex flex-col justify-between me-5 md:me-10">
            <p className="">{year}</p>
          </div>
          <div>
            <p className="">{type}</p>
            <p className="text-xl md:text-4xl xl:text-6xl">{title}</p>
          </div>
        </div>
        <div className="lg:w-1/2 text-justify mt-2 md:mt-0">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
export default ExampleWork;

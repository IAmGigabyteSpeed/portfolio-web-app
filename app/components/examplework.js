import Carousel from "./carousel";
const ExampleWork = ({ imgArr, year, type, title }) => {
  return (
    <div className="mb-10 md:px-10">
      <Carousel imgSrc={imgArr} />
      <div className="flex flex-row justify-center md:justify-start md:mx-20 mt-5">
        <div className="flex flex-col justify-between me-5 md:me-10">
          <p className="">{year}</p>
        </div>
        <div>
          <p className="">{type}</p>
          <p className="md:text-4xl lg:text-7xl">{title}</p>
        </div>
      </div>
    </div>
  );
};
export default ExampleWork;

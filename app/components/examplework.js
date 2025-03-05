import Carousel from "./carousel";
import { motion } from "framer-motion";
const ExampleWork = ({ imgArr, year, type, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1 }}
      className=""
    >
      <div className="mb-20 md:px-10">
        <Carousel imgSrc={imgArr} />
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start md:mx-10 mt-5">
          <div className="md:w-1/2 flex">
            <div className="flex flex-col justify-between me-5 md:me-10">
              <p className="">{year}</p>
            </div>
            <div>
              <p className="">{type}</p>
              <p className="text-xl md:text-4xl lg:text-6xl">{title}</p>
            </div>
          </div>
          <div className="md:w-1/2 text-justify mt-2 md:mt-0">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default ExampleWork;

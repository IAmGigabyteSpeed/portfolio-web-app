import React, { useState } from "react";
import { Box, Card, CardMedia, Grid2, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
const ExampleWorkVideo = ({ videos, year, type, title, description }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsPerSlide = 1;
  const totalSlides = Math.ceil(videos.length / itemsPerSlide);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1 }}
      className=""
    >
      <div className="mb-20 md:px-10">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 4,
          }}
        >
          <IconButton onClick={handlePrev} sx={{ me: 1 }}>
            <ArrowBackIos />
          </IconButton>
          <Grid2 container spacing={2} sx={{ width: "100%", display: "flex" }}>
            {videos
              .slice(
                activeIndex * itemsPerSlide,
                activeIndex * itemsPerSlide + itemsPerSlide
              )
              .map((video, index) => (
                <Grid2 key={video} sx={{ flex: 1 }}>
                  <Card
                    sx={{ borderRadius: 2, overflow: "hidden", height: "100%" }}
                  >
                    <CardMedia
                      component="video"
                      sx={{
                        width: "100%",
                        height: { xs: 200, sm: 300, md: 500, lg: 650 }, // Fixed height with responsiveness
                        objectFit: "contain",
                      }}
                      image={video}
                      controls
                      muted
                      alt={`Video`}
                    />
                  </Card>
                </Grid2>
              ))}
          </Grid2>
          <IconButton onClick={handleNext} sx={{ ms: 1 }}>
            <ArrowForwardIos />
          </IconButton>
        </Box>
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
export default ExampleWorkVideo;

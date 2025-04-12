import React, { useState } from "react";
import { Box, Card, CardMedia, Grid2, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { motion } from "framer-motion";
const ExampleWorkVideo = ({
  videos,
  year,
  type,
  title,
  description,
  skills,
}) => {
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
    <div className="mb-20 md:px-10 lg:px-28 animate-[slideDownFadeIn_0.7s_ease-in-out]">
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
              <Grid2 key={index} sx={{ flex: 1 }}>
                <motion.div
                  whileHover={{
                    scale: 1.01,
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                >
                  <Card
                    sx={{ borderRadius: 2, overflow: "hidden", height: "100%" }}
                  >
                    <CardMedia
                      component="video"
                      sx={{
                        width: "100%",
                        height: { xs: 150, sm: 250, md: 400, lg: 550 }, // Fixed height with responsiveness
                        objectFit: "contain",
                      }}
                      image={video}
                      controls
                      muted
                      alt={`Video`}
                    />
                  </Card>
                </motion.div>
              </Grid2>
            ))}
        </Grid2>
        <IconButton onClick={handleNext} sx={{ ms: 1 }}>
          <ArrowForwardIos />
        </IconButton>
      </Box>
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
          <div>
            <p>{description}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-2 mt-2">
            {skills.map((skill) => (
              <p
                className="font-semibold bg-[var(--accent)] text-[var(--background)] text-center rounded-full py-2 px-3"
                key={skill}
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExampleWorkVideo;

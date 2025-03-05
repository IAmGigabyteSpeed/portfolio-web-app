import React, { useState } from "react";
import { Box, Card, CardMedia, Grid2, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
const ExampleWorkVideo = ({ videos, year, type, title }) => {
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
    <div className="mb-4">
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
export default ExampleWorkVideo;

import React, { useState } from "react";
import { Box, Card, CardMedia, IconButton, Grid2 } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const Carousel = ({ imgSrc }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsPerSlide = 1;
  const totalSlides = Math.ceil(imgSrc.length / itemsPerSlide);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  return (
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
        {imgSrc
          .slice(
            activeIndex * itemsPerSlide,
            activeIndex * itemsPerSlide + itemsPerSlide
          )
          .map((img, index) => (
            <Grid2 key={index} sx={{ flex: 1 }}>
              <Card
                sx={{ borderRadius: 2, overflow: "hidden", height: "100%" }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: "100%",
                    height: { xs: 200, sm: 300, md: 500, lg: 650 }, // Fixed height with responsiveness
                    objectFit: "contain",
                  }}
                  image={img}
                  alt={`Slide ${index + 1}`}
                />
              </Card>
            </Grid2>
          ))}
      </Grid2>

      <IconButton onClick={handleNext} sx={{ ms: 1 }}>
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default Carousel;

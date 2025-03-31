import React, { useState } from "react";
import { Box, Card, CardMedia, IconButton, Grid2 } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { motion } from "framer-motion";

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
                    component="img"
                    sx={{
                      width: "100%",
                      height: { xs: 150, sm: 250, md: 400, lg: 550 }, // Fixed height with responsiveness
                      objectFit: "contain",
                    }}
                    image={img}
                    alt={`Slide ${index + 1}`}
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
  );
};

export default Carousel;

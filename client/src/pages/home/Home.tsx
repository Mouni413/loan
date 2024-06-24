import React, { useEffect } from "react";

import { Grid, Box, Typography } from "@mui/material";
import Card1 from "../../components/Card/Card1";
import Slider from "../../components/sliders/Slider";
import { loansData } from "./data";
import Styles from "./Home.module.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Home = () => {
  useEffect(() => {
    const scrollUpBtn = document.getElementById("scrollUpBtn");

    const handleScroll = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        if (scrollUpBtn) scrollUpBtn.style.display = "block";
      } else {
        if (scrollUpBtn) scrollUpBtn.style.display = "none";
      }
    };

    const handleScrollUp = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (scrollUpBtn) {
      scrollUpBtn.addEventListener("click", handleScrollUp);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      if (scrollUpBtn) {
        scrollUpBtn.removeEventListener("click", handleScrollUp);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box className={Styles.homeContainer}>
      <Slider />
      <div className={Styles.loansContainer}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ marginTop: 5 }}
        >
          Our Loans
        </Typography>
        <Grid container spacing={4} mt={2}>
          {loansData.map((item, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
              <Card1 data={item} />
            </Grid>
          ))}
        </Grid>
      </div>
      <button id="scrollUpBtn" className={Styles.scrollUpBtn}>
        <ArrowUpwardIcon />
      </button>
    </Box>
  );
};

export default Home;

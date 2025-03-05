import Grid from "@mui/material/Grid2";
import { Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";

export default function Skillcard({ skills }) {
  return (
    <Grid container spacing={4} justifyContent="center" alignItems="center">
      {skills.map((skill) => (
        <Grid xs={4} sm={3} md={2} lg={1.5} key={skill}>
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
            }}
            whileTap={{
              scale: 1.15,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            <Card className="hover:bg-slate-100 hover:shadow-lg transition duration-500 p-1">
              <CardContent className="flex justify-center items-center min-h-[12.5rem]">
                <img
                  className="w-2/5 h-1/2"
                  alt={skill}
                  src={`/skills/${skill}.webp`}
                />
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
}

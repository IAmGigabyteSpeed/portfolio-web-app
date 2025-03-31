import Grid from "@mui/material/Grid2";
import { Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";

export default function Skillcard({ skills }) {
  return (
    <Grid
      container
      spacing={3}
      paddingX={10}
      justifyContent="center"
      alignItems="center"
    >
      {skills.map((skill) => (
        <Grid size={{ xs: 10, sm: 5, md: 4, lg: 2 }} key={skill}>
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
            }}
            whileTap={{
              scale: 1.15,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className=""
          >
            <Card className="hover:bg-slate-100 hover:shadow-lg transition duration-500 p-1">
              <CardContent className="flex justify-center items-center min-h-[10rem] relative">
                <img
                  className="w-2/5 h-3/4"
                  alt={skill}
                  src={`/skills/${skill}.webp`}
                />
                <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 hover:opacity-100 flex justify-center items-end transition-opacity duration-300">
                  <span className="text-white text-lg font-semibold">
                    {skill}
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
}

import { Card, CardContent } from "@mui/material";
import Link from "next/link";

export default function AchievementsGrid({ name, title, organizer, link }) {
  return (
    <Card className="w-4/5 hover:bg-slate-100 hover:shadow-lg transition duration-500 p-1">
      <CardContent className="flex flex-col justify-center my-5">
        <p className="text-xl text-emerald-500">{name}</p>
        <p>{title}</p>
        <p className="text-gray-500">{organizer}</p>
        <Link className="text-blue-500" href={link} passHref target="_blank">
          Link to Paper
        </Link>
      </CardContent>
    </Card>
  );
}

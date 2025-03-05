import { Card, CardContent } from "@mui/material";

export default function CerificationGrid({ certificate, award, organizer }) {
  return (
    <Card className="hover:bg-slate-100 hover:shadow-lg transition duration-500 p-1">
      <CardContent className="flex flex-col justify-center items-center min-h-[12.5rem]">
        <img
          className="w-2/5 h-1/2"
          alt={certificate}
          src={`/certificate/${certificate}.pdf`}
        />
        <p>{award}</p>
        <p className="text-gray-500">{organizer}</p>
      </CardContent>
    </Card>
  );
}

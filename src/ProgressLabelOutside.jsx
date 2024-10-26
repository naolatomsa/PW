import { Progress, Typography } from "@material-tailwind/react";

export function ProgressLabelOutside({ name, percent, value, color }) {
  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between gap-4">
        <Typography color="blue-gray" variant="h6">
          {name}
        </Typography>
        <Typography color="blue-gray" variant="h6">
          {percent}
        </Typography>
      </div>
      <Progress value={value} color={color} />
    </div>
  );
}

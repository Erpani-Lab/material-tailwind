import { Textarea, Typography } from "@material-tailwind/react/dist";

export function TextareaWithValidation() {
  return (
    <div className="w-full space-y-6">
      <div className="w-full space-y-1">
        <Textarea color="error" placeholder="Textarea Error" isError />
        <Typography variant="small" color="error">
          Something went wrong!
        </Typography>
      </div>
      <div className="w-full space-y-1">
        <Textarea color="success" placeholder="Textarea Success" isSuccess />
        <Typography variant="small" color="success">
          Congratulations 🎉
        </Typography>
      </div>
    </div>
  );
}

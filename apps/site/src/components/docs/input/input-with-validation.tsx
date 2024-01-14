import { Input, Typography } from "@material-tailwind/react/dist";

export function InputWithValidation() {
  return (
    <div className="w-72 space-y-6">
      <Input isError color="error" className="w-full space-y-1">
        <Input.Field placeholder="Input Error" />
        <Typography variant="small" color="error">
          Something went wrong!
        </Typography>
      </Input>
      <Input isSuccess color="success" className="w-full space-y-1">
        <Input.Field placeholder="Input Success" />
        <Typography variant="small" color="success">
          Congratulations 🎉
        </Typography>
      </Input>
    </div>
  );
}

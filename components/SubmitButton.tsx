"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { LoaderCircle } from "lucide-react";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button className="w-full font-semibold" disabled={pending}>
      {!pending && <span>Submit</span>}
      {pending && (
        <span className="text-gray-400">
          <LoaderCircle className="animate-spin" />
        </span>
      )}
    </Button>
  );
};

export default SubmitButton;

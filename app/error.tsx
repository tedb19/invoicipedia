"use client";
import NextError from "next/error";

interface Props {
  error: Error;
}
const Error = ({ error }: Props) => {
  return <NextError statusCode={500} title={error.message} />;
};

export default Error;

"use server";

import { db } from "@/db";
import { Invoices } from "@/db/schema";
import { redirect } from "next/navigation";

export const createAction = async (formData: FormData) => {
  const value = Math.floor(parseFloat(String(formData.get("value"))) * 100);
  const description = formData.get("description") as string;
  const result = await db
    .insert(Invoices)
    .values({
      value,
      description,
    })
    .returning({
      id: Invoices.id,
    });
  redirect(`/invoices/${result[0].id}`);
};

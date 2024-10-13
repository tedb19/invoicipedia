"use server";

import { db } from "@/db";
import { Invoices } from "@/db/schema";
import { createInsertSchema } from "drizzle-zod";
import { redirect } from "next/navigation";
import { z } from "zod";

export type State = {
  errors?: {
    value?: string[];
    description?: string[];
  };
  message?: string | null;
};

const CreateInvoiceSchema = createInsertSchema(Invoices, {
  value: z.coerce
    .number()
    .gt(0, { message: "Please enter an amount greater than $0" }),
});

export const createInvoice = async (prevState: State, formData: FormData) => {
  const validateFields = CreateInvoiceSchema.safeParse({
    value: formData.get("value"),
    description: formData.get("description"),
  });

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Missing fields. Failed to create invoice",
    };
  }
  const { value, description } = validateFields.data;
  const amountInCents = Math.floor(value * 100);
  let result;
  try {
    result = await db
      .insert(Invoices)
      .values({
        value: amountInCents,
        description,
      })
      .returning({
        id: Invoices.id,
      });
  } catch (err) {
    console.log("err", err);
    return {
      message: "Database Error: Failed to create invoice",
    };
  }
  redirect(`/invoices/${result[0].id}`);
};

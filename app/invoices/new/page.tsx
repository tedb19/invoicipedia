"use client";

import { createInvoice, State } from "@/app/actions";
import SubmitButton from "@/components/SubmitButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useActionState } from "react";

const CreateInvoice = () => {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(createInvoice, initialState);

  return (
    <main className="flex flex-col h-full gap-6 max-w-5xl mx-auto my-4">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semiboldbold">Create Invoice</h1>
      </div>
      <form action={formAction} className="grid gap-4 max-w-xs">
        <div>
          <Label htmlFor="name" className="block mb-2 font-semibold text-sm">
            Billing Name
          </Label>
          <Input id="name" name="name" type="text" />
        </div>
        <div>
          <Label htmlFor="email" className="block mb-2 font-semibold text-sm">
            Billing Email
          </Label>
          <Input id="email" name="email" type="email" />
        </div>
        <div>
          <Label htmlFor="value" className="block mb-2 font-semibold text-sm">
            Value
          </Label>
          <Input id="value" name="value" type="text" />
        </div>
        <div>
          <Label
            htmlFor="description"
            className="block mb-2 font-semibold text-sm"
          >
            Description
          </Label>
          <Textarea id="description" name="description" />
        </div>
        <div aria-live="polite" aria-atomic="true">
          {state.message ? (
            <p className="mt-2 text-sm text-red-500">{state.message}</p>
          ) : null}
        </div>
        <div>
          <SubmitButton />
        </div>
      </form>
    </main>
  );
};

export default CreateInvoice;

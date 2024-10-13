import StatusBadge from "@/components/StatusBadge";
import { db } from "@/db";
import { Invoices } from "@/db/schema";
import { eq } from "drizzle-orm";
import { Copy } from "lucide-react";
import { notFound } from "next/navigation";

interface Props {
  params: { invoiceId: string };
}
const InvoicePage = async ({ params }: Props) => {
  const invoice = await db.query.Invoices.findFirst({
    where: eq(Invoices.id, params.invoiceId),
  });
  if (!invoice) {
    notFound();
  }
  return (
    <main className="h-full max-w-5xl mx-auto my-12">
      <div className="flex flex-col justify-between mb-8">
        <h1 className="text-3xl font-semibold">Invoice Details</h1>
      </div>
      <h2 className="text-3xl mb-3 flex items-center">
        $ {(invoice.value / 100).toFixed(2)}
        <StatusBadge status={invoice.status} />
      </h2>
      <p className="text-lg mb-8">{invoice.description}</p>
      <h2 className="font-bold text-lg mb-4">Billing Details</h2>
      <ul className="grid gap-2">
        <li className="flex gap-4">
          <strong className="block w-28 flex-shrink-0 font-medium text-sm">
            Invoice Id
          </strong>
          <div className="flex justify-between text-gray-400 align-middle">
            <span>{invoice.id.substring(0, 5)}...</span>
            <Copy className="w-4 h-4  ml-2 cursor-pointer" />
          </div>
        </li>
        <li className="flex gap-4">
          <strong className="block w-28 flex-shrink-0 font-medium text-sm">
            Invoice Date
          </strong>
          <span>{invoice.created_at.toLocaleDateString()}</span>
        </li>
        <li className="flex gap-4">
          <strong className="block w-28 flex-shrink-0 font-medium text-sm">
            Billing Name
          </strong>
          <span></span>
        </li>
        <li className="flex gap-4">
          <strong className="block w-28 flex-shrink-0 font-medium text-sm">
            Billing Email
          </strong>
          <span></span>
        </li>
      </ul>
    </main>
  );
};

export default InvoicePage;

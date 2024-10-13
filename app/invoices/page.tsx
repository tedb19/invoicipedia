import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { CirclePlus, Eye, Trash2 } from "lucide-react";
import Link from "next/link";
import { db } from "@/db";
import { Invoices } from "@/db/schema";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipArrow,
} from "@radix-ui/react-tooltip";
import { ReactNode } from "react";
import StatusBadge from "@/components/StatusBadge";

const Dashboard = async () => {
  const invoices = await db.select().from(Invoices);

  return (
    <main className="flex flex-col h-full text-center gap-6 max-w-5xl mx-auto m-4">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Invoices</h1>
        <p>
          <Button variant="ghost" className="flex gap-2" asChild>
            <Link href="/invoices/new">
              <CirclePlus className="h-4 w-4" /> Create Invoice
            </Link>
          </Button>
        </p>
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] p-4">Date</TableHead>
            <TableHead className="p-4">Customer</TableHead>
            <TableHead className="p-4">Email</TableHead>
            <TableHead className="text-center p-4">Status</TableHead>
            <TableHead className="text-right p-4">Value</TableHead>
            <TableHead className="text-center p-4">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="text-left font-semibold p-4">
                {invoice.created_at.toLocaleDateString()}
              </TableCell>
              <TableCell className="text-left font-semibold p-4">
                Teddy B. Odhiambo
              </TableCell>
              <TableCell className="text-left p-4">tedb19@gmail.com</TableCell>
              <TableCell className="text-center p-4">
                <StatusBadge status={invoice.status} />
              </TableCell>
              <TableCell className="text-right p-4">
                $ {(invoice.value / 100).toFixed(2)}
              </TableCell>
              <TableCell className="p-4 flex justify-around align-middle">
                <MyTooltip
                  content={<p>View more details</p>}
                  trigger={
                    <Link href={`/invoices/${invoice.id}`}>
                      <Eye className="w-4 h-4 hover:text-green-400" />
                    </Link>
                  }
                />
                <MyTooltip
                  content={<p>View more details</p>}
                  trigger={
                    <Link href={`/invoices/${invoice.id}`}>
                      <Trash2 className="w-4 h-4 hover:text-red-400" />
                    </Link>
                  }
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
};

interface MyTooltipProps {
  trigger: ReactNode;
  content: ReactNode;
}
const MyTooltip = ({ trigger, content }: MyTooltipProps) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild className="text-gray-400">
        {trigger}
      </TooltipTrigger>
      <TooltipContent className="bg-gray-400 p-2 rounded text-zinc-100">
        {content}
        <TooltipArrow className="fill-gray-400" />
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);
export default Dashboard;

import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

interface Props {
  status: string;
}

const StatusBadge = ({ status }: Props) => {
  return (
    <Badge
      className={cn(
        "rounded-full ml-4 capitalize",
        status === "open" && "bg-blue-500",
        status === "paid" && "bg-green-600",
        status === "void" && "bg-zinc-700",
        status === "uncollectible" && "bg-red-600"
      )}
    >
      {status}
    </Badge>
  );
};

export default StatusBadge;

"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@repo/ui/components/ui/tooltip";
import { cn } from "@repo/ui/lib/utils";
import { useModal } from "../../hooks/use-modal-store";
import { useUser } from "../../hooks/use-user-store";

export function MyBalance() {
  const { userData } = useUser();
  const { onOpen } = useModal();

  if (!userData) return null;
  return (
    <div
      className="border-slate-200 border-2 rounded-md p-2"
      onClick={() => onOpen("addBalance")}
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger
            className={cn(
              "text-xl",
              userData.amount > 0 ? "text-green-400" : "text-red-400",
            )}
          >
            {userData.amount} $
          </TooltipTrigger>
          <TooltipContent>
            <p>Add credit</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

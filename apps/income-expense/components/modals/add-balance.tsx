"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@repo/ui/components/ui/dialog";

import { useModal } from "../../hooks/use-modal-store";
import { Input } from "@repo/ui/components/ui/input";
import { Button } from "@repo/ui/components/ui/button";
import { useState } from "react";
import { User, useUser } from "../../hooks/use-user-store";
import { useMutation } from "@apollo/client";
import { ADD_BALANCE } from "../../graphql/mutaions/user";

export function AddBalanceModal() {
  const { userData, setUser } = useUser();

  const { isOpen, type, onClose } = useModal();

  const [amount, setAmount] = useState<number>("" as any);

  const [addBalance] = useMutation<{ addBalance: User }>(ADD_BALANCE);

  const isModalOpen = isOpen && type === "addBalance";

  const handleClick = async () => {
    const { data } = await addBalance({
      variables: { userId: userData?.id, amount },
    });
    if (data) {
      setUser(data?.addBalance);
    }

    onClose();
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Balance</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="flex gap-8">
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(+e.target.value)}
            placeholder="enter balance"
          />
          <Button onClick={() => handleClick()}>submit</Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <Button onClick={onClose} variant="secondary">
            close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

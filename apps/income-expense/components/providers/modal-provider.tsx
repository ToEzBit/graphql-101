"use client";

import { useEffect, useState } from "react";
import { AddBalanceModal } from "../modals/add-balance";

export function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <AddBalanceModal />
    </>
  );
}

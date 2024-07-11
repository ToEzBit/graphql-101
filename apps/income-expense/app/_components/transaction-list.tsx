import { TransactionItem } from "./transaction-item";

export function TransactionList() {
  return (
    <div className="flex flex-col gap-4">
      <TransactionItem />
      <TransactionItem />
    </div>
  );
}

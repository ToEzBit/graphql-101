import { MyBalance } from "./_components/my-balance";
import { TransactionList } from "./_components/transaction-list";
import { UserLogin } from "./_components/user-login";

export default function Home() {
  return (
    <div className="container">
      <div className="flex justify-end mt-8">
        <MyBalance />
      </div>
      <div className="mt-16">
        <UserLogin />
      </div>
      <div className="mt-16">
        <TransactionList />
      </div>
    </div>
  );
}

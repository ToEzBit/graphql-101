"use client";
import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { Button } from "@repo/ui/components/ui/button";
import { Input } from "@repo/ui/components/ui/input";
import { UPSERT_USER } from "../../graphql/mutaions/user";
import { User, useUser } from "../../hooks/use-user-store";

export function SelectUser() {
  const { setUser } = useUser();
  const [upsertUser] = useMutation<{ upsertUser: User }>(UPSERT_USER);

  const [name, setName] = useState("");

  const handleClick = async () => {
    const { data } = await upsertUser({ variables: { name } });
    if (!data) return;
    setUser(data.upsertUser);
  };

  return (
    <div className="flex gap-8">
      <Input
        placeholder="enter user"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button onClick={handleClick}>Login</Button>
    </div>
  );
}

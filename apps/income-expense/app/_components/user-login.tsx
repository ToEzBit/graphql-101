"use client";

import { useUser } from "../../hooks/use-user-store";
import { AvaterUser } from "./avatar-user";
import { SelectUser } from "./select-user";

export function UserLogin() {
  const { userData } = useUser();

  if (!userData) return <SelectUser />;

  return <AvaterUser name={userData.name} />;
}

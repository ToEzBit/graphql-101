import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@repo/ui/components/ui/avatar";

interface AvatarUserProps {
  name: string;
}

export function AvaterUser({ name }: AvatarUserProps) {
  return (
    <div className="flex gap-8 justify-center items-center">
      <p className="text-xl font-bold text-slate-600">{name}</p>
      <Avatar className="w-[80px] h-[80px]">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}

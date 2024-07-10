import Link from "next/link";
import { ElementType } from "react";

export interface MenuItemProps {
  icon: ElementType;
  text: string;
  url: string;
}

const MenuItem = (props: MenuItemProps) => {
  return (
    <Link href={props.url} className="flex gap-2 px-4 py-2 hover:bg-black">
      <props.icon className="text-zinc-200" />
      <span>{ props.text }</span>
    </Link>
  );
};

export default MenuItem;
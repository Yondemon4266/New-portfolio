import { ReactElement } from "react";

export default function ListElement({
  text,
  children,
}: {
  text: string;
  children: ReactElement;
}) {
  return (
    <li className="flex gap-2 items-center ">
      {children}
      <p>{text}</p>
    </li>
  );
}

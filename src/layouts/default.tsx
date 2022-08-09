import React from "react";

type Props = {
  children: React.ReactNode;
};

export function Default({ children }: Props) {
  return <main>{children}</main>;
}

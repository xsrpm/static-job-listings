import React from "react";

type Props = {
  children: React.ReactNode;
};

export function Default({ children }: Props) {
  return <main className='flex flex-col gap-14'>{children}</main>;
}

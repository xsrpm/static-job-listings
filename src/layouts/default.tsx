import React from "react";

type Props = {
  children: React.ReactNode;
};

export function Default({ children }: Props) {
  return (<>
  <header className='h-40 bg-bg-header-mobile bg-primary'></header>
    <main className='flex flex-col gap-14 relative'>{children}</main>
  </>
)
}

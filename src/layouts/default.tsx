import React from "react";

type Props = {
  children: React.ReactNode;
};

export function Default({ children }: Props) {
  return (<>
  <header className='h-40 bg-header-mobile bg-primary lg:bg-header-desktop'></header>
    <main className='flex flex-col gap-14 relative lg:gap-10 pb-9 lg:pb-32'>{children}</main>
  </>
)
}

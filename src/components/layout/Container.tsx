import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export default function Container({
  children,
}: ContainerProps) {
  return (
    <div
      className="
        mx-auto
        w-full
        max-w-[1400px]
        px-5
        sm:px-8
        lg:px-10
        xl:px-12
        2xl:px-16
      "
    >
      {children}
    </div>
  );
}
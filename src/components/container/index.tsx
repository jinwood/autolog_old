import { type ReactNode } from "react";
export default function Container({ children }: { children: ReactNode }) {
  return (
    <div
      className="m-2 items-center justify-center rounded bg-slate-800 px-8 pb-8 pt-6 text-white shadow-lg"
      style={{
        boxShadow: "4px 14px 16px rgba(0, 0, 0, 0.4)",
      }}
    >
      {children}
    </div>
  );
}

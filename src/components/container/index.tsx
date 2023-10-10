import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type ReactNode } from "react";
export default function Container({
  children,
  loading = false,
}: {
  children: ReactNode;
  loading?: boolean;
}) {
  return loading ? (
    <div className="m-2 flex justify-center px-8 pb-8 pt-6 text-white">
      <FontAwesomeIcon
        icon={faSpinner}
        spin
        size="5x"
        className="text-slate-800"
      />
    </div>
  ) : (
    <div
      className="m-2 items-center justify-center rounded bg-slate-800 px-8 pb-8 pt-6 text-white shadow-lg"
      style={{
        boxShadow: "4px 14px 16px rgba(0, 0, 0, 0.4)",
      }}
    >
      {!loading && <>{children}</>}
    </div>
  );
}

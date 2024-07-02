"use client"; // Error components must be Client Components

import { useRouter } from "next/navigation";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { push } = useRouter();
  return (
    <div>
      <h2>{error.message}</h2>
      <button
        onClick={
          () => push("/login")
        }
      >
        go to login
      </button>
    </div>
  );
}

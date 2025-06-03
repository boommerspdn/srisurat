"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="size-full text-center flex flex-col gap-4 p-4 justify-center items-center">
      <h2 className="text-4xl">
        <span className="text-custom-orange">404</span> Error
      </h2>
      <p>ไม่พบหน้าที่คุณค้นหา โปรดลองใหม่อีกครั้ง</p>
      <Button onClick={() => reset()}>เชื่อมต่ออีกครั้ง</Button>
    </div>
  );
}

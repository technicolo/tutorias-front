"use client";

import { useSearchParams } from "next/navigation";
import CreatePassword from "./reset-password";

export default function ResetPasswordClient() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token") ?? "";
  const linkId = searchParams.get("linkId") ?? "";

  return <CreatePassword token={token} linkId={linkId} />;
}

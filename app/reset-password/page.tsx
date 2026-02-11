import { Suspense } from "react";
import ResetPasswordClient from './client-reset-password';

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <ResetPasswordClient />
    </Suspense>
  );
}

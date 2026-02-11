import { Suspense } from "react";
import Reuniones from './cliente-reuniones';





export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Reuniones />
    </Suspense>
  );
}

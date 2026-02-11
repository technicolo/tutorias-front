import { Suspense } from "react";
import Carrera from './cliente-carrera';




export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Carrera />
    </Suspense>
  );
}

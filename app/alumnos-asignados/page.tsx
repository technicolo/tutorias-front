import { Suspense } from "react";
import AlumnosAsignados from './cliente-aa';



export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <AlumnosAsignados />
    </Suspense>
  );
}

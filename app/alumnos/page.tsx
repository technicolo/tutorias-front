import { Suspense } from "react";
import Estudiantes from './estudiantes-cliente';


export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Estudiantes />
    </Suspense>
  );
}

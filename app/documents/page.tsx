import { Suspense } from "react";
import DocumentsPage from './cliente-documents';




export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <DocumentsPage />
    </Suspense>
  );
}

import React from "react";
import Support from "@/components/Support";
import InscrieFirma from "@/components/InscrieFirma";

const InscrieFirmaPage = () => {
  return (
    <main>
      <InscrieFirma formId={process.env.FORM_ID!} />
    </main>
  );
};

export default InscrieFirmaPage;

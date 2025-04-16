"use client";

import React from "react";
import { useForm } from "formbold-react";
import z from "zod";

// Schema de validare cu zod
const schema = z.object({
  name: z.string().min(3, { message: "Numele trebuie să aibă cel puțin 3 caractere" }),
  email: z.string().email({ message: "Vă rugăm să introduceți o adresă de email validă" }),
  phone: z.string().min(10, { message: "Numărul de telefon trebuie să aibă cel puțin 10 caractere" }),
  message: z.string().min(10, { message: "Mesajul trebuie să aibă cel puțin 10 caractere" }),
});

interface ContactFormProps {
  formId: string;
}

export default function ContactForm({ formId }: ContactFormProps) {
  // useForm de la formbold-react gestionează statusul și trimiterea
  const [state, handleSubmit] = useForm(formId);

  if (state.succeeded) {
    return (
      <div className="mx-auto mt-16 text-center">
        <h1 className="mb-3.5 text-2xl font-bold text-dark">Mulțumim!</h1>
        <p>Mesajul tău a fost trimis cu succes. Te vom contacta în curând.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto mt-16 max-w-[750px] rounded-xl">
      <div className="text-center">
        <h2 className="mb-3.5 text-2xl font-bold text-dark">Trimite un mesaj firmei</h2>
        <p>Completează formularul de mai jos și te vom contacta în cel mai scurt timp.</p>
      </div>

      <div className="my-10 bg-white p-4 shadow-box sm:p-7.5 xl:p-10">
        <form onSubmit={handleSubmit}>
          {/* Nume */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="mb-3 block text-sm font-medium text-dark text-left"
            >
              Nume
            </label>
            <input
              type="text"
              name="name"
              placeholder="Introdu numele tău"
              required
              className="w-full rounded-md border border-gray-300 px-6 py-3.5 outline-none 
                         placeholder:text-gray-400 focus:border-transparent focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="text-left mb-3 block text-sm font-medium text-dark"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Introdu adresa de email"
              required
              className="w-full rounded-md border border-gray-300 px-6 py-3.5 outline-none 
                         placeholder:text-gray-400 focus:border-transparent focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Telefon */}
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="text-left mb-3 block text-sm font-medium text-dark"
            >
              Număr de telefon
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Introdu numărul de telefon"
              required
              className="w-full rounded-md border border-gray-300 px-6 py-3.5 outline-none 
                         placeholder:text-gray-400 focus:border-transparent focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Mesaj */}
          <div className="mb-4">
            <label
              htmlFor="message"
              className="text-left mb-3 block text-sm font-medium text-dark"
            >
              Mesaj
            </label>
            <textarea
              name="message"
              placeholder="Scrie aici mesajul tău"
              rows={5}
              required
              className="w-full rounded-md border border-gray-300 px-6 py-3.5 outline-none 
                         placeholder:text-gray-400 focus:border-transparent focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Buton trimitere */}
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-green-700 px-5 py-3.5 font-medium text-white 
                       transition-all duration-200 hover:opacity-90"
          >
            Trimite mesaj
          </button>
        </form>
      </div>
    </div>
  );
}

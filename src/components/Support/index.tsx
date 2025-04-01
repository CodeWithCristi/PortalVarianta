"use client";
import { useForm } from "formbold-react";
import z from "zod";

const schema = z.object({
  name: z.string().min(3, { message: "Numele trebuie să aibă cel puțin 3 caractere" }),
  email: z.string().email({ message: "Vă rugăm să introduceți o adresă de email validă" }),
  phone: z.string().min(10, { message: "Numărul de telefon trebuie să aibă cel puțin 10 caractere" }),
  message: z.string().min(10, { message: "Mesajul trebuie să aibă cel puțin 10 caractere" }),
});

const Support = ({ formId }: { formId: string }) => {
  const [state, handleSubmit] = useForm(formId);

  if (state.succeeded) {
    return (
      <div className="mx-auto mt-40 text-center">
        <h1 className="mb-3.5 text-custom-1 font-bold text-dark">Mulțumim!</h1>
        <p>Echipa noastră de suport te va contacta cât de curând posibil prin email.</p>
        <button className="mt-10 rounded-lg bg-dark px-6 py-3 font-medium text-white hover:opacity-90">
          Înapoi acasă
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto mt-40 max-w-[550px] rounded-xl">
      <div className="text-center">
        <h1 className="mb-3.5 text-custom-1 font-bold text-dark">
          Ai nevoie de ajutor?
        </h1>
        <p>Echipa noastră de suport te va contacta cât de curând posibil prin email.</p>
      </div>

      <div className="my-10 bg-white p-4 shadow-box sm:p-7.5 xl:p-10">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="mb-3 block text-custom-sm font-medium text-dark"
            >
              Nume
            </label>
            <input
              type="text"
              placeholder="Introdu numele tău"
              required
              name="name"
              className="w-full rounded-md border border-gray-4 bg-white px-6 py-3.5 outline-none duration-200 placeholder:text-dark-2 focus:border-gray-7 focus:border-transparent focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="mb-3 block text-custom-sm font-medium text-dark"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Introdu adresa de email"
              required
              name="email"
              className="w-full rounded-md border border-gray-4 bg-white px-6 py-3.5 outline-none duration-200 placeholder:text-dark-2 focus:border-gray-7 focus:border-transparent focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="mb-3 block text-custom-sm font-medium text-dark"
            >
              Număr de telefon
            </label>
            <input
              type="tel"
              placeholder="Introdu numărul de telefon"
              required
              name="phone"
              className="w-full rounded-md border border-gray-4 bg-white px-6 py-3.5 outline-none duration-200 placeholder:text-dark-2 focus:border-gray-7 focus:border-transparent focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="mb-3 block text-custom-sm font-medium text-dark"
            >
              Mesaj
            </label>
            <textarea
              name="message"
              placeholder="Introdu mesajul tău"
              className="w-full rounded-md border border-gray-4 bg-white px-6 py-3.5 outline-none duration-200 placeholder:text-dark-2 focus:border-gray-7 focus:border-transparent focus:ring-2 focus:ring-primary"
              cols={20}
              rows={5}
            ></textarea>
          </div>

          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-dark px-5 py-3.5 font-medium text-white transition-all duration-200 hover:opacity-90"
          >
            Trimite mesaj
          </button>
        </form>
      </div>
    </div>
  );
};

export default Support;

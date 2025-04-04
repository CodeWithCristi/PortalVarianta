import Image from "next/image"
import FilterForm from "./FilterForm"
import { categories, cities } from "@/utils/Constants"

const Filter = () => {

  return (
    <section className="pb-15">
      <div className="bg-gray pb-12.5 pt-34">
        <div className="mx-auto w-full max-w-[1200px] px-0 sm:px-0 xl:px-0">
          <div className="flex flex-col md:flex-row md:gap-8 items-center justify-center">
            {/* Coloana stângă – Conținut static */}
            <div className="md:w-1/2">
              <h1 className="mb-3.5 text-heading-6 font-bold text-dark sm:text-heading-4 lg:text-heading-3">
                Găsește o firmă de amenajări grădini rapid
              </h1>
              <p>Alege categoria și orașul tău și contactează</p>
              <p>Firma se va ocupa de spațiul tău verde</p>
              <div className="mt-7.5">
                {/* Componenta client – formularul */}
                <FilterForm cities={cities} categories={categories} />
              </div>
            </div>

            {/* Coloana dreaptă – Imagine */}
            <div className="mt-8 md:mt-0 md:w-1/2 flex items-center justify-center">
              <Image
                src="/images/icons/callcustomers.svg"
                alt="Garden landscaping"
                width={500}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Filter

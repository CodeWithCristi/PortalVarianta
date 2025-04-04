import { categories, cities } from "@/utils/Constants";
import SearchFilterForm from "./SearchFilterForm"; // Ajustează calea după structură

const SearchPageFilter = () => {

  return (
    <section className="pb-15">
      <div className="bg-gray pb-12.5 pt-34">
        <div className="mx-auto w-full max-w-[1200px] px-0 sm:px-0 xl:px-0">
          <div className="flex flex-col md:flex-row md:gap-8 items-center justify-center">
            <div className="w-full md:w-[80%] mx-auto text-center md:text-center">
              <div className="mx-auto max-w-[900px]">
                <h1 className="mb-3.5 text-heading-6 font-bold text-dark sm:text-heading-4 lg:text-heading-3">
                  Găsește o firmă de amenajări grădini rapid
                </h1>
                <p>Alege categoria și orașul tău și contactează</p>
                <p>Firma se va ocupa de spațiul tău verde</p>
              </div>
              <div className="mt-7.5 mx-auto w-full max-w-[500px]">
                <SearchFilterForm cities={cities} categories={categories} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchPageFilter;

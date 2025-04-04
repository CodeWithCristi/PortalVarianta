"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface SearchFilterFormProps {
  cities: string[];
  categories: string[];
}

const SearchFilterForm = ({ cities, categories }: SearchFilterFormProps) => {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedCategory && selectedCity) {
      const categorySlug = selectedCategory.toLowerCase().replace(/\s+/g, "-");
      const citySlug = selectedCity.toLowerCase().replace(/\s+/g, "-");
      const searchSlug = `${categorySlug}-${citySlug}`;
      router.push(`/${searchSlug}`);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="flex flex-col md:flex-row gap-2">
        {/* Dropdown pentru categorii */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full md:w-80 rounded-lg border border-gray-3 bg-white py-4.5 pl-3 pr-3 outline-none duration-200 ease-in text-black focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-dark-4/20"
        >
          <option value="">Alege categoria</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Dropdown pentru orașe */}
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="w-full md:w-80 rounded-lg border border-gray-3 bg-white py-4.5 pl-3 pr-3 outline-none duration-200 ease-in text-black focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-dark-4/20"
        >
          <option value="">Alege orașul</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="flex items-center rounded-md bg-dark px-5.5 py-2.5 font-medium text-white hover:opacity-90 transition-all duration-200 ease-linear"
        >
          Caută
        </button>
      </div>
    </form>
  );
};

export default SearchFilterForm;

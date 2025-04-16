"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { getPosts } from "@/sanity/sanity-utils"
import type { Blog } from "@/types/blog"
import { integrations } from "../../../integrations.config"

interface FilterFormProps {
  cities: string[]
  categories: string[]
}

const FilterForm = ({ cities, categories }: FilterFormProps) => {
  const [posts, setPosts] = useState<Blog[]>([])
  const [filtredPosts, setFiltredPosts] = useState<Blog[]>([])
  const [selectedCity, setSelectedCity] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const router = useRouter()

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts()
      setPosts(posts)
      setFiltredPosts(posts)
    }

    if (integrations?.isSanityEnabled) {
      fetchPosts()
    } else {
      setPosts([])
      setFiltredPosts([])
    }
  }, [])

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (selectedCategory && selectedCity) {
      // Convertim valorile în slug-uri: litere mici și cratime în locul spațiilor
      const categorySlug = selectedCategory.toLowerCase().replace(/\s+/g, '-')
      const citySlug = selectedCity.toLowerCase().replace(/\s+/g, '-')
      const searchSlug = `${categorySlug}-${citySlug}`
      // Redirecționăm către URL-ul generat
      router.push(`/${searchSlug}`)
    }
  }

  return (
    <form onSubmit={handleSearch}>
      <div className="flex gap-2">
        {/* Dropdown pentru categorii */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full rounded-lg border border-gray-3 bg-white py-4.5 pl-3 pr-3 outline-none duration-200 ease-in text-black focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-dark-4/20"
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
          className="w-full rounded-lg border border-gray-3 bg-white py-4.5 pl-3 pr-3 outline-none duration-200 ease-in text-black focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-dark-4/20"
        >
          <option value="">Alege orașul</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>

        <button className="flex items-center rounded-md bg-green px-5.5 py-2.5 font-medium text-white hover:opacity-90 transition-all duration-200 ease-linear">
          Caută
        </button>
      </div>
    </form>
  )
}

export default FilterForm

"use client"
import { getPosts } from "@/sanity/sanity-utils"
import { useEffect, useState } from "react"
import type { Blog } from "@/types/blog"
import { integrations } from "../../../integrations.config"
import Image from "next/image"

const Filter = () => {
  const [posts, setPosts] = useState<Blog[]>([])
  const [filtredPosts, setFiltredPosts] = useState<Blog[]>([])
  const [query, setQuery] = useState("")

  // Lista orașelor - modifică după necesități
  const cities = ["București", "Cluj", "Timișoara", "Iași", "Constanța"]

  const filterPosts = (query: string) => {
    if (query === "") {
      setFiltredPosts(posts)
    } else {
      // Presupunând că fiecare postare are o proprietate "city"
      const results: Blog[] = posts.filter((post: Blog) => post.city && post.city.toLowerCase() === query.toLowerCase())
      setFiltredPosts(results)
    }
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts()
      setPosts(posts)
      setFiltredPosts(posts)
    }

    if (integrations?.isSanityEnabled) {
      fetchPosts()
    } else {
      setFiltredPosts([])
      setPosts([])
    }
  }, [setPosts, setFiltredPosts])

  return (
    <section className="pb-15">
      <div className="bg-gray pb-12.5 pt-34">
        <div className="mx-auto w-full max-w-[1200px] px-0 sm:px-0 xl:px-0">
          {/* Two column layout */}
          <div className="flex flex-col md:flex-row md:gap-8 flex items-center justify-center">
            {/* Left column - Form content */}
            <div className="md:w-1/2">
              <h1 className="mb-3.5 text-heading-6 font-bold text-dark sm:text-heading-4 lg:text-heading-3">
                Gasește o firmă de amenajari gradini rapid
              </h1>
              <p>Alege orasul tau și contactează</p>
              <p>Firma se va ocupa de spațiul tău verde</p>

              <div className="mt-7.5">
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    filterPosts(query)
                  }}
                >
                  <div className="flex">
                    <select
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      className="w-full rounded-l-lg border border-gray-3 bg-white py-4.5 pl-3 pr-3 outline-none duration-200 ease-in text-black focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-dark-4/20"
                    >
                      <option value="" className="text-black">
                        Alege orasul
                      </option>
                      {cities.map((city) => (
                        <option key={city} value={city} className="text-black">
                          {city}
                        </option>
                      ))}
                    </select>
                    <button className="flex items-center rounded-r-md bg-dark px-5.5 py-2.5 font-medium text-white hover:opacity-90 lg:transition-all lg:duration-200 lg:ease-linear">
                      Caută
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Right column - Image */}
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


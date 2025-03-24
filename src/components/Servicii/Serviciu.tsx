import { Author } from "@/types/author";
import Link from "next/link";

const Serviciu = ({ author }: { author: Author }) => {
  // Extragem iconul primit prin proprietatea author.icon
  const Icon = author.icon;
  return (
    <Link href={`/`} className="group flex items-center justify-center">
      <div className="rounded-[20px] border border-gray-3 bg-gray p-5 transition-all group-hover:-translate-y-2 group-hover:bg-white group-hover:drop-shadow-1">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full bg-gray-200">
            <Icon size={50} className="text-gray-500" />
          </div>
          <div className="text-center">
            <h3 className="mb-1 text-custom-xl font-semibold text-dark">
              {author.name}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Serviciu;

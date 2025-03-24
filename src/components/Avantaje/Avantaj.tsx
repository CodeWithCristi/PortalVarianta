import Link from "next/link";
import { Author } from "@/types/author";

const Avantaj = ({ author }: { author: Author }) => {
  // Extragem iconul primit în proprietatea author.icon
  const Icon = author.icon;
  return (
    <div className="group">
      <div className="p-5">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full bg-gray-200">
            <Icon size={50} className="text-gray-500" />
          </div>
          <h3 className="mb-1 text-custom-xl font-semibold text-dark text-center">
            {author.name}
          </h3>
          <p className="text-center">{author.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Avantaj;

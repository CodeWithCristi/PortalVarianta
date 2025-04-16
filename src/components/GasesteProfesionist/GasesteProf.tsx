import Image from "next/image";

const GasesteProf = ({ name, description, image }) => {
  return (
    <div className="group">
      <div className="p-5">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full bg-gray-200 overflow-hidden">
            <Image
              src={image}              // Calea către imagine
              alt={name}               // Text alternativ pentru SEO și accesibilitate
              width={100}
              height={100}
              className="object-contain"
              priority={true}          // Imagine prioritară, poate fi omisă dacă nu e esențială
            />
          </div>
          <h3 className="mb-1 text-custom-xl font-semibold text-dark text-center">
            {name}
          </h3>
          <p className="text-center">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default GasesteProf;

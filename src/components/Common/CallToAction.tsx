"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-gray py-12.5">
      <div className="absolute left-0 top-0 -z-1 h-full w-full">
        <Image
          src="/images/newsletter/bg-dots.svg"
          width={1349}
          height={183}
          alt="dot"
        />
      </div>
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <div className="rounded-[10px] bg-white px-4 py-9 shadow-1 sm:px-8 xl:px-10">
          <div className="flex flex-wrap items-center justify-between gap-10">
            <div className="w-full max-w-[555px]">
              <h3 className="mb-3 text-heading-6 font-semibold text-dark">
                Vrei să îți promovezi serviciile?
              </h3>
              <p>
                Contactează-ne și îți putem oferi o soluție personalizată pentru afacerea ta!
              </p>
            </div>
            <div className="w-full max-w-[394px]">
              <div className="flex items-center gap-5">
                <Link
                  href="/cauta"
                  className="inline-flex justify-center rounded-md border border-dark px-7.5 py-3 font-medium text-dark duration-200 ease-in hover:bg-dark hover:text-white"
                >
                  Caută firmă
                </Link>
                <Link
                  href="/inscrie-firma"
                  className="flex items-center justify-center rounded-md bg-dark px-5.5 py-3.5 font-medium text-white transition-all duration-300 ease-linear hover:opacity-90"
                >
                  Înscrie firmă
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

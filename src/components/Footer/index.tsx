import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-3 py-8" role="contentinfo">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {/* Utile clienti */}
          <div className="w-full sm:w-1/2 sm:mx-auto text-left">
            <h3 className="text-lg font-semibold text-dark mb-4">Utile clienti</h3>
            <nav aria-label="Utile clienti">
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/cum-ma-ajuta-platforma"
                    className="text-custom-sm text-gray-600 hover:text-dark transition-colors"
                  >
                    Cum ma ajuta platforma?
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Utile companii */}
          <div className="w-full sm:w-1/2 sm:mx-auto text-left">
            <h3 className="text-lg font-semibold text-dark mb-4">Utile companii</h3>
            <nav aria-label="Utile companii">
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/blog"
                    className="text-custom-sm text-gray-600 hover:text-dark transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cum-adaug-firma-mea"
                    className="text-custom-sm text-gray-600 hover:text-dark transition-colors"
                  >
                    Cum adaug firma mea
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cum-cumpar-abonament"
                    className="text-custom-sm text-gray-600 hover:text-dark transition-colors"
                  >
                    Cum cumpar abonament
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Legal */}
          <div className="w-full sm:w-1/2 sm:mx-auto text-left">
            <h3 className="text-lg font-semibold text-dark mb-4">Legal</h3>
            <nav aria-label="Legal">
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/politica-de-cookies"
                    className="text-custom-sm text-gray-600 hover:text-dark transition-colors"
                  >
                    Politica de cookies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/politica-de-confidentialitate"
                    className="text-custom-sm text-gray-600 hover:text-dark transition-colors"
                  >
                    Politica de confidentialitate
                  </Link>
                </li>
                <li>
                  <Link
                    href="/termeni-si-conditii"
                    className="text-custom-sm text-gray-600 hover:text-dark transition-colors"
                  >
                    Termeni si conditii
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-8">
          <div className="grid grid-cols-2 gap-2">
            <div className="flex justify-center">
              <a
                href="https://reclamatiisal.anpc.ro/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/anpc-sal.webp"
                  alt="Logo ANPC Sal"
                  width={300}
                  height={200}
                />
              </a>
            </div>
            <div className="flex justify-center">
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/anpc-sol.webp"
                  alt="Logo ANPC Sol"
                  width={300}
                  height={200}
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-custom-sm text-gray-500">
            &copy; {year} NextBlog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";

import { useState } from "react";
import { Phone } from "lucide-react";

interface RevealPhoneButtonProps {
  fullPhone: string;
}

export default function RevealPhoneButton({ fullPhone }: RevealPhoneButtonProps) {
  const [showFullNumber, setShowFullNumber] = useState(false);
  const partialPhone = fullPhone.substring(0, 5) + "...";

  // Handler pentru apel, activ când numărul complet este afișat
  const handleCall = () => {
    window.location.href = `tel:${fullPhone}`;
  };

  return (
    // Adăugăm onClick doar dacă numărul complet este afișat
    <div
      onClick={showFullNumber ? handleCall : undefined}
      className={`flex ${showFullNumber ? "cursor-pointer" : ""}`}
    >
      <div
        className={`flex items-center justify-between border rounded-l-md px-4 py-2.5 ${
          showFullNumber ? "rounded-md" : "border-r-0"
        }`}
      >
        <div className="flex items-center gap-2">
          <Phone className="w-6 h-6 text-green" />
          {showFullNumber ? (
            <a href={`tel:${fullPhone}`} className="text-gray-700">
              {fullPhone}
            </a>
          ) : (
            <span className="text-gray-700">{partialPhone}</span>
          )}
        </div>
      </div>

      {/* Butonul este afișat doar dacă numărul nu este încă dezvăluit */}
      {!showFullNumber && (
        <button
          onClick={(e) => {
            e.stopPropagation(); // Previne propagarea click-ului la container
            setShowFullNumber(true);
          }}
          className="rounded-l-none rounded-r-md flex items-center bg-green px-5.5 py-2.5 font-medium text-white hover:opacity-90 transition duration-200 ease-linear"
        >
          Vezi numărul
        </button>
      )}
    </div>
  );
}

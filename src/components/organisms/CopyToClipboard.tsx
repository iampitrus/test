import { useState } from "react";
import { GoCopy } from "react-icons/go";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

export default function CopyToClipboard({ data }: { data: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <div className="relative">
      {copied ? (
        <IoIosCheckmarkCircleOutline className="text-headercolor" />
      ) : (
        <GoCopy
          onClick={() => handleCopy(data)}
          className="text-headercolor cursor-pointer"
        />
      )}
      {copied && (
        <p className="absolute top-5 -left-4 text-white text-xs bg-gray-600 py-1 px-2 rounded-2xl">
          copied
        </p>
      )}
    </div>
  );
}

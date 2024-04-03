import React from "react";

export default function FilterInput({
  handleInputChange,
  defautValue,
  type,
}: {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  defautValue: string;
  type: string;
}) {
  return (
    <div className="flex w-full justify-between gap-4">
      <label className="font-[400]">{type}</label>
      <input
        className="bg-gray-800 text-sm text-yellow-200 p-2 h-7 rounded-md font-[300]"
        type="text"
        onChange={handleInputChange}
        defaultValue={defautValue}
      />
    </div>
  );
}

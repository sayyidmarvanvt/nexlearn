"use client";

import React from "react";

interface FloatingInputProps {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  maxLength?: number;
  autoFocus: boolean;
  prefix?: React.ReactNode;
}

export default function FloatingInput({
  label,
  type = "text",
  placeholder = "",
  value,
  onChange,
  autoFocus,
  maxLength,
  prefix,
}: FloatingInputProps) {
  return (
    <div className="relative w-full">
      {/* Floating Label */}
      <span className="absolute -top-2 left-5 bg-white px-1 text-xs text-gray-600">
        {label}
      </span>

      {/* Input with optional prefix */}
      <div className="flex items-center gap-2 border border-[#CECECE] rounded-lg px-3 py-3 bg-white text-sm md:text-base">
        {prefix && <span className="flex items-center gap-1">{prefix}</span>}

        <input
          type={type}
          placeholder={placeholder}
          value={value}
          autoFocus={autoFocus}
          onChange={(e) => onChange(e.target.value)}
          maxLength={maxLength}
          className="flex-1 outline-none border-none text-brand placeholder:text-[#CECECE] font-medium caret-brand bg-transparent"
        />
      </div>
    </div>
  );
}

"use client";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function SubmitDialog({
  open,
  onClose,
  onConfirm,
  totalQuestions,
  remainingTime,
  answeredCount,
  markedCount,
}: any) {
  const stats = [
    {
      src: "/timer.svg",
      color: "#1C3141",
      label: "Remaining Time:",
      value: remainingTime,
      textColor: "text-white",
    },
    {
      src: "/question.svg",
      color: "#DDA428",
      label: "Total Questions:",
      value: totalQuestions,
      textColor: "text-white",
    },
    {
      src: "/question.svg",
      color: "#4CAF50",
      label: "Questions Answered:",
      value: answeredCount,
      textColor: "text-white",
    },
    {
      src: "/question.svg",
      color: "#800080",
      label: "Marked for Review:",
      value: markedCount,
      textColor: "text-white",
    },
  ];
  
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-sm ">
        {/* Close Button */}
        <DialogClose asChild>
          <button
            onClick={onClose}
            className="absolute top-6 right-6 transition text-brand hover:text-brand/50"
          >
            <X className="w-5 h-5" />
          </button>
        </DialogClose>

        {/* Header */}
        <DialogHeader className="pb-2 border-b">
          <DialogTitle className="text-md font-semibold text-brand">
            Are you sure you want to submit the test?
          </DialogTitle>
        </DialogHeader>

        {/* Stats Grid */}
        <div className="space-y-2 mb-4 text-brand">
          {stats.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between px-2 sm:px-4 py-2  "
            >
              <div className="flex items-center gap-3">
                <span
                  className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-md"
                  style={{ backgroundColor: item.color }}
                >
                  <Image
                    src={item.src}
                    alt={item.label}
                    width={16}
                    height={16}
                    className="object-contain"
                  />
                </span>
                <span className="font-medium text-sm sm:text-base">
                  {item.label}
                </span>
              </div>
              <span className="font-bold text-sm sm:text-lg">{item.value}</span>
            </div>
          ))}
        </div>

        {/* Submit Button */}

        <Button
          onClick={onConfirm}
          className="w-full bg-brand text-white text-md font-medium py-4 "
        >
          Submit Test
        </Button>
      </DialogContent>
    </Dialog>
  );
}

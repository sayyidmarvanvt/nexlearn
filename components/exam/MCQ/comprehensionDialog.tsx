"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function ComprehensionDialog({
  open,
  onClose,
  comprehension,
}: any) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg sm:max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader className="pb-2 border-b">
          <DialogTitle className="text-lg font-semibold text-[#177A9C]">
            Comprehension
          </DialogTitle>
        </DialogHeader>

        <div className="mt-4 text-sm md:text-base leading-relaxed text-gray-700 whitespace-pre-line">
          {comprehension}
        </div>

        <DialogFooter className="pt-3">
          <DialogClose asChild>
            <Button
              onClick={onClose}
              className="bg-[#177A9C] hover:bg-[#136b8a] text-white text-sm px-10 py-2 rounded-md"
            >
              Minimize
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

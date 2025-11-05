"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import FloatingInput from "../ui/floatingInput";
import AuthWrapper from "../wrapper/authWrapper";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setAuthData } from "@/store/authSlice";
import { useApiHandler } from "@/hooks/useApiHandler";
import { X } from "lucide-react";

interface DetailsPageProps {
  mobile: string;
}

export default function DetailsPage({ mobile }: DetailsPageProps) {
  const router = useRouter();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    qualification: "",
  });
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [imageError, setImageError] = useState<string | null>(null);
  const isFormIncomplete =
    !formData.name.trim() || !formData.qualification.trim() || !photoFile;
  const { loading, error, sendRequest, clearError } = useApiHandler();

  useEffect(() => {
    if (error) clearError();
  }, [formData]);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setImageError(null);

    if (file) {
      const validTypes = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/gif",
        "image/webp",
      ];
      if (!validTypes.includes(file.type)) {
        setImageError(
          "Please upload a valid image file (JPEG, PNG, GIF, or WebP)"
        );
        return;
      }

      const maxSize = 5 * 1024 * 1024; // 5MB
      if (file.size > maxSize) {
        setImageError("Image size should be less than 5MB");
        return;
      }

      setPhotoFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setPhotoPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const removePhoto = () => {
    setPhotoFile(null);
    setPhotoPreview(null);
  };

  const handleDetails = async () => {
    const { name, email, qualification } = formData;
    if (!mobile || !name || !qualification || !photoFile) {
      alert("Please fill all required fields and upload a photo.");
      return;
    }

    const data = new FormData();
    data.append("mobile", mobile);
    data.append("name", name);
    data.append("email", email);
    data.append("qualification", qualification);
    data.append("profile_image", photoFile);

    sendRequest({
      url: "/api/auth/create-profile",
      data,
      onSuccess: (resData) => {
        dispatch(setAuthData(resData));
        router.push("/exam/instructions");
      },
    });
  };

  return (
    <AuthWrapper
      title="Add Your Details"
      footer={
        <Button
          onClick={handleDetails}
          disabled={loading || isFormIncomplete}
          className="w-full h-12 bg-brand hover:bg-slate-800 text-white font-semibold rounded-lg"
        >
          {loading ? "Please wait..." : "Get Started"}
        </Button>
      }
    >
      {/* Photo upload */}
      <div className="flex flex-col items-center mb-4">
        <div className="relative">
          <label className="w-28 h-28 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-blue-500 transition-colors overflow-hidden">
            {photoPreview ? (
              <Image
                src={photoPreview}
                alt="Profile"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-gray-400 text-center">
                <div className="text-2xl mb-1">+</div>
                <div className="text-xs">Add photo</div>
              </div>
            )}
            <input
              type="file"
              accept="image/jpeg,image/jpg,image/png,image/gif,image/webp"
              onChange={handlePhotoUpload}
              className="hidden"
            />
          </label>

          {/* Cross (remove) button */}
          {photoPreview && (
            <button
              onClick={removePhoto}
              type="button"
              className="absolute top-0 right-0 bg-brand  text-white rounded-full p-1 shadow-md"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {imageError && (
          <p className="text-red-500 text-sm mt-2 text-center">{imageError}</p>
        )}
      </div>

      {error && (
        <p className="text-xs text-red-500 mt-2 transition-opacity duration-200">
          {error}
        </p>
      )}
      {/* Scrollable Input Section */}
      <div className="overflow-y-auto h-[160px] no-scrollbar space-y-6 p-2">
        <FloatingInput
          label="Name*"
          placeholder="Enter your Full Name"
          autoFocus
          value={formData.name}
          onChange={(val) => handleChange("name", val)}
        />
        <FloatingInput
          label="Email"
          type="email"
          autoFocus={false}
          placeholder="Enter your Email Address"
          value={formData.email}
          onChange={(val) => handleChange("email", val)}
        />
        <FloatingInput
          label="Your qualification*"
          placeholder="Bachelor of Engineering"
          autoFocus={false}
          value={formData.qualification}
          onChange={(val) => handleChange("qualification", val)}
        />
      </div>
    </AuthWrapper>
  );
}

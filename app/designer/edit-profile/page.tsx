"use client";

import { useState } from "react";
import { ImagePlus, Loader2 } from "lucide-react";

type FormData = {
  profileImage: File | null;
  profileImageUrl: string;
  bio: string;
  experience: string;
  location: string;
  specialties: string[];
};

const specialtiesList = [
  "Custom Pattern Making",
  "Ready-to-wear",
  "Security Wear",
  "Bridal Wear",
  "Children wear",
  "Scrub",
  "Men's Traditional Wear",
  "Wedding Outfit",
  "Embroidery / Beading",
  "Culture Outfit",
  "Corporate wear",
  "Ankara Design",
];

const experienceOptions = [
  "0 - 1 year",
  "1 - 3 years",
  "3 - 5 years",
  "5 - 10 years",
  "10+ years",
];

const locationOptions = [
  "Lagos",
  "Abuja",
  "Port Harcourt",
  "Ibadan",
  "Kano",
  "Enugu",
  "Kaduna",
  "Others",
];

export default function OnboardingStepOne() {
  const [formData, setFormData] = useState<FormData>({
    profileImage: null,
    profileImageUrl: "",
    bio: "",
    experience: "",
    location: "",
    specialties: [],
  });

  const [uploading, setUploading] = useState(false);

  const toggleSpecialty = (item: string) => {
    setFormData((prev) => {
      const exists = prev.specialties.includes(item);
      return {
        ...prev,
        specialties: exists
          ? prev.specialties.filter((s) => s !== item)
          : [...prev.specialties, item],
      };
    });
  };

  const handleImageUpload = async (file: File) => {
    const form = new FormData();
    form.append("file", file);

    setUploading(true);

    try {
      const res = await fetch("https://api.sewsphere.co/api/v1/users/profile-picture", {
        method: "POST",
        body: form,
      });

      if (!res.ok) throw new Error("Upload failed");

      const data = await res.json();

      setFormData((prev) => ({
        ...prev,
        profileImageUrl: data.url,
      }));
    } catch (err) {
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async () => {
    try {
      const payload = {
        bio: formData.bio,
        experience: formData.experience,
        location: formData.location,
        specialties: formData.specialties,
        profileImage: formData.profileImageUrl,
      };

      const res = await fetch("https://api.sewsphere.co/api/v1/designers/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Submission failed");

      const data = await res.json();
      console.log("Success:", data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-[#F5EFE6] py-10 min-h-screen">
      <div className="max-w-3xl mx-auto p-6 rounded-lg bg-white shadow-lg">
        {/* Title */}
        <h2 className="text-2xl font-semibold">Tell Us About Yourself</h2>
        <p className="text-gray-500 mb-6">
          Let your client know about you and what you do.
        </p>

        {/* Profile Image */}
        <div className="mb-6">
          <p className="font-medium mb-2">Profile Picture</p>

          <div className="flex items-center gap-4">
            {/* Preview */}
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden relative">
              {formData.profileImage ? (
                <img
                  src={URL.createObjectURL(formData.profileImage)}
                  alt="preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <ImagePlus className="w-6 h-6 text-gray-400" />
              )}

              {/* Loading overlay */}
              {uploading && (
                <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
                  <Loader2 className="w-5 h-5 animate-spin text-[#C76B4A]" />
                </div>
              )}
            </div>

            {/* Upload */}
            <div>
              <input
                type="file"
                id="profile-upload"
                className="hidden"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;

                  // preview immediately
                  setFormData((prev) => ({
                    ...prev,
                    profileImage: file,
                  }));

                  handleImageUpload(file);
                }}
              />

              <label
                htmlFor="profile-upload"
                className="px-4 py-2 rounded-lg cursor-pointer bg-[#C76B4A] text-white hover:opacity-90"
              >
                Upload Image
              </label>

              <p className="text-xs text-gray-400 mt-1">JPG, PNG (Max 5MB)</p>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="mb-4">
          <label className="font-medium">
            Professional Bio <span className="text-red-500">*</span>
          </label>
          <textarea
            className="w-full border p-3 mt-2 rounded-lg"
            placeholder="Brief information about yourself"
            value={formData.bio}
            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
          />
        </div>

        {/* Experience */}
        <div className="mb-4">
          <label className="font-medium">
            Years of Experience <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full border p-3 mt-2 rounded-lg bg-white"
            value={formData.experience}
            onChange={(e) =>
              setFormData({ ...formData, experience: e.target.value })
            }
          >
            <option value="">Select your experience</option>
            {experienceOptions.map((exp) => (
              <option key={exp}>{exp}</option>
            ))}
          </select>
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="font-medium">
            Location <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full border p-3 mt-2 rounded-lg bg-white"
            value={formData.location}
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
          >
            <option value="">Select your location</option>
            {locationOptions.map((loc) => (
              <option key={loc}>{loc}</option>
            ))}
          </select>
        </div>

        {/* Specialties */}
        <div className="mb-6">
          <label className="font-medium">
            Specialties <span className="text-red-500">*</span>
          </label>

          <div className="flex flex-wrap gap-2 mt-3">
            {specialtiesList.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => toggleSpecialty(item)}
                className={`px-3 py-1 rounded-full border text-sm ${
                  formData.specialties.includes(item)
                    ? "bg-[#C76B4A] text-white"
                    : "bg-gray-100"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <p className="text-sm text-gray-500 mt-3">
            {formData.specialties.length}{" "}
            {formData.specialties.length === 1 ? "specialty" : "specialties"}{" "}
            selected
          </p>
        </div>

        {/* Continue */}
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            disabled={uploading}
            className="bg-[#C76B4A] text-white px-6 py-2 rounded-lg disabled:opacity-50"
          >
            {uploading ? "Loading..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { ImagePlus, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useOnboardingStore } from "../../store/onboardingStore";

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
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);

  const {
    photo,
    bio,
    experience,
    state,
    city,
    specialties,
    setPhoto,
    setBio,
    setExperience,
    setStateValue,
    setCity,
    setSpecialties,
  } = useOnboardingStore();

  const toggleSpecialty = (item: string) => {
    const exists = specialties.includes(item);

    if (exists) {
      setSpecialties(specialties.filter((s) => s !== item));
    } else {
      setSpecialties([...specialties, item]);
    }
  };

  const handleImageUpload = async (file: File) => {
    const token = localStorage.getItem("token");

    const form = new FormData();

    form.append("photo", file);

    setUploading(true);

    try {
      const res = await fetch(
        "https://api.sewsphere.co/api/v1/users/profile-picture",
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: form,
        },
      );

      const data = await res.json();

      console.log(data);

      if (!res.ok) {
        throw new Error(data.message || "Upload failed");
      }
    } catch (err) {
      console.error(err);
      setError("Image upload failed");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const payload = {
        bio,
        state,
        city,
        speciality: specialties,
      };

      const token = localStorage.getItem("token");

      const res = await fetch("https://api.sewsphere.co/api/v1/designers/", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      console.log("STATUS:", res.status);
      console.log("RESPONSE:", data);

      if (!res.ok) {
        setError(data.message || "Submission failed");
        return;
      }

      setSuccess(true);
    } catch (err) {
      console.error(err);
      setError("Failed to submit form");
    } finally {
      setLoading(false);
    }
    router.push("/designer/profile");
  };

  return (
    <div className="bg-[#F5EFE6] py-10 min-h-screen">
      <div className="max-w-3xl mx-auto p-6 rounded-lg bg-white shadow-lg">
        {/* Success Message */}
        {success && (
          <div className="mb-4 p-3 rounded-lg bg-green-100 text-green-700 text-sm">
            ✅ Your details have been saved successfully!
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 rounded-lg bg-red-100 text-red-700 text-sm">
            {error}
          </div>
        )}

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
              {photo ? (
                <img
                  src={photo}
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

                  const imageUrl = URL.createObjectURL(file);
                  setPhoto(imageUrl);

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
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>

        {/* Experience */}
        <div className="mb-4">
          <label className="font-medium">
            Years of Experience <span className="text-red-500">*</span>
          </label>

          <select
            className="w-full border p-3 mt-2 rounded-lg bg-white"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          >
            <option value="">Select your experience</option>

            {experienceOptions.map((exp) => (
              <option key={exp}>{exp}</option>
            ))}
          </select>
        </div>

        {/* State */}
        <div className="mb-4">
          <label className="font-medium">
            State <span className="text-red-500">*</span>
          </label>

          <select
            className="w-full border p-3 mt-2 rounded-lg bg-white"
            value={state}
            onChange={(e) => setStateValue(e.target.value)}
          >
            <option value="">Select your state</option>

            {locationOptions.map((loc) => (
              <option key={loc}>{loc}</option>
            ))}
          </select>
        </div>

        {/* City */}
        <div className="mb-4">
          <label className="font-medium">
            City <span className="text-red-500">*</span>
          </label>

          <input
            className="w-full border p-3 mt-2 rounded-lg"
            placeholder="Enter your city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
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
                  specialties.includes(item)
                    ? "bg-[#C76B4A] text-white"
                    : "bg-gray-100"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <p className="text-sm text-gray-500 mt-3">
            {specialties.length}{" "}
            {specialties.length === 1 ? "specialty" : "specialties"} selected
          </p>
        </div>

        {/* Submit */}
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            disabled={uploading || loading}
            className="bg-[#C76B4A] text-white px-6 py-2 rounded-lg disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
}

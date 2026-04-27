"use client";

import { useState } from "react";
import { ImagePlus } from "lucide-react";

type FormData = {
  bio: string;
  experience: string;
  location: string;
  specialties: string[];

  portfolio: {
    image: File | null;
    description: string;
  }[];

  services: {
    name: string;
    description: string;
    priceRange: string;
    deliveryTime: string;
  }[];
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

export default function OnboardingPage() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState<FormData>({
    bio: "",
    experience: "",
    location: "",
    specialties: [],

    portfolio: [
      { image: null, description: "" },
      { image: null, description: "" },
    ],

    services: [
      {
        name: "",
        description: "",
        priceRange: "",
        deliveryTime: "",
      },
    ],
  });

  const progress = (step / 4) * 100;

  const next = () => setStep((prev) => Math.min(prev + 1, 4));
  const back = () => setStep((prev) => Math.max(prev - 1, 1));

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

  const handleSubmit = async () => {
    const payload = {
      ...formData,
      portfolio: formData.portfolio.map((p) => ({
        description: p.description,
      })),
    };

    try {
      const res = await fetch("/api/onboarding", {
        method: "POST",
        body: JSON.stringify(payload),
      });

      console.log(await res.json());
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Progress */}

      <div className="mb-8">
        <div className="flex items-center justify-between text-sm mb-2">
          <p className="text-gray-600">Step {step} of 4</p>
          <p className="text-[#C76B4A] font-medium">{progress}% Complete</p>
        </div>

        <div className="flex gap-2">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex-1 h-2 bg-gray-200 rounded-full">
              <div
                className={`h-2 rounded-full transition-all ${
                  step >= s ? "bg-[#C76B4A]" : ""
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* STEP 1 */}
      {step === 1 && (
        <div>
          <h2 className="text-2xl font-semibold">Tell Us About Yourself</h2>
          <p>Let your client know about you and what you do</p>

          <div className="mt-4">
            <h3 className="text-xl font-bold">
              Professional Bio <span className="text-red-500 font-bold">*</span>
            </h3>
            <textarea
              placeholder="Brief information about yourself"
              className="w-full border p-3 mt-4 rounded"
              value={formData.bio}
              onChange={(e) =>
                setFormData({ ...formData, bio: e.target.value })
              }
            />
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-bold">
              Years of Experience{" "}
              <span className="text-red-500 font-bold">*</span>
            </h3>
            <input
              placeholder="Years of experience"
              className="w-full border p-3 mt-4 rounded"
              value={formData.experience}
              onChange={(e) =>
                setFormData({ ...formData, experience: e.target.value })
              }
            />
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-bold">
              Location <span className="text-red-500 font-bold">*</span>
            </h3>
            <input
              placeholder="Location"
              className="w-full border p-3 mt-4 rounded"
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
            />
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-bold">
              Professional Bio <span className="text-red-500 font-bold">*</span>
            </h3>
            {/* Specialties */}
            <div className="mt-4 flex flex-wrap gap-2">
              {specialtiesList.map((item) => (
                <button
                  key={item}
                  onClick={() => toggleSpecialty(item)}
                  className={`px-3 py-1 rounded-full border ${
                    formData.specialties.includes(item)
                      ? "bg-[#C76B4A] text-white"
                      : "bg-gray-100"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div>
          <h2 className="text-2xl font-semibold">Showcase Your Work</h2>
          <p className="text-gray-500 mb-6">
            Let your client know about what you do.
          </p>

          {formData.portfolio.map((item, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-6 mb-6 items-start"
            >
              {/* Upload Card */}
              <div className="border rounded-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-[#C76B4A] transition">
                <input
                  type="file"
                  className="hidden"
                  id={`file-${index}`}
                  onChange={(e) => {
                    const file = e.target.files?.[0] || null;
                    const updated = [...formData.portfolio];
                    updated[index].image = file;
                    setFormData({ ...formData, portfolio: updated });
                  }}
                />

                <label htmlFor={`file-${index}`} className="cursor-pointer fllex flex-col items-center">
                  <ImagePlus className="w-10 h-10 mb-2 text-gray-400" />{" "}
                  <p className="font-medium">Upload Image</p>
                  <p className="text-xs text-gray-400 mt-1">
                    JPG, PNG (Max 5MB)
                  </p>
                </label>
              </div>

              {/* Description */}
              <div>
                <textarea
                  placeholder="Brief information about yourself"
                  className="w-full border p-3 rounded h-[120px]"
                  maxLength={200}
                  value={item.description}
                  onChange={(e) => {
                    const updated = [...formData.portfolio];
                    updated[index].description = e.target.value;
                    setFormData({ ...formData, portfolio: updated });
                  }}
                />
                <p className="text-xs text-gray-400 mt-1 text-right">
                  {item.description.length}/200
                </p>
              </div>
            </div>
          ))}

          {/* Add another */}
          <button
            onClick={() =>
              setFormData({
                ...formData,
                portfolio: [
                  ...formData.portfolio,
                  { image: null, description: "" },
                ],
              })
            }
            className="w-full border rounded-lg py-3 text-sm hover:bg-gray-50"
          >
            + Add another portfolio
          </button>

          {/* Pro Tips */}
          <div className="mt-6 border border-[#C76B4A] bg-orange-50 rounded-lg p-4">
            <p className="font-semibold text-[#C76B4A] mb-2">💡 Pro Tips</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Use high-quality, well-lit photos</li>
              <li>• Show variety in your work</li>
              <li>• Include close-up details of craftsmanship</li>
              <li>• Minimum 3 images recommended</li>
            </ul>
          </div>
        </div>
      )}
      {/* STEP 3 */}
      {step === 3 && (
        <div>
          <h2 className="text-2xl font-semibold">Define Your Work</h2>
          <p className="text-gray-500 mb-6">
            Set clear expectations for your clients
          </p>

          {formData.services.map((service, index) => (
            <div key={index} className="mb-6 space-y-4">
              {/* Service Name */}
              <div>
                <label className="font-medium">
                  Service Name <span className="text-red-500">*</span>
                </label>
                <input
                  placeholder="E.g. Corporate Dress"
                  className="w-full border p-3 mt-2 rounded-lg"
                  value={service.name}
                  onChange={(e) => {
                    const updated = [...formData.services];
                    updated[index].name = e.target.value;
                    setFormData({ ...formData, services: updated });
                  }}
                />
              </div>

              {/* Description */}
              <div>
                <label className="font-medium text-gray-600">
                  Description (optional)
                </label>
                <textarea
                  placeholder="Brief about what's included"
                  className="w-full border p-3 mt-2 rounded-lg h-[100px]"
                  value={service.description}
                  onChange={(e) => {
                    const updated = [...formData.services];
                    updated[index].description = e.target.value;
                    setFormData({ ...formData, services: updated });
                  }}
                />
              </div>

              {/* Price + Delivery */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="font-medium text-gray-600">
                    Price Range
                  </label>
                  <select
                    className="w-full border p-3 mt-2 rounded-lg bg-white"
                    value={service.priceRange}
                    onChange={(e) => {
                      const updated = [...formData.services];
                      updated[index].priceRange = e.target.value;
                      setFormData({ ...formData, services: updated });
                    }}
                  >
                    <option value="">Select price range</option>
                    <option>₦5,000 - ₦20,000</option>
                    <option>₦20,000 - ₦50,000</option>
                    <option>₦50,000 - ₦100,000</option>
                    <option>₦100,000+</option>
                  </select>
                </div>

                <div>
                  <label className="font-medium text-gray-600">
                    Delivery Time
                  </label>
                  <select
                    className="w-full border p-3 mt-2 rounded-lg bg-white"
                    value={service.deliveryTime}
                    onChange={(e) => {
                      const updated = [...formData.services];
                      updated[index].deliveryTime = e.target.value;
                      setFormData({ ...formData, services: updated });
                    }}
                  >
                    <option value="">Select delivery time</option>
                    <option>1 - 3 days</option>
                    <option>3 - 7 days</option>
                    <option>1 - 2 weeks</option>
                    <option>2+ weeks</option>
                  </select>
                </div>
              </div>
            </div>
          ))}

          {/* Add another service */}
          <button
            onClick={() =>
              setFormData({
                ...formData,
                services: [
                  ...formData.services,
                  {
                    name: "",
                    description: "",
                    priceRange: "",
                    deliveryTime: "",
                  },
                ],
              })
            }
            className="w-full border rounded-lg py-3 text-sm hover:bg-gray-50"
          >
            + Add another services
          </button>
        </div>
      )}

      {/* STEP 4 */}
      {step === 4 && (
        <div>
          <h2 className="text-xl font-semibold">Review & Submit</h2>
          <pre className="bg-gray-100 p-4 mt-4 rounded text-sm">
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between mt-6">
        <button onClick={back} className="border px-4 py-2 rounded">
          Back
        </button>

        {step < 4 ? (
          <button
            onClick={next}
            className="bg-[#C76B4A] text-white px-4 py-2 rounded"
          >
            Continue
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}

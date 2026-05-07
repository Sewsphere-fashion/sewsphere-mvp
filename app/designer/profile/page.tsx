"use client";

import Link from "next/link";
import {
  ArrowLeft,
  BadgeCheck,
  MapPin,
  Star,
  Heart,
} from "lucide-react";

import { useOnboardingStore } from "../../store/onboardingStore";
import { useAuthStore } from "@/app/store/authStore";


export default function DesignerDetailsPage() {
  const {
    photo,
    bio,
    state,
    city,
    specialties,
    experience,
  } = useOnboardingStore();
  const { user } = useAuthStore();

  return (
    <div className="min-h-screen bg-[#f8f8f8] p-4 md:p-10">
      {/* Back */}
      <Link
        href="/designer"
        className="inline-flex items-center gap-2 text-sm text-gray-600 mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </Link>

      {/* Top Section */}
      <div className="bg-white rounded-2xl p-4 md:p-6 flex flex-col md:flex-row gap-6 shadow-sm">
        {/* Image */}
        <div className="relative w-full md:w-[380px] h-[260px] md:h-[300px] rounded-xl overflow-hidden">
          {photo ? (
            <img
              src={photo}
              alt="Designer"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
              No Image
            </div>
          )}

          <div className="absolute top-3 right-3 bg-white text-xs px-2 py-1 rounded-full flex items-center gap-1 shadow">
            <BadgeCheck className="w-3 h-3 text-green-600" />
            Verified
          </div>
        </div>

        {/* Info */}
        <div className="flex-1">
          <h1 className="text-xl md:text-2xl font-semibold">
           {user?.firstName} {user?.lastName}
          </h1>

          {/* Location */}
          <div className="flex items-center gap-3 text-sm text-gray-500 mt-1">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {city}, {state}
            </span>

            <span>• {experience}</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-amber-400 fill-amber-400"
                />
              ))}
            </div>

            <span className="text-sm text-gray-600">
              4.0 (44 reviews)
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-500 mt-3 leading-relaxed max-w-xl">
            {bio}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {specialties.map((specialty) => (
              <span
                key={specialty}
                className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-600"
              >
                {specialty}
              </span>
            ))}
          </div>

          {/* Price */}
          <div className="flex items-center justify-between mt-4 text-sm">
            <span className="text-gray-500">Price Range</span>

            <span className="font-medium">
              ₦50,000 - ₦300,000
            </span>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 mt-5">
            <button className="bg-[#c4684a] text-white px-5 py-2 rounded-lg text-sm">
              Message Designer
            </button>

            <button className="border border-[#c4684a] text-[#c4684a] px-5 py-2 rounded-lg text-sm">
              Request Custom Design
            </button>

            <button className="border rounded-lg p-2">
              <Heart className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
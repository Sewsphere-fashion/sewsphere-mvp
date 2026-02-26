"use client";

import { CheckCircle, Shield, Star, Zap } from "lucide-react";

const features = [
  {
    icon: CheckCircle,
    title: "Verified Designers",
    description: "All designers thoroughly vetted",
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "Protected transaction",
  },
  {
    icon: Star,
    title: "Quality Guaranteed",
    description: "Premium craftsmanship",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Quick and fast delivery",
  },
];

export default function TrustBadges() {
  return (
    <div className="w-full bg-[#fdf8f5] py-6 px-4">
      <div className="max-w-4xl mx-auto">
        {/* flex-col on mobile, flex-row on sm+ */}
        <div className="flex flex-col sm:flex-row gap-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex-1 flex justify-center">
                {/* Card */}
                <div className="flex flex-col items-center text-center bg-white rounded-2xl px-6 py-5 shadow-sm border border-gray-100 w-full h-full">
                  {/* Icon circle */}
                  <div className="w-11 h-11 rounded-full bg-[#C76B4A] flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </div>
                  <p className="text-sm font-semibold text-gray-800 leading-tight">
                    {feature.title}
                  </p>
                  <p className="text-xs text-gray-400 mt-1 leading-snug">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

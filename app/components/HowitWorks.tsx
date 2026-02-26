"use client";

import { Search, MessageCircle, Gift } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: Search,
    title: "Discover Your Designer",
    description:
      "Browse through our curated collection of verified fashion designers. Filter by speciality, location, price range, and style to find your perfect match.",
    bg: "bg-[#f0edf8]",
    iconColor: "text-[#7c5cbf]",
  },
  {
    id: 2,
    icon: MessageCircle,
    title: "Connect & Collaborate",
    description:
      "Share your vision, measurements, and preferences. Work directly with your designer to bring your dream outfit to life with personalized attention.",
    bg: "bg-[#fdf3e7]",
    iconColor: "text-[#e8923a]",
  },
  {
    id: 3,
    icon: Gift,
    title: "Receive & Celebrate",
    description:
      "Get your custom-made masterpiece delivered to your door. Enjoy secure payments, quality guarantees, and the confidence of wearing something uniquely yours.",
    bg: "bg-[#fde8e8]",
    iconColor: "text-[#e05a5a]",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-[#fafafa] py-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">

        {/* ── Left copy ── */}
        <div className="flex-shrink-0 lg:w-72 w-full">
          <h2 className="text-2xl font-extrabold text-gray-900 leading-snug mb-3 whitespace-nowrap">
            How SewSphere Works
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Your journey to custom fashion excellence begins here. Simple,
            transparent, and designed for your success.
          </p>
        </div>

        {/* ── Steps grid ── */}
        <div className="flex-1 w-full grid grid-cols-2 gap-4">
          {/* Card 1 — top left */}
          <StepCard step={steps[0]} />

          {/* Card 2 — top right */}
          <StepCard step={steps[1]} />

          {/* Card 3 — bottom, spans 2 cols */}
          <div className="col-span-2">
            <StepCard step={steps[2]} wide />
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({
  step,
  wide = false,
}: {
  step: (typeof steps)[0];
  wide?: boolean;
}) {
  const Icon = step.icon;
  return (
    <div
      className={`${step.bg} rounded-2xl p-5 flex gap-3 ${
        wide ? "flex-row items-start" : "flex-col"
      }`}
    >
      {/* Icon */}
      <div className="flex-shrink-0 mt-0.5">
        <Icon className={`w-5 h-5 ${step.iconColor}`} strokeWidth={1.8} />
      </div>

      <div className="flex flex-col gap-1.5">
        <h3 className="text-sm font-semibold text-gray-800">{step.title}</h3>
        <p className="text-xs text-gray-500 leading-relaxed">{step.description}</p>
      </div>
    </div>
  );
}
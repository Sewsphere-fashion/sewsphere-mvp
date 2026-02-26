"use client";

import { User, Scissors, ArrowRight } from "lucide-react";

const cards = [
  {
    id: 1,
    icon: User,
    iconBg: "bg-[#c4684a]",
    title: "I'm a Client",
    description: "Find your fashion designer and bring your fashion vision to life",
    cta: "Get Started",
    href: "#",
  },
  {
    id: 2,
    icon: Scissors,
    iconBg: "bg-[#2a7a6a]",
    title: "I'm a Designer",
    description: "Showcase your talent and connect with valuable clients",
    cta: "Join Now",
    href: "#",
  },
];

export default function StartJourney() {
  return (
    <section className="w-full bg-[#c4684a] py-16 px-6">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-10">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white leading-tight mb-2">
            Start Your Fashion Journey Today
          </h2>
          <p className="text-sm text-white/80">
            Join thousands of satisfied clients and talented designers on SewSphere
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="bg-white rounded-2xl px-8 py-8 flex flex-col items-center text-center gap-3 shadow-sm"
              >
                {/* Icon */}
                <div className={`w-11 h-11 rounded-xl ${card.iconBg} flex items-center justify-center`}>
                  <Icon className="w-5 h-5 text-white" strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-gray-900">{card.title}</h3>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed">{card.description}</p>

                {/* CTA */}
                <a
                  href={card.href}
                  className="flex items-center gap-1.5 text-sm font-semibold text-[#2a7a6a] hover:gap-2.5 transition-all duration-200 mt-1"
                >
                  {card.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
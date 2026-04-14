"use client";

import { MapPin, Star, BadgeCheck, ArrowRight } from "lucide-react";

interface Designer {
  id: number;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  tags: string[];
  image: string;
}

const designers: Designer[] = [
  {
    id: 1,
    name: "Gabriel Babatunde",
    location: "Lagos, Nigeria",
    rating: 4.5,
    reviews: 20,
    tags: ["Bridal", "Cooperate Wears", "Casuals", "BeSpoke"],
    image:
      "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=400&h=300&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Amina Olatunji",
    location: "Abuja, Nigeria",
    rating: 4.8,
    reviews: 15,
    tags: ["Evening Gowns", "Custom Designs", "Work Attire"],
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=300&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Chinonso Okeke",
    location: "Port Harcourt, Nigeria",
    rating: 4.7,
    reviews: 25,
    tags: ["Traditional Wear", "Wedding Attire", "Street Style"],
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=300&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Rose Okoro",
    location: "Lagos, Nigeria",
    rating: 4.5,
    reviews: 20,
    tags: ["Bridal", "Cooperate Wears", "Casuals", "BeSpoke"],
    image:
      "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=400&h=300&fit=crop&crop=face",
  },
  {
    id: 5,
    name: "Amina Yusuf",
    location: "Lagos, Nigeria",
    rating: 4.8,
    reviews: 15,
    tags: ["Sportswear", "Athletic Apparel", "Bespoke"],
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=300&fit=crop&crop=face",
  },
  {
    id: 6,
    name: "Jamal Khan",
    location: "Ibadan, Nigeria",
    rating: 4.2,
    reviews: 30,
    tags: ["Formal Wear", "Luxury Fashion", "Wedding Attire"],
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=300&fit=crop&crop=face",
  },
];

function DesignerCard({ designer }: { designer: Designer }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col">
      {/* Image */}
      <div className="relative">
        <img
          src={designer.image}
          alt={designer.name}
          className="w-full h-52 object-contain"
        />
        {/* Verified badge */}
        <div className="absolute bottom-2 right-2">
          <BadgeCheck className="w-6 h-6 text-[green] fill-white" />
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1 gap-2">
        {/* Name + rating */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-semibold text-gray-900 leading-tight">
            {designer.name}
          </h3>
          <div className="flex items-center gap-1 text-xs text-gray-500 whitespace-nowrap flex-shrink-0">
            <Star className="w-3.5 h-3.5 text-gray-900 fill-gray-900" />
            <span className="font-medium text-gray-700">{designer.rating}</span>
            <span>({designer.reviews})</span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1 text-xs text-gray-400">
          <MapPin className="w-3 h-3" />
          <span>{designer.location}</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mt-1">
          {designer.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] bg-gray-100 text-gray-500 rounded-full px-2 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <button className="mt-auto pt-3 w-full border border-[#c4684a] text-[#c4684a] text-xs font-medium rounded-lg py-2 hover:bg-[#c4684a] hover:text-white transition-colors duration-200">
          View Portfolio
        </button>
      </div>
    </div>
  );
}

export default function FeaturedDesigners() {
  return (
    <section className="w-full bg-[rgb(250,250,250)] rounded-2xl p-6 md:p-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-5 text-center md:text-left gap-2">
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Featured Designers
          </h2>
          <p className="text-xs text-gray-400 mt-0.5 pb-1">
            Discover professional and talented creators for your outfits
          </p>
        </div>
        <button className="flex items-center gap-1 text-sm text-[#c4684a] font-medium hover:underline whitespace-nowrap mt-2 md:mt-1">
          View all Designers <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Grid*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {designers.map((designer) => (
          <DesignerCard key={designer.id} designer={designer} />
        ))}
      </div>
    </section>
  );
}

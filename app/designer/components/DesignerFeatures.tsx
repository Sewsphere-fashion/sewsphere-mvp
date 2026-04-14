"use client";

import Link from "next/link";
import { MapPin, Star, BadgeCheck, ArrowRight } from "lucide-react";
import { designers, Designer } from "@/lib/designers";


function DesignerCard({ designer }: { designer: Designer }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col">
      
      {/* Image */}
      <div className="relative">
        <img
          src={designer.image}
          alt={designer.name}
          className="w-full h-48 object-contain object-center"
        />
        <div className="absolute bottom-2 right-2">
          <BadgeCheck className="w-6 h-6 text-[#1a9ed4] fill-white" />
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1 gap-2">
        
        {/* Name + rating */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-semibold text-gray-900 leading-tight">
            {designer.name}
          </h3>

          <div className="flex items-center gap-1 text-xs text-gray-500 whitespace-nowrap">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span className="font-medium text-gray-700">
              {designer.rating}
            </span>
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
        <Link href={`/designer/${designer.id}`} className="mt-auto pt-3">
          <button className="w-full border border-[#c4684a] text-[#c4684a] text-xs font-medium rounded-lg py-2 hover:bg-[#c4684a] hover:text-white transition-colors duration-200">
            View Portfolio
          </button>
        </Link>
      </div>
    </div>
  );
}

export default function DesignerFeatures() {
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

        <Link
          href="/designer"
          className="flex items-center gap-1 text-sm text-[#c4684a] font-medium hover:underline whitespace-nowrap"
        >
          View all Designers <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {designers.map((designer) => (
          <DesignerCard key={designer.id} designer={designer} />
        ))}
      </div>
    </section>
  );
}
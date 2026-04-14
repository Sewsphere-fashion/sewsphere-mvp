import Link from "next/link";
import { notFound } from "next/navigation";
import { getDesignerById } from "@/lib/designers";
import DesignerTabs from "../components/DesignerTabs";
import { MapPin, Star, ArrowLeft, BadgeCheck, Heart } from "lucide-react";

interface Props {
  params: Promise<{ id: string }>;
}
export default async function DesignerDetails({ params }: Props) {
  const { id } = await params;
  const designer = getDesignerById(Number(id));

  if (!designer) return notFound();

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
          <img
            src={designer.image}
            alt={designer.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 right-3 bg-white text-xs px-2 py-1 rounded-full flex items-center gap-1 shadow">
            <BadgeCheck className="w-3 h-3 text-green-600" />
            Verified
          </div>
        </div>

        {/* Info */}
        <div className="flex-1">
          <h1 className="text-xl md:text-2xl font-semibold">{designer.name}</h1>

          {/* Location */}
          <div className="flex items-center gap-3 text-sm text-gray-500 mt-1">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {designer.location}
            </span>
            <span>• Within 2 hours</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {designer.rating} ({designer.reviews} reviews)
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-500 mt-3 leading-relaxed max-w-xl">
            Award-winning fashion designer specializing in contemporary African wear with over 10 years of experience. Known for elegant bridal pieces and custom occasionwear.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {designer.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Price */}
          <div className="flex items-center justify-between mt-4 text-sm">
            <span className="text-gray-500">Price Range</span>
            <span className="font-medium">₦50,000 - ₦300,000</span>
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

      {/* Tabs */}
      <DesignerTabs designer={designer} />
      {/* <div className="mt-8 border-b text-sm flex gap-6">
        <button className="pb-2 border-b-2 border-transparent text-gray-500">Portfolio</button>
        <button className="pb-2 border-b-2 border-[#c4684a] text-[#c4684a]">Ready-Made (1)</button>
        <button className="pb-2 border-b-2 border-transparent text-gray-500">Reviews ({designer.reviews})</button>
      </div> */}

      {/* Ready Made Section */}
      {/* <div className="mt-6">
        <h3 className="text-sm font-medium mb-3">Ready-Made</h3>
        <div className="w-[260px] bg-white rounded-xl overflow-hidden shadow-sm">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1593032465171-8f7d1b2f2c16?w=500"
              className="w-full h-40 object-cover"
            />
            <span className="absolute top-2 right-2 bg-white text-xs px-2 py-1 rounded-full shadow">
              ₦15K
            </span>
          </div>
        </div>
      </div> */}
    </div>
  );
}
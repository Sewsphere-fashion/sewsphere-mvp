"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { Designer } from "@/lib/designers";

export default function DesignerTabs({ designer }: { designer: Designer }) {
  const [activeTab, setActiveTab] = useState("ready-made");

  const tabs = [
    { id: "portfolio", label: "Portfolio" },
    { id: "ready-made", label: `Ready-Made (${designer.readyMade.length})` },
    { id: "reviews", label: `Reviews (${designer.reviewsList.length})` },
  ];

  // Generate avatar color from name
  const avatarColors = [
    "bg-amber-100 text-amber-700",
    "bg-blue-100 text-blue-700",
    "bg-green-100 text-green-700",
    "bg-purple-100 text-purple-700",
    "bg-rose-100 text-rose-700",
  ];

  function getAvatarColor(name: string) {
    const index = name.charCodeAt(0) % avatarColors.length;
    return avatarColors[index];
  }

  function getInitials(name: string) {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2);
  }

  return (
    <div className="mt-8">
      {/* Tab Headers */}
      <div className="border-b text-sm flex gap-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-2 border-b-2 transition-colors duration-200 ${
              activeTab === tab.id
                ? "border-[#c4684a] text-[#c4684a]"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-6">

        {/* Portfolio */}
        {activeTab === "portfolio" && (
          <div className="py-12 text-center text-sm text-gray-400">
            No portfolio available yet.
          </div>
        )}

        {/* Ready-Made */}
        {activeTab === "ready-made" && (
          <div>
            {designer.readyMade.length === 0 ? (
              <div className="py-12 text-center text-sm text-gray-400">
                No ready-made items yet.
              </div>
            ) : (
              <div className="flex flex-wrap gap-4">
                {designer.readyMade.map((item) => (
                  <div
                    key={item.id}
                    className="w-[180px] bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="relative">
                      <img
                        src={item.image}
                        alt="Ready-made item"
                        className="w-full h-44 object-cover"
                      />
                      <span className="absolute top-2 right-2 bg-white text-xs font-medium px-2 py-1 rounded-full shadow">
                        {item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Reviews */}
        {activeTab === "reviews" && (
          <div>
            {designer.reviewsList.length === 0 ? (
              <div className="py-12 text-center text-sm text-gray-400">
                No reviews yet.
              </div>
            ) : (
              <div className="flex flex-col">
                <h3 className="text-sm font-semibold text-gray-800 mb-2">Review</h3>
                <div className="flex flex-col divide-y divide-gray-100">
                  {designer.reviewsList.map((review) => (
                    <div
                      key={review.id}
                      className="flex items-start justify-between py-4 gap-4"
                    >
                      {/* Left: Avatar + Info */}
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-8 h-8 rounded-full text-xs font-semibold flex items-center justify-center shrink-0 ${getAvatarColor(review.reviewer)}`}
                        >
                          {getInitials(review.reviewer)}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-800">
                            {review.reviewer}
                          </p>
                          <p className="text-xs text-gray-500 mt-0.5 max-w-sm leading-relaxed">
                            {review.comment}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            {review.date}
                          </p>
                        </div>
                      </div>

                      {/* Right: Stars */}
                      <div className="flex items-center gap-0.5 shrink-0 pt-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              i < review.rating
                                ? "text-amber-400 fill-amber-400"
                                : "text-gray-200 fill-gray-200"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
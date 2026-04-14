export interface ReadyMadeItem {
  id: number;
  image: string;
  price: string;
}

export interface Review {
  id: number;
  reviewer: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Designer {
  id: number;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  tags: string[];
  image: string;
  description: string;
  priceRange: string;
  readyMade: ReadyMadeItem[];
  reviewsList: Review[];
}

export const designers: Designer[] = [
  {
    id: 1,
    name: "Gabriel Babatunde",
    location: "Lagos, Nigeria",
    rating: 4.5,
    reviews: 20,
    tags: ["Bridal", "Corporate Wears", "Casuals", "Bespoke"],
    image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=400&h=300&fit=crop&crop=face",
    description: "Award-winning fashion designer specializing in contemporary African wear with over 10 years of experience. Known for elegant bridal pieces and custom occasionwear.",
    priceRange: "₦50,000 - ₦300,000",
    readyMade: [
      { id: 1, image: "https://images.unsplash.com/photo-1593032465171-8f7d1b2f2c16?w=500", price: "₦15K" },
      { id: 2, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500", price: "₦22K" },
    ],
    reviewsList: [
      { id: 1, reviewer: "Blessing O.", rating: 5, comment: "Absolutely stunning work! The attention to detail was impeccable. Will definitely order again.", date: "2 weeks ago" },
      { id: 2, reviewer: "Chidinma A.", rating: 5, comment: "Professional service from start to finish. My wedding dress was exactly what I envisioned.", date: "2 weeks ago" },
    ],
  },
  {
    id: 2,
    name: "Amina Olatunji",
    location: "Abuja, Nigeria",
    rating: 4.8,
    reviews: 15,
    tags: ["Evening Gowns", "Custom Designs", "Work Attire"],
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=300&fit=crop&crop=face",
    description: "Passionate about creating elegant evening wear and office-ready outfits that blend modern style with African heritage.",
    priceRange: "₦40,000 - ₦250,000",
    readyMade: [
      { id: 1, image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500", price: "₦18K" },
    ],
    reviewsList: [
      { id: 1, reviewer: "Fatima B.", rating: 5, comment: "Amina is incredibly talented. My gown was a showstopper!", date: "1 week ago" },
      { id: 2, reviewer: "Ngozi C.", rating: 5, comment: "Best designer in Abuja hands down. Very detail-oriented.", date: "3 weeks ago" },
      { id: 3, reviewer: "Halima D.", rating: 4, comment: "Loved the fabric choices and finishing.", date: "1 month ago" },
    ],
  },
  {
    id: 3,
    name: "Chinonso Okeke",
    location: "Port Harcourt, Nigeria",
    rating: 4.7,
    reviews: 25,
    tags: ["Traditional Wear", "Wedding Attire", "Street Style"],
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=300&fit=crop&crop=face",
    description: "Blending traditional Nigerian aesthetics with modern street style. Chinonso creates bold, statement pieces for weddings and everyday wear.",
    priceRange: "₦30,000 - ₦200,000",
    readyMade: [
      { id: 1, image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500", price: "₦12K" },
      { id: 2, image: "https://images.unsplash.com/photo-1475180098004-ca77a66827be?w=500", price: "₦17K" },
      { id: 3, image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500", price: "₦25K" },
    ],
    reviewsList: [
      { id: 1, reviewer: "Emeka N.", rating: 5, comment: "My agbada was the talk of the wedding!", date: "2 weeks ago" },
    ],
  },
  {
    id: 4,
    name: "Rose Okoro",
    location: "Lagos, Nigeria",
    rating: 4.5,
    reviews: 20,
    tags: ["Bridal", "Corporate Wears", "Casuals", "Bespoke"],
    image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=400&h=300&fit=crop&crop=face",
    description: "Rose brings a feminine touch to every piece, from flowy casuals to structured corporate wear. A favourite among Lagos professionals.",
    priceRange: "₦45,000 - ₦280,000",
    readyMade: [
      { id: 1, image: "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=500", price: "₦20K" },
    ],
    reviewsList: [
      { id: 1, reviewer: "Bola M.", rating: 4, comment: "Very clean stitching and great attention to detail.", date: "3 weeks ago" },
      { id: 2, reviewer: "Sade L.", rating: 5, comment: "Rose understood my vision perfectly. 10/10!", date: "1 month ago" },
    ],
  },
  {
    id: 5,
    name: "Amina Yusuf",
    location: "Lagos, Nigeria",
    rating: 4.8,
    reviews: 15,
    tags: ["Sportswear", "Athletic Apparel", "Bespoke"],
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=300&fit=crop&crop=face",
    description: "Nigeria's go-to designer for high-performance sportswear and athletic fashion. Combines function with bold, modern aesthetics.",
    priceRange: "₦25,000 - ₦150,000",
    readyMade: [],
    reviewsList: [
      { id: 1, reviewer: "Dayo F.", rating: 5, comment: "My gym sets are always getting compliments!", date: "1 week ago" },
      { id: 2, reviewer: "Tunde A.", rating: 5, comment: "Quality is unmatched for the price.", date: "2 weeks ago" },
    ],
  },
  {
    id: 6,
    name: "Jamal Khan",
    location: "Ibadan, Nigeria",
    rating: 4.2,
    reviews: 30,
    tags: ["Formal Wear", "Luxury Fashion", "Wedding Attire"],
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=300&fit=crop&crop=face",
    description: "Jamal crafts luxury formal wear with a global sensibility, bringing international fashion trends to Nigerian clientele.",
    priceRange: "₦80,000 - ₦500,000",
    readyMade: [
      { id: 1, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500", price: "₦35K" },
      { id: 2, image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500", price: "₦48K" },
    ],
    reviewsList: [
      { id: 1, reviewer: "Chidi P.", rating: 4, comment: "Excellent suit, fit like a glove.", date: "1 week ago" },
      { id: 2, reviewer: "Yemi R.", rating: 4, comment: "Pricey but worth every naira.", date: "3 weeks ago" },
      { id: 3, reviewer: "Ola S.", rating: 5, comment: "The most professional designer I have worked with.", date: "1 month ago" },
    ],
  },
];

export function getDesignerById(id: number): Designer | undefined {
  return designers.find((d) => d.id === id);
}
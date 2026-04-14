"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsAndConditionsPage() {
  const router = useRouter();

  return (
      <div className="min-h-screen bg-white px-6 py-10 md:px-20">
        <Navbar/>
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-sm border rounded-md px-3 py-2 hover:bg-gray-50 transition"
      >
        <ArrowLeft size={16} />
        Back
      </button>

      {/* Title */}
      <div className="mt-8">
        <h1 className="text-2xl font-semibold">Terms & Conditions</h1>
        <p className="text-sm text-gray-500 mt-1">
          Last updated: March 31, 2026
        </p>
      </div>

      {/* Intro */}
      <p className="mt-6 text-gray-700 leading-relaxed max-w-3xl">
        Welcome to SewSphere. By accessing or using our platform, you agree to
        be bound by these Terms and Conditions. Please read them carefully
        before using our services.
      </p>

      {/* Sections */}
      <div className="mt-10 space-y-10 max-w-4xl text-gray-800 leading-relaxed">
        <section>
          <h2 className="font-semibold">1. Acceptance of Terms</h2>
          <p className="mt-2">
            By creating an account, browsing, or making a purchase on SewSphere,
            you acknowledge that you have read, understood, and agree to these
            Terms and Conditions and our Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className="font-semibold">2. User Accounts</h2>
          <p className="mt-2">
            You are responsible for maintaining the confidentiality of your
            account and for all activities under your account. You must provide
            accurate information and update it as needed.
          </p>
        </section>

        <section>
          <h2 className="font-semibold">3. Platform Services</h2>
          <p className="mt-2">
            SewSphere connects clients with fashion designers for custom and
            ready-made fashion services. We act only as a facilitator and are
            not responsible for the final product delivery quality.
          </p>
        </section>

        <section>
          <h2 className="font-semibold">4. Orders and Payments</h2>
          <p className="mt-2">
            All orders are subject to designer acceptance. Payments are held
            securely until order completion. Pricing and timelines must be
            agreed before work begins.
          </p>
        </section>

        <section>
          <h2 className="font-semibold">5. Designer Responsibilities</h2>
          <p className="mt-2">
            Designers must provide accurate descriptions, communicate clearly,
            and deliver work that meets agreed specifications and timelines.
          </p>
        </section>

        <section>
          <h2 className="font-semibold">6. Client Responsibilities</h2>
          <p className="mt-2">
            Clients must provide clear measurements, respond promptly, and
            review orders within the agreed timeframe.
          </p>
        </section>

        <section>
          <h2 className="font-semibold">7. Prohibited Activities</h2>
          <p className="mt-2">
            Users must not engage in fraud, harassment, spam, or any illegal
            activities on the platform.
          </p>
        </section>

        <section>
          <h2 className="font-semibold">8. Intellectual Property</h2>
          <p className="mt-2">
            All platform content belongs to SewSphere or its respective owners
            and is protected by copyright laws.
          </p>
        </section>

        <section>
          <h2 className="font-semibold">9. Limitation of Liability</h2>
          <p className="mt-2">
            SewSphere is not liable for damages arising from use of the
            platform, including service interruptions or errors.
          </p>
        </section>

        <section>
          <h2 className="font-semibold">10. Dispute Resolution</h2>
          <p className="mt-2">
            Users agree to resolve disputes through our internal support system
            before escalating legally.
          </p>
        </section>

        <section>
          <h2 className="font-semibold">11. Termination</h2>
          <p className="mt-2">
            We reserve the right to suspend or terminate accounts violating
            these terms.
          </p>
        </section>
      </div>
      {/* <Footer/> */}
    </div>
  );
}
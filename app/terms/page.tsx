"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function TermsAndConditionsPage() {
  const router = useRouter();

  return (
    <div className="[&_h2]:text-xl font-space min-h-screen bg-white px-6 py-10 md:px-20">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-sm border rounded-md px-3 py-2 hover:bg-gray-50 transition"
      >
        <ArrowLeft size={16} />
        Back
      </button>

      {/* Header */}
      <div className="mt-8 max-w-4xl">
        <h1 className="text-2xl font-semibold">Terms & Conditions</h1>
        <p className="text-sm text-gray-500 mt-1">
          Last updated: March 31, 2026
        </p>

        <p className="mt-6 text-gray-700 leading-relaxed">
          Welcome to SewSphere. By accessing or using our platform, you agree to
          be bound by these Terms and Conditions. Please read them carefully
          before using our services. SewSphere connects fashion designers with
          clients across Nigeria and the diaspora, facilitating custom orders
          and ready-made purchases.
        </p>
      </div>

      {/* Content */}
      <div className="mt-10 space-y-10 max-w-4xl text-gray-800 leading-relaxed">
        {/* 1 */}
        <section>
          <h2 className="font-semibold">1. Acceptance of Terms</h2>
          <p className="mt-2">
            By creating an account, browsing, or making a purchase on SewSphere,
            you acknowledge that you have read, understood, and agree to be
            bound by these Terms and Conditions, along with our Privacy Policy.
          </p>
          <p className="mt-2">
            If you do not agree with any part of these terms, you must not use
            our platform. We reserve the right to update these terms at any
            time, and continued use of the platform constitutes acceptance of
            any modifications.
          </p>
        </section>

        {/* 2 */}
        <section>
          <h2 className="font-semibold">2. User Accounts</h2>

          <p className="mt-2 font-medium">Account Registration:</p>
          <p>
            To access certain features, you must register for an account. You
            agree to provide accurate, current, and complete information during
            registration and to update such information to keep it accurate.
          </p>

          <p className="mt-2 font-medium">Account Security:</p>
          <p>
            You are responsible for maintaining the confidentiality of your
            account credentials and for all activities that occur under your
            account. Notify us immediately of any unauthorized use of your
            account.
          </p>

          <p className="mt-2 font-medium">Designer Verification:</p>
          <p>
            Designers displaying a verified badge have completed our
            verification process. While we strive to ensure quality,
            verification does not guarantee the outcome of any transaction.
          </p>
        </section>

        {/* 3 */}
        <section>
          <h2 className="font-semibold">3. Platform Services</h2>
          <p className="mt-2">
            SewSphere provides a marketplace connecting fashion designers with
            clients. Our services include:
          </p>

          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Designer discovery and profile browsing</li>
            <li>Custom order requests and consultations</li>
            <li>Ready-made product purchases</li>
            <li>Secure payment processing through escrow</li>
            <li>Order tracking and messaging systems</li>
          </ul>

          <p className="mt-3">
            SewSphere acts as a facilitator and is not directly involved in the
            creation or delivery of fashion items. We are not responsible for
            the quality, accuracy, or legality of items listed by designers.
          </p>
        </section>

        {/* 4 */}
        <section>
          <h2 className="font-semibold">4. Orders and Payments</h2>

          <p className="mt-2 font-medium">Custom Orders:</p>
          <p>
            All custom orders are subject to designer acceptance. Pricing,
            timelines, and specifications must be agreed upon between you and
            the designer before work begins.
          </p>

          <p className="mt-2 font-medium">Escrow Payment:</p>
          <p>
            Payments are held in escrow until you confirm receipt and
            satisfaction with your order. This protects both clients and
            designers.
          </p>

          <p className="mt-2 font-medium">Pricing:</p>
          <p>
            All prices are listed in Nigerian Naira (₦) unless otherwise stated.
            Prices are subject to change, but confirmed orders will honor the
            agreed price.
          </p>

          <p className="mt-2 font-medium">Cancellations:</p>
          <p>
            Cancellation policies vary by designer. Review the designer’s
            cancellation policy before placing an order. Refunds are processed
            according to the designer’s policy and escrow terms.
          </p>
        </section>

        {/* 5 */}
        <section>
          <h2 className="font-semibold">5. Designer Responsibilities</h2>
          <p className="mt-2">Designers on SewSphere agree to:</p>

          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>
              Provide accurate descriptions and images of their products and
              services
            </li>
            <li>Honor agreed timelines and specifications for custom orders</li>
            <li>Communicate promptly and professionally with clients</li>
            <li>
              Deliver items that match the description and quality standards
              agreed upon
            </li>
            <li>Comply with all applicable laws and regulations</li>
          </ul>
        </section>

        {/* 6 */}
        <section>
          <h2 className="font-semibold">6. Client Responsibilities</h2>
          <p className="mt-2">As a client, you agree to:</p>

          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>
              Provide accurate measurements and specifications for custom orders
            </li>
            <li>Communicate clearly and respectfully with designers</li>
            <li>Respond to designer inquiries in a timely manner</li>
            <li>Confirm receipt of orders within the specified timeframe</li>
            <li>
              Report any issues or disputes within 7 days of receiving your
              order
            </li>
          </ul>
        </section>

        {/* 7 */}
        <section>
          <h2 className="font-semibold">7. Prohibited Activities</h2>
          <p className="mt-2">You may not use SewSphere to:</p>

          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Engage in fraudulent, deceptive, or illegal activities</li>
            <li>
              Circumvent payment systems or conduct transactions outside the
              platform
            </li>
            <li>Harass, threaten, or abuse other users</li>
            <li>Upload content that is infringing or unlawful</li>
            <li>Spam, phish, or distribute malware</li>
            <li>Violate intellectual property rights</li>
          </ul>

          <p className="mt-3">
            Violation of these prohibitions may result in account suspension or
            termination.
          </p>
        </section>

        {/* 8 */}
        <section>
          <h2 className="font-semibold">8. Intellectual Property</h2>
          <p className="mt-2">
            All content on SewSphere, including logos, text, graphics, and
            software, is the property of SewSphere or its licensors and is
            protected by copyright and trademark laws.
          </p>
          <p className="mt-2">
            Designer content, including product images and descriptions, remains
            the property of the respective designers. By listing on SewSphere,
            designers grant us a license to display and promote their content on
            the platform.
          </p>
        </section>

        {/* 9 */}
        <section>
          <h2 className="font-semibold">9. Limitation of Liability</h2>
          <p className="mt-2">
            SewSphere is provided “as is” without warranties of any kind. We do
            not guarantee that the platform will be error-free or uninterrupted.
            To the fullest extent permitted by law, we are not liable for:
          </p>

          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Quality, safety, or legality of items offered by designers</li>
            <li>The accuracy or reliability of designer information</li>
            <li>Disputes between clients and designers</li>
            <li>Indirect, incidental, or consequential damages</li>
          </ul>

          <p className="mt-3">
            Our total liability for any claim arising from your use of SewSphere
            shall not exceed the amount you paid to us in the six months
            preceding the claim.
          </p>
        </section>

        {/* 10 */}
        <section>
          <h2 className="font-semibold">10. Dispute Resolution</h2>
          <p className="mt-2">
            In the event of a dispute, we encourage users to first attempt to
            resolve issues directly through our messaging system. If a
            resolution cannot be reached, contact our support team for
            mediation.
          </p>
          <p className="mt-2">
            These terms are governed by the laws of the Federal Republic of
            Nigeria. Any disputes shall be resolved in the courts of Lagos,
            Nigeria.
          </p>
        </section>

        {/* 11 */}
        <section>
          <h2 className="font-semibold">11. Termination</h2>
          <p className="mt-2">
            We reserve the right to suspend or terminate your account at any
            time for violation of these terms or for any other reason at our
            sole discretion, with or without notice.
          </p>
          <p className="mt-2">
            You may terminate your account at any time by contacting our support
            team. Termination does not affect any outstanding orders or payment
            obligations.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="font-semibold">Questions About These Terms?</h2>
          <p className="mt-2">
            If you have any questions about these Terms and Conditions, please
            contact us at:
          </p>

          <p className="mt-2">Email: legal@sewsphere.com</p>
          <p>Phone: +234 (0) 800 SEWSPHERE</p>

          <button className="mt-6 w-full border rounded-md px-6 py-3 text-sm hover:bg-gray-50 transition">
            Privacy Policy
          </button>
        </section>
      </div>
    </div>
  );
}

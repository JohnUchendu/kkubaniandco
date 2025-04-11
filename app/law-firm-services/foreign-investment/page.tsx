import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Foreign investment law service | K.K. Ubani & Co. ",
  description:
    "Expert foreign investment legal services in Nigeria. Navigate regulations, mergers, acquisitions, and compliance with K.K. Ubani & Co.",
};

const ForeignInvestment = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl pt-20 font-bold text-gray-900">
          Foreign Investment Law
        </h1>
        <h2 className="text-xl font-semibold text-gray-700 mt-4">
          Legal Solutions for International Investors
        </h2>
        <p className="mt-2 text-gray-600">
          We assist foreign investors in navigating Nigerian business laws,
          ensuring seamless market entry, regulatory compliance, and risk
          mitigation.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          Why Foreign Investment Law Matters?
        </h2>
        <p className="mt-2 text-gray-600">
          International investments require a strong legal foundation to prevent
          regulatory issues and optimize business operations.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          Our Expertise
        </h2>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          <li>
            <strong>Market Entry Strategy</strong>
            Structuring investments for legal and tax efficiency.
          </li>
          <li>
            <strong>Regulatory Compliance </strong>
            Navigating foreign direct investment laws.
          </li>
          <li>
            <strong>Joint Ventures & Mergers</strong>
            Structuring profitable partnerships and acquisitions.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          Why Choose Us?
        </h2>
        <p className="mt-2 text-gray-600">
          Our legal team ensures secure investments and regulatory compliance,
          making Nigeria’s business environment accessible to global investors
        </p>
      </div>
    </>
  );
};

export default ForeignInvestment;

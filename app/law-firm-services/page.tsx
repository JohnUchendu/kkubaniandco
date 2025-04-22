import OurServices from '@/components/Services'
import Testimonials from '@/components/Testimonial'
import React from 'react'

import { Metadata } from 'next';


export const metadata: Metadata = {
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'en-GB': '/en-GB',
    },
  },
  // openGraph: {
  //   images: '/og-image.png',
  // },
  title: "Law Firm Services",
  description: "Number 1 law firm services with K.K. Ubani & Co.",
  generator: '',
  applicationName: 'K.K.Ubani&Co.',
  referrer: 'origin-when-cross-origin',
  keywords: ["K.K. Ubani & Co.", "Law firm services", "Corporate", "Commercial", "Energy and Natural Resources"],
  authors: [{ name: "John"}   ],
  creator: "John Uchendu",
  publisher: "John Uchendu",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const pages = () => {
  return (
    <div>
        <OurServices/>
        <Testimonials/>
    </div>
  )
}

export default pages
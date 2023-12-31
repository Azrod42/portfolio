import './globals.css'
import type { Metadata } from 'next'
import { Barlow } from 'next/font/google'
import Background from "@/app/(backgound)/background";
import React from "react";
import {Analytics} from "@vercel/analytics/react";
require('dotenv').config();
import Loading from "@/app/(button)/loading";

const font = Barlow({ subsets: ['latin'], weight: ['200', '300', '500', '700']})

export const metadata: Metadata = {
  title: 'tsorabel portfolio',
  description: 'Welcome to my portfolio',
}

export default function RootLayout({
  children,
}: {
    children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Analytics />
      <body className={font.className}><Background />
        {children}
      </body>
    </html>
  )
}

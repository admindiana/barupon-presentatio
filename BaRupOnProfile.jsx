
import { Globe, Mail, Phone } from "lucide-react";

export default function BaRupOnProfile() {
  return (
    <div className="grid gap-8 p-8">

      {/* Slide 1: Cover */}
      <div className="text-center bg-gradient-to-r from-blue-900 to-green-600 text-white rounded-2xl shadow p-10">
        <h1 className="text-4xl font-bold">BaRupOn LLC</h1>
        <p className="text-xl mt-2">Innovating Industries through Technology, Energy & Sustainable Solutions</p>
        <div className="mt-4 space-y-1">
          <p>Irvine, California</p>
          <p className="flex justify-center items-center gap-2"><Globe className="w-4 h-4" /> www.barupon.com</p>
          <p className="flex justify-center items-center gap-2"><Mail className="w-4 h-4" /> info@barupon.com</p>
        </div>
      </div>

      {/* Slide 2: About Us */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <p>Founded in 2014, BaRupOn LLC is a forward-thinking, multi-industry company integrating advanced technology and sustainable practices. We deliver solutions in:</p>
        <ul className="list-disc list-inside mt-4 space-y-1">
          <li>Healthcare & Medical Devices</li>
          <li>Renewable Energy & Hydrogen</li>
          <li>Modular Construction</li>
          <li>Pharmaceuticals & AI</li>
          <li>Venture Investment & Partnerships</li>
        </ul>
      </div>

      {/* Repeat this card-style for all remaining slides, changing only the content */}

    </div>
  );
}

import Link from "next/link";

export default function SitemapPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gypsum-50 py-20 px-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-10">
        <h1 className="text-4xl font-bold font-outfit mb-8 text-center bg-gradient-to-r from-admiral-900 to-rhodamine-700 bg-clip-text text-transparent">
          Sitemap
        </h1>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-admiral-900 font-outfit">About</h2>
            <ul className="space-y-1 pl-4 list-disc text-admiral-700">
              <li><Link href="/about" className="hover:underline">About Us</Link></li>
              <li><Link href="/case-studies" className="hover:underline">Case Studies</Link></li>
              <li><Link href="/newsletter" className="hover:underline">Newsletter</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-admiral-900 font-outfit">Services & Solutions</h2>
            <ul className="space-y-1 pl-4 list-disc text-admiral-700">
              <li><Link href="/services" className="hover:underline">Services</Link></li>
              <li><Link href="/technology" className="hover:underline">Technology</Link></li>

            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-admiral-900 font-outfit">Careers</h2>
            <ul className="space-y-1 pl-4 list-disc text-admiral-700">
              <li><Link href="/careers" className="hover:underline">Careers</Link></li>

            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-admiral-900 font-outfit">Contact</h2>
            <ul className="space-y-1 pl-4 list-disc text-admiral-700">
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              <li><Link href="/newsletter" className="hover:underline">Newsletter</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-admiral-900 font-outfit">Legal & Info</h2>
            <ul className="space-y-1 pl-4 list-disc text-admiral-700">
              <li><Link href="/sitemap" className="hover:underline font-bold">Sitemap</Link></li>
              <li><Link href="/not-found" className="hover:underline">404 Page</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 
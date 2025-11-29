import Link from 'next/link';
import { sections } from '@/data/news';

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold">
                <span className="text-red-500">हिंदुस्तान</span>
                <span className="text-white">लाइव</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              देश की विश्वसनीय हिंदी समाचार सेवा। तेज, सटीक और निष्पक्ष खबरें।
            </p>
          </div>

          {/* Sections */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">समाचार वर्ग</h3>
            <ul className="space-y-2">
              {sections.slice(0, 4).map((section) => (
                <li key={section.id}>
                  <Link 
                    href={`/section/${section.slug}`}
                    className="text-gray-400 hover:text-red-400 transition-colors text-sm"
                  >
                    {section.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Sections */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">अन्य</h3>
            <ul className="space-y-2">
              {sections.slice(4).map((section) => (
                <li key={section.id}>
                  <Link 
                    href={`/section/${section.slug}`}
                    className="text-gray-400 hover:text-red-400 transition-colors text-sm"
                  >
                    {section.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">जुड़ें</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-400 transition-colors" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.44,4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96,1.32-2.02-.88.52-1.86.9-2.9,1.1-.82-.88-2-1.43-3.3-1.43-2.5,0-4.55,2.04-4.55,4.54,0,.36.03.7.1,1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6,1.45-.6,2.3,0,1.56.8,2.95,2,3.77-.74-.03-1.44-.23-2.05-.57v.06c0,2.2,1.56,4.03,3.64,4.44-.67.2-1.37.2-2.06.08.58,1.8,2.26,3.12,4.25,3.16C5.78,18.1,3.37,18.74,1,18.46c2,1.3,4.4,2.04,6.97,2.04,8.35,0,12.92-6.92,12.92-12.93,0-.2,0-.4-.02-.6.9-.63,1.96-1.22,2.56-2.14Z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors" aria-label="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.5,6.19a3.02,3.02,0,0,0-2.12-2.14C19.5,3.5,12,3.5,12,3.5s-7.5,0-9.38.55A3.02,3.02,0,0,0,.5,6.19,31.64,31.64,0,0,0,0,12a31.64,31.64,0,0,0,.5,5.81,3.02,3.02,0,0,0,2.12,2.14c1.88.55,9.38.55,9.38.55s7.5,0,9.38-.55a3.02,3.02,0,0,0,2.12-2.14A31.64,31.64,0,0,0,24,12,31.64,31.64,0,0,0,23.5,6.19ZM9.54,15.57V8.43L15.82,12Z"/></svg>
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              ताज़ा खबरों के लिए हमें फॉलो करें
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} हिंदुस्तान लाइव। सर्वाधिकार सुरक्षित।
            </p>
            <nav className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="#" className="text-gray-500 hover:text-gray-300 transition-colors">गोपनीयता नीति</Link>
              <Link href="#" className="text-gray-500 hover:text-gray-300 transition-colors">उपयोग की शर्तें</Link>
              <Link href="#" className="text-gray-500 hover:text-gray-300 transition-colors">विज्ञापन</Link>
              <Link href="#" className="text-gray-500 hover:text-gray-300 transition-colors">संपर्क</Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

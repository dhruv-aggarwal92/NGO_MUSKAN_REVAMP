import { Outlet, Link, useLocation } from "react-router";
import { Menu, X, MessageCircle, Instagram, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";
import logoImage from "../../../images/Muskan Logo 04 - Transparent BG.png";

export default function Root() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen bg-[#FDF8F3]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#FDF8F3]/92 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src={logoImage} alt="Muskan logo" className="h-14 w-auto object-contain" style={{ transform: 'scale(1.25)' }} />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                to="/"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
                className="text-[0.85rem] uppercase tracking-wider text-[#5A4A4A] hover:text-[#C45C78] transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
                className="text-[0.85rem] uppercase tracking-wider text-[#5A4A4A] hover:text-[#C45C78] transition-colors"
              >
                About
              </Link>
              <Link
                to="/periods"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
                className="text-[0.85rem] uppercase tracking-wider text-[#5A4A4A] hover:text-[#C45C78] transition-colors"
              >
                Periods
              </Link>
              <Link
                to="/gallery"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
                className="text-[0.85rem] uppercase tracking-wider text-[#5A4A4A] hover:text-[#C45C78] transition-colors"
              >
                Gallery
              </Link>
              <Link
                to="/volunteer"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
                className="text-[0.85rem] uppercase tracking-wider text-[#5A4A4A] hover:text-[#C45C78] transition-colors"
              >
                Volunteer
              </Link>
            </div>

            {/* Desktop Donate Button */}
            <Link
              to="/donate"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
              className="hidden md:block px-6 py-2.5 bg-[#C45C78] text-white rounded-full hover:bg-[#8B3A52] transition-colors"
            >
              Donate Now
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#2D1F1F]"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 transform transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden shadow-2xl`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-black/10">
            <img src={logoImage} alt="Muskan logo" className="h-14 w-auto object-contain" style={{ transform: 'scale(1.25)' }} />
            <button onClick={() => setMobileMenuOpen(false)} className="p-2">
              <X size={24} />
            </button>
          </div>
          <div className="flex-1 flex flex-col gap-2 p-6">
            <Link
              to="/"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
              className="text-xl uppercase tracking-wider text-[#2D1F1F] py-3"
            >
              Home
            </Link>
            <Link
              to="/about"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
              className="text-xl uppercase tracking-wider text-[#2D1F1F] py-3"
            >
              About
            </Link>
            <Link
              to="/periods"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
              className="text-xl uppercase tracking-wider text-[#2D1F1F] py-3"
            >
              Periods
            </Link>
            <Link
              to="/gallery"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
              className="text-xl uppercase tracking-wider text-[#2D1F1F] py-3"
            >
              Gallery
            </Link>
            <Link
              to="/volunteer"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
              className="text-xl uppercase tracking-wider text-[#2D1F1F] py-3"
            >
              Volunteer
            </Link>
          </div>
          <div className="p-6">
            <Link
              to="/donate"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
              className="block w-full text-center px-6 py-3.5 bg-[#C45C78] text-white rounded-full"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-16">
        <Outlet />
      </div>

      {/* Footer */}
      <footer className="bg-[#2D1F1F] text-white" style={{ borderRadius: '40px 40px 0 0', marginTop: '-40px', zIndex: 60 }}>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Col 1: Brand */}
            <div>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif' }} className="text-2xl font-semibold mb-3 text-[#F0C4CF]">
                Muskan
              </h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }} className="text-white/70 leading-relaxed">
                Empowering women through menstrual equity. Breaking stigma, building dignity.
              </p>
            </div>

            {/* Col 2: Navigate */}
            <div>
              <h4 style={{ fontFamily: 'DM Sans, sans-serif' }} className="text-sm uppercase tracking-wider mb-4 text-[#F0C4CF]">
                Navigate
              </h4>
              <div className="flex flex-col gap-2">
                <Link to="/" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }} className="text-white/70 hover:text-white transition-colors">
                  Home
                </Link>
                <Link to="/about" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }} className="text-white/70 hover:text-white transition-colors">
                  About
                </Link>
                <Link to="/periods" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }} className="text-white/70 hover:text-white transition-colors">
                  Periods
                </Link>
                <Link to="/gallery" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }} className="text-white/70 hover:text-white transition-colors">
                  Gallery
                </Link>
              </div>
            </div>

            {/* Col 3: Get Involved */}
            <div>
              <h4 style={{ fontFamily: 'DM Sans, sans-serif' }} className="text-sm uppercase tracking-wider mb-4 text-[#F0C4CF]">
                Get Involved
              </h4>
              <div className="flex flex-col gap-2">
                <Link to="/volunteer" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }} className="text-white/70 hover:text-white transition-colors">
                  Volunteer
                </Link>
                <Link to="/donate" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }} className="text-white/70 hover:text-white transition-colors">
                  Donate
                </Link>
              </div>
            </div>

            {/* Col 4: Contact & Socials */}
            <div>
              <h4 style={{ fontFamily: 'DM Sans, sans-serif' }} className="text-sm uppercase tracking-wider mb-4 text-[#F0C4CF]">
                Contact
              </h4>
              <div style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }} className="text-white/70 space-y-2">
                <p>New Delhi, India</p>
                <p>team@ngomuskan.com</p>
                <p>+91 987022 1738</p>
              </div>
              <div className="flex gap-4 mt-6">
                <a href="https://www.instagram.com/ngomuskan/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#C45C78] transition-colors" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="https://www.linkedin.com/company/ngomuskan/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#C45C78] transition-colors" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }} className="text-white/50 text-sm">
              © 2003 Muskan. All rights reserved.
            </p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }} className="text-white/50 text-sm">
              Made with love in New Delhi
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919870221738"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-[52px] h-[52px] bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-40"
        style={{ boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)' }}
      >
        <MessageCircle size={28} color="white" fill="white" />
      </a>
    </div>
  );
}

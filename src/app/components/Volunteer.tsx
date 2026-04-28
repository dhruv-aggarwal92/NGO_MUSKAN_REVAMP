import { Users, Share2, Heart, PenTool, MapPin, Clock } from "lucide-react";
import { useState } from "react";

import { DotGrid } from "./decorations/DotGrid";
import { Blob } from "./decorations/Blob";
import { BotanicalLeaf } from "./decorations/BotanicalLeaf";
import { BotanicalBranch } from "./decorations/BotanicalBranch";
import { Rosette } from "./decorations/Rosette";

export default function Volunteer() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    interests: [] as string[],
    availability: "",
  });

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your interest! We'll be in touch soon.");
  };

  return (
    <div className="bg-[#FDF8F3]">
      {/* Why Volunteer */}
      <section className="py-24 px-6 relative overflow-hidden">
        <DotGrid opacity={0.15} />
        <Blob size={260} color="#F0C4CF" opacity={0.5} top="10%" left="5%" delay={0} />
        <Blob size={200} color="#D4768F" opacity={0.45} bottom="15%" right="10%" delay={2} />
        <BotanicalBranch color="#B5C9B0" size={120} bottom="5%" left="5%" />
        <BotanicalLeaf color="#D4768F" size={50} rotation={25} top="20%" right="15%" delay={0} />
        <BotanicalLeaf color="#F0C4CF" size={65} rotation={-25} bottom="25%" left="20%" delay={1} />
        <Rosette size={350} color="#D4768F" opacity={0.05} top="-5%" right="-5%" duration={30} />

        <div className="max-w-7xl mx-auto relative z-10">
          <h1
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem' }}
            className="font-semibold text-center mb-16 text-[#2D1F1F]"
          >
            Join the Movement
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            {/* Left: Quote */}
            <div className="bg-white rounded-lg p-12 border-l-4 border-[#C45C78]">
              <div
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '5rem' }}
                className="text-[#F0C4CF] leading-none mb-4"
              >
                "
              </div>
              <p
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', lineHeight: 1.5 }}
                className="italic text-[#2D1F1F] mb-6"
              >
                Volunteering with Muskan isn't just about giving back—it's about being part of a generation that refuses to let girls be held back by their periods.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#F9E8EC] rounded-full flex items-center justify-center">
                  <span
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    className="text-[#C45C78] font-semibold text-lg"
                  >
                    T
                  </span>
                </div>
                <div>
                  <div style={{ fontFamily: 'DM Sans, sans-serif' }} className="font-medium text-[#2D1F1F]">
                    Tanvi Malhotra
                  </div>
                  <div style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }} className="text-sm text-[#5A4A4A]">
                    Lead Volunteer, Delhi
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#F9E8EC] rounded-lg p-6">
                <div
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem' }}
                  className="text-[#C45C78] mb-2"
                >
                  127
                </div>
                <div style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }} className="text-[#2D1F1F]">
                  Active Volunteers
                </div>
              </div>
              <div className="bg-[#B5C9B0]/30 rounded-lg p-6">
                <div
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem' }}
                  className="text-[#8B3A52] mb-2"
                >
                  9
                </div>
                <div style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }} className="text-[#2D1F1F]">
                  States Reached
                </div>
              </div>
              <div className="bg-[#F5EDE4] rounded-lg p-6">
                <div
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem' }}
                  className="text-[#C45C78] mb-2"
                >
                  52
                </div>
                <div style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }} className="text-[#2D1F1F]">
                  Field Drives
                </div>
              </div>
              <div className="bg-[#F0C4CF] rounded-lg p-6">
                <div
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem' }}
                  className="text-[#8B3A52] mb-2"
                >
                  2.1K
                </div>
                <div style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }} className="text-[#2D1F1F]">
                  Lives Touched
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Roles */}
      <section className="py-24 px-6 bg-white" style={{ borderRadius: '40px 40px 0 0', marginTop: '-40px', zIndex: 10 }} relative overflow-hidden>
        <DotGrid opacity={0.15} />
        <Blob size={240} color="#B5C9B0" opacity={0.5} top="15%" right="8%" delay={1} />
        <Blob size={180} color="#F0C4CF" opacity={0.45} bottom="10%" left="10%" delay={3} />
        <BotanicalBranch color="#D4768F" size={100} top="10%" right="5%" />
        <BotanicalLeaf color="#B5C9B0" size={55} rotation={45} bottom="20%" right="20%" delay={2} />

        <div className="max-w-7xl mx-auto relative z-10">
          <h2
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem' }}
            className="font-semibold text-center mb-16 text-[#2D1F1F]"
          >
            How You Can Help
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Role 1 */}
            <div className="border border-black/5 rounded-lg p-8 hover:border-[#C45C78] transition-colors">
              <div className="w-[52px] h-[52px] bg-[#F9E8EC] rounded-[14px] flex items-center justify-center mb-6">
                <Users size={28} className="text-[#C45C78]" />
              </div>
              <h3
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem' }}
                className="font-semibold mb-3 text-[#2D1F1F]"
              >
                On-Ground Volunteer
              </h3>
              <ul
                style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}
                className="text-[#5A4A4A] space-y-2 mb-6 text-sm"
              >
                <li>• Conduct field visits to schools and villages</li>
                <li>• Run menstrual health workshops</li>
                <li>• Distribute pads and hygiene kits</li>
              </ul>
              <div className="flex items-center gap-2 text-sm text-[#5A4A4A]">
                <Clock size={16} className="text-[#C45C78]" />
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>
                  4-6 hours/month
                </span>
              </div>
            </div>

            {/* Role 2 */}
            <div className="border border-black/5 rounded-lg p-8 hover:border-[#C45C78] transition-colors">
              <div className="w-[52px] h-[52px] bg-[#B5C9B0]/30 rounded-[14px] flex items-center justify-center mb-6">
                <Share2 size={28} className="text-[#8B3A52]" />
              </div>
              <h3
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem' }}
                className="font-semibold mb-3 text-[#2D1F1F]"
              >
                Social Media Volunteer
              </h3>
              <ul
                style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}
                className="text-[#5A4A4A] space-y-2 mb-6 text-sm"
              >
                <li>• Create awareness content</li>
                <li>• Share campaign updates</li>
                <li>• Engage with online communities</li>
              </ul>
              <div className="flex items-center gap-2 text-sm text-[#5A4A4A]">
                <Clock size={16} className="text-[#C45C78]" />
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>
                  2-3 hours/week
                </span>
              </div>
            </div>

            {/* Role 3 */}
            <div className="border border-black/5 rounded-lg p-8 hover:border-[#C45C78] transition-colors">
              <div className="w-[52px] h-[52px] bg-[#F5EDE4] rounded-[14px] flex items-center justify-center mb-6">
                <Heart size={28} className="text-[#C45C78]" />
              </div>
              <h3
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem' }}
                className="font-semibold mb-3 text-[#2D1F1F]"
              >
                Fundraising Volunteer
              </h3>
              <ul
                style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}
                className="text-[#5A4A4A] space-y-2 mb-6 text-sm"
              >
                <li>• Organize fundraising events</li>
                <li>• Build donor relationships</li>
                <li>• Support grant applications</li>
              </ul>
              <div className="flex items-center gap-2 text-sm text-[#5A4A4A]">
                <Clock size={16} className="text-[#C45C78]" />
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>
                  Flexible
                </span>
              </div>
            </div>

            {/* Role 4 */}
            <div className="border border-black/5 rounded-lg p-8 hover:border-[#C45C78] transition-colors">
              <div className="w-[52px] h-[52px] bg-[#F0C4CF]/50 rounded-[14px] flex items-center justify-center mb-6">
                <PenTool size={28} className="text-[#8B3A52]" />
              </div>
              <h3
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem' }}
                className="font-semibold mb-3 text-[#2D1F1F]"
              >
                Design & Content
              </h3>
              <ul
                style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}
                className="text-[#5A4A4A] space-y-2 mb-6 text-sm"
              >
                <li>• Design posters and resources</li>
                <li>• Write blog posts and stories</li>
                <li>• Create educational materials</li>
              </ul>
              <div className="flex items-center gap-2 text-sm text-[#5A4A4A]">
                <Clock size={16} className="text-[#C45C78]" />
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>
                  3-5 hours/week
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sign-Up Form */}
      <section className="py-24 px-6 bg-[#F9E8EC]" style={{ borderRadius: '40px 40px 0 0', marginTop: '-40px', zIndex: 20 }} relative overflow-hidden>
        <DotGrid opacity={0.12} />
        <Blob size={220} color="#F0C4CF" opacity={0.4} top="5%" left="8%" delay={0} />
        <Blob size={160} color="#D4768F" opacity={0.45} bottom="20%" right="5%" delay={2} />
        <BotanicalBranch color="#B5C9B0" size={110} bottom="10%" left="8%" />
        <BotanicalLeaf color="#D4768F" size={60} rotation={-30} top="25%" right="12%" delay={0} />
        <BotanicalLeaf color="#F0C4CF" size={45} rotation={50} bottom="25%" left="15%" delay={1} />
        <Rosette size={300} color="#D4768F" opacity={0.06} bottom="-10%" right="-5%" duration={25} />

        <div className="max-w-2xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2
              style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem' }}
              className="font-semibold mb-4 text-[#2D1F1F]"
            >
              Ready to Make a Difference?
            </h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }} className="text-[#5A4A4A]">
              Fill out the form below and we'll get in touch with you soon.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 shadow-sm">
            {/* Full Name */}
            <div className="mb-6">
              <label
                style={{ fontFamily: 'DM Sans, sans-serif' }}
                className="block text-[#2D1F1F] mb-2"
                htmlFor="fullName"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-4 py-3 bg-[#FDF8F3] border border-black/10 rounded-lg focus:outline-none focus:border-[#C45C78]"
                style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}
                required
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label
                style={{ fontFamily: 'DM Sans, sans-serif' }}
                className="block text-[#2D1F1F] mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-[#FDF8F3] border border-black/10 rounded-lg focus:outline-none focus:border-[#C45C78]"
                style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}
                required
              />
            </div>

            {/* Phone */}
            <div className="mb-6">
              <label
                style={{ fontFamily: 'DM Sans, sans-serif' }}
                className="block text-[#2D1F1F] mb-2"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 bg-[#FDF8F3] border border-black/10 rounded-lg focus:outline-none focus:border-[#C45C78]"
                style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}
                required
              />
            </div>

            {/* City */}
            <div className="mb-6">
              <label
                style={{ fontFamily: 'DM Sans, sans-serif' }}
                className="block text-[#2D1F1F] mb-2"
                htmlFor="city"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full px-4 py-3 bg-[#FDF8F3] border border-black/10 rounded-lg focus:outline-none focus:border-[#C45C78]"
                style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}
                required
              />
            </div>

            {/* Area of Interest */}
            <div className="mb-6">
              <label style={{ fontFamily: 'DM Sans, sans-serif' }} className="block text-[#2D1F1F] mb-3">
                Area of Interest
              </label>
              <div className="space-y-2">
                {["On-Ground", "Social Media", "Fundraising", "Design"].map((interest) => (
                  <label key={interest} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.interests.includes(interest)}
                      onChange={() => handleInterestToggle(interest)}
                      className="w-5 h-5 text-[#C45C78] border-black/20 rounded focus:ring-[#C45C78]"
                    />
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }} className="text-[#2D1F1F]">
                      {interest}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="mb-8">
              <label
                style={{ fontFamily: 'DM Sans, sans-serif' }}
                className="block text-[#2D1F1F] mb-2"
                htmlFor="availability"
              >
                Availability
              </label>
              <select
                id="availability"
                value={formData.availability}
                onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                className="w-full px-4 py-3 bg-[#FDF8F3] border border-black/10 rounded-lg focus:outline-none focus:border-[#C45C78]"
                style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}
                required
              >
                <option value="">Select your availability</option>
                <option value="Weekends">Weekends</option>
                <option value="Weekdays">Weekdays</option>
                <option value="Both">Both</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
              className="w-full px-8 py-4 bg-[#C45C78] text-white rounded-full hover:bg-[#8B3A52] transition-colors"
            >
              I'm In
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

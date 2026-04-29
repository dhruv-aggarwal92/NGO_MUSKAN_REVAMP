import { Download } from "lucide-react";

import { DotGrid } from "./decorations/DotGrid";
import { Blob } from "./decorations/Blob";
import { BotanicalLeaf } from "./decorations/BotanicalLeaf";
import { BotanicalBranch } from "./decorations/BotanicalBranch";
import { Rosette } from "./decorations/Rosette";
import p1 from "../../../images/MenstrualHealthWorkshops/16.JPG";

export default function Periods() {
  return (
    <div className="bg-[#FDF8F3]">
      {/* Why It Matters Hero */}
      <section className="py-24 px-6 bg-[#F9E8EC] relative overflow-hidden">
        <DotGrid opacity={0.12} />
        <Blob size={250} color="#F0C4CF" opacity={0.4} top="15%" left="8%" delay={0} />
        <Blob size={180} color="#D4768F" opacity={0.45} bottom="20%" right="5%" delay={2} />
        <BotanicalBranch color="#B5C9B0" size={120} bottom="10%" left="5%" />
        <BotanicalLeaf color="#D4768F" size={55} rotation={25} top="25%" right="10%" delay={1} />
        <BotanicalLeaf color="#F0C4CF" size={45} rotation={-30} bottom="25%" left="15%" delay={0} />
        <Rosette size={350} color="#D4768F" opacity={0.05} top="-5%" right="-5%" duration={30} />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3.5rem', lineHeight: 1.2 }}
            className="font-semibold italic mb-8 text-[#2D1F1F]"
          >
            Periods aren't shameful. Silence is.
          </h1>
          <div style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, lineHeight: 1.7 }} className="text-[#5A4A4A] space-y-4 mb-8">
            <p>
              In India, 71% of adolescent girls have no idea what menstruation is until they get their first period. Many are told it's "dirty," that they can't touch food, enter temples, or attend school during their cycle.
            </p>
            <p>
              This stigma doesn't just hurt feelings—it derails futures. Girls miss an average of 5 days of school every month. Over time, that adds up to nearly 2 months of lost education per year. Many drop out entirely.
            </p>
            <p>
              Menstrual equity is about dignity, health, and opportunity. It's about ensuring every girl knows her body is nothing to be ashamed of.
            </p>
          </div>

          <div className="border-2 border-[#C45C78] rounded-lg p-6 max-w-2xl mx-auto">
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem' }} className="italic text-[#2D1F1F]">
              "When we teach girls that periods are natural, we teach them they are worthy. That changes everything."
            </p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }} className="text-sm text-[#5A4A4A] mt-3">
              — Dr. Lakshmi Iyer, Reproductive Health Advocate
            </p>
          </div>
        </div>
      </section>

      {/* Myth vs Fact */}
      <section className="py-24 px-6 bg-white" style={{ borderRadius: '40px 40px 0 0', marginTop: '-40px', zIndex: 10 }} relative overflow-hidden>
        <DotGrid opacity={0.15} />
        <Blob size={220} color="#B5C9B0" opacity={0.5} top="10%" right="8%" delay={1} />
        <Blob size={160} color="#F0C4CF" opacity={0.45} bottom="15%" left="10%" delay={3} />
        <BotanicalBranch color="#D4768F" size={100} top="15%" right="5%" />
        <BotanicalLeaf color="#B5C9B0" size={50} rotation={40} bottom="20%" right="15%" delay={2} />

        <div className="max-w-6xl mx-auto relative z-10">
          <h2
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem' }}
            className="font-semibold text-center mb-16 text-[#2D1F1F]"
          >
            Myth vs Fact
          </h2>

          <div className="space-y-8">
            {/* Pair 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#C45C78]/10 border-2 border-[#C45C78]/30 rounded-lg p-8">
                <div
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                  className="text-[0.75rem] uppercase tracking-[0.12em] text-[#C45C78] mb-3"
                >
                  Myth
                </div>
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem' }} className="font-semibold text-[#2D1F1F]">
                  Periods are impure and dirty
                </p>
              </div>
              <div className="bg-[#B5C9B0]/20 border-2 border-[#B5C9B0] rounded-lg p-8">
                <div
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                  className="text-[0.75rem] uppercase tracking-[0.12em] text-[#8B3A52] mb-3"
                >
                  Fact
                </div>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, lineHeight: 1.7 }} className="text-[#2D1F1F]">
                  Menstruation is a natural biological process. Menstrual blood is not dirty—it's the body's way of shedding the uterine lining when pregnancy doesn't occur.
                </p>
              </div>
            </div>

            {/* Pair 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#C45C78]/10 border-2 border-[#C45C78]/30 rounded-lg p-8">
                <div
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                  className="text-[0.75rem] uppercase tracking-[0.12em] text-[#C45C78] mb-3"
                >
                  Myth
                </div>
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem' }} className="font-semibold text-[#2D1F1F]">
                  Girls should rest and avoid activity during periods
                </p>
              </div>
              <div className="bg-[#B5C9B0]/20 border-2 border-[#B5C9B0] rounded-lg p-8">
                <div
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                  className="text-[0.75rem] uppercase tracking-[0.12em] text-[#8B3A52] mb-3"
                >
                  Fact
                </div>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, lineHeight: 1.7 }} className="text-[#2D1F1F]">
                  Light exercise like walking, yoga, or stretching can actually help reduce cramps and improve mood. Staying active during your period is safe and often beneficial.
                </p>
              </div>
            </div>

            {/* Pair 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#C45C78]/10 border-2 border-[#C45C78]/30 rounded-lg p-8">
                <div
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                  className="text-[0.75rem] uppercase tracking-[0.12em] text-[#C45C78] mb-3"
                >
                  Myth
                </div>
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem' }} className="font-semibold text-[#2D1F1F]">
                  Pads are a luxury item
                </p>
              </div>
              <div className="bg-[#B5C9B0]/20 border-2 border-[#B5C9B0] rounded-lg p-8">
                <div
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                  className="text-[0.75rem] uppercase tracking-[0.12em] text-[#8B3A52] mb-3"
                >
                  Fact
                </div>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, lineHeight: 1.7 }} className="text-[#2D1F1F]">
                  Menstrual hygiene products are a basic health necessity, not a luxury. Access to safe, hygienic period products is a fundamental right that enables education and dignity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Storytelling Block */}
      <section className="py-24 px-6 bg-[#FDF8F3]" style={{ borderRadius: '40px 40px 0 0', marginTop: '-40px', zIndex: 20 }} relative overflow-hidden>
        <DotGrid opacity={0.15} />
        <Blob size={240} color="#F0C4CF" opacity={0.5} top="5%" left="5%" delay={0} />
        <Blob size={190} color="#D4768F" opacity={0.45} bottom="20%" right="10%" delay={2} />
        <BotanicalBranch color="#B5C9B0" size={110} bottom="15%" left="8%" />
        <BotanicalLeaf color="#D4768F" size={60} rotation={-25} top="20%" right="12%" delay={0} />
        <BotanicalLeaf color="#F0C4CF" size={45} rotation={50} bottom="25%" left="20%" delay={1} />
        <Rosette size={300} color="#D4768F" opacity={0.06} bottom="-10%" right="-5%" duration={25} />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="relative rounded-lg overflow-hidden mb-8">
            <img 
              src={p1} 
              alt="Story Photo" 
              className="w-full aspect-[16/9] object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          <div className="max-w-3xl mx-auto">
            <p
              style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', lineHeight: 1.6 }}
              className="italic text-[#C45C78] mb-6"
            >
              "I used to hide in the bathroom at school when I got my period. I thought something was wrong with me. Then Muskan came to our school and taught us the truth. Now I help teach other girls."
            </p>
            <div style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, lineHeight: 1.7 }} className="text-[#5A4A4A] space-y-4">
              <p>
                Pooja is 16 years old. She lives in a small village in Punjab where talking about periods is still taboo. When she got her first period at age 12, her grandmother told her she was now "impure" and couldn't cook or pray during her cycle.
              </p>
              <p>
                For years, Pooja missed school during her periods because she didn't have access to sanitary pads. She used old cloth scraps that caused infections. The shame and discomfort made her consider dropping out entirely.
              </p>
              <p>
                Everything changed when Muskan's team visited her school in 2024. They distributed free pads, ran health workshops, and spoke openly about menstruation. For the first time, Pooja learned that periods are normal and nothing to be ashamed of.
              </p>
              <p>
                Today, Pooja attends school every day. She's a peer educator, teaching younger girls in her village about menstrual health. Her dream is to become a doctor and continue this work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-24 px-6 bg-white" style={{ borderRadius: '40px 40px 0 0', marginTop: '-40px', zIndex: 30 }} relative overflow-hidden>
        <DotGrid opacity={0.15} />
        <Blob size={230} color="#B5C9B0" opacity={0.5} top="10%" left="8%" delay={1} />
        <Blob size={170} color="#F0C4CF" opacity={0.45} bottom="15%" right="5%" delay={3} />
        <BotanicalBranch color="#D4768F" size={105} top="20%" right="10%" />
        <BotanicalLeaf color="#B5C9B0" size={55} rotation={30} bottom="20%" left="15%" delay={2} />

        <div className="max-w-7xl mx-auto relative z-10">
          <h2
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem' }}
            className="font-semibold text-center mb-16 text-[#2D1F1F]"
          >
            Free Resources
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Resource 1 */}
            <div className="border border-black/10 rounded-lg p-8 hover:border-[#C45C78] transition-colors">
              <div className="w-14 h-14 bg-[#F9E8EC] rounded-lg flex items-center justify-center mb-6">
                <Download size={28} className="text-[#C45C78]" />
              </div>
              <h3
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem' }}
                className="font-semibold mb-3 text-[#2D1F1F]"
              >
                Menstrual Hygiene Guide
              </h3>
              <p
                style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}
                className="text-[#5A4A4A] mb-6"
              >
                A comprehensive guide for girls on managing periods safely and confidently. Available in Hindi and English.
              </p>
              <button
                style={{ fontFamily: 'DM Sans, sans-serif' }}
                className="px-6 py-2.5 border-2 border-[#C45C78] text-[#C45C78] rounded-full hover:bg-[#C45C78] hover:text-white transition-colors"
              >
                Download PDF
              </button>
            </div>

            {/* Resource 2 */}
            <div className="border border-black/10 rounded-lg p-8 hover:border-[#C45C78] transition-colors">
              <div className="w-14 h-14 bg-[#B5C9B0]/30 rounded-lg flex items-center justify-center mb-6">
                <Download size={28} className="text-[#8B3A52]" />
              </div>
              <h3
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem' }}
                className="font-semibold mb-3 text-[#2D1F1F]"
              >
                Myth-Busting School Poster
              </h3>
              <p
                style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}
                className="text-[#5A4A4A] mb-6"
              >
                A colorful poster debunking common period myths. Perfect for schools, anganwadis, and community centers.
              </p>
              <button
                style={{ fontFamily: 'DM Sans, sans-serif' }}
                className="px-6 py-2.5 border-2 border-[#C45C78] text-[#C45C78] rounded-full hover:bg-[#C45C78] hover:text-white transition-colors"
              >
                Download PNG
              </button>
            </div>

            {/* Resource 3 */}
            <div className="border border-black/10 rounded-lg p-8 hover:border-[#C45C78] transition-colors">
              <div className="w-14 h-14 bg-[#F5EDE4] rounded-lg flex items-center justify-center mb-6">
                <Download size={28} className="text-[#C45C78]" />
              </div>
              <h3
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem' }}
                className="font-semibold mb-3 text-[#2D1F1F]"
              >
                Volunteer Session Toolkit
              </h3>
              <p
                style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}
                className="text-[#5A4A4A] mb-6"
              >
                Step-by-step guide for conducting effective menstrual health workshops with scripts and activities.
              </p>
              <button
                style={{ fontFamily: 'DM Sans, sans-serif' }}
                className="px-6 py-2.5 border-2 border-[#C45C78] text-[#C45C78] rounded-full hover:bg-[#C45C78] hover:text-white transition-colors"
              >
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

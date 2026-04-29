import { Link } from "react-router";
import { Heart, BookOpen, Users, ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import assumption1 from "../../../images/Assumption1.jpeg";
import carpeDiem1 from "../../../images/CarpeDiem1.jpeg";
import marathiBasti1 from "../../../images/Marathibasti1.jpeg";
import smallGirl1 from "../../../images/Smallgirl1.jpeg";
import padsShowing1 from "../../../images/padsshowing1.jpeg";
import { Blob } from "./decorations/Blob";
import { DotGrid } from "./decorations/DotGrid";
import { BotanicalLeaf } from "./decorations/BotanicalLeaf";
import { BotanicalBranch } from "./decorations/BotanicalBranch";
import { Rosette } from "./decorations/Rosette";

function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (!isMobile) {
      const updateMousePosition = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };

      window.addEventListener('mousemove', updateMousePosition);

      return () => {
        window.removeEventListener('mousemove', updateMousePosition);
        window.removeEventListener('resize', checkMobile);
      };
    }

    return () => window.removeEventListener('resize', checkMobile);
  }, [isMobile]);

  return { mousePosition, isMobile };
}

function CursorGlow({ mousePosition, isMobile }: { mousePosition: { x: number; y: number }; isMobile: boolean }) {
  if (isMobile) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background: `radial-gradient(
          200px circle at ${mousePosition.x}px ${mousePosition.y}px,
          rgba(236,72,153,0.08),
          transparent 70%
        )`
      }}
    />
  );
}

function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

function Counter({ end, duration = 1.5 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

function FadeUpCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function InteractiveDroplet({
  index,
  mousePosition,
  isMobile
}: {
  index: number;
  mousePosition: { x: number; y: number };
  isMobile: boolean;
}) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const dropletRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMobile) return;

    const updateOffset = () => {
      if (!dropletRef.current) return;

      const rect = dropletRef.current.getBoundingClientRect();
      const dropletX = rect.left + rect.width / 2;
      const dropletY = rect.top + rect.height / 2;

      const dx = dropletX - mousePosition.x;
      const dy = dropletY - mousePosition.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 100) {
        const force = (100 - distance) / 100;
        const newOffsetX = (dx / distance) * force * 10;
        const newOffsetY = (dy / distance) * force * 10;
        setOffset({ x: newOffsetX, y: newOffsetY });
      } else {
        setOffset({ x: 0, y: 0 });
      }
    };

    updateOffset();
  }, [mousePosition, isMobile]);

  const randomDelay = Math.random() * 6;
  const randomDuration = 8 + Math.random() * 6;
  const randomDrift = (Math.random() - 0.5) * 20;
  const randomOpacity = 0.08 + Math.random() * 0.1;

  return (
    <motion.div
      ref={dropletRef}
      className="absolute w-2 h-4 rounded-[50%_50%_46%_46%]"
      style={{
        backgroundColor: `rgba(196, 92, 120, ${randomOpacity})`,
        left: `${10 + (index * 8) % 80}%`,
        transform: `translate(${offset.x}px, ${offset.y}px)`,
      }}
      initial={{
        y: '-10vh',
        x: 0,
        opacity: 0,
        scale: 0.9
      }}
      animate={{
        y: '110vh',
        x: randomDrift,
        opacity: [0, 1, 0.8, 0],
        scale: [0.9, 1, 0.95]
      }}
      transition={{
        duration: randomDuration,
        delay: randomDelay,
        repeat: Infinity,
        ease: 'ease-in-out',
        times: [0, 0.1, 0.8, 1]
      }}
    />
  );
}

function AnimatedHeadline() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '4.5rem', lineHeight: 1.2 }} className="font-semibold italic mb-6 max-w-4xl mx-auto">
        <span className="text-[#C45C78]">1 in 5 girls</span>
        <br />
        <span className="text-[#2D1F1F]">drops out of school because of her period.</span>
      </h1>
    </motion.div>
  );
}

function ImageCarousel() {
  const images = [
    assumption1,
    carpeDiem1,
    marathiBasti1,
    smallGirl1,
    padsShowing1,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden md:block w-[42%] h-[400px] relative rounded-2xl overflow-hidden shadow-xl">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt=""
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}

export default function Home() {
  const { mousePosition, isMobile } = useMousePosition();

  const heroVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="bg-[#FDF8F3]">
      {/* Cursor Glow */}
      <CursorGlow mousePosition={mousePosition} isMobile={isMobile} />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6 relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5DFE6] via-[#FDF8F3] to-[#F9E6ED]" />

        {/* Enhanced Dot Grid Texture */}
        <DotGrid opacity={0.3} />

        {/* Additional Background Depth */}
        <motion.div
          className="absolute top-16 right-20 w-48 h-48 rounded-full bg-[#F0C4CF]/8 blur-2xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-24 left-16 w-32 h-32 rounded-full bg-[#B5C9B0]/6 blur-xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />

        {/* Soft Arc Background */}
        <motion.svg
          className="absolute bottom-0 left-0 w-full h-32 opacity-10"
          viewBox="0 0 1200 200"
          animate={{ scaleX: [1, 1.02, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            d="M0 200 Q300 100, 600 150 Q900 100, 1200 200 L1200 200 L0 200"
            fill="#C45C78"
          />
        </motion.svg>

        {/* Interactive Blood Drops */}
        {Array.from({ length: 10 }, (_, i) => (
          <InteractiveDroplet
            key={i}
            index={i}
            mousePosition={mousePosition}
            isMobile={isMobile}
          />
        ))}

        {/* Uterus Watermark - Repositioned */}
        <div className="absolute bottom-16 right-16 z-0 opacity-15">
          <svg width="100" height="60" viewBox="0 0 120 80" fill="none">
            <path d="M60 10 Q50 5, 40 10 Q30 20, 30 30 Q30 40, 40 45 Q50 50, 60 45 Q70 50, 80 45 Q90 40, 90 30 Q90 20, 80 10 Q70 5, 60 10" stroke="#C45C78" strokeWidth="1.5" />
            <path d="M40 10 Q20 15, 10 25" stroke="#C45C78" strokeWidth="1.5" />
            <path d="M80 10 Q100 15, 110 25" stroke="#C45C78" strokeWidth="1.5" />
            <ellipse cx="15" cy="30" rx="6" ry="8" stroke="#C45C78" strokeWidth="1.5" />
            <ellipse cx="105" cy="30" rx="6" ry="8" stroke="#C45C78" strokeWidth="1.5" />
            <motion.circle cx="60" cy="30" r="2.5" fill="#C45C78" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 3, repeat: Infinity }} />
          </svg>
        </div>

        {/* Pulsing Concentric Rings - Repositioned */}
        <div className="absolute left-8 top-1/3 -translate-y-1/2 z-0">
          {[0, 1, 2].map((i) => (
            <motion.svg
              key={i}
              width="50"
              height="50"
              viewBox="0 0 60 60"
              className="absolute"
              animate={{ scale: [0.95, 1.05, 0.95] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: i * 2.5,
              }}
            >
              <circle
                cx="30"
                cy="30"
                r={25 - i * 8}
                fill="none"
                stroke="rgba(196, 92, 120, 0.12)"
                strokeWidth="1.2"
              />
            </motion.svg>
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="flex items-center justify-between gap-10">
            {/* Left Side: Text Content */}
            <div className="max-w-xl z-10">
              <motion.div
                custom={0}
                initial="hidden"
                animate="visible"
                variants={heroVariants}
              >
                <AnimatedHeadline />
              </motion.div>

              <motion.p
                custom={1}
                initial="hidden"
                animate="visible"
                variants={heroVariants}
                style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, lineHeight: 1.7 }}
                className="text-xl text-[#5A4A4A] max-w-lg mt-8"
              >
                Join us in breaking the silence, ending the stigma, and ensuring every girl has access to the dignity she deserves.
              </motion.p>

              <motion.div
                custom={2}
                initial="hidden"
                animate="visible"
                variants={heroVariants}
                className="flex flex-wrap gap-4 mt-8"
              >
                <Link
                  to="/volunteer"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                  className="px-8 py-3.5 bg-[#C45C78] text-white rounded-full hover:bg-[#8B3A52] hover:-translate-y-0.5 transition-all duration-200"
                >
                  Join the Movement
                </Link>
                <Link
                  to="/about"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                  className="px-8 py-3.5 border-2 border-[#C45C78] text-[#C45C78] rounded-full hover:bg-[#F9E8EC] hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
                >
                  Our Story <ArrowRight size={18} />
                </Link>
              </motion.div>

              {/* Brand Signature Line */}
              <motion.p
                custom={3}
                initial="hidden"
                animate="visible"
                variants={heroVariants}
                style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, letterSpacing: '0.08em', fontSize: '0.95rem' }}
                className="text-[#5A4A4A]/90 mt-6"
              >
                Started by students. Driven by purpose. Changing lives.
              </motion.p>
            </div>

            {/* Right Side: Image Carousel */}
            {/* Soft Glow Behind Image */}
            <motion.div
              className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[46%] h-[440px] rounded-2xl blur-3xl opacity-40 z-0"
              style={{
                background: 'radial-gradient(circle, rgba(236,72,153,0.15), transparent 70%)'
              }}
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.4, 0.3]
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "ease-in-out"
              }}
            />
            <ImageCarousel />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-10">
          <div className="w-[1px] h-12 bg-[#C45C78]/30" />
          <ChevronDown size={20} className="text-[#C45C78]" />
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 px-6 bg-white relative overflow-hidden" style={{ borderRadius: '40px 40px 0 0', marginTop: '-40px', zIndex: 10 }}>
        <DotGrid opacity={0.15} />
        <Blob size={200} color="#B5C9B0" opacity={0.5} bottom="5%" right="5%" delay={0} />
        <BotanicalBranch color="#B5C9B0" size={120} bottom="10%" left="5%" />

        <div className="max-w-7xl mx-auto relative z-10">
          <FadeUpCard>
            <h2
              style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem' }}
              className="font-semibold text-center mb-16 text-[#2D1F1F]"
            >
              What We Do
            </h2>
          </FadeUpCard>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                bg: '#F9E8EC',
                title: 'Pad Distribution',
                desc: 'Free sanitary pads distributed in villages, schools, and hostels to ensure no girl misses school during her period.',
              },
              {
                icon: BookOpen,
                bg: 'rgba(181, 201, 176, 0.3)',
                title: 'Health Education',
                desc: 'Interactive workshops on menstrual hygiene, body awareness, and reproductive health for girls and their communities.',
              },
              {
                icon: Users,
                bg: '#F5EDE4',
                title: 'Stigma Breaking',
                desc: 'Community conversations to normalize periods, challenge taboos, and build a culture of openness and support.',
              },
            ].map((item, i) => (
              <FadeUpCard key={i} delay={i * 0.1}>
                <div className="group bg-white border border-black/5 rounded-lg p-8 hover:-translate-y-1 hover:rotate-[0.5deg] transition-all duration-300 relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C45C78] to-[#D4768F] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                  <div
                    className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center mb-6"
                    style={{ backgroundColor: item.bg }}
                  >
                    <item.icon size={28} className="text-[#C45C78]" />
                  </div>
                  <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem' }} className="font-semibold mb-3 text-[#2D1F1F]">
                    {item.title}
                  </h3>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, lineHeight: 1.7 }} className="text-[#5A4A4A]">
                    {item.desc}
                  </p>
                </div>
              </FadeUpCard>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-24 px-6 bg-[#8B3A52] relative overflow-hidden" style={{ borderRadius: '40px 40px 0 0', marginTop: '-40px', zIndex: 20 }}>
        <DotGrid opacity={0.08} />
        <Blob size={180} color="#ffffff" opacity={0.15} top="10%" left="5%" delay={0} />
        <Blob size={220} color="#ffffff" opacity={0.2} bottom="10%" right="10%" delay={3} />
        <Rosette size={350} color="#ffffff" opacity={0.05} bottom="-20%" left="-10%" duration={30} />

        <div className="absolute top-12 right-12 text-[12rem] font-bold text-white/[0.04] select-none" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          मुस्कान
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { end: 5000, label: 'Girls Reached' },
              { end: 3000, label: 'Pads Distributed' },
              { end: 6, label: 'Villages Visited' },
              { end: 14, label: 'Schools Awared' },
              { end: 5, label: 'Years of Service' },
            ].map((stat, i) => (
              <FadeUpCard key={i} delay={i * 0.1}>
                <div className="border border-white/20 rounded-lg p-8 text-center">
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3.2rem' }} className="text-white mb-2">
                    <Counter end={stat.end} />+
                  </div>
                  <div style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }} className="text-white/80">
                    {stat.label}
                  </div>
                </div>
              </FadeUpCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-[#F5EDE4] relative overflow-hidden" style={{ borderRadius: '40px 40px 0 0', marginTop: '-40px', zIndex: 30 }}>
        <DotGrid opacity={0.15} />
        <Blob size={160} color="#F0C4CF" opacity={0.45} top="10%" right="5%" delay={1} />
        <BotanicalBranch color="#D4768F" size={100} top="15%" right="8%" />

        <div className="max-w-7xl mx-auto relative z-10">
          <FadeUpCard>
            <h2
              style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem' }}
              className="font-semibold text-center mb-16 text-[#2D1F1F]"
            >
              Voices of Change
            </h2>
          </FadeUpCard>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: 'अब मैं स्कूल से घर नहीं भागती। मुस्कान ने मुझे सिखाया कि पीरियड्स शर्म की बात नहीं है।',
                name: 'Priya',
                role: 'Grade 9 Student, Haryana',
                initial: 'P',
              },
              {
                quote: "Volunteering with Muskan showed me how small actions create massive change. I've found my purpose here.",
                name: 'Riya Sharma',
                role: 'College Volunteer, Delhi',
                initial: 'R',
              },
              {
                quote: 'Every rupee I donate goes directly to the girls who need it. Their transparency is unmatched.',
                name: 'Amit Patel',
                role: 'Monthly Donor',
                initial: 'A',
              },
            ].map((testimonial, i) => (
              <FadeUpCard key={i} delay={i * 0.1}>
                <div className="bg-white rounded-lg p-8 relative hover:-translate-y-1 hover:rotate-[0.5deg] transition-all duration-300">
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '5rem' }} className="text-[#F0C4CF] leading-none mb-4">
                    "
                  </div>
                  <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem' }} className="italic text-[#2D1F1F] mb-6">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#F9E8EC] rounded-full flex items-center justify-center">
                      <span style={{ fontFamily: 'Cormorant Garamond, serif' }} className="text-[#C45C78] font-semibold">
                        {testimonial.initial}
                      </span>
                    </div>
                    <div>
                      <div style={{ fontFamily: 'DM Sans, sans-serif' }} className="font-medium text-[#2D1F1F]">
                        {testimonial.name}
                      </div>
                      <div style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }} className="text-sm text-[#5A4A4A]">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUpCard>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Strip */}
      <section className="py-16 px-6 bg-white relative overflow-hidden" style={{ borderRadius: '40px 40px 0 0', marginTop: '-40px', zIndex: 40 }}>
        <DotGrid opacity={0.15} />
        <Blob size={150} color="#B5C9B0" opacity={0.5} top="20%" left="10%" delay={0} />
        <BotanicalBranch color="#D4768F" size={90} bottom="10%" right="5%" />
        <BotanicalLeaf color="#F0C4CF" size={45} rotation={-20} top="15%" right="15%" delay={1} />

        <div className="max-w-7xl mx-auto relative z-10">
          <p style={{ fontFamily: 'DM Sans, sans-serif' }} className="text-center text-[#5A4A4A] text-sm uppercase tracking-wider mb-6">
            Supported by
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Boostrapped'].map((partner) => (
              <span
                key={partner}
                style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}
                className="px-5 py-2 bg-[#F5EDE4] text-[#5A4A4A] rounded-full text-sm hover:-translate-y-0.5 hover:border-[#C45C78] border-2 border-transparent transition-all duration-200 cursor-pointer"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-24 px-6 bg-gradient-to-r from-[#F9E8EC] via-[#F0C4CF]/50 to-[#FDF8F3] relative overflow-hidden" style={{ borderRadius: '40px 40px 0 0', marginTop: '-40px', zIndex: 50 }}>
        <DotGrid opacity={0.12} />
        <Blob size={200} color="#D4768F" opacity={0.35} top="10%" left="10%" delay={0} />
        <Blob size={150} color="#B5C9B0" opacity={0.3} bottom="10%" right="10%" delay={2} />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeUpCard>
            <h2
              style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem' }}
              className="font-semibold mb-8 text-[#2D1F1F]"
            >
              Be the reason <span className="italic text-[#C45C78]">she stays in school</span>
            </h2>
          </FadeUpCard>
          <FadeUpCard delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/volunteer"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
                className="px-8 py-3.5 bg-[#C45C78] text-white rounded-full hover:bg-[#8B3A52] hover:-translate-y-0.5 transition-all duration-200"
              >
                Volunteer With Us
              </Link>
              <Link
                to="/donate"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
                className="px-8 py-3.5 border-2 border-[#C45C78] text-[#C45C78] rounded-full hover:bg-[#F9E8EC] hover:-translate-y-0.5 transition-all duration-200"
              >
                Donate Now
              </Link>
            </div>
          </FadeUpCard>
        </div>
      </section>
    </div>
  );
}



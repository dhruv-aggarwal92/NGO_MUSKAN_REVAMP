import { Shield, Eye, Award } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { DotGrid } from "./decorations/DotGrid";
import { Blob } from "./decorations/Blob";
import { BotanicalLeaf } from "./decorations/BotanicalLeaf";
import { FloatingPetals } from "./decorations/FloatingPetals";
import { BotanicalBranch } from "./decorations/BotanicalBranch";
import { Rosette } from "./decorations/Rosette";
import { GirlReceiving } from "./illustrations/GirlReceiving";
import qrCode from "../../../images/Donation QR.png";

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

function AnimatedBar({ width, delay = 0 }: { width: number; delay?: number }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref} className="h-3 bg-[#FDF8F3] rounded-full overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-1200 ease-out"
        style={{
          width: isVisible ? `${width}%` : '0%',
          transitionDelay: `${delay}ms`,
        }}
      />
    </div>
  );
}

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(500);
  const [customAmount, setCustomAmount] = useState("");
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  const presetAmounts = [
    { amount: 200, description: "Pads for 5 girls" },
    { amount: 500, description: "Pads for 15 girls" },
    { amount: 1000, description: "Funds one school session" },
    { amount: 2500, description: "Supports a village drive" },
  ];

  const handleAmountSelect = (amount: number, event: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedAmount(amount);
    setCustomAmount("");

    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const id = Date.now();

    setRipples((prev) => [...prev, { id, x, y }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 600);
  };

  const handleCustomAmount = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  return (
    <div className="bg-[#FDF8F3]">
      {/* Emotional Header */}
      <section className="py-24 px-6 bg-[#F9E8EC] relative overflow-hidden">
        <DotGrid opacity={0.12} />
        <Blob size={200} color="#F0C4CF" opacity={0.4} top="10%" left="5%" delay={0} />
        <BotanicalLeaf color="#D4768F" size={55} rotation={25} top="20%" right="10%" delay={1} />
        <BotanicalBranch color="#B5C9B0" size={120} bottom="10%" left="5%" />
        <Rosette size={400} color="#D4768F" opacity={0.05} top="-10%" right="-5%" duration={30} />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem', lineHeight: 1.3 }}
            className="font-semibold italic mb-6 text-[#2D1F1F]"
          >
            Your ₹200 puts 25 pads in a girl's hands.
          </h1>
          <p
            style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, lineHeight: 1.7 }}
            className="text-lg text-[#5A4A4A] max-w-2xl mx-auto"
          >
            Every donation is tracked, every rupee is accounted for, and every impact is real. Your contribution directly reaches the girls who need it most.
          </p>
        </div>
      </section>

      {/* Donation Widget */}
      <section className="py-24 px-6 relative overflow-hidden" style={{ borderRadius: '40px 40px 0 0', marginTop: '-40px', zIndex: 10 }}>
        <DotGrid opacity={0.15} />
        <FloatingPetals />
        <Blob size={180} color="#B5C9B0" opacity={0.45} bottom="20%" right="10%" delay={1} />
        <BotanicalBranch color="#D4768F" size={100} top="15%" right="5%" />
        <BotanicalLeaf color="#F0C4CF" size={50} rotation={-20} bottom="25%" left="15%" delay={0} />

        <div className="max-w-2xl mx-auto relative z-10">
          <div className="bg-white rounded-lg shadow-sm border-t-4 border-[#C45C78] p-8 relative">
            {/* Illustration */}
            {/* <div className="absolute -top-16 -right-8 w-32 h-32 opacity-60">
              <GirlReceiving />
            </div> */}

            <h2
              style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem' }}
              className="font-semibold mb-8 text-[#2D1F1F] text-center"
            >
              Make Your Donation
            </h2>

            {/* Preset Amounts */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {presetAmounts.map(({ amount, description }) => (
                <button
                  key={amount}
                  onClick={(e) => handleAmountSelect(amount, e)}
                  className={`relative p-4 rounded-lg border-2 transition-all duration-200 hover:-translate-y-0.5 overflow-hidden ${selectedAmount === amount
                    ? 'border-[#C45C78] bg-[#C45C78] text-white'
                    : 'border-[#F9E8EC] text-[#2D1F1F] hover:border-[#C45C78]'
                    }`}
                >
                  {ripples
                    .filter((r) => selectedAmount === amount)
                    .map((ripple) => (
                      <span
                        key={ripple.id}
                        className="absolute rounded-full bg-[rgba(196,92,120,0.3)] animate-ripple"
                        style={{
                          left: ripple.x,
                          top: ripple.y,
                          width: 0,
                          height: 0,
                          animation: 'ripple 0.6s ease-out',
                        }}
                      />
                    ))}
                  <div style={{ fontFamily: 'Cormorant Garamond, serif' }} className="text-2xl font-semibold mb-1">
                    ₹{amount}
                  </div>
                  <div
                    style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}
                    className={`text-sm ${selectedAmount === amount ? 'text-white/90' : 'text-[#5A4A4A]'}`}
                  >
                    {description}
                  </div>
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="mb-8">
              <label
                style={{ fontFamily: 'DM Sans, sans-serif' }}
                className="block text-[#2D1F1F] mb-2"
                htmlFor="customAmount"
              >
                Or enter your own amount
              </label>
              <div className="relative">
                <span
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5A4A4A]"
                >
                  ₹
                </span>
                <input
                  type="number"
                  id="customAmount"
                  value={customAmount}
                  onChange={(e) => handleCustomAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="w-full pl-10 pr-4 py-3 bg-[#FDF8F3] border border-black/10 rounded-lg focus:outline-none focus:border-[#C45C78]"
                  style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}
                />
              </div>
            </div>

            {/* Payment Details */}
            <div className="mb-8">
              <h3
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem' }}
                className="font-semibold mb-4 text-[#2D1F1F]"
              >
                Payment Details
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* UPI */}
                <div className="bg-[#FDF8F3] rounded-lg p-6 flex flex-col h-full">
                  <h4 style={{ fontFamily: 'DM Sans, sans-serif' }} className="font-medium mb-3 text-[#2D1F1F]">
                    UPI Payment
                  </h4>
                  <div className="aspect-square bg-white rounded-lg mb-3 flex items-center justify-center border border-black/5 p-2 overflow-hidden">
                    <img 
                      src={qrCode} 
                      alt="Muskan UPI QR Code" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p
                    style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}
                    className="text-sm text-[#5A4A4A] text-center mt-auto"
                  >
                    muskan@upi
                  </p>
                </div>

                {/* Bank Transfer */}
                <div className="bg-[#FDF8F3] rounded-lg p-6">
                  <h4 style={{ fontFamily: 'DM Sans, sans-serif' }} className="font-medium mb-3 text-[#2D1F1F]">
                    Bank Transfer
                  </h4>
                  <div style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }} className="text-sm space-y-2 text-[#5A4A4A]">
                    <div>
                      <span className="text-[#2D1F1F] font-medium">Account Name:</span>
                      <br />
                      Muskan
                    </div>
                    <div>
                      <span className="text-[#2D1F1F] font-medium">Account No:</span>
                      <br />
                      18720110012666
                    </div>
                    <div>
                      <span className="text-[#2D1F1F] font-medium">IFSC Code:</span>
                      <br />
                      UCBA0001872
                    </div>
                    <div>
                      <span className="text-[#2D1F1F] font-medium">Bank:</span>
                      <br />
                      UCO Bank
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <div
                style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}
                className="flex items-center gap-2 px-4 py-2 bg-[#B5C9B0]/20 rounded-full text-sm text-[#2D1F1F]"
              >
                <Award size={16} className="text-[#8B3A52]" />
                80G Tax Exemption
              </div>
              <div
                style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}
                className="flex items-center gap-2 px-4 py-2 bg-[#B5C9B0]/20 rounded-full text-sm text-[#2D1F1F]"
              >
                <Eye size={16} className="text-[#8B3A52]" />
                100% Transparent
              </div>
              <div
                style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}
                className="flex items-center gap-2 px-4 py-2 bg-[#B5C9B0]/20 rounded-full text-sm text-[#2D1F1F]"
              >
                <Shield size={16} className="text-[#8B3A52]" />
                Registered NGO
              </div>
            </div>

            <p
              style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}
              className="text-center text-sm text-[#5A4A4A]"
            >
              After making a donation, please email your receipt to{" "}
              <a href="mailto:team@ngomuskan.com" className="text-[#C45C78] hover:underline">
                team@ngomuskan.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Fund Breakdown */}
      <section className="py-24 px-6 bg-white relative overflow-hidden" style={{ borderRadius: '40px 40px 0 0', marginTop: '-40px', zIndex: 20 }}>
        <DotGrid opacity={0.15} />
        <Blob size={160} color="#F9E8EC" opacity={0.5} top="10%" left="5%" delay={0} />
        <BotanicalBranch color="#B5C9B0" size={110} bottom="5%" left="8%" />
        <BotanicalLeaf color="#D4768F" size={55} rotation={30} top="20%" right="10%" delay={1} />
        <BotanicalLeaf color="#F0C4CF" size={45} rotation={-25} bottom="20%" right="15%" delay={2} />
        <Rosette size={300} color="#D4768F" opacity={0.06} bottom="-5%" left="-5%" duration={25} />

        <div className="max-w-4xl mx-auto relative z-10">
          <h2
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem' }}
            className="font-semibold text-center mb-12 text-[#2D1F1F]"
          >
            Where Your Money Goes
          </h2>
          <div className="space-y-4">

            {[
              { label: 'Programme Delivery', width: 80, color: '#C45C78', delay: 0 },
              { label: 'Operations', width: 10, color: '#D4768F', delay: 200 },
              { label: 'Outreach', width: 10, color: '#B5C9B0', delay: 400 },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex justify-between mb-2">
                  <span style={{ fontFamily: 'DM Sans, sans-serif' }} className="text-[#2D1F1F]">
                    {item.label}
                  </span>
                  <span style={{ fontFamily: 'DM Sans, sans-serif' }} className="font-medium text-[#2D1F1F]">
                    {item.width}%
                  </span>
                </div>
                <AnimatedBar width={item.width} delay={item.delay} />
                <style>{`
                  .h-3 > div {
                    background-color: ${item.color};
                  }
                `}</style>
              </div>
            ))}
          </div>

          <p
            style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}
            className="text-center text-[#5A4A4A] mt-8"
          >
            We publish detailed financial reports annually. Our commitment to transparency means you always know exactly how your donation creates impact.
          </p>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-24 px-6 bg-[#FDF8F3] relative overflow-hidden" style={{ borderRadius: '40px 40px 0 0', marginTop: '-40px', zIndex: 30 }}>
        <DotGrid opacity={0.12} />
        <Blob size={200} color="#F0C4CF" opacity={0.4} bottom="10%" right="10%" delay={1} />
        <BotanicalBranch color="#D4768F" size={105} top="10%" right="8%" />
        <BotanicalLeaf color="#B5C9B0" size={60} rotation={45} bottom="15%" left="10%" delay={0} />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem' }}
            className="font-semibold mb-8 text-[#2D1F1F]"
          >
            Your Impact in Action
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { amount: 200, impact: "Provides 5 girls with a month's supply of sanitary pads" },
              { amount: 1000, impact: "Funds a complete health education session in one school" },
              { amount: 5000, impact: "Establishes a pad bank in a rural hostel for 6 months" },
            ].map((item) => (
              <div key={item.amount} className="bg-white rounded-lg p-8 hover:-translate-y-1 transition-all duration-300">
                <div
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem' }}
                  className="text-[#C45C78] mb-3"
                >
                  ₹{item.amount.toLocaleString()}
                </div>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }} className="text-[#5A4A4A]">
                  {item.impact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes ripple {
          to {
            width: 200px;
            height: 200px;
            margin-left: -100px;
            margin-top: -100px;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

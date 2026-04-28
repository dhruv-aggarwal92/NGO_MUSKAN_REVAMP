import { motion } from "motion/react";
import { DotGrid } from "./decorations/DotGrid";
import { Blob } from "./decorations/Blob";
import { BotanicalLeaf } from "./decorations/BotanicalLeaf";
import { BotanicalBranch } from "./decorations/BotanicalBranch";
import { Rosette } from "./decorations/Rosette";
import aboutPageTop from "../../../images/about page top.jpg";
import teamPhoto1 from "../../../images/Sadhan.jpg";
import teamPhoto2 from "../../../images/aarushi 2.jpeg";
import teamPhoto3 from "../../../images/dhruv.jpeg";
import teamPhoto4 from "../../../images/tanvi.jpeg";
import teamPhoto5 from "../../../images/palak.jpeg";
import dayPhoto1 from "../../../images/drive there 1.jpg";
import dayPhoto2 from "../../../images/silent room 1.jpg";
import dayPhoto3 from "../../../images/Small girl 1.jpeg";
import dayPhoto4 from "../../../images/ride back.jpg";

export default function About() {
  return (
    <div className="bg-[#FDF8F3]">
      {/* Founder's Story */}
      <section className="py-24 px-6 relative overflow-hidden">
        <Blob size={300} color="#C45C78" opacity={0.08} bottom="10%" right="5%" delay={0} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Photo */}
            <div className="relative">
              <div
                className="aspect-[3/4] overflow-hidden"
                style={{
                  borderRadius: '150px 150px 110px 110px',
                  backgroundImage: `url(${aboutPageTop})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  boxShadow: '0 20px 60px rgba(139, 58, 82, 0.18)',
                }}
              >
                <div className="absolute inset-0 bg-[#F9E8EC] opacity-25 mix-blend-multiply" />
              </div>

              {/* Floating Quote Card */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#C45C78] max-w-xs">
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontStyle: 'italic' }} className="text-[#2D1F1F]">
                  "Muskan. Because everyone deserves a smile!"
                </p>
              </div>
            </div>

            {/* Right: Content */}
            <div>
              <div
                style={{ fontFamily: 'DM Sans, sans-serif' }}
                className="text-[0.75rem] uppercase tracking-[0.12em] text-[#C45C78] mb-4"
              >
                Our Beginning
              </div>
              <h2
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem' }}
                className="font-semibold mb-6 text-[#2D1F1F]"
              >
                Why Muskan Exists
              </h2>
              <div style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, lineHeight: 1.7 }} className="text-[#5A4A4A] space-y-4 mb-6">
                <p>
                  <span style={{ fontWeight: 500 }}> Because somewhere right now, a girl is sitting out of class, sitting out of life — not because she isn't enough, but because the world didn't think she deserved a pad.</span>
                </p>
                <p style={{ fontWeight: 500 }}>
                  That quiet injustice is why we exist.
                </p>
                <p>
                  Muskan was born from the anger of young people who refused to look away — from villages, hostels, and cramped Anganwadi centers where women navigate their bodies in silence and shame is handed down like inheritance. <span style={{ fontWeight: 500 }}>Where a period is still a secret.</span> Where dignity is still a privilege.
                </p>
                <p style={{ fontWeight: 500 }}>
                  We believe that is not the world we are willing to accept.
                </p>
                <p>
                  We are a youth-led movement that believes menstrual equity isn't charity — it is justice. We show up in slums and schools, in spaces that are overlooked, underfunded, and achingly real. We don't parachute in with answers; we sit with communities, learn their rhythms, and help build something that stays.
                </p>
                <p style={{ fontWeight: 500 }}>
                  We distribute pads, but more than that, we dismantle shame one honest conversation at a time.
                </p>
                <p>
                  <span style={{ fontWeight: 500 }}>Because the girls we work for never needed saving.</span> They needed someone to finally show up.
                </p>
                <p style={{ fontWeight: 500 }}>
                  Muskan is that someone.
                </p>
              </div>

              <div className="border-l-4 border-[#C45C78] pl-6 py-4">
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem' }} className="italic text-[#2D1F1F]">
                  "PERIODS DON'T STOP FOR POVERTY. NEITHER DO WE!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 px-6 bg-white" style={{ borderRadius: '40px 40px 0 0', marginTop: '-40px', zIndex: 10 }} relative overflow-hidden>
        <DotGrid opacity={0.15} />
        <Blob size={240} color="#B5C9B0" opacity={0.5} top="15%" right="8%" delay={1} />
        <Blob size={180} color="#F0C4CF" opacity={0.45} bottom="10%" left="10%" delay={3} />
        <BotanicalBranch color="#D4768F" size={100} top="10%" right="5%" />
        <BotanicalLeaf color="#B5C9B0" size={55} rotation={45} bottom="20%" right="20%" delay={2} />
        <Rosette size={400} color="#C45C78" opacity={0.05} top="20%" left="20%" duration={30} />

        <div className="max-w-7xl mx-auto relative z-10">
          <h2
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem' }}
            className="font-semibold text-center mb-16 text-[#2D1F1F]"
          >
            Our Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { number: '01', name: 'सम्मान ', desc: 'Sammaan (Dignity). We don\'t see the communities we work with as recipients of kindness — we see them as equals deserving of rights. Every pad distributed, every session held, every conversation started is an act of recognition, not sympathy.' },
              { number: '02', name: 'साहस ', desc: 'Saahas (Courage) Stigma survives in the spaces where no one speaks. We choose to be uncomfortable, to say the words out loud, to walk into rooms where these conversations have never happened — because that discomfort is exactly where change begins.' },
              { number: '03', name: 'युवा शक्ति', desc: 'Yuva Shakti (Power of Youth) We believe the most powerful force for community transformation is young people who refuse to accept the world as it is. Muskan is built by them, led by them, and exists because of their refusal to look away.' },
              { number: '04', name: 'उपस्थिति ', desc: 'Upasthiti (Presence) Real impact isn\'t a one-day camp or a viral post. It\'s returning. It\'s being consistent in places that rarely see consistency. We are committed to presence over performance — to work that is slow, unglamorous, and genuinely felt.' }
            ].map((value, i) => (
              <div
                key={i}
                className="bg-[#FDF8F3] p-8 rounded-[20px] hover:-translate-y-1 hover:rotate-[0.4deg] transition-all duration-300"
              >
                <div
                  style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '3rem', color: '#F0C4CF' }}
                  className="mb-4"
                >
                  {value.number}
                </div>
                <h3
                  style={{ fontFamily: '"Noto Sans Devanagari", "Cormorant Garamond", serif', fontSize: '1.2rem', fontWeight: 600, letterSpacing: '0.02em' }}
                  className="mb-3 text-[#2D1F1F]"
                >
                  {value.name}
                </h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }} className="text-[#5A4A4A]">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A Day With Muskan */}
      <section className="py-24 px-6 bg-[#F5EDE4]" style={{ borderRadius: '40px 40px 0 0', marginTop: '-40px', zIndex: 20 }} relative overflow-hidden>
        <DotGrid opacity={0.15} />
        <Blob size={260} color="#F0C4CF" opacity={0.5} top="5%" left="8%" delay={0} />
        <Blob size={190} color="#D4768F" opacity={0.45} bottom="20%" right="5%" delay={2} />
        <BotanicalBranch color="#B5C9B0" size={110} bottom="10%" left="8%" />
        <BotanicalLeaf color="#D4768F" size={60} rotation={-30} top="25%" left="15%" delay={0} />
        <BotanicalLeaf color="#F0C4CF" size={45} rotation={50} bottom="30%" right="15%" delay={1} />
        <Rosette size={300} color="#D4768F" opacity={0.06} bottom="-10%" left="-5%" duration={25} />

        <div className="max-w-5xl mx-auto relative z-10">
          <h2
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem' }}
            className="font-semibold text-center mb-4 text-[#2D1F1F]"
          >
            A Day With Muskan
          </h2>
          <p
            style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '0.95rem' }}
            className="text-center text-[#999] mb-16"
          >
            Every session is different. The feeling never is.
          </p>

          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-[#F0C4CF] transform -translate-x-1/2 hidden md:block" />

            <div className="space-y-16">
              {/* Moment 1 */}
              <motion.div
                className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                {/* Photo - Left on Desktop */}
                <div className="order-1 md:order-1">
                  <div
                    className="w-full rounded-2xl overflow-hidden aspect-[4/3]"
                    style={{ boxShadow: '0 10px 30px rgba(196, 92, 120, 0.15)' }}
                  >
                    <img src={dayPhoto1} alt="The team on their way to the session" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Text - Right on Desktop */}
                <div className="order-2 md:order-2 md:pl-8">
                  <p
                    style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: '0.75rem', letterSpacing: '0.08em' }}
                    className="text-[#C45C78] uppercase mb-2"
                  >
                    8:30 AM
                  </p>
                  <h3
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem' }}
                    className="font-semibold mb-4 text-[#2D1F1F]"
                  >
                    The Ride There
                  </h3>
                  <p
                    style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, lineHeight: 1.7 }}
                    className="text-[#5A4A4A]"
                  >
                    The team piles into one vehicle — bags packed, a little nervous, not entirely sure what today will hold. But that's always been part of it. You don't prepare for Muskan days. You just show up.
                  </p>
                </div>
              </motion.div>

              {/* Moment 2 */}
              <motion.div
                className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                {/* Photo - Right on Desktop */}
                <div className="order-2 md:order-2 md:col-start-2">
                  <div
                    className="w-full rounded-2xl overflow-hidden aspect-[4/3]"
                    style={{ boxShadow: '0 10px 30px rgba(196, 92, 120, 0.15)' }}
                  >
                    <img src={dayPhoto2} alt="Session at the village community" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Text - Left on Desktop */}
                <div className="order-1 md:order-1 md:col-start-1 md:pr-8">
                  <p
                    style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: '0.75rem', letterSpacing: '0.08em' }}
                    className="text-[#C45C78] uppercase mb-2"
                  >
                    11:00 AM
                  </p>
                  <h3
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem' }}
                    className="font-semibold mb-4 text-[#2D1F1F]"
                  >
                    The Room Goes Quiet First
                  </h3>
                  <p
                    style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, lineHeight: 1.7 }}
                    className="text-[#5A4A4A]"
                  >
                    In the village, nobody says the word at first. There's hesitation, a few exchanged glances. Then someone laughs. Someone nods. And then — the questions come. Questions they've held for years, finally finding a room where it's safe to ask.
                  </p>
                </div>
              </motion.div>

              {/* Moment 3 */}
              <motion.div
                className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                {/* Photo - Left on Desktop */}
                <div className="order-1 md:order-1">
                  <div
                    className="w-full rounded-2xl overflow-hidden aspect-[4/3]"
                    style={{ boxShadow: '0 10px 30px rgba(196, 92, 120, 0.15)' }}
                  >
                    <img src={dayPhoto3} alt="Girls joyfully greeting the Muskan team" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Text - Right on Desktop */}
                <div className="order-2 md:order-2 md:pl-8">
                  <p
                    style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: '0.75rem', letterSpacing: '0.08em' }}
                    className="text-[#C45C78] uppercase mb-2"
                  >
                    1:30 PM
                  </p>
                  <h3
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem' }}
                    className="font-semibold mb-4 text-[#2D1F1F]"
                  >
                    Then She Came Running
                  </h3>
                  <p
                    style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, lineHeight: 1.7 }}
                    className="text-[#5A4A4A]"
                  >
                    At a school we'd visited before, some girls spotted our speaker from across the courtyard. They came running — and hugged her. No agenda. No formality. Just the pure joy of someone returning to a place where they made someone feel seen.
                  </p>
                </div>
              </motion.div>

              {/* Moment 4 */}
              <motion.div
                className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                {/* Photo - Right on Desktop */}
                <div className="order-2 md:order-2 md:col-start-2">
                  <div
                    className="w-full rounded-2xl overflow-hidden aspect-[4/3]"
                    style={{ boxShadow: '0 10px 30px rgba(196, 92, 120, 0.15)' }}
                  >
                    <img src={dayPhoto4} alt="Team reflecting on the ride back home" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Text - Left on Desktop */}
                <div className="order-1 md:order-1 md:col-start-1 md:pr-8">
                  <p
                    style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: '0.75rem', letterSpacing: '0.08em' }}
                    className="text-[#C45C78] uppercase mb-2"
                  >
                    4:00 PM
                  </p>
                  <h3
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem' }}
                    className="font-semibold mb-4 text-[#2D1F1F]"
                  >
                    The Ride Back
                  </h3>
                  <p
                    style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, lineHeight: 1.7 }}
                    className="text-[#5A4A4A]"
                  >
                    On the way home, nobody talks much. Everyone is processing — the smiles, the stories, and something harder to name: the sight of two worlds existing in the same street. One where girls move freely. One where they can't yet speak about their own bodies. The work isn't done. It never quite is.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Closing Line */}
          <div className="mt-20 pt-12 border-t border-[#F0C4CF]">
            <p
              style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontStyle: 'italic' }}
              className="text-center text-[#2D1F1F]"
            >
              We came to give them pads. They gave us perspective.
            </p>
          </div>
        </div>
      </section>

      {/* Team Profiles */}
      <section className="py-24 px-6 bg-white" style={{ borderRadius: '40px 40px 0 0', marginTop: '-40px', zIndex: 30 }} relative overflow-hidden>
        <DotGrid opacity={0.15} />
        <Blob size={250} color="#B5C9B0" opacity={0.5} top="10%" left="5%" delay={1} />
        <Blob size={170} color="#F0C4CF" opacity={0.45} bottom="15%" right="8%" delay={3} />
        <BotanicalBranch color="#D4768F" size={105} top="15%" right="10%" />
        <BotanicalLeaf color="#B5C9B0" size={50} rotation={25} bottom="25%" left="15%" delay={2} />

        <div className="max-w-7xl mx-auto relative z-10">
          <h2
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem' }}
            className="font-semibold text-center mb-16 text-[#2D1F1F]"
          >
            Meet Our Team
          </h2>

          {/* Core Team Sub-heading */}
          <h3
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem', fontWeight: 600 }}
            className="text-[#2D1F1F] mb-8 pb-2 border-b border-[#F0C4CF]"
          >
            Core Team
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sadhan Singla', role: 'VISION', quote: 'Every girl\'s health is worth fighting for.', photo: teamPhoto1, hasPhoto: true },
              { name: 'Aarushi Juneja', role: 'COO', quote: 'Operations that scale impact.', photo: teamPhoto2, hasPhoto: true },
              { name: 'Dhruv Aggarwal', role: 'TECH LEAD', quote: 'Technology built to amplify impact.', photo: teamPhoto3, hasPhoto: true },
            ].map((member, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-br from-[#FDF8F3] to-[#F9E8EC] rounded-lg overflow-hidden hover:-translate-y-1 transition-all duration-300"
                whileHover={{ rotate: i % 2 === 0 ? 0.3 : -0.3 }}
              >
                <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[#F9E8EC] to-[#F0C4CF] flex items-center justify-center p-0">
                  {member.hasPhoto ? (
                    <img src={member.photo!} alt={`${member.name} photo`} className="h-full w-full object-cover" />
                  ) : (
                    <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3.5rem', color: '#C45C78', opacity: 0.6 }}>
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem' }}
                    className="font-semibold mb-1 text-[#2D1F1F]"
                  >
                    {member.name}
                  </h3>
                  <p
                    style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '0.75rem' }}
                    className="text-[#C45C78] uppercase tracking-wider mb-3"
                  >
                    {member.role}
                  </p>
                  <p
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '0.9rem' }}
                    className="italic text-[#2D1F1F]"
                  >
                    "{member.quote}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Volunteers Sub-heading */}
          <h3
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem', fontWeight: 600 }}
            className="text-[#2D1F1F] mt-16 mb-8 pb-2 border-b border-[#F0C4CF]"
          >
            Volunteers
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { name: 'Tanvi Garg', role: 'Project Lead', quote: 'Stories that inspire change.', photo: teamPhoto4, hasPhoto: true },
              { name: 'Palak', role: 'VOLUNTEERS', quote: 'Building movements together.', photo: teamPhoto5, hasPhoto: true },
            ].map((member, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-br from-[#FDF8F3] to-[#F9E8EC] rounded-lg overflow-hidden hover:-translate-y-1 transition-all duration-300"
                whileHover={{ rotate: i % 2 === 0 ? 0.3 : -0.3 }}
              >
                <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[#F9E8EC] to-[#F0C4CF] flex items-center justify-center p-0">
                  <img src={member.photo} alt={`${member.name} photo`} className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <h3
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem' }}
                    className="font-semibold mb-1 text-[#2D1F1F]"
                  >
                    {member.name}
                  </h3>
                  <p
                    style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '0.75rem' }}
                    className="text-[#C45C78] uppercase tracking-wider mb-3"
                  >
                    {member.role}
                  </p>
                  <p
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '0.9rem' }}
                    className="italic text-[#2D1F1F]"
                  >
                    "{member.quote}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

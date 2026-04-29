import { useState } from "react";
import { DotGrid } from "./decorations/DotGrid";
import { Blob } from "./decorations/Blob";
import { BotanicalBranch } from "./decorations/BotanicalBranch";
import { BotanicalLeaf } from "./decorations/BotanicalLeaf";
import { Rosette } from "./decorations/Rosette";
import sp1 from "../../../images/SanitaryPadDrive/1.jpg";
import sp2 from "../../../images/SanitaryPadDrive/2.jpg";
import sp3 from "../../../images/SanitaryPadDrive/3.jpg";
import sp4 from "../../../images/SanitaryPadDrive/4.jpg";
import sp5 from "../../../images/SanitaryPadDrive/5.jpg";
import sp6 from "../../../images/SanitaryPadDrive/6.jpg";
import sp7 from "../../../images/SanitaryPadDrive/7.jpg";
import sp8 from "../../../images/SanitaryPadDrive/8.jpg";
import sp9 from "../../../images/SanitaryPadDrive/9.jpg";
import sp10 from "../../../images/SanitaryPadDrive/10.jpg";
import sp11 from "../../../images/SanitaryPadDrive/11.jpg";
import mhw1 from "../../../images/MenstrualHealthWorkshops/1.jpg";
import mhw2 from "../../../images/MenstrualHealthWorkshops/2.jpg";
import mhw3 from "../../../images/MenstrualHealthWorkshops/3.jpg";
import mhw4 from "../../../images/MenstrualHealthWorkshops/4.jpg";
import mhw5 from "../../../images/MenstrualHealthWorkshops/5.jpg";
import mhw6 from "../../../images/MenstrualHealthWorkshops/6.jpg";
import mhw7 from "../../../images/MenstrualHealthWorkshops/7.jpg";
import mhw8 from "../../../images/MenstrualHealthWorkshops/8.jpg";
import mhw9 from "../../../images/MenstrualHealthWorkshops/9.jpg";
import mhw10 from "../../../images/MenstrualHealthWorkshops/10.jpg";
import mhw11 from "../../../images/MenstrualHealthWorkshops/11.jpg";
import mhw12 from "../../../images/MenstrualHealthWorkshops/12.jpg";
import mhw13 from "../../../images/MenstrualHealthWorkshops/13.jpg";
import mhw14 from "../../../images/MenstrualHealthWorkshops/14.jpg";
import mhw15 from "../../../images/MenstrualHealthWorkshops/15.jpg";
import mhw16 from "../../../images/MenstrualHealthWorkshops/16.jpg";
import ow1 from "../../../images/OtherWorkshops/1.jpg";
import ow2 from "../../../images/OtherWorkshops/2.jpg";
import ow3 from "../../../images/OtherWorkshops/3.jpg";
import ow4 from "../../../images/OtherWorkshops/4.jpg";
import ow5 from "../../../images/OtherWorkshops/5.jpg";
import ow6 from "../../../images/OtherWorkshops/6.jpg";
import ce1 from "../../../images/CollegeEvents/1.jpg";
import ce2 from "../../../images/CollegeEvents/2.jpg";
import ce3 from "../../../images/CollegeEvents/3.jpg";
import ce4 from "../../../images/CollegeEvents/4.jpg";
import ce5 from "../../../images/CollegeEvents/5.jpg";
import ce6 from "../../../images/CollegeEvents/6.jpg";
import ce7 from "../../../images/CollegeEvents/7.jpg";

type FilterType = "All" | "Sanitary Pad Drive" | "Menstrual Health workshop" | "Other workshops" | "College Events";

type GalleryItemType = {
  id: number;
  category: FilterType;
  caption: string;
  image?: string;
  shape?: "landscape" | "portrait" | "square";
  alt?: string;
};

const galleryItems: GalleryItemType[] = [
  { id: 1, category: "Sanitary Pad Drive", caption: "Rural school visit in Haryana", image: sp1, shape: "landscape", alt: "Volunteers visiting a rural school in Haryana for a sanitary pad drive" },
  { id: 2, category: "Menstrual Health workshop", caption: "Interactive workshop with girls", image: mhw1, alt: "Interactive menstrual health workshop with girls" },
  { id: 3, category: "Sanitary Pad Drive", caption: "Distributing pads in village", image: sp2, alt: "Distributing sanitary pads to women in a local village" },
  { id: 4, category: "Other workshops", caption: "Anganwadi worker training session", image: ow1, alt: "Anganwadi worker training session" },
  { id: 5, category: "Sanitary Pad Drive", caption: "Community engagement program", image: sp3, alt: "Engaging with the community during a sanitary pad distribution event" },
  { id: 6, category: "Menstrual Health workshop", caption: "Menstrual hygiene education", image: mhw2, alt: "Menstrual hygiene education session" },
  { id: 7, category: "Other workshops", caption: "Setting up pad bank in hostel", image: ow2, alt: "Setting up pad bank in hostel" },
  { id: 8, category: "Sanitary Pad Drive", caption: "Girls receiving sanitary pads", image: sp4, alt: "Young girls receiving free sanitary pads" },
  { id: 10, category: "Menstrual Health workshop", caption: "Q&A session with students", image: mhw3, alt: "Q&A session with students about menstrual health" },
  { id: 11, category: "Other workshops", caption: "Mother-daughter workshop", image: ow3, alt: "Mother-daughter workshop" },
  { id: 12, category: "Other workshops", caption: "Hostel pad bank inauguration", image: ow4, alt: "Hostel pad bank inauguration" },
  { id: 14, category: "Sanitary Pad Drive", caption: "Monthly pad distribution drive", image: sp5, alt: "Volunteers handing out pads during a monthly distribution drive" },
  { id: 15, category: "College Events", caption: "College cultural fest participation", image: ce1, alt: "College cultural fest participation" },
  { id: 16, category: "Sanitary Pad Drive", caption: "Sanitary pad distribution camp", image: sp6, alt: "A sanitary pad distribution camp set up for the local community" },
  { id: 17, category: "Sanitary Pad Drive", caption: "Awareness on menstrual hygiene", image: sp7, alt: "Raising awareness about menstrual hygiene while distributing pads" },
  { id: 18, category: "Sanitary Pad Drive", caption: "Providing pads to local community", image: sp8, alt: "Providing essential sanitary pads to women in need" },
  { id: 19, category: "Sanitary Pad Drive", caption: "Supporting girls' education", image: sp9, alt: "Supporting girls' education by ensuring access to menstrual products" },
  { id: 20, category: "Sanitary Pad Drive", caption: "Health and hygiene workshop", image: sp10, alt: "Conducting a health and hygiene workshop alongside pad distribution" },
  { id: 21, category: "Sanitary Pad Drive", caption: "Empowering young girls", image: sp11, alt: "Empowering young girls through menstrual health resources" },
  { id: 22, category: "Menstrual Health workshop", caption: "Educating young women on menstrual health", image: mhw4, alt: "Educating young women on menstrual health" },
  { id: 23, category: "Menstrual Health workshop", caption: "Group discussion on hygiene practices", image: mhw5, alt: "Group discussion on hygiene practices" },
  { id: 24, category: "Menstrual Health workshop", caption: "Demonstration of sanitary products", image: mhw6, alt: "Demonstration of sanitary products" },
  { id: 25, category: "Menstrual Health workshop", caption: "Breaking the stigma around periods", image: mhw7, alt: "Breaking the stigma around periods" },
  { id: 26, category: "Menstrual Health workshop", caption: "Engaging activities for awareness", image: mhw8, alt: "Engaging activities for awareness" },
  { id: 27, category: "Menstrual Health workshop", caption: "Interactive session on reproductive health", image: mhw9, alt: "Interactive session on reproductive health" },
  { id: 28, category: "Menstrual Health workshop", caption: "Open forum on menstruation", image: mhw10, alt: "Open forum on menstruation" },
  { id: 29, category: "Menstrual Health workshop", caption: "Empowering students through knowledge", image: mhw11, alt: "Empowering students through knowledge" },
  { id: 30, category: "Menstrual Health workshop", caption: "Community workshop on menstrual hygiene", image: mhw12, alt: "Community workshop on menstrual hygiene" },
  { id: 31, category: "Menstrual Health workshop", caption: "Answering questions on period health", image: mhw13, alt: "Answering questions on period health" },
  { id: 32, category: "Menstrual Health workshop", caption: "Safe space for discussing periods", image: mhw14, alt: "Safe space for discussing periods" },
  { id: 33, category: "Menstrual Health workshop", caption: "Guidance on healthy practices", image: mhw15, alt: "Guidance on healthy practices" },
  { id: 34, category: "Menstrual Health workshop", caption: "Educational charts and materials", image: mhw16, alt: "Educational charts and materials" },
  { id: 35, category: "Other workshops", caption: "Skill development session", image: ow5, alt: "Skill development session" },
  { id: 36, category: "Other workshops", caption: "Hygiene awareness camp", image: ow6, alt: "Hygiene awareness camp" },
  { id: 37, category: "College Events", caption: "Student interaction session", image: ce2, alt: "Student interaction session" },
  { id: 38, category: "College Events", caption: "Awareness drive at college campus", image: ce3, alt: "Awareness drive at college campus" },
  { id: 39, category: "College Events", caption: "Volunteering activities", image: ce4, alt: "Volunteering activities" },
  { id: 40, category: "College Events", caption: "College event participation", image: ce5, alt: "College event participation" },
  { id: 41, category: "College Events", caption: "Youth engagement initiative", image: ce6, alt: "Youth engagement initiative" },
  { id: 42, category: "College Events", caption: "Empowering college youth", image: ce7, alt: "Empowering college youth" },
];

function GalleryGrid({ filteredItems, activeFilter }: { filteredItems: GalleryItemType[]; activeFilter: string }) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const hoveredItem = hoveredId !== null
    ? filteredItems.find((i) => i.id === hoveredId) ?? null
    : null;

  return (
    <>
      {/* CSS Columns Masonry — natural image heights, no fixed sizing */}
      <div
        className="columns-1 md:columns-2 lg:columns-3"
        style={{ columnGap: "12px" }}
      >
        {filteredItems.map((item, index) => {
          const isMatching = activeFilter === "All" || item.category === activeFilter;
          const isHovered = hoveredId === item.id;
          const isBlurred = hoveredId !== null && !isHovered;

          const gradientClass =
            index % 3 === 0
              ? "from-[#C45C78] to-[#8B3A52]"
              : index % 3 === 1
              ? "from-[#F0C4CF] to-[#D4768F]"
              : "from-[#B5C9B0] to-[#8B3A52]";

          return (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                breakInside: "avoid",
                marginBottom: "12px",
                cursor: "pointer",
                borderRadius: "0.75rem",
                overflow: "hidden",
                position: "relative",
                filter: isBlurred ? "blur(3px)" : "none",
                opacity: isBlurred ? 0.55 : isMatching ? 1 : 0.3,
                transform: isHovered
                  ? "scale(1.02) translateZ(0)"
                  : isMatching
                  ? "scale(1) translateZ(0)"
                  : "scale(0.97) translateZ(0)",
                boxShadow: isHovered
                  ? "0 28px 64px rgba(139, 58, 82, 0.38), 0 8px 24px rgba(0,0,0,0.18)"
                  : "none",
                transition:
                  "transform 440ms cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 380ms ease, opacity 380ms ease, box-shadow 440ms ease",
                willChange: "transform, filter, opacity",
              }}
            >
              {item.image ? (
                <div className={`bg-gradient-to-br ${gradientClass} relative`}>
                  {/* width:100% height:auto — natural aspect ratio, no crop, no empty space */}
                  <img
                    src={item.image}
                    alt={item.alt || item.caption}
                    style={{ width: "100%", height: "auto", display: "block" }}
                    draggable={false}
                  />
                  {/* Caption overlay */}
                  <div
                    className="absolute inset-0 flex items-end p-5"
                    style={{
                      opacity: isHovered ? 1 : 0,
                      background: "linear-gradient(to top, rgba(45,31,31,0.6) 0%, transparent 55%)",
                      transition: "opacity 300ms ease",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "DM Sans, sans-serif",
                        fontWeight: 400,
                        color: "#fff",
                        fontSize: "0.9rem",
                        transform: isHovered ? "translateY(0)" : "translateY(8px)",
                        transition: "transform 300ms ease",
                      }}
                    >
                      {item.caption}
                    </p>
                  </div>
                </div>
              ) : (
                <div
                  className={`bg-gradient-to-br ${gradientClass} flex items-center justify-center relative`}
                  style={{ minHeight: "200px" }}
                >
                  <span
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                    className="text-4xl text-white/20 font-semibold"
                  >
                    Photo {item.id}
                  </span>
                  <div
                    className="absolute inset-0 flex items-end p-5"
                    style={{
                      opacity: isHovered ? 1 : 0,
                      background: "linear-gradient(to top, rgba(45,31,31,0.6) 0%, transparent 55%)",
                      transition: "opacity 300ms ease",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "DM Sans, sans-serif",
                        fontWeight: 400,
                        color: "#fff",
                        fontSize: "0.9rem",
                        transform: isHovered ? "translateY(0)" : "translateY(8px)",
                        transition: "transform 300ms ease",
                      }}
                    >
                      {item.caption}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Full-image lightbox overlay — appears on hover, pointer-events:none so cards stay interactive */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1000,
          background: "rgba(20, 10, 10, 0.78)",
          backdropFilter: hoveredItem?.image ? "blur(6px)" : "none",
          WebkitBackdropFilter: hoveredItem?.image ? "blur(6px)" : "none",
          pointerEvents: "none",
          opacity: hoveredItem?.image ? 1 : 0,
          transition: "opacity 350ms ease, backdrop-filter 350ms ease",
        }}
      >
        {hoveredItem?.image && (
          <div
            style={{
              position: "fixed",
              top: "96px",
              left: 0,
              right: 0,
              bottom: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ position: "relative" }}>
            <img
              src={hoveredItem.image}
              alt={hoveredItem.alt || hoveredItem.caption}
              style={{
                display: "block",
                maxWidth: "88vw",
                maxHeight: "calc(100vh - 96px - 16px)",
                width: "auto",
                height: "auto",
                objectFit: "contain",
                borderRadius: "0.75rem",
                boxShadow: "0 32px 80px rgba(0,0,0,0.55)",
                filter: "none",
                opacity: 1,
              }}
              draggable={false}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "20px 24px",
                background: "linear-gradient(to top, rgba(45,31,31,0.75) 0%, transparent 70%)",
                borderRadius: "0 0 0.75rem 0.75rem",
              }}
            >
              <p
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  fontWeight: 400,
                  color: "#fff",
                  fontSize: "1rem",
                  margin: 0,
                }}
              >
                {hoveredItem.caption}
              </p>
            </div>
          </div>
          </div>
        )}
      </div>
    </>
  );
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  const filters: FilterType[] = [
    "All",
    "Sanitary Pad Drive",
    "Menstrual Health workshop",
    "Other workshops",
    "College Events",
  ];

  const filteredItems =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <div className="bg-[#FDF8F3] py-24 px-6 relative overflow-hidden">
      <DotGrid opacity={0.15} />
      <Blob size={220} color="#F9E8EC" opacity={0.5} top="5%" right="5%" delay={0} />
      <Blob size={180} color="#B5C9B0" opacity={0.45} bottom="10%" left="5%" delay={2} />
      <BotanicalBranch color="#D4768F" size={100} top="20%" right="10%" />
      <BotanicalLeaf color="#F0C4CF" size={50} rotation={30} bottom="15%" left="10%" delay={1} />
      <Rosette size={400} color="#D4768F" opacity={0.04} top="-10%" left="-5%" duration={35} />

      <div className="max-w-7xl mx-auto relative z-10">
        <h1
          style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "3rem" }}
          className="font-semibold text-center mb-6 text-[#2D1F1F]"
        >
          Our Work in Action
        </h1>
        <p
          style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 300 }}
          className="text-center text-[#5A4A4A] mb-12 max-w-2xl mx-auto"
        >
          From village schools to urban hostels, see the impact of Muskan's menstrual equity programs across India.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              style={{ fontFamily: "DM Sans, sans-serif" }}
              className={`px-5 py-2.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 ${
                activeFilter === filter
                  ? "bg-[#C45C78] text-white"
                  : "border-2 border-[#F9E8EC] text-[#5A4A4A] hover:border-[#C45C78]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <GalleryGrid filteredItems={filteredItems} activeFilter={activeFilter} />

        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <p
              style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 300 }}
              className="text-[#5A4A4A]"
            >
              No images found for this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

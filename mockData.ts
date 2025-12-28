
export const PallazoBrand = {
  name: "Pallazo's",
  tagline: "Building the Future 2026",
  description: "Pallazo's specializes in end-to-end construction, construction management, interior design and execution, and house remodeling. We transform spaces into experiences.",
  slogan: "Inspire. Transform. Endure.",
  hq: "Suite 405, Prestige Towers, Residency Road, Bengaluru 560025",
  phone: "+91 (80) 4420 5000",
  whatsapp: "919606303999",
  email: "hello@pallazos.com",
};

export const PallazoApproach = [
  {
    id: '01',
    title: 'Design & Vision',
    subtitle: 'Capture Your Vision',
    desc: 'We listen to your needs and transform your ideas into innovative designs and detailed plans.',
    icon: 'Compass'
  },
  {
    id: '02',
    title: 'Visual Mapping',
    subtitle: 'Transform Ideas',
    desc: 'Our experts offer you a virtual tour of your future home before the first stone is laid.',
    icon: 'Box'
  },
  {
    id: '03',
    title: 'The Build',
    subtitle: 'Laying Foundations',
    desc: 'Comprehensive site development and structural construction exceeding high standards.',
    icon: 'Hammer'
  },
  {
    id: '04',
    title: 'Furnish & Deliver',
    subtitle: 'Final Handover',
    desc: 'Execution of quality interiors and exteriors, delivering your dream home ready for move-in.',
    icon: 'ShieldCheck'
  }
];

export const PallazoServices = [
  {
    title: "Turnkey Solutions",
    desc: "End-to-End solutions tailored from start to finish, emphasizing quality with cost and time efficiency.",
    icon: "ShieldCheck"
  },
  {
    title: "Project Management",
    desc: "Expert consultations for both residential and commercial endeavors with precise project oversight.",
    icon: "Target"
  },
  {
    title: "House Remodeling",
    desc: "Comprehensive process of altering structure, design, and functionality of residential properties.",
    icon: "Hammer"
  },
  {
    title: "Interior Execution",
    desc: "Top-notch designs exploring unique styles and techniques for elite residential and commercial options.",
    icon: "Paintbrush"
  },
  {
    title: "External Development",
    desc: "Sewage treatment, overhead tanks, elevation works, and premium landscaping solutions.",
    icon: "Zap"
  }
];

export interface ProjectDetail {
  id: number;
  title: string;
  location: string;
  tag: string;
  spec: string;
  service: string;
  img: string;
  description: string;
  client: string;
  gallery: string[];
  challenges: string;
  solutions: string;
  technicalDetails: { label: string; value: string }[];
}

export const PallazoProjects: ProjectDetail[] = [
  {
    id: 1,
    title: "THE VAULT",
    location: "Shakleshpura",
    tag: "Residential Farm House",
    spec: "6000 sq ft • 2026 Milestone",
    service: "Turnkey & Landscaping",
    img: "https://www.buildahome.in/images/landing-page/chidanand-dream-home.webp",
    description: "A sanctuary of concrete and glass nestled in the lush greenery of Shakleshpura. This project redefined luxury farm living by blending industrial minimalism with the organic landscape.",
    client: "Elite Private Estate",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200"
    ],
    challenges: "The remote location required significant logistical planning for heavy machinery and material transport through narrow forest roads during heavy monsoon seasons.",
    solutions: "We implemented an on-site pre-casting unit to reduce transportation overheads and utilized local stone for structural foundations to minimize environmental footprint.",
    technicalDetails: [
      { label: "Concrete Grade", value: "M35 High Strength" },
      { label: "Glass Type", value: "Triple-Glazed Low-E" },
      { label: "Structure", value: "Post-Tensioned Slabs" },
      { label: "Landscaping", value: "Xeriscaping Indigenous" }
    ]
  },
  {
    id: 2,
    title: "HOSACHIGURU ABHIVRUDHI",
    location: "Hindupur",
    tag: "Commercial Farm Retreat",
    spec: "40,000 sq ft • Delivered 2026",
    service: "Project Management",
    img: "https://www.buildahome.in/images/landing-page/roopa-dream-home.webp",
    description: "A massive commercial retreat focused on agri-tourism. We provided oversight for the entire development, ensuring structural integrity across diverse building types.",
    client: "Hosachiguru Ventures",
    gallery: [
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1598228723793-52759bba239c?auto=format&fit=crop&q=80&w=1200"
    ],
    challenges: "Managing multiple sub-contractors on a sprawling 40,000 sq ft site while maintaining uniform quality and safety standards.",
    solutions: "Deployed a centralized Project Management Information System (PMIS) for real-time tracking and daily drone inspections to ensure adherence to architectural blueprints.",
    technicalDetails: [
      { label: "Site Area", value: "10+ Acres" },
      { label: "Structural Type", value: "PEB & RCC Mix" },
      { label: "Efficiency", value: "Solar Grid Integrated" }
    ]
  },
  {
    id: 3,
    title: "SLK GREEN TECH PARK",
    location: "Near Manyata Tech Park",
    tag: "Commercial Hub",
    spec: "External Dev • 2026 Ready",
    service: "External Development",
    img: "https://www.buildahome.in/images/landing-page/sumalatha-dream-home.webp",
    description: "Infrastructure and external development for one of Bangalore's upcoming tech landmarks. Focus on heavy-duty paving, drainage, and landscape architecture.",
    client: "SLK Software",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=1200"
    ],
    challenges: "Strict timeline requirements due to the park's grand opening date, requiring round-the-clock shift management.",
    solutions: "Pre-fabricated concrete pavers and modular drainage systems were utilized to cut execution time by 30% without compromising durability.",
    technicalDetails: [
      { label: "Paving Load", value: "Heavy Industrial Grade" },
      { label: "Drainage", value: "STP Integrated" },
      { label: "Lighting", value: "Smart IoT Controlled" }
    ]
  },
  {
    id: 4,
    title: "CHIDANAND RESIDENCE",
    location: "Koramangala",
    tag: "Luxury Living",
    spec: "Premium Villa 2026",
    service: "Interior Execution",
    img: "https://www.buildahome.in/images/landing-page/nikhil-kulkarni-dream-home.webp",
    description: "A masterclass in contemporary interior design. Every room in this Koramangala villa was crafted to reflect the client's global lifestyle through bespoke furniture and smart automation.",
    client: "Private Executive",
    gallery: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200"
    ],
    challenges: "Retrofitting advanced smart home automation into an existing structural shell with minimal visible cabling.",
    solutions: "Custom paneling and acoustic ceilings were designed specifically to house hardware and wiring while enhancing the home's aesthetic value.",
    technicalDetails: [
      { label: "Woodwork", value: "Teak & Veneer Mix" },
      { label: "Automation", value: "Lutron Integrated" },
      { label: "Flooring", value: "Italian Statuario Marble" }
    ]
  },
  {
    id: 5,
    title: "SUDHIR DREAM HOME",
    location: "HSR Layout",
    tag: "Residential",
    spec: "Completed Q3 2026",
    service: "Full Turnkey",
    img: "https://www.buildahome.in/images/landing-page/sudhir-dream-home.webp",
    description: "An urban masterpiece in HSR Layout. This turnkey project handled everything from excavation to the final light bulb, focusing on space optimization for a compact city plot.",
    client: "Sudhir Kumar",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1200"
    ],
    challenges: "Maximizing natural light and ventilation in a high-density neighborhood with shared property lines.",
    solutions: "Strategically placed internal courtyards and double-height ceilings were used to create a stack-ventilation effect and pull light into the core of the house.",
    technicalDetails: [
      { label: "Plot Size", value: "30x40 Site" },
      { label: "Build Area", value: "3400 sq ft" },
      { label: "Plumbing", value: "CPVC Soundproof" }
    ]
  },
  {
    id: 6,
    title: "VISHAK ESTATE",
    location: "Indiranagar",
    tag: "High-End Residential",
    spec: "Architectural Landmark 2026",
    service: "Remodeling",
    img: "https://www.buildahome.in/images/landing-page/vishak-dream-home.webp",
    description: "A complete overhaul of a legacy Indiranagar property. We transformed a 30-year-old structure into a modern architectural landmark while preserving its soul.",
    client: "Vishak R.",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&q=80&w=1200"
    ],
    challenges: "Maintaining structural safety while removing internal load-bearing walls to create an open-plan living area.",
    solutions: "Reinforced Steel Joists (RSJs) were integrated seamlessly into the ceiling structure to support the upper floors, allowing for a column-free ground floor.",
    technicalDetails: [
      { label: "Structural Retro", value: "Carbon Fiber Wrapping" },
      { label: "Windows", value: "Schuco Aluminum" },
      { label: "Kitchen", value: "Bespoke German" }
    ]
  }
];

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface Speaker {
  id: string;
  name: string;
  title: string;
  role: string;
  image: string;
  bio: string;
  experience: string;
  linkedin: string;
  skills: string[];
}

export interface AgendaItem {
  time: string;
  title: string;
  description: string;
  speaker?: string;
  tag: 'Registration' | 'Core Session' | 'Break' | 'Hands-on' | 'Keynote';
  highlights: string[];
}

export interface OrganizerGroup {
  category: string;
  members: {
    name: string;
    role: string;
    dept?: string;
    email?: string;
    image?: string;
  }[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Studio' | 'Interface' | 'Sessions' | 'Projects' | 'Workspace';
  image: string;
  caption: string;
}

export const WORKSHOP_INFO = {
  title: "Workshop on Multimedia Design: From Idea to Impact Using Figma",
  subheading: "Hands-on Workshop for Students to Learn UI/UX Design, Prototyping, Typography, Color Theory and Real-world Design Workflow.",
  college: "Panimalar Engineering College",
  department: "Department of Artificial Intelligence & Machine Learning",
  date: "30 July 2026",
  time: "08:30 AM – 02:30 PM",
  venue: "AV Hall, Department of AI & ML, PEC Campus",
  mode: "Offline Hands-On Workshop",
  seatsTotal: 150,
  seatsFilled: 142,
  contactPhone: "+91 98765 43210 / +91 94440 12345",
  contactEmail: "aiml.workshop@panimalar.ac.in",
  address: "Bangalore Trunk Road, Varadharajapuram, Poonamallee, Chennai, Tamil Nadu 600123",
};

export const FEATURE_CARDS: FeatureCard[] = [
  {
    id: "ui-design",
    title: "UI Design",
    description: "Craft visually compelling user interfaces adhering to visual hierarchy, grids, and atomic design frameworks.",
    iconName: "Layout",
    badge: "Core"
  },
  {
    id: "ux-principles",
    title: "UX Principles",
    description: "Master user research, mental models, accessibility (WCAG), usability testing, and wireframing.",
    iconName: "Compass",
    badge: "Essential"
  },
  {
    id: "typography",
    title: "Typography",
    description: "Select font pairings, establish modular scale ratios, line heights, tracking, and optical alignment.",
    iconName: "Type",
    badge: "Styling"
  },
  {
    id: "color-theory",
    title: "Color Theory",
    description: "Build WCAG-compliant color palettes, semantic tokens, dark mode systems, and vibrant glass gradients.",
    iconName: "Palette",
    badge: "Aesthetics"
  },
  {
    id: "auto-layout",
    title: "Auto Layout",
    description: "Build flexible, pixel-perfect responsive layouts that adapt dynamically like modern CSS Flexbox.",
    iconName: "Maximize2",
    badge: "Figma Pro"
  },
  {
    id: "components",
    title: "Components",
    description: "Design reusable components, variant sets, properties, interactive states, and component libraries.",
    iconName: "Layers",
    badge: "Figma Pro"
  },
  {
    id: "prototyping",
    title: "Prototyping",
    description: "Create realistic micro-interactions, smart animations, page transitions, and interactive user flows.",
    iconName: "Smartphone",
    badge: "Interactive"
  },
  {
    id: "design-systems",
    title: "Design Systems",
    description: "Organize design tokens, UI kits, documentation, and handover specs for engineering production.",
    iconName: "Cpu",
    badge: "Industry Standard"
  }
];

export const LEARNING_OUTCOMES = [
  {
    title: "Design Thinking",
    description: "Deconstruct complex problems into user-centric design solutions with empathy mapping and persona creation.",
    iconName: "Lightbulb",
    skills: ["Empathy Maps", "Problem Framing", "User Journeys"]
  },
  {
    title: "Wireframing",
    description: "Translate rough conceptual ideas into low-fidelity structural skeletons and user navigation flows rapidly.",
    iconName: "PenTool",
    skills: ["Low-Fi Sketches", "Information Architecture", "User Loops"]
  },
  {
    title: "High Fidelity UI",
    description: "Transform wireframes into pixel-perfect polished interfaces with modern shadows, glassmorphism, and color.",
    iconName: "Sparkles",
    skills: ["Pixel Accuracy", "Visual Hierarchy", "Modern UI"]
  },
  {
    title: "Interactive Prototypes",
    description: "Link screens with Smart Animate physics, hover triggers, overlay modals, and realistic mobile gestures.",
    iconName: "PlayCircle",
    skills: ["Smart Animate", "Micro-Interactions", "User Testing"]
  },
  {
    title: "Responsive Design",
    description: "Ensure flawless layout behavior across mobile screens, tablet devices, and widescreen desktop monitors.",
    iconName: "Monitor",
    skills: ["Breakpoints", "Fluid Grids", "Auto Layout 5.0"]
  },
  {
    title: "Team Collaboration",
    description: "Work live with peers on a shared digital canvas using multiplayer cursors, inline comments, and audio huddles.",
    iconName: "Users",
    skills: ["Multiplayer Figma", "Feedback Loops", "Version Control"]
  },
  {
    title: "Figma Shortcuts",
    description: "Unlock rapid 10x design speed using keyboard hotkeys, quick actions, plugins, and batch editing techniques.",
    iconName: "Command",
    skills: ["Hotkeys", "Batch Rename", "Figma Plugins"]
  },
  {
    title: "Portfolio Building",
    description: "Format your workshop projects into a recruiter-ready Behance and Dribbble case study with rationale.",
    iconName: "Briefcase",
    skills: ["Case Studies", "Behance Kit", "Recruiter Pitch"]
  }
];

export const SPEAKERS: Speaker[] = [
  {
    id: "subramonium",
    name: "Mr. Subramonium",
    role: "UI & Interaction Designer",
    title: "Senior Product Designer & Interaction Specialist",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    bio: "Passionate Interaction Designer with 8+ years crafting digital experiences for enterprise SaaS and mobile products. Specialist in motion design, Figma prototyping, and design system governance.",
    experience: "8+ Years Industry Exp",
    linkedin: "https://linkedin.com",
    skills: ["Figma Systems", "Interaction Design", "Design Systems", "Prototyping"]
  },
  {
    id: "vijay",
    name: "Mr. Vijay",
    role: "Senior Design Lead",
    title: "Head of User Experience & Product Architecture",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    bio: "Over a decade leading cross-functional design teams. Expert in transforming abstract product visions into scalable digital ecosystems. Key speaker at national UX conventions.",
    experience: "10+ Years Industry Exp",
    linkedin: "https://linkedin.com",
    skills: ["Product Strategy", "User Research", "Auto Layout", "Engineering Handover"]
  }
];

export const AGENDA_ITEMS: AgendaItem[] = [
  {
    time: "08:30 AM",
    title: "Arrival & Welcome Kit Distribution",
    description: "Check-in at AV Hall reception counter, badge collection, ID verification, and setup of Figma workshop accounts.",
    tag: "Registration",
    highlights: ["Registration Verification", "Figma Account Check", "Welcome Kit"]
  },
  {
    time: "09:00 AM",
    title: "Inauguration & Welcome Address",
    description: "Opening ceremonial remarks by the Management, Head of Department AI & ML, and Student Organizers.",
    tag: "Keynote",
    highlights: ["Inaugural Speech", "Dignitary Address", "Theme Overview"]
  },
  {
    time: "09:30 AM",
    title: "Introduction to Multimedia Design & Design Thinking",
    description: "Exploring the modern design landscape, UX psychology, visual hierarchy, and the transition from Idea to Impact.",
    speaker: "Mr. Subramonium",
    tag: "Core Session",
    highlights: ["Mental Models", "Visual Hierarchy", "Design Thinking Framework"]
  },
  {
    time: "10:30 AM",
    title: "Figma Masterclass: Workspace, Vectors & Auto Layout",
    description: "Deep dive into Figma tools, frame structures, vector network editing, constraint logic, and dynamic Auto Layout 5.0.",
    speaker: "Mr. Vijay",
    tag: "Core Session",
    highlights: ["Vector Networks", "Constraints", "Auto Layout Tricks"]
  },
  {
    time: "11:30 AM",
    title: "UI Design Principles: Typography, Color & Design Systems",
    description: "Constructing scalable color palettes with WCAG contrast, font pairings, modular type scales, and reusable component libraries.",
    speaker: "Mr. Subramonium",
    tag: "Core Session",
    highlights: ["WCAG Accessibility", "Type Scales", "Variant Components"]
  },
  {
    time: "12:30 PM",
    title: "Networking & Lunch Break",
    description: "Complimentary lunch served for all participants. Interact with speakers, mentors, and fellow design enthusiasts.",
    tag: "Break",
    highlights: ["Complimentary Lunch", "Peer Networking", "Mentor Interaction"]
  },
  {
    time: "01:15 PM",
    title: "Hands-on Design Challenge & Prototyping Sprint",
    description: "Live design sprint! Students build a complete mobile app UI screen and interactive prototype guided by mentors.",
    speaker: "Mr. Subramonium & Mr. Vijay",
    tag: "Hands-on",
    highlights: ["Live Screen Creation", "Smart Animate Prototyping", "Mentor Reviews"]
  },
  {
    time: "02:15 PM",
    title: "Q&A Session & Live Project Showcase",
    description: "Presentation of outstanding student designs on the main AV projector screen, feedback from speakers, and Q&A.",
    speaker: "All Speakers",
    tag: "Core Session",
    highlights: ["Student Spotlight", "Expert Critique", "Career Q&A"]
  },
  {
    time: "02:30 PM",
    title: "Certificate Distribution & Valedictory",
    description: "Awarding official E-Certificates, recognizing winning design sprint entries, group photo session, and wrap-up.",
    tag: "Keynote",
    highlights: ["Certificate Distribution", "Winner Awards", "Group Photography"]
  }
];

export const WHY_ATTEND_POINTS = [
  {
    title: "Hands-on Learning",
    description: "100% practical lab experience — build real Figma designs alongside expert guidance instead of dry passive slides.",
    iconName: "MousePointerClick",
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Industry Experts",
    description: "Learn directly from senior design leads and interaction specialists working in top tech companies.",
    iconName: "Award",
    color: "from-indigo-600 to-blue-500"
  },
  {
    title: "Real Projects",
    description: "Complete a functional mobile application UI prototype during the session that goes directly into your portfolio.",
    iconName: "FolderKanban",
    color: "from-cyan-500 to-teal-400"
  },
  {
    title: "Interactive Session",
    description: "Ask questions live, get direct screen feedback from mentors, and collaborate on shared Figma multiplayer boards.",
    iconName: "MessageSquare",
    color: "from-sky-500 to-blue-600"
  },
  {
    title: "Networking",
    description: "Connect with like-minded student developers, UI designers, and AI/ML tech innovators across campus.",
    iconName: "Share2",
    color: "from-blue-600 to-indigo-500"
  },
  {
    title: "Career Guidance",
    description: "Gain roadmap clarity on UX design careers, internship prep, Dribbble/Behance exposure, and high-paying UI roles.",
    iconName: "TrendingUp",
    color: "from-teal-400 to-cyan-500"
  },
  {
    title: "Official Certificate",
    description: "Receive a recognized E-Certificate issued by Panimalar Engineering College and IEEE Student Branch.",
    iconName: "FileCheck",
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Design Resources",
    description: "Gain permanent access to an exclusive Figma Starter UI Kit, shortcut cheat-sheets, and 50+ premium design tokens.",
    iconName: "DownloadCloud",
    color: "from-cyan-400 to-blue-600"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Collaborative UI Wireframing",
    category: "Sessions",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    caption: "Students engaged in collaborative design thinking & whiteboard wireframing."
  },
  {
    id: "g2",
    title: "Figma Dark Mode Interface",
    category: "Interface",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80",
    caption: "Designing high-fidelity dark mode components with Figma variant tokens."
  },
  {
    id: "g3",
    title: "Futuristic Mobile UI Mockup",
    category: "Projects",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    caption: "Sample student project: AI-driven analytics dashboard for iOS."
  },
  {
    id: "g4",
    title: "Live Hands-on Lab Session",
    category: "Sessions",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    caption: "Interactive lab session at AV Hall with real-time mentor assistance."
  },
  {
    id: "g5",
    title: "Design System Tokens",
    category: "Studio",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    caption: "Building cohesive color swatches, typography scales, and atomic components."
  },
  {
    id: "g6",
    title: "Ergonomic Workspace Setup",
    category: "Workspace",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    caption: "Modern workstation with dual monitors running Figma and code previews."
  }
];

export const ORGANIZERS: OrganizerGroup[] = [
  {
    category: "Chief Patrons",
    members: [
      {
        name: "Dr. P. Chinnadurai, M.A., Ph.D.",
        role: "Secretary & Correspondent",
        dept: "Panimalar Group of Institutions"
      },
      {
        name: "Mrs. C. Vijaya Rajeswari",
        role: "Director",
        dept: "Panimalar Engineering College"
      },
      {
        name: "Dr. C. Sakthi Kumar, M.E., Ph.D.",
        role: "Director",
        dept: "Panimalar Engineering College"
      }
    ]
  },
  {
    category: "Convenor",
    members: [
      {
        name: "Dr. S. Malathi, M.E., Ph.D.",
        role: "Professor & Head of Department",
        dept: "Department of AI & ML",
        email: "hod.aiml@panimalar.ac.in"
      }
    ]
  },
  {
    category: "Faculty Coordinators",
    members: [
      {
        name: "Dr. K. Rajesh, M.E., Ph.D.",
        role: "Associate Professor",
        dept: "Dept. of AI & ML",
        email: "rajesh.k@panimalar.ac.in"
      },
      {
        name: "Mrs. R. Priyadharshini, M.Tech.",
        role: "Assistant Professor",
        dept: "Dept. of AI & ML",
        email: "priya.r@panimalar.ac.in"
      }
    ]
  },
  {
    category: "Student Coordinators",
    members: [
      {
        name: "Aakash V.",
        role: "President, AI & ML Design Club",
        dept: "4th Year AI & ML",
        email: "aakash.v@pec.edu"
      },
      {
        name: "Harini R.",
        role: "IEEE Student Lead & UI Coordinator",
        dept: "3rd Year AI & ML",
        email: "harini.r@pec.edu"
      },
      {
        name: "Karthik M.",
        role: "IIC Innovation Lead",
        dept: "3rd Year AI & ML",
        email: "karthik.m@pec.edu"
      }
    ]
  }
];

export const FIGMA_SHORTCUTS = [
  { key: "Shift + A", action: "Add Auto Layout" },
  { key: "Option / Alt + Cmd / Ctrl + C", action: "Copy Properties" },
  { key: "Cmd / Ctrl + Option / Alt + K", action: "Create Component" },
  { key: "Cmd / Ctrl + D", action: "Duplicate Selection" },
  { key: "Shift + 0", action: "Zoom to 100%" },
  { key: "Shift + 1", action: "Zoom to Fit" },
  { key: "Shift + 2", action: "Zoom to Selection" },
  { key: "F / A", action: "Frame Tool" },
  { key: "R", action: "Rectangle Tool" },
  { key: "T", action: "Text Tool" },
  { key: "V", action: "Move Tool" },
  { key: "P", action: "Pen Tool" },
  { key: "Cmd / Ctrl + R", action: "Batch Rename Layers" },
  { key: "Option / Alt + Drag", action: "Duplicate Element while Dragging" }
];

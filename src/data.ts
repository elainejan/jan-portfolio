import { Project, ExperienceItem, Testimonial, SkillGroup } from './types';
import profilePic from './assets/images/jan-profile.JPG';
import profileTwo from './assets/images/profile-two.jpg';
import apexGridMockup from './assets/images/apex_telemetry_screenshot_1784550834114.jpg';

export const HERO_IMAGE = profilePic;
export const ABOUT_HERO_IMAGE = profilePic;
export const SKILLS_CODE_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuAz7faakQUTQePjhY56-7zHg46NmLF8mC7kiek_vT9VdyUf0SJ6qb4_Chhk18mOaEppeuI1b7W3xV1syF7Pq-Y8JDBPV10Ki1v09e168bKPWTLkNMu9ZQlg0hpqxFRkrRxy08-NCrfCTucZT7SVz7y97SssynYyepC2EjjaJlBIB_qbSzF2V7vmciTmU5lHjlh1zw1gXQB7OTuBHq5hOAyGr60DaLMA8H72PRUF4aCxHfYsAtXUriLppA";
export const SKILLS_FIGMA_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuB2Pl5px-juIl9oBeUoZBv25_QDJ1g9wwmWgfK7OXMAVDV5a-62lEmPkMVw293Z4OPXEa4ehAowxhcDNE7pUPhi7Gjgqwp8qbws_TeTdpLy8Ck4Qmfhi5RVWjQELi5DNbtP_H0fziFY2SlhJ-PQP3IzqJhfRmQ-Po9uvyOg6onTDB1HG1hRxcUQF7SlHbq1z57IxBDYz5leoD7lo4ZR2erDuHEgy0UkXj6HbB4Dp03DoJO53w8-8StCfQ";

export const PROJECTS: Project[] = [
  {
    id: "lumina-analytics",
    title: "Lumina Analytics",
    description: "A comprehensive SaaS intelligence platform displaying highly responsive data tables, fluid dark-mode visualization, and contextual filters.",
    longDescription: "Lumina Analytics was engineered from the ground up to handle high-density business intelligence. Featuring micro-interaction systems for advanced row sorting, multi-tiered grouping, and instant search, the application sets a new benchmark for data visual efficiency. Custom charting modules display predictive financial forecasting with smooth SVG transitions and precise tooltip tracking.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDu0ZGqQe4kvOn2FYpMGR0bcmj10wwCmNYZT8M3LbRJ5ArfM-yONeqU04ahYV3l89rB4VgMl5Q2tyFTXkk8xKI6LdnhMS2xVQF-lnAA4o0Ssbc9emUM1KD1QYeYw5xIuQu8-WHEvvbxYaQJxc2zFcjGfsKcArWXQCWjalwCOLssoNIW_tm8d73diqwA1QkmzJDZGQQwQQ7rbnZzsco2xUXmlQZxTR6TsjfBuKZS5o8gPPpjn_95WhCEtA",
    tags: ["React", "TypeScript", "D3.js", "Tailwind CSS", "Data Visualization"],
    category: "development",
    featured: true,
    metrics: [
      { label: "Page Speed Lift", value: "+ 40%" },
      { label: "Query Response", value: "< 45ms" },
      { label: "Client Adaptations", value: "50+ IR Sites" }
    ]
  },
  {
    id: "cortex-ai-bridge",
    title: "Cortex AI Bridge",
    description: "An intuitive web editor illustrating complex model nodes, neural training maps, and live hyperparameter adjustments.",
    longDescription: "Cortex is a visual playground designed to demystify complex artificial intelligence parameters. We implemented interactive nodes built on custom canvas physics, letting developers drag, connect, and configure neural weights directly. Staggered visual telemetry maps provide immediate gradient descent paths, making heavy-duty mathematics beautifully visible and interactively approachable.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC83r4Q_I-VcgBG4MEUajjJeq2S988JOHgYIrHN-WXYDI5lfZvtZCtKqbSJkqQE06l_56M4xoqMjdnUnFCF3S0bJSruufnIKt29KhfY0tTtngZJ08zxlPwq684wFm2Ww8qkhCCJnVaOaK1_OxGA0A9OXVHZFk8mFrmGEGahhYrxUtJFn-pzVn9IxOWUT7_cdT43mWsXpTHkl3P9k8zTiQQZ92M6rKorCemJNF6FKFX6X94NYSV81QxCTQ",
    tags: ["Figma", "UI Design", "React", "HTML5 Canvas", "Tailwind CSS"],
    category: "hybrid",
    featured: true,
    metrics: [
      { label: "Rendering Speed", value: "60 FPS" },
      { label: "Overhead Reduction", value: "- 30%" },
      { label: "Interactive Tools", value: "15+ Global Clients" }
    ]
  },
  {
    id: "aether-travel",
    title: "Aether Travel",
    description: "A luxury lifestyle concept highlighting rich visual destination cards, seamless booking funnels, and striking mobile-first layout design.",
    longDescription: "Aether redefines mobile booking by treating imagery as the primary interactive medium. Combining massive, vibrant destination assets with delicate typography, we designed the entire flow around single-swipe transitions. The checkout pipeline features state-saving capabilities, context-sensitive micro-copy, and a bespoke map-view layout that bridges the physical and digital travel experience.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbjjATwx9CsEO2gsFU91lW5kilokqh4HesL6kalA3t1KJ1_b3GoPeOaAb757genYGOlICJDSfCul_pNZZvmZJZXuzFmrDL-0H1C6phbFPIRCo6cHOZPkv1Qwj2wmpg4eU1U8TONsEdErTH6Um4if1dBSu9wVjUHTbFmCDcyK0VGcvRap5fGlpVQXHxa7edw_VgDvxxRFaX_Kt5BYdMYAfMmW6rmzfpKs4dxhpAQ0lJIyOVY25SYu-aiQ",
    tags: ["Mobile UX", "Figma Design", "Micro-interactions", "Interaction Design"],
    category: "design",
    featured: false,
    metrics: [
      { label: "Funnel Conversion", value: "+ 52%" },
      { label: "Interactive Latency", value: "< 12ms" },
      { label: "Page Weight Saved", value: "40%" }
    ]
  },
  {
    id: "prism-creative-engine",
    title: "Prism Creative Engine",
    description: "An experimental 3D WebGL interface focusing on fluid physics, crystalline refraction, and generative shader systems.",
    longDescription: "Prism represents the absolute frontier of browser graphics. By pairing custom fragment shaders with a lightweight rendering loop, we generated highly realistic crystalline refraction and fluid dynamics. Users can interactively modify physical characteristics—like viscosity, drag, and ambient light scattering—in real time, watching the crystalline shapes adjust dynamically at 60 frames per second.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCq2w050JswVA-mEtaJGJQ7NMZYgKUzR8cMlnQokDLxIAa7WwoNAfKMFGeEbuk-yKmsAQLhjvTMlIU_u0c4WOyKRVNKnjVswsusI_Wu9JlVxwowXjUuL2_8PcuqSCUKHlmT61RDYCLELMJrd9jsrXDAg1lUuUcXbBtIi1eDdT4z-k3_2-huEVYJOKRM1CbL0gebuXZJ90qJH594TOruuCGZasouuVIDsSggMs1yi7WCz_rGwXmHrFrYiw",
    tags: ["WebGL", "Three.js", "GLSL Shaders", "Creative Coding", "Physics Engine"],
    category: "hybrid",
    featured: false,
    metrics: [
      { label: "FPS Performance", value: "60 FPS" },
      { label: "GPU Load Reduction", value: "- 25%" },
      { label: "Canvas Load Time", value: "0.2s" }
    ]
  },
  {
    id: "aether-finance",
    title: "Aether Finance",
    description: "An elegant wealth management interface balancing typography, generous negative space, and deep structural data alignment.",
    longDescription: "Designed to replace sterile tabular reports with visual comfort. Beautifully paired grotesque and serif typefaces organize complex asset allocations, while modern charts track long-term equity growth without visual noise.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQ03WWHnGnetMVcfeOTcnK_Yl948ZchuTot6yG8HvOghvAQezyLnuCt6qmwkn3jO8iDyHgnOmxP7gZiowhc8xfde78JwKt-AodLz5IcMThOQKnqhJDMp97vRlvQ_D9rsphTc3xagZlxRr0z0VKdIoCpUAuSGRW7t7jsKGQKpPzYYk9HmUVwkkBfPaZ2EdPzGDHs5NEH7sYMgIY039Q506YyeZusV8fKxI2QZzA7moS499WQ6-MQkwBbQ",
    tags: ["Finance UX", "Modern Grid", "High Contrast", "Tailwind CSS"],
    category: "design",
    featured: true
  },
  {
    id: "lumina-ecomm",
    title: "Lumina E-Comm",
    description: "An immersive digital shopping hub showcasing custom-framed layout aesthetics, smooth item filters, and fluid checkouts.",
    longDescription: "Reimagined e-commerce using modular editorial grids. Products enter with delicate transitions, and checkout options dynamically slide into place, creating a tactile purchasing flow that values user-engagement metrics.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBauzB6wWdzz0scwc9dS8sJPdkfq-X4_XzMAU57q8FfkDhV0oQzaRQgSvQlmUIfTTwSr3RClXs3vdSdBDvFipFT0XICt2w_eRgTnSXmyTrln0zYcoXvNOwtUP0y2k-ihoDLOpEepLIzZ9tEyQ3RtsZnsM4mF8SJfB5jj9IZGzT9M2LdFBJ86XzpMIBEDwgw3KXbvWk0uDA6s0LXMziBCc1ZzNR5x8U-MVTb8J5b_iz_yTYbhFGR1HUPpw",
    tags: ["E-Commerce", "CSS Grid", "Fluid Transitions", "Interactive Filters"],
    category: "development",
    featured: true
  },
  {
    id: "apex-grid-black",
    title: "Apex Grid",
    description: "A precision F1 race telemetry cockpit showcasing real-time driver tracking, sector analysis, and a high-performance bento grid interface.",
    longDescription: "Apex Grid (Telemetry Mapping) is an immersive, dark-themed bento-style cockpit built to demonstrate advanced telemetry mapping systems and interactive sports data widgets. Utilizing professional-grade track analytics, the application displays sector-dominance charts, drag indexes, and real-time racer metrics optimized for sub-millisecond updates.",
    image: apexGridMockup,
    tags: ["React", "TypeScript", "Bento Grid", "High Contrast", "Telemetry Data"],
    category: "development",
    featured: true,
    link: "https://apex-grid-black.vercel.app/",
    metrics: [
      { label: "Update Latency", value: "< 150ms" },
      { label: "Total Circuits", value: "24 Track Sets" },
      { label: "Interactive Drivers", value: "20 Standings" }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp1",
    role: "Software Engineer",
    company: "Europe Investors Direct AB Phil",
    period: "April 2022 - Present",
    description: "Developing and maintaining web-based investor relations platforms for global enterprise clients using React, TypeScript, and modern front-end tooling. Specializing in advanced state management, component architecture, performance optimization, and custom web widget delivery.",
    achievements: [
      "Engineered and scaled responsive investor relations tools using React and modern architectures.",
      "Customized robust widget solutions delivering critical financial metrics for 50+ global clients.",
      "Optimized load performance by 40%, ensuring fluid rendering speeds and responsive states.",
      "Established comprehensive testing, code review standards, and cross-browser quality assurance protocols.",
      "Mentored and provided architectural direction to junior engineers to maintain code quality.",
      "Collaborated with international teams to deliver high-impact, deadline-driven software solutions."
    ],
    image: profileTwo,
    tags: ["React", "TypeScript", "State Management", "Performance Optimization", "Investor Relations", "Custom Widgets", "Code Reviews"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Marcus Thorne",
    role: "Product Manager",
    company: "Aether Labs",
    quote: "Incredibly detail-oriented. The transition from Figma layouts into raw interactive code is completely seamless. They don't just mimic design; they understand layout behavior.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-DHcnqhT0rtHmz33tmJ5fJb39C5DqouylyyhDQaJGI42TbhQ9ZmABk9RyoOfeh-vD1vCDVcveCUtXGhRik2XZCftmMlLw6j8BLOOGzz0OM0Mt30Y3_hVfZjcyEanMxM0rjQmZg8FlI_cVJG05Rk5-SCKnguuvRU1uZRbHvs2DF2JPueFSWeTojDPZugI6FrcoKR_esfBKC9iXiu4qbfvtC9rMXmkHFGIik1x8dyblr898N3gigkPOKw"
  },
  {
    id: "t2",
    name: "Arthur Vance",
    role: "Design Lead",
    company: "Lumina Systems",
    quote: "A rare hybrid talent who truly understands proportional margins, negative space, and typographic hierarchies—and actually possesses the engineering mastery to implement them beautifully.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtEq2U_WdCjzqsm6gfGU54eFmrh3omNkCbMvVfXvBikMSZPNMrQ7ojDSzlYJc6d_8uP8j1uHgHF6LqO-8f_DdsrUFcWlY8smYiOgJaNrARINGVAeJTRCiAVml78Qwa4QJDpmr57xJm5XTGd7smeGhuQsbFYl793nkViDx1EjDaXc4WWvEhgpKrpcNhn5NBMo2RzVopf2cFKQhMMiYcs0a-fd4EAz-uf3Ob604-_LTC-jhpRHwarlx1Uw"
  },
  {
    id: "t3",
    name: "Elena Rossi",
    role: "CEO",
    company: "Synthetix AI",
    quote: "Our entire product aesthetic and interactive fluidity elevated overnight. A visionary partner who listens deeply, respects the core layout, and executes with unbelievable speed and precision.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBy59KDdD492zLT75zNt7GGS6Evel9HUbzX8tukKFytaSMMI1izBk09d2tyzVRFuGbmqC8r3uRoEtt4_LX9VKNV2buDHRQ7om2H5QUAsaSWaNCpRtuBC-H5ltn27Mj3D1fZYx2nLIw4fGyYX1Y4FkLnSELNo4ZNe1A4fX65FPIbnkNc079KZwsUBcXq7KMdkznV8S2CIxKBRFZh3T3S39FV1Tw53a8dlRCXKbJf6MMl4xx3aUg83cJAUQ"
  }
];

export const SKILLS: SkillGroup[] = [
  {
    category: "Front-End Development",
    skills: [
      { name: "React & TypeScript Architecture", level: 95 },
      { name: "Complex State Management", level: 90 },
      { name: "Tailwind CSS & Responsive Systems", level: 95 },
      { name: "Cross-Browser Stability & Core Audits", level: 90 },
      { name: "Performance Optimization", level: 92 }
    ]
  },
  {
    category: "Investor Relations & Domain Expertise",
    skills: [
      { name: "Investor Relations Tools Integration", level: 95 },
      { name: "Custom Client Solutions", level: 92 },
      { name: "Code Quality & Code Reviews", level: 85 },
      { name: "Proactive Technical Problem-Solving", level: 90 }
    ]
  },
  {
    category: "Workflows & Professional Competencies",
    skills: [
      { name: "Collaborative Git Workflows", level: 80 },
      { name: "Team & Client Communication", level: 90 },
      { name: "Deadline-Driven Delivery", level: 95 },
      { name: "Microsoft Office Suite", level: 85 }
    ]
  }
];

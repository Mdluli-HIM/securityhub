type NavMenuLink = {
  label: string;
  href: string;
  description?: string;
};

type NavMenuSection = {
  title: string;
  links: NavMenuLink[];
};

type NavMegaMenu = {
  sections: NavMenuSection[];
  asideTitle: string;
  asideCopy: string;
  asideLabel?: string;
};

type NavItem = {
  label: string;
  href: string;
  trailing?: string;
  menu?: NavMegaMenu;
};

type HeroStat = {
  value: string;
  label: string;
};

type Service = {
  title: string;
  description: string;
};

type Capability = {
  index: string;
  eyebrow: string;
  title: string;
  description: string;
};

type Sector = {
  name: string;
  description: string;
};

type ProcessStep = {
  index: string;
  title: string;
  description: string;
};

type FooterGroup = {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
};

type TrustMark = {
  index: string;
  title: string;
  description: string;
};

type ImageModule = {
  eyebrow: string;
  title: string;
  description: string;
  caption: string;
};

type SiteContent = {
  companyName: string;
  nav: NavItem[];
  hero: {
    title: string;
    subtitle: string;
    panelTitle: string;
    panelCopy: string;
    primaryCta: string;
    secondaryCta: string;
    stats: HeroStat[];
  };
  servicesIntro: string;
  services: Service[];
  capabilities: Capability[];
  sectors: Sector[];
  process: ProcessStep[];
  trustMarks: TrustMark[];
  imageModules: ImageModule[];
  footer: FooterGroup[];
};

export const siteContent: SiteContent = {
  companyName: "BLACKRIDGE",
  nav: [
    {
      label: "Solutions",
      href: "#solutions",
      trailing: "+",
      menu: {
        sections: [
          {
            title: "Core Services",
            links: [
              { label: "24/7 Monitoring", href: "#solutions" },
              { label: "Access Control", href: "#solutions" },
              { label: "Incident Response", href: "#solutions" },
              { label: "Executive Protection", href: "#solutions" },
            ],
          },
          {
            title: "Systems",
            links: [
              { label: "Integrated Surveillance", href: "#platform" },
              { label: "Perimeter Security", href: "#platform" },
              { label: "Visitor Control", href: "#platform" },
              { label: "Command Visibility", href: "#platform" },
            ],
          },
          {
            title: "Advisory",
            links: [
              { label: "Risk Reviews", href: "#insights" },
              { label: "Operational Planning", href: "#insights" },
              { label: "Security Consultation", href: "#contact" },
            ],
          },
        ],
        asideTitle: "Premium protection architecture",
        asideLabel: "Integrated protection",
        asideCopy:
          "Modern security systems designed to protect people, property, operations, and reputation without unnecessary complexity.",
      },
    },
    {
      label: "Platform",
      href: "#platform",
      trailing: "+",
      menu: {
        sections: [
          {
            title: "Visibility",
            links: [
              { label: "Live Site Awareness", href: "#platform" },
              { label: "Threat Escalation", href: "#platform" },
              { label: "Operator Oversight", href: "#platform" },
            ],
          },
          {
            title: "Control",
            links: [
              { label: "Credential Logic", href: "#platform" },
              { label: "Restricted Zones", href: "#platform" },
              { label: "Response Workflows", href: "#platform" },
            ],
          },
          {
            title: "Assurance",
            links: [
              { label: "Reporting", href: "#proof" },
              { label: "Review Cycles", href: "#insights" },
              { label: "Consultation", href: "#contact" },
            ],
          },
        ],
        asideTitle: "A calmer control layer",
        asideLabel: "Operational clarity",
        asideCopy:
          "One structured layer for monitoring, control, response, and decision-making across modern security environments.",
      },
    },
    {
      label: "Industries",
      href: "#proof",
      trailing: "+",
      menu: {
        sections: [
          {
            title: "Sites",
            links: [
              { label: "Corporate Offices", href: "#proof" },
              { label: "Luxury Residential", href: "#proof" },
              { label: "Retail & Hospitality", href: "#proof" },
            ],
          },
          {
            title: "Operations",
            links: [
              { label: "Industrial Sites", href: "#proof" },
              { label: "Multi-Site Businesses", href: "#proof" },
              { label: "Executive Movement", href: "#proof" },
            ],
          },
          {
            title: "Applications",
            links: [
              { label: "Asset Protection", href: "#proof" },
              { label: "Business Continuity", href: "#proof" },
              { label: "Discreet Security", href: "#proof" },
            ],
          },
        ],
        asideTitle: "Security designed around the environment",
        asideLabel: "Tailored posture",
        asideCopy:
          "Every environment behaves differently. We design around movement, exposure, risk, and operational pressure.",
      },
    },
    {
      label: "Explore",
      href: "#insights",
      trailing: "+",
      menu: {
        sections: [
          {
            title: "Company",
            links: [
              { label: "About Blackridge", href: "#contact" },
              { label: "Our Method", href: "#insights" },
              { label: "Why Blackridge", href: "#proof" },
            ],
          },
          {
            title: "Resources",
            links: [
              { label: "Security Review", href: "#contact" },
              { label: "Consultation", href: "#contact" },
              { label: "Contact", href: "#contact" },
            ],
          },
          {
            title: "Perspective",
            links: [
              {
                label: "Protocols, not posturing",
                href: "#insights",
                description:
                  "A practical approach to security built on readiness, response, and controlled execution.",
              },
            ],
          },
        ],
        asideTitle: "Protection without theatre",
        asideLabel: "Our point of view",
        asideCopy:
          "We believe premium security should feel disciplined, measured, and operationally effective — not performative.",
      },
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ],
  hero: {
    title: "Security",
    subtitle:
      "Blackridge delivers integrated security systems and operational protection for companies, executive environments, and high-value sites that require calm control and credible response.",
    panelTitle: "Protocols,\nnot posturing.",
    panelCopy:
      "To us, security means reducing exposure before incidents happen, responding with clarity when they do, and building systems that remain dependable under pressure. That is why we design around monitoring, access control, escalation logic, resilience, and operational discipline — not marketing theatre.",
    primaryCta: "Request a Security Review",
    secondaryCta: "Explore Capabilities",
    stats: [
      { value: "24/7", label: "Monitoring readiness" },
      { value: "Rapid", label: "Incident escalation" },
      { value: "Audit", label: "Operational visibility" },
    ],
  },
  servicesIntro:
    "Security should be built into the operation, not added as an afterthought. Blackridge structures protection across people, property, systems, and response.",
  services: [
    {
      title: "24/7 Monitoring",
      description:
        "Continuous monitoring, alert review, and escalation support to help detect and respond to threats without delay.",
    },
    {
      title: "Dedicated Security Oversight",
      description:
        "Focused security guidance that reviews risk, strengthens controls, and supports clients with structured operational planning.",
    },
    {
      title: "Integrated Infrastructure",
      description:
        "Surveillance, access control, and site logic designed to work together as one coordinated security environment.",
    },
    {
      title: "Incident Response Planning",
      description:
        "Documented procedures, priority handling, escalation trees, and role-based workflows for real-world incidents.",
    },
    {
      title: "Operational Continuity",
      description:
        "Security systems and procedures designed to remain dependable under pressure and support uninterrupted operations.",
    },
    {
      title: "Consultation & Risk Review",
      description:
        "Site assessments, exposure analysis, and security recommendations aligned to your business model and environment.",
    },
  ],
  capabilities: [
    {
      index: "01",
      eyebrow: "Secure",
      title: "Your built-in contingency layer.",
      description:
        "We maintain monitoring, response workflows, site reviews, and structured oversight so that protection remains active, not reactive.",
    },
    {
      index: "02",
      eyebrow: "Protected",
      title: "Resilience designed into the system.",
      description:
        "We reduce single points of failure through layered thinking, fallback planning, documented protocols, and dependable operational structure.",
    },
    {
      index: "03",
      eyebrow: "Controlled",
      title: "Access and movement handled with precision.",
      description:
        "Permissions, restricted zones, visitor logic, and controlled entry design help reduce unnecessary exposure while keeping environments functional.",
    },
    {
      index: "04",
      eyebrow: "Private",
      title: "Visibility where needed. Restraint where it matters.",
      description:
        "We build security environments that are auditable and controlled without making people, staff, or clients feel unnecessarily disrupted.",
    },
  ],
  trustMarks: [
    {
      index: "01",
      title: "Readiness by design",
      description:
        "Monitoring, response logic, and operational review are built into the model from the start.",
    },
    {
      index: "02",
      title: "Clear operational control",
      description:
        "We structure access, escalation, and movement so your environment remains controlled under pressure.",
    },
    {
      index: "03",
      title: "Measured visibility",
      description:
        "The right people see the right things at the right time without unnecessary operational noise.",
    },
  ],
  imageModules: [
    {
      eyebrow: "Operations",
      title: "Visibility where decisions happen.",
      description:
        "Use this space for a premium operations-room image, surveillance interface still, or control-centre photography that reinforces readiness and oversight.",
      caption:
        "Suggested image: monitoring room / operator desk / live environment",
    },
    {
      eyebrow: "Access",
      title: "Control that still feels refined.",
      description:
        "Use this space for close-up architectural imagery: controlled entry, executive access points, visitor flow design, or discreet high-end perimeter details.",
      caption:
        "Suggested image: controlled entry / gate / turnstile / executive arrival",
    },
  ],
  sectors: [
    {
      name: "Corporate Offices",
      description:
        "Reception security, employee movement, executive areas, after-hours control, and discreet workplace protection.",
    },
    {
      name: "Luxury Residential",
      description:
        "Design-sensitive security for estates, residences, compounds, and private environments with elevated expectations.",
    },
    {
      name: "Retail & Hospitality",
      description:
        "Customer-facing environments protected through practical access, observation, and response without friction.",
    },
    {
      name: "Industrial Sites",
      description:
        "Perimeter control, restricted zones, response routing, and operational visibility across larger working sites.",
    },
    {
      name: "Executive Protection",
      description:
        "Movement planning, secure arrival strategy, residence coordination, and high-trust protection for leadership profiles.",
    },
    {
      name: "Multi-Site Operations",
      description:
        "Consistent security logic across multiple branches, campuses, or properties with centralized oversight and reporting.",
    },
  ],
  process: [
    {
      index: "01",
      title: "Assess",
      description:
        "We study the site, people flow, risk exposure, control gaps, operational pressure points, and expected security behavior.",
    },
    {
      index: "02",
      title: "Design",
      description:
        "We define monitoring logic, access controls, escalation paths, response procedures, and the overall protection model.",
    },
    {
      index: "03",
      title: "Deploy",
      description:
        "We implement with structure, align operators and stakeholders, and ensure the system works as one coordinated environment.",
    },
    {
      index: "04",
      title: "Refine",
      description:
        "We review performance, adjust protocols, and strengthen the posture over time as your risks and operations evolve.",
    },
  ],
  footer: [
    {
      title: "Solutions",
      links: [
        { label: "Monitoring", href: "#solutions" },
        { label: "Access Control", href: "#solutions" },
        { label: "Incident Response", href: "#solutions" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#contact" },
        { label: "Industries", href: "#proof" },
        { label: "Consultation", href: "#contact" },
      ],
    },
    {
      title: "Explore",
      links: [
        { label: "Our Method", href: "#insights" },
        { label: "Capabilities", href: "#platform" },
        { label: "Security Review", href: "#contact" },
      ],
    },
  ],
};

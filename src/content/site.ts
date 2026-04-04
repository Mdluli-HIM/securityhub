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
  title: string;
  description: string;
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
  footer: FooterGroup[];
};

export const siteContent: SiteContent = {
  companyName: "BLACKRIDGE",
  nav: [
    {
      label: "Services",
      href: "#solutions",
      trailing: "+",
      menu: {
        sections: [
          {
            title: "Building Security",
            links: [
              { label: "24/7 Monitoring", href: "#solutions" },
              { label: "Access Control", href: "#solutions" },
              { label: "Perimeter Protection", href: "#solutions" },
              { label: "Incident Response", href: "#solutions" },
            ],
          },
          {
            title: "Systems",
            links: [
              { label: "CCTV Integration", href: "#platform" },
              { label: "Gate & Entry Control", href: "#platform" },
              { label: "Visitor Management", href: "#platform" },
              { label: "Alarm Integration", href: "#platform" },
            ],
          },
          {
            title: "Support",
            links: [
              { label: "Site Assessments", href: "#insights" },
              { label: "Risk Reviews", href: "#insights" },
              { label: "Security Consultation", href: "#contact" },
            ],
          },
        ],
        asideTitle: "Security for buildings and facilities",
        asideLabel: "Protection systems",
        asideCopy:
          "Blackridge helps secure buildings through monitoring, controlled access, perimeter protection, and practical response planning.",
      },
    },
    {
      label: "Systems",
      href: "#platform",
      trailing: "+",
      menu: {
        sections: [
          {
            title: "Monitoring",
            links: [
              { label: "Live Visibility", href: "#platform" },
              { label: "Event Escalation", href: "#platform" },
              { label: "Operator Oversight", href: "#platform" },
            ],
          },
          {
            title: "Control",
            links: [
              { label: "Restricted Entry", href: "#platform" },
              { label: "Building Access Rules", href: "#platform" },
              { label: "Response Workflows", href: "#platform" },
            ],
          },
          {
            title: "Review",
            links: [
              { label: "Reporting", href: "#proof" },
              { label: "Operational Reviews", href: "#insights" },
              { label: "Consultation", href: "#contact" },
            ],
          },
        ],
        asideTitle: "A practical control layer for buildings",
        asideLabel: "Operational clarity",
        asideCopy:
          "We structure visibility, access, and escalation so buildings stay protected without unnecessary complexity.",
      },
    },
    {
      label: "Properties",
      href: "#proof",
      trailing: "+",
      menu: {
        sections: [
          {
            title: "Commercial",
            links: [
              { label: "Office Buildings", href: "#proof" },
              { label: "Retail Buildings", href: "#proof" },
              { label: "Warehouses", href: "#proof" },
            ],
          },
          {
            title: "Residential",
            links: [
              { label: "Apartment Blocks", href: "#proof" },
              { label: "Estates", href: "#proof" },
              { label: "Complexes", href: "#proof" },
            ],
          },
          {
            title: "Special Use",
            links: [
              { label: "Schools", href: "#proof" },
              { label: "Industrial Sites", href: "#proof" },
              { label: "Mixed-Use Property", href: "#proof" },
            ],
          },
        ],
        asideTitle: "Protection designed around the property",
        asideLabel: "Building types",
        asideCopy:
          "Different properties have different pressure points. We design around entrances, blind spots, movement, and risk.",
      },
    },
    {
      label: "Process",
      href: "#insights",
      trailing: "+",
      menu: {
        sections: [
          {
            title: "Approach",
            links: [
              { label: "Site Review", href: "#insights" },
              { label: "System Design", href: "#insights" },
              { label: "Installation Planning", href: "#insights" },
            ],
          },
          {
            title: "Support",
            links: [
              { label: "Monitoring Setup", href: "#insights" },
              { label: "Response Planning", href: "#insights" },
              { label: "Building Security Consultation", href: "#contact" },
            ],
          },
          {
            title: "Contact",
            links: [
              {
                label: "Request a security review",
                href: "#contact",
                description:
                  "Start with a structured conversation about your building, systems, and security risks.",
              },
            ],
          },
        ],
        asideTitle: "Simple, structured execution",
        asideLabel: "Our method",
        asideCopy:
          "We assess the building, design the right protection setup, implement the system, and refine it over time.",
      },
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ],
  hero: {
    title: "Building Security",
    subtitle:
      "Blackridge provides security systems and protection services for buildings, facilities, and properties that need controlled access, active monitoring, and dependable response.",
    panelTitle: "Protect the building.\nControl the risk.",
    panelCopy:
      "We help property owners, managers, and businesses protect buildings through surveillance, access control, perimeter protection, and practical response planning. Our focus is simple: reduce weak points, improve visibility, and keep the building secure.",
    primaryCta: "Request a Security Review",
    secondaryCta: "View Services",
    stats: [
      { value: "24/7", label: "Monitoring support" },
      { value: "Access", label: "Controlled entry" },
      { value: "Rapid", label: "Response escalation" },
    ],
  },
  servicesIntro:
    "Everything we do is focused on protecting buildings and the people, systems, and operations inside them.",
  services: [
    {
      title: "24/7 Monitoring",
      description:
        "Ongoing monitoring and event escalation support to improve visibility and response readiness.",
    },
    {
      title: "Access Control",
      description:
        "Controlled entry systems for staff, visitors, contractors, and restricted areas within the building.",
    },
    {
      title: "Perimeter Protection",
      description:
        "Gate control, perimeter awareness, and layered entry security to reduce unauthorized access.",
    },
    {
      title: "CCTV & Surveillance",
      description:
        "Camera coverage planned around entrances, circulation routes, blind spots, and high-risk areas.",
    },
    {
      title: "Alarm & System Integration",
      description:
        "Integrated security systems that connect alerts, monitoring, access points, and site response.",
    },
    {
      title: "Risk Reviews",
      description:
        "Building-focused security assessments to identify vulnerabilities and improve protection planning.",
    },
  ],
  capabilities: [
    {
      index: "01",
      eyebrow: "Observe",
      title: "Visibility across the building.",
      description:
        "We help create better visibility across entrances, common areas, service zones, and vulnerable points.",
    },
    {
      index: "02",
      eyebrow: "Control",
      title: "Entry points managed with intent.",
      description:
        "We structure access so movement through the property is controlled, trackable, and practical.",
    },
    {
      index: "03",
      eyebrow: "Protect",
      title: "Perimeter and interior layers working together.",
      description:
        "Building protection is stronger when external boundaries and internal controls support each other.",
    },
    {
      index: "04",
      eyebrow: "Respond",
      title: "Clear actions when something happens.",
      description:
        "We help define how threats are escalated, handled, and communicated when incidents occur.",
    },
  ],
  sectors: [
    {
      name: "Office Buildings",
      description:
        "Protection for reception areas, staff entry points, common spaces, parking, and after-hours access.",
    },
    {
      name: "Apartment Blocks",
      description:
        "Security systems for shared entrances, resident access, visitor control, and building perimeter safety.",
    },
    {
      name: "Retail Properties",
      description:
        "Practical protection for customer-facing buildings with controlled entry, monitoring, and response support.",
    },
    {
      name: "Warehouses",
      description:
        "Coverage for gates, loading points, restricted storage zones, and larger operational buildings.",
    },
    {
      name: "Industrial Facilities",
      description:
        "Structured control across perimeter zones, staff access, vehicle movement, and high-risk areas.",
    },
    {
      name: "Schools & Mixed-Use Sites",
      description:
        "Security planning for buildings with multiple users, varied movement patterns, and shared access points.",
    },
  ],
  process: [
    {
      index: "01",
      title: "Assess the building",
      description:
        "We review entrances, circulation, blind spots, weak points, and operational risks across the property.",
    },
    {
      index: "02",
      title: "Design the system",
      description:
        "We define the right mix of monitoring, access control, surveillance, and perimeter protection.",
    },
    {
      index: "03",
      title: "Implement and configure",
      description:
        "We help structure the system so building protection is practical, controlled, and usable day to day.",
    },
    {
      index: "04",
      title: "Review and improve",
      description:
        "We refine the setup over time as the building, usage patterns, and risk conditions change.",
    },
  ],
  trustMarks: [
    {
      title: "Controlled Entry",
      description:
        "Access systems designed to keep building entry points managed, traceable, and practical.",
    },
    {
      title: "24/7 Monitoring",
      description:
        "Monitoring support focused on visibility, escalation, and ongoing protection across the property.",
    },
    {
      title: "Perimeter Protection",
      description:
        "Layered building security around gates, boundaries, parking zones, and exterior access points.",
    },
  ],
  footer: [
    {
      title: "Services",
      links: [
        { label: "Monitoring", href: "#solutions" },
        { label: "Access Control", href: "#solutions" },
        { label: "Perimeter Protection", href: "#solutions" },
      ],
    },
    {
      title: "Properties",
      links: [
        { label: "Office Buildings", href: "#proof" },
        { label: "Residential Buildings", href: "#proof" },
        { label: "Industrial Sites", href: "#proof" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "Security Review", href: "#contact" },
        { label: "Consultation", href: "#contact" },
        { label: "Get in touch", href: "#contact" },
      ],
    },
  ],
};

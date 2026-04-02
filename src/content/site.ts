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
            title: "Core",
            links: [
              { label: "24/7 Monitoring", href: "#solutions" },
              { label: "Access Control", href: "#solutions" },
              { label: "Executive Protection", href: "#solutions" },
              { label: "Incident Response", href: "#solutions" },
            ],
          },
          {
            title: "Systems",
            links: [
              { label: "Surveillance Design", href: "#platform" },
              { label: "Integrated Command Layer", href: "#platform" },
              { label: "Perimeter Logic", href: "#platform" },
              { label: "Visitor Management", href: "#platform" },
            ],
          },
          {
            title: "Governance",
            links: [
              { label: "Risk & Compliance", href: "#insights" },
              { label: "Site Assessments", href: "#insights" },
              { label: "Policy Structuring", href: "#insights" },
              { label: "Operational Reviews", href: "#insights" },
            ],
          },
        ],
        asideTitle: "Security architecture",
        asideLabel: "Structured protection",
        asideCopy:
          "Integrated security systems for modern businesses, executive environments, and critical assets.",
      },
    },
    {
      label: "Platform",
      href: "#platform",
      trailing: "+",
      menu: {
        sections: [
          {
            title: "Control",
            links: [
              { label: "Command Visibility", href: "#platform" },
              { label: "Escalation Logic", href: "#platform" },
              { label: "Operator Workflows", href: "#platform" },
            ],
          },
          {
            title: "Operations",
            links: [
              { label: "Alert Routing", href: "#platform" },
              { label: "Response Coordination", href: "#platform" },
              { label: "Duty Structure", href: "#platform" },
            ],
          },
          {
            title: "Reporting",
            links: [
              { label: "Audit Trails", href: "#proof" },
              { label: "Leadership Reporting", href: "#proof" },
              { label: "Review Cycles", href: "#insights" },
            ],
          },
        ],
        asideTitle: "A calm control layer",
        asideLabel: "Operational clarity",
        asideCopy:
          "One premium layer for access, monitoring, incident handling, and executive-grade visibility.",
      },
    },
    {
      label: "Industries",
      href: "#proof",
      trailing: "+",
      menu: {
        sections: [
          {
            title: "Spaces",
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
              { label: "Multi-Site Groups", href: "#proof" },
              { label: "Leadership Movement", href: "#proof" },
            ],
          },
          {
            title: "Use Cases",
            links: [
              { label: "High-Trust Environments", href: "#proof" },
              { label: "Asset Protection", href: "#proof" },
              { label: "Discreet Executive Security", href: "#proof" },
            ],
          },
        ],
        asideTitle: "Built around the environment",
        asideLabel: "Tailored posture",
        asideCopy:
          "Different environments need different security behavior. We design around how each space actually operates.",
      },
    },
    {
      label: "Explore",
      href: "#insights",
      trailing: "+",
      menu: {
        sections: [
          {
            title: "Discover",
            links: [
              { label: "Editorial", href: "#insights" },
              { label: "Perspectives", href: "#insights" },
              { label: "FAQs", href: "#insights" },
              { label: "Contact", href: "#contact" },
            ],
          },
          {
            title: "Learn",
            links: [
              { label: "About", href: "#contact" },
              { label: "Method", href: "#insights" },
              { label: "Standards", href: "#proof" },
              { label: "Security Review", href: "#contact" },
            ],
          },
          {
            title: "Spotlight",
            links: [
              {
                label: "The Blackridge Method",
                href: "#insights",
                description:
                  "How premium protection is structured across people, property, and protocol.",
              },
            ],
          },
        ],
        asideTitle: "Protection without theatre",
        asideLabel: "Editorial direction",
        asideCopy:
          "Calm, structured, premium security for organizations that value discretion, logic, and trust.",
      },
    },
    {
      label: "Pricing",
      href: "#contact",
    },
  ],
  hero: {
    title: "Security",
    subtitle:
      "Blackridge designs and operates premium physical and integrated security systems for modern businesses, executive environments, and critical assets.",
    panelTitle: "Protocols,\nnot posturing.",
    panelCopy:
      "We build layered protection that feels calm, decisive, and boardroom-ready. Surveillance, access control, response planning, monitoring, and compliance all work together as one operating system — built to protect people, property, and reputation without visual noise or operational friction.",
    primaryCta: "Request a Security Review",
    secondaryCta: "Explore Capabilities",
    stats: [
      { value: "24/7", label: "Command monitoring" },
      { value: "ISO", label: "Compliance-ready frameworks" },
      { value: "<15m", label: "Critical response escalation" },
    ],
  },
  servicesIntro:
    "Built for companies that want confidence without chaos. Every system is structured, documented, monitored, and designed to scale.",
  services: [
    {
      title: "24/7 Monitoring",
      description:
        "Always-on monitoring, intelligent alerting, escalation flows, and operator visibility for high-value sites.",
    },
    {
      title: "Access Control Design",
      description:
        "Executive-grade entry architecture with credentialing, visitor logic, zoning, and audit-ready control.",
    },
    {
      title: "Incident Response",
      description:
        "Playbooks, escalation trees, response timing, and operational protocols for real-world threats.",
    },
    {
      title: "Executive Protection",
      description:
        "Discreet, high-trust protection planning for leadership teams, residences, and private movement.",
    },
    {
      title: "Risk & Compliance",
      description:
        "Structured reporting, policy alignment, site assessments, and controls that satisfy stakeholders.",
    },
    {
      title: "Integrated Systems",
      description:
        "CCTV, access, perimeter awareness, and command workflows connected into a single calm layer.",
    },
  ],
  capabilities: [
    {
      index: "01",
      eyebrow: "Command",
      title: "A single operational layer for complex environments.",
      description:
        "We design command visibility across people, sites, devices, incidents, and escalation flows so decision-makers always know what matters first.",
    },
    {
      index: "02",
      eyebrow: "Access",
      title:
        "Entry architecture built for control, movement, and auditability.",
      description:
        "Credential logic, visitor pathways, executive zoning, restricted areas, and site-wide permissions are structured as one premium access experience.",
    },
    {
      index: "03",
      eyebrow: "Surveillance",
      title: "Observation designed for clarity, not camera clutter.",
      description:
        "Coverage planning, blind-spot reduction, event tagging, retention logic, and monitoring workflows work together to support fast decision-making.",
    },
    {
      index: "04",
      eyebrow: "Response",
      title: "Playbooks that perform when the environment changes.",
      description:
        "Threat escalation, communication trees, duty assignments, and site-specific actions are mapped in advance so teams respond without hesitation.",
    },
  ],
  sectors: [
    {
      name: "Corporate Offices",
      description:
        "Reception, floor access, executive movement, after-hours control, and discreet employee safety systems.",
    },
    {
      name: "Luxury Residential",
      description:
        "Quiet, design-sensitive protection for estates, compounds, and private residences with elevated expectations.",
    },
    {
      name: "Retail & Hospitality",
      description:
        "Customer-friendly security layers that protect staff, assets, and public-facing environments without friction.",
    },
    {
      name: "Industrial Sites",
      description:
        "Perimeter awareness, restricted access, response routing, and control-room visibility across operational zones.",
    },
    {
      name: "Executive Protection",
      description:
        "Movement planning, residence strategy, secure arrivals, and protection operations tailored to leadership profiles.",
    },
    {
      name: "Multi-Site Operations",
      description:
        "Standardized security logic across multiple branches, campuses, or properties with centralized reporting.",
    },
  ],
  process: [
    {
      index: "01",
      title: "Assess",
      description:
        "We study the environment, people flow, asset exposure, blind spots, and operational pressure points.",
    },
    {
      index: "02",
      title: "Architect",
      description:
        "We define the system logic, control layers, escalation pathways, and physical-to-digital coordination.",
    },
    {
      index: "03",
      title: "Deploy",
      description:
        "We implement with precision, document the system, and align stakeholders, operators, and decision-makers.",
    },
    {
      index: "04",
      title: "Operate",
      description:
        "We monitor, review, refine, and adapt continuously so the posture remains effective as the threat surface evolves.",
    },
  ],
  footer: [
    {
      title: "Solutions",
      links: [
        { label: "Monitoring", href: "#solutions" },
        { label: "Access Control", href: "#solutions" },
        { label: "Risk & Compliance", href: "#insights" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#contact" },
        { label: "Industries", href: "#proof" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Explore",
      links: [
        { label: "Method", href: "#insights" },
        { label: "Capabilities", href: "#platform" },
        { label: "Security Review", href: "#contact" },
      ],
    },
  ],
};

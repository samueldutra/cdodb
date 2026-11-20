import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

export const WhatsAppIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export const CheckIcon = (p: IconProps) => (
  <svg {...base} strokeWidth={3} {...p}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);

export const ClipperIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="8" y="8" width="8" height="13" rx="2.5" />
    <path d="M8 8V5h8v3M9.5 5V3M12 5V3M14.5 5V3M11 13h2" />
  </svg>
);

export const RazorIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 5h11a3 3 0 0 1 3 3v2H4z" />
    <path d="m9 10 9 10M7 7.5h6" />
  </svg>
);

export const JarIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="4" y="9" width="16" height="11" rx="2.5" />
    <path d="M6 9V6.5A1.5 1.5 0 0 1 7.5 5h9A1.5 1.5 0 0 1 18 6.5V9M9 14.5h6" />
  </svg>
);

export const CapeIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M9 4a3 3 0 0 0 6 0l5 4-2 12H6L4 8z" />
  </svg>
);

export const ChairIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M8 3h8v9H8zM5 12h14v3H5zM12 15v4M8 21h8M5 9v3M19 9v3" />
  </svg>
);

export const SprayIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="7" y="10" width="8" height="11" rx="2" />
    <path d="M9 10V6h4v4M13 7h3M19 5h.01M19 8h.01M21 6.5h.01" />
  </svg>
);

export const DryerIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="9" cy="9" r="5" />
    <circle cx="9" cy="9" r="1.5" />
    <path d="M13.5 6.5 21 5v8l-7.5-1.5M7.5 14v6.5H11V14" />
  </svg>
);

export const OrganizerIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="11" width="18" height="9" rx="2" />
    <path d="M9 11v9M15 11v9M6 11V5M12 11V3.5M18 11V6.5" />
  </svg>
);

export const TagIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3 12.5V4h8.5l9 9-8 8z" />
    <path d="M7.5 8.5h.01" />
  </svg>
);

export const ShieldCheckIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3 5 5.5v5.7c0 4.3 2.9 8.1 7 9.8 4.1-1.7 7-5.5 7-9.8V5.5z" />
    <path d="m9 12 2.2 2.2L15.2 10" />
  </svg>
);

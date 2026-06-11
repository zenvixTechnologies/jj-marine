function IconShell({ children, className = "h-5 w-5", viewBox = "0 0 24 24" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      className={className}
    >
      {children}
    </svg>
  );
}

export function AnchorIcon({ className }) {
  return (
    <IconShell className={className}>
      <path d="M12 4v8" />
      <circle cx="12" cy="6.5" r="2.2" />
      <path d="M7.6 12.2c.9 2.9 2.8 4.9 4.4 4.9s3.5-2 4.4-4.9" />
      <path d="M5.5 14.7c1.8 3.3 4.4 5.3 6.5 5.3s4.7-2 6.5-5.3" />
    </IconShell>
  );
}

export function ChevronRightIcon({ className }) {
  return (
    <IconShell className={className}>
      <path d="m10 6 6 6-6 6" />
    </IconShell>
  );
}

export function ImportExportIcon({ className }) {
  return (
    <IconShell className={className}>
      <path d="M4 8h10" />
      <path d="m10 4 4 4-4 4" />
      <path d="M20 16H10" />
      <path d="m14 12-4 4 4 4" />
    </IconShell>
  );
}

export function FreightIcon({ className }) {
  return (
    <IconShell className={className}>
      <rect x="4" y="8" width="12" height="7" rx="1.5" />
      <path d="M16 11h3l1.5 2.5V15H16z" />
      <circle cx="8" cy="17" r="1.2" />
      <circle cx="17" cy="17" r="1.2" />
    </IconShell>
  );
}

export function DocumentIcon({ className }) {
  return (
    <IconShell className={className}>
      <path d="M7 3.8h7l3 3V20H7z" />
      <path d="M14 3.8V7h3" />
      <path d="M9 10h6" />
      <path d="M9 13h6" />
      <path d="M9 16h4" />
    </IconShell>
  );
}

export function OfficeIcon({ className }) {
  return (
    <IconShell className={className}>
      <path d="M5 20V6h9v14" />
      <path d="M14 20V10h5v10" />
      <path d="M7 9h2" />
      <path d="M7 12h2" />
      <path d="M16 13h1.8" />
      <path d="M16 16h1.8" />
    </IconShell>
  );
}

export function GroupsIcon({ className }) {
  return (
    <IconShell className={className}>
      <path d="M8.2 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
      <path d="M15.8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
      <path d="M4.5 19.5c.7-3.4 3.1-5.5 6.2-5.5s5.5 2.1 6.2 5.5" />
      <path d="M13.7 19.2c.3-2 1.6-3.7 4-3.7s3.7 1.7 4 3.7" />
    </IconShell>
  );
}

export function PersonSearchIcon({ className }) {
  return (
    <IconShell className={className}>
      <circle cx="10" cy="9" r="3" />
      <path d="M4.8 18c.7-3 2.8-4.7 5.2-4.7S14.5 15 15.2 18" />
      <circle cx="17.2" cy="16.8" r="2.3" />
      <path d="m19 18.6 1.8 1.8" />
    </IconShell>
  );
}

export function PaymentsIcon({ className }) {
  return (
    <IconShell className={className}>
      <rect x="4" y="6" width="16" height="12" rx="2" />
      <path d="M4 10h16" />
      <path d="M8 14h3" />
    </IconShell>
  );
}

export function BadgeIcon({ className }) {
  return (
    <IconShell className={className}>
      <path d="M7 5h10v14H7z" />
      <path d="M9 9h6" />
      <path d="M9 12h6" />
      <path d="M9 15h3.5" />
    </IconShell>
  );
}

export function ForumIcon({ className }) {
  return (
    <IconShell className={className}>
      <path d="M4.5 6.5h15v9h-8l-4.5 3.5V15.5h-2.5z" />
      <path d="M8 10h8" />
      <path d="M8 13h5" />
    </IconShell>
  );
}

export function SchoolIcon({ className }) {
  return (
    <IconShell className={className}>
      <path d="M4 10.5 12 6l8 4.5-8 4.5-8-4.5Z" />
      <path d="M7 12.2V16c0 1.5 2.2 3 5 3s5-1.5 5-3v-3.8" />
    </IconShell>
  );
}

export function PublicIcon({ className }) {
  return (
    <IconShell className={className}>
      <circle cx="12" cy="12" r="8.2" />
      <path d="M4.2 12h15.6" />
      <path d="M12 4c2.7 2.3 4.1 5.1 4.1 8s-1.4 5.7-4.1 8c-2.7-2.3-4.1-5.1-4.1-8S9.3 6.3 12 4Z" />
    </IconShell>
  );
}

export function LanguageIcon({ className }) {
  return (
    <IconShell className={className}>
      <circle cx="12" cy="12" r="8.2" />
      <path d="M4.2 12h15.6" />
      <path d="M12 4c2.7 2.3 4.1 5.1 4.1 8s-1.4 5.7-4.1 8c-2.7-2.3-4.1-5.1-4.1-8S9.3 6.3 12 4Z" />
    </IconShell>
  );
}

export function PersonIcon({ className }) {
  return (
    <IconShell className={className}>
      <path d="M12 12a3.4 3.4 0 1 0 0-6.8 3.4 3.4 0 0 0 0 6.8Z" />
      <path d="M5 20c.8-3.5 3.4-5.5 7-5.5s6.2 2 7 5.5" />
    </IconShell>
  );
}

export function MailIcon({ className }) {
  return (
    <IconShell className={className}>
      <path d="M4.5 6.5h15v11h-15z" />
      <path d="m5 7 7 6 7-6" />
    </IconShell>
  );
}

export function LocationIcon({ className }) {
  return (
    <IconShell className={className}>
      <path d="M12 21s5-4.2 5-9a5 5 0 1 0-10 0c0 4.8 5 9 5 9Z" />
      <circle cx="12" cy="12" r="1.8" />
    </IconShell>
  );
}

export function PhoneIcon({ className }) {
  return (
    <IconShell className={className}>
      <path d="M7.2 4.8c.5-.5 1.3-.6 1.9-.2l1.9 1.2c.6.4.9 1.1.7 1.8l-.6 2c-.2.6 0 1.2.4 1.6l2.4 2.4c.4.4 1 .6 1.6.4l2-.6c.7-.2 1.4.1 1.8.7l1.2 1.9c.4.6.3 1.4-.2 1.9l-1.3 1.3c-.7.7-1.7 1-2.6.8-3.2-.7-6.1-2.4-8.5-4.8s-4.1-5.3-4.8-8.5c-.2-.9.1-1.9.8-2.6l1.3-1.3Z" />
    </IconShell>
  );
}

export function TrendUpIcon({ className }) {
  return (
    <IconShell className={className}>
      <path d="M4 16l5-5 4 4 7-7" />
      <path d="M14 8h6v6" />
    </IconShell>
  );
}

export function VerifiedIcon({ className }) {
  return (
    <IconShell className={className}>
      <path d="m12 3 2.4 1.8 3 .2 1.2 2.8 2.2 2.1-1 2.9 1 2.9-2.2 2.1-1.2 2.8-3 .2L12 21l-2.4-1.8-3-.2-1.2-2.8-2.2-2.1 1-2.9-1-2.9 2.2-2.1 1.2-2.8 3-.2L12 3Z" />
      <path d="m8.2 12.1 2.4 2.4 5.2-5.2" />
    </IconShell>
  );
}

export function MonitoringIcon({ className }) {
  return (
    <IconShell className={className}>
      <path d="M4 6h16v10H4z" />
      <path d="M7 18h10" />
      <path d="M9 14l2-3 2 2 3-5" />
    </IconShell>
  );
}

export function TaskAltIcon({ className }) {
  return (
    <IconShell className={className}>
      <path d="m5.5 12.5 3.2 3.2L18.5 6" />
    </IconShell>
  );
}

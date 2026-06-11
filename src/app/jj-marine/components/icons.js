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

export function ArrowRightIcon({ className }) {
  return (
    <IconShell className={className}>
      <path d="M5 12h13" />
      <path d="m12 5 7 7-7 7" />
    </IconShell>
  );
}

export function ChevronDownIcon({ className }) {
  return (
    <IconShell className={className}>
      <path d="m6 9 6 6 6-6" />
    </IconShell>
  );
}

export function ChevronRightIcon({ className }) {
  return (
    <IconShell className={className}>
      <path d="m9 5 7 7-7 7" />
    </IconShell>
  );
}

export function GlobeIcon({ className }) {
  return (
    <IconShell className={className}>
      <circle cx="12" cy="12" r="8" />
      <path d="M4 12h16" />
      <path d="M12 4c2.5 2.2 4 5.1 4 8s-1.5 5.8-4 8c-2.5-2.2-4-5.1-4-8s1.5-5.8 4-8Z" />
    </IconShell>
  );
}

export function AnchorIcon({ className }) {
  return (
    <IconShell className={className}>
      <circle cx="12" cy="6.5" r="2.2" />
      <path d="M12 8.8v8.9" />
      <path d="M7.6 12.2c.9 2.9 2.8 4.9 4.4 4.9s3.5-2 4.4-4.9" />
      <path d="M5.5 14.7c1.8 3.3 4.4 5.3 6.5 5.3s4.7-2 6.5-5.3" />
      <path d="M4.5 12h3" />
      <path d="M16.5 12h3" />
    </IconShell>
  );
}

export function UsersIcon({ className }) {
  return (
    <IconShell className={className}>
      <path d="M8 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
      <path d="M16 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
      <path d="M3.8 19.5c.7-3.4 3.1-5.5 6.2-5.5s5.5 2.1 6.2 5.5" />
      <path d="M13.5 19.5c.4-2.4 2-4 4.5-4s4 1.6 4.5 4" />
    </IconShell>
  );
}

export function VerifiedIcon({ className }) {
  return (
    <IconShell className={className}>
      <path d="m12 3 2.4 1.8 3 0.2 1.2 2.8 2.2 2.1-1 2.9 1 2.9-2.2 2.1-1.2 2.8-3 .2L12 21l-2.4-1.8-3-.2-1.2-2.8-2.2-2.1 1-2.9-1-2.9 2.2-2.1 1.2-2.8 3-.2L12 3Z" />
      <path d="m8.2 12.1 2.4 2.4 5.2-5.2" />
    </IconShell>
  );
}

export function SailIcon({ className }) {
  return (
    <IconShell className={className}>
      <path d="M12 4v8" />
      <path d="M12 4 6.5 12h11L12 4Z" />
      <path d="M4.5 15.5h15" />
      <path d="M6.5 18.5c1.1-1 2.3-1.5 3.5-1.5s2.4.5 3.5 1.5 2.3 1.5 3.5 1.5 2.4-.5 3.5-1.5" />
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

export function SchoolIcon({ className }) {
  return (
    <IconShell className={className}>
      <path d="M4 10.5 12 6l8 4.5-8 4.5-8-4.5Z" />
      <path d="M7 12.2V16c0 1.5 2.2 3 5 3s5-1.5 5-3v-3.8" />
      <path d="M20 10.5v5" />
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

export function MailIcon({ className }) {
  return (
    <IconShell className={className}>
      <path d="M4.5 6.5h15v11h-15z" />
      <path d="m5 7 7 6 7-6" />
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

export function ChatBubbleIcon({ className }) {
  return (
    <IconShell className={className}>
      <path d="M5 5.5h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-7l-4.4 3.5V16.5H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Z" />
      <path d="M8 10h8" />
      <path d="M8 13h5" />
    </IconShell>
  );
}

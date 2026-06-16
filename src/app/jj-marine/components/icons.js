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

export function WhatsAppIcon({ className }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.56 0 11.9-5.335 11.903-11.894a11.79 11.79 0 00-3.486-8.413z" />
    </svg>
  );
}

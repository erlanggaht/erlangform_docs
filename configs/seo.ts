import type { Metadata } from "next";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://erlangform.erlanggaht.com";
// export const OG_IMAGE = "/images/og-image.png";

export const BASE_METADATA: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "ErlangForm", template: "%s — ErlangForm" },
  description:
    "Schema-driven form builder for React",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: "ErlangForm",
    title: "ErlangForm",
    description:
      "Schema-driven form builder for React",
    // images: [{ url: OG_IMAGE, alt: "Erlanggaht — Software Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ErlangForm",
    description:
      "Schema-driven form builder for React",
    // images: [OG_IMAGE],
  },
//   icons: { icon: "/favicon-v2.svg", shortcut: "/favicon-v2.svg", apple: "/favicon-v2.svg" },
};

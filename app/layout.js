import Link from "next/link";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "500",
  subsets: ["latin"],
  variable: "--roboto-font",
});

export default function RootLayout({ children }) {
  return (
    <html className={roboto.className}>
      <head>
        <title>leftprazz - Next.js 13</title>
      </head>
      <body>
        <nav style={{ padding: 16, margin: 8 }}>
          <Link href="/" style={{ padding: "0 10px 0 0" }}>
            Home
          </Link>
          <Link href="/postingan">Postingan</Link>
        </nav>
        <div>{children}</div>
      </body>
    </html>
  );
}

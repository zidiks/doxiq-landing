import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DoxiQ — шаблоны документов за минуты",
  description:
    "DoxiQ — сервис для хранения шаблонов Word/Excel и генерации документов на основе переменных и форм.",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}

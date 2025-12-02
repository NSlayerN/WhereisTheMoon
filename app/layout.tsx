import './globals.css';
export const metadata = { title: 'MoonFinder', description: 'Find the moon using AR + compass' };
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
import './globals.css';

export const metadata = {
  title: 'News App',
  description: 'Learn how to route to different pages. Next.js Page Routing & Rendering',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

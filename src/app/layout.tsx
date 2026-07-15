import './globals.css'
import type {Metadata} from 'next'
import {Karla} from 'next/font/google';
import NavBarContainer from "@/components/NavBarContainer";
import Footer from "@/components/Footer";

/*
TODO:  Change these things along with:
  - avatar.jpeg in /public/images
  - favicon.ico in /public
 */
const font = Karla({ weight: '400', subsets: ['latin']})
const title = 'mathani\'s Site';
const description = 'This my personal site';
const links = [
  {title: 'Teen-Wolf', href: '/Teen-Wolf'},
  {title: 'Total-drama-island', href: '/total-drama-island'}
];
const SocialLinks = {
  twitter: 'https://x.com/dunscombe_luke',
  github: '#github',
  instagram: '#insta',
  email: 'mailto:ldunscombe@leantechniques.com'
}

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en" className={'h-full bg-white text-neutral'} data-theme="light">
      <body className={`${font.className} flex min-h-screen flex-col bg-white text-neutral`}>
      <NavBarContainer title={title} links={links}>
        <main className={'flex-1 max-w-6xl w-full py-8 md:py-16 px-4 md:px-0'}>{children}</main>
      </NavBarContainer>
      <Footer socialLinks={SocialLinks}/>
      </body>
      </html>
  )
}

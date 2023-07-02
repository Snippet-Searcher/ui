// import './globals.css'
import {Inter} from 'next/font/google'
import {ReactNode} from 'react'
import {UserProvider} from "@auth0/nextjs-auth0/client";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Snippet Searcher',
    description: 'Search the best snippets',
}

type RootLayoutProps = {
    children: ReactNode
}

export default function RootLayout({children}: RootLayoutProps) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <UserProvider>
            {children}
        </UserProvider>
        </body>
        </html>
    )
}

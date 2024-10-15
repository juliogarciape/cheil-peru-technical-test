import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
	subsets: ['latin'],
	weight: '400',
})

export const metadata: Metadata = {
	title: 'Technical Test - Cheil Peru',
	description: 'This page is a technical test for Cheil Peru',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="es">
			<body className={`${montserrat.className} antialiased`}>
				{children}
			</body>
		</html>
	)
}

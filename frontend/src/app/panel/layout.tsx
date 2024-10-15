import Link from 'next/link'

const links = [
	{
		name: 'Categorias',
		href: '/panel/categories',
	},
	{
		name: 'Productos',
		href: '/panel/products',
	},
	{
		name: 'Salir',
		href: '/',
	},
]

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="es">
			<body className="bg-slate-100">
				<div className="bg-slate-600 text-white p-6 py-3 mb-16 flex items-center justify-between">
					<h2 className="text-bold text-xl">User - Dashboard</h2>
					<div className="flex gap-6 *:text-slate-300 hover:*:text-white">
						{links.map((link, index) => (
							<Link href={link.href} key={index}>
								{link.name}
							</Link>
						))}
					</div>
				</div>
				{children}
			</body>
		</html>
	)
}

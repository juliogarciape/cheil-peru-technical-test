import Link from 'next/link'

const links = [
	{
		name: 'Categorias',
		href: '/panel/category',
	},
	{
		name: 'Productos',
		href: '/panel/products',
	},
	{
		name: 'Salir',
		href: '/login',
	},
]

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="es">
			<body className="bg-slate-200">
				<div className="bg-black text-white p-6 py-3 mb-16 flex items-center justify-between">
					<h2 className="text-bold text-xl">
						Panel de Administración
					</h2>
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

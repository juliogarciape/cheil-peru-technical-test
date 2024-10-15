import Link from 'next/link'

export default function HomePage() {
	return (
		<section className="relative bg-[url('https://media.licdn.com/dms/image/v2/C4E1BAQHnejWPxNShyQ/company-background_10000/company-background_10000/0/1585344852888/cheil_peru_cover?e=2147483647&v=beta&t=Z4xtBSOQpbWGgOqOAGO0IC_17f77T3syB5u7ukBhB7U')] bg-contain bg-center bg-no-repeat">
			<div className="absolute inset-0 bg-gray-900/75 from-gray-900/95 to-gray-900/25"></div>

			<div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
				<div className="m-auto text-center">
					<h1 className="text-5xl font-extrabold text-white">
						Technical Test
						<p className="block mt-4 font-extrabold text-yellow-400">
							Full Stack
						</p>
					</h1>

					<p className="mt-4 max-w-lg text-lg text-white">
						by{' '}
						<a
							className="text-white font-bold"
							href="https://github.com/juliogarciape"
							target="_blank"
						>
							@juliogarciape
						</a>
					</p>

					<div className="mt-8 flex flex-wrap gap-6 text-center">
						<Link
							href="/auth/signin"
							className="rounded bg-rose-600 px-12 py-2 text-sm font-medium text-white shadow hover:bg-rose-700"
						>
							SignIn
						</Link>

						<Link
							href="/panel/products"
							className="rounded bg-white text-sm py-2 px-12 font-medium text-rose-600 shadow hover:bg-gray-50"
						>
							Dashboard
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

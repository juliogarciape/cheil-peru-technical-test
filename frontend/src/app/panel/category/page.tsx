import { CreateCategory } from '@/actions/categories'

export default function CategoryPage() {
	return (
		<div className="p-5 grid content-center">
			<h2 className="text-4xl text-center pb-5 font-bold text-slate-900">
				Nueva Categoria 📝
			</h2>
			<div className="p-2">
				<div className="m-auto max-w-screen-sm grid grid-col-2">
					<div className="rounded-lg bg-white p-8 shadow-lg col-span-3">
						<form action={CreateCategory} className="space-y-4">
							<div>
								<label className="sr-only">
									Nombre de la categoria
								</label>
								<input
									className="w-full rounded-lg border-gray-200 p-3 text-sm"
									placeholder="Nombre de la categoria:"
									type="text"
									id="name"
								/>
							</div>
							<div>
								<label className="sr-only">Descripcion</label>
								<input
									className="w-full rounded-lg border-gray-200 p-3 text-sm"
									placeholder="Descripcion:"
									type="text"
									id="name"
								/>
							</div>

							<div className="mt-4">
								<button
									type="submit"
									className="w-full rounded-lg bg-black px-5 py-3 flex items-center gap-3 justify-center font-bold text-white"
								>
									Crear Categoria
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="currentColor"
									>
										<path
											stroke="none"
											d="M0 0h24v24H0z"
											fill="none"
										/>
										<path d="M4.929 4.929a10 10 0 1 1 14.141 14.141a10 10 0 0 1 -14.14 -14.14zm8.071 4.071a1 1 0 1 0 -2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0 -2h-2v-2z" />
									</svg>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

'use server'

import { redirect } from 'next/navigation'

export async function SignIn(formData: FormData) {
	try {
	} catch (error) {
		console.error(error)
	}
	redirect('/panel/products')
}

export async function SignUp(formData: FormData) {
	try {
	} catch (error) {
		console.error(error)
	}
	redirect('/panel/products')
}

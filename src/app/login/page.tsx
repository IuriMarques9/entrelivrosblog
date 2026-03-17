'use client'

import { useState } from 'react'
import { login } from './actions'

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(formData: FormData) {
    const result = await login(formData)
    if (result?.error) setError(result.error)
  }

  return (
    <main>
      <h1>Área reservada</h1>
      <form action={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        {error && <p>{error}</p>}
        <button type="submit">Entrar</button>
      </form>
    </main>
  )
}
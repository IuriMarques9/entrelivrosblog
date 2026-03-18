"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BookOpen, Lock, Mail } from 'lucide-react'
import { login } from './actions'
import { motion } from "framer-motion";
import Footer from "../layout/Footer";
import Navbar from "../layout/NavBar";

export default function LoginPage() {

  async function handleSubmit(formData: FormData) {
    await login(formData)
  }

  return (
    <>
    <Navbar />
    <div className="flex min-h-[calc(100vh-57px)] items-center justify-center bg-background px-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-sm"
      >

        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <BookOpen className="h-6 w-6 text-primary" />
          </div>
          <h1 className="font-display text-2xl font-bold text-foreground">
            Área de Administração
          </h1>
          <p className="mt-1 font-body text-sm text-muted-foreground">
            Inicia sessão para gerir o conteúdo
          </p>
        </div>

        <form action={handleSubmit} className="space-y-4 rounded-lg border border-border bg-card p-6 shadow-sm">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
                id="email"
            name="email"
            placeholder="admin@exemplo.com"
            required
            className="pl-10"
          />
          </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Palavra-passe</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="••••••••"
              required
              className="pl-10"
            />
            </div>
          </div>
          <Button type="submit" className="w-full">
            Entrar
          </Button>
      </form>
      </motion.div>
    </div>
    <Footer />
    </>
  )
}
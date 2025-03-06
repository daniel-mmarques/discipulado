import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, PlayCircle } from 'lucide-react'

export default function Home() {
  return (
    <div>
      <header className="flex items-center justify-end p-3 max-w-full shadow-sm">
        <a href="https://adblu.org/site/">Nossa Igreja</a>
        <a href="/where">Onde estamos</a>
        <a href="/who">Quem somos</a>
        <a href="/login">
          <Button type="button" className="flex items-center">
            Entrar
            <ArrowRight className="w-3 h-3" />
          </Button>
        </a>
      </header>

      <div className="p-3">
        {/* Vídeo de Apresentação */}
        <section className="w-full max-w-3xl flex justify-center my-6">
          <Card className="w-full p-4 flex flex-col items-center">
            <PlayCircle className="w-16 h-16 text-blue-500" />
            <p className="mt-4 text-gray-700 text-center">Assista à mensagem de boas-vindas do nosso pastor.</p>
          </Card>
        </section>

        {/* Chamada para Cadastro */}
        <section className="w-full max-w-3xl text-center my-6">
          <h2 className="text-2xl font-semibold text-gray-800">Você tomou uma decisão?</h2>
          <p className="text-gray-600 mt-2">Cadastre-se para iniciar sua jornada no discipulado.</p>
          <Button className="mt-4 px-6 py-3 text-lg">Quero Me Inscrever</Button>
        </section>

        {/* Informações sobre o Discipulado */}
        <section className="w-full max-w-3xl my-8">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">O que é o Discipulado?</h2>
          <p className="text-gray-600 mt-4 text-center">
            O discipulado é um caminho de crescimento na fé, onde você aprenderá sobre Deus, a igreja e como viver uma vida
            cristã. Junte-se a uma turma e comece essa caminhada conosco!
          </p>
        </section>
      </div>
    </div>
  )
}

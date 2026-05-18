import Link from "next/link";

const services = [
  "Desenvolvimento de sistemas web",
  "Soluções para oficinas, lava-jatos e centros automotivos",
  "Sistemas de gestão operacional",
  "Integrações futuras com banco de dados, e-mail e automações",
  "Consultoria técnica em evolução de MVP para produto comercial",
];

const projects = [
  {
    name: "AJB AutoFlow",
    description:
      "MVP comercial demonstrável para gestão de oficina mecânica, lava-jato, estética automotiva, autopeças e centro automotivo.",
    href: "https://ajb-autoflow.vercel.app/",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8">
        <header className="flex items-center justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-blue-300">
              AJBSYSTEMS
            </p>
            <h1 className="mt-2 text-2xl font-black">Tecnologia aplicada a negócios reais</h1>
          </div>

          <nav className="hidden gap-6 text-sm font-bold text-slate-300 md:flex">
            <a href="#servicos" className="hover:text-white">
              Serviços
            </a>
            <a href="#projetos" className="hover:text-white">
              Projetos
            </a>
            <a href="#contato" className="hover:text-white">
              Contato
            </a>
          </nav>
        </header>

        <div className="grid flex-1 items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-bold text-blue-200">
              Desenvolvimento • SaaS • Sistemas de gestão
            </div>

            <h2 className="mt-8 max-w-4xl text-5xl font-black leading-tight md:text-7xl">
              Sistemas profissionais para transformar operação em controle.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              A AJBSYSTEMS desenvolve soluções digitais com foco em gestão,
              automação, produtividade e evolução segura de MVPs para produtos
              comerciais.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="https://ajb-autoflow.vercel.app/"
                target="_blank"
                className="rounded-2xl bg-blue-500 px-6 py-4 text-center font-black text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-400"
              >
                Ver demo AJB AutoFlow
              </Link>

              <a
                href="#contato"
                className="rounded-2xl border border-white/15 bg-white/10 px-6 py-4 text-center font-black text-white transition hover:bg-white/15"
              >
                Falar sobre um projeto
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl shadow-blue-950/30">
            <div className="rounded-2xl bg-slate-900 p-6">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-300">
                Projeto em destaque
              </p>

              <h3 className="mt-5 text-3xl font-black">AJB AutoFlow</h3>

              <p className="mt-4 leading-7 text-slate-300">
                Plataforma demonstrável para gestão de clientes, veículos,
                ordens de serviço, pátio, financeiro, comissões, estoque e
                histórico operacional.
              </p>

              <div className="mt-6 grid gap-3 text-sm font-bold text-slate-200">
                <div className="rounded-2xl bg-white/10 p-4">V1 localStorage estabilizada</div>
                <div className="rounded-2xl bg-white/10 p-4">Demo pública na Vercel</div>
                <div className="rounded-2xl bg-white/10 p-4">Roadmap para SaaS comercial</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="border-t border-white/10 bg-slate-900 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-blue-300">
            Serviços
          </p>

          <h2 className="mt-4 text-4xl font-black">O que a AJBSYSTEMS faz</h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-lg"
              >
                <p className="font-bold leading-7 text-slate-100">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projetos" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-blue-300">
            Portfólio
          </p>

          <h2 className="mt-4 text-4xl font-black">Projetos</h2>

          <div className="mt-10 grid gap-6">
            {projects.map((project) => (
              <article
                key={project.name}
                className="rounded-3xl border border-white/10 bg-white/10 p-8 shadow-xl"
              >
                <h3 className="text-3xl font-black">{project.name}</h3>
                <p className="mt-4 max-w-3xl leading-7 text-slate-300">
                  {project.description}
                </p>
                <Link
                  href={project.href}
                  target="_blank"
                  className="mt-6 inline-flex rounded-2xl bg-blue-500 px-5 py-3 font-black text-white transition hover:bg-blue-400"
                >
                  Abrir demonstração
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="border-t border-white/10 bg-slate-900 px-6 py-20">
        <div className="mx-auto max-w-7xl rounded-3xl bg-white p-8 text-slate-950 shadow-2xl md:p-12">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-blue-700">
            Contato
          </p>

          <h2 className="mt-4 text-4xl font-black">
            Vamos transformar uma ideia em sistema funcional.
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Entre em contato para discutir desenvolvimento de sistemas, evolução
            de MVPs, automações e soluções digitais para operação empresarial.
          </p>

          <div className="mt-8 grid gap-4 text-lg font-bold">
            <a href="mailto:anjobrito@gmail.com" className="text-blue-700 hover:text-blue-900">
              anjobrito@gmail.com
            </a>
            <a
              href="https://github.com/anjobrito"
              target="_blank"
              className="text-blue-700 hover:text-blue-900"
            >
              github.com/anjobrito
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm font-bold text-slate-400">
        AJB AutoFlow by AJBSYSTEMS • Desenvolvimento com foco comercial e técnico
      </footer>
    </main>
  );
}
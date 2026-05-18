import Link from "next/link";

const expertise = [
  {
    title: "Desenvolvimento Web",
    description:
      "Criação de sistemas web modernos com foco em operação, gestão, dashboards, cadastros e fluxos de negócio.",
  },
  {
    title: "Sistemas para Operação",
    description:
      "Soluções para oficinas, centros automotivos, estoque, atendimento, ordens de serviço e processos internos.",
  },
  {
    title: "WMS e Logística",
    description:
      "Experiência com sistemas de armazenagem, fluxos operacionais, recebimento, separação, expedição e automação logística.",
  },
  {
    title: "Backend e Integrações",
    description:
      "APIs, persistência de dados, integrações entre sistemas, estruturação de regras de negócio e evolução de MVPs.",
  },
  {
    title: "Banco de Dados",
    description:
      "Modelagem, consultas SQL, análise de dados, rotinas operacionais e suporte a sistemas corporativos.",
  },
  {
    title: "Aplicações Mobile Operacionais",
    description:
      "Interfaces para uso em celular ou coletor de dados, com foco em operação de campo, leitura e execução rápida.",
  },
];

const technologies = [
  "Java",
  "Spring Boot",
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "SQL Server",
  "MySQL",
  "PostgreSQL",
  "Prisma",
  "C++",
  "Git/GitHub",
  "Elasticsearch",
  "Kibana",
  "Android",
];

const projects = [
  {
    name: "AJB AutoFlow",
    category: "SaaS / Gestão automotiva",
    description:
      "MVP comercial demonstrável para gestão de oficina, lava-jato, estética automotiva, autopeças e centro automotivo.",
    status: "Demo publicada",
    href: "https://ajb-autoflow.vercel.app/",
  },
  {
    name: "Interface Mobile para Operação",
    category: "Mobile / Coletor de dados",
    description:
      "Projeto em desenvolvimento para uso de celular como interface operacional em processos de leitura, consulta e execução.",
    status: "Em desenvolvimento",
    href: "#contato",
  },
  {
    name: "Projetos WMS e Logística",
    category: "Enterprise / Operação",
    description:
      "Experiência aplicada em fluxos de armazenagem, movimentação, estoque, separação, expedição e suporte a ambientes corporativos.",
    status: "Experiência profissional",
    href: "#contato",
  },
  {
    name: "Laboratórios Técnicos",
    category: "Estudos / Portfólio",
    description:
      "Projetos e estudos envolvendo Java, C++, SQL, Elasticsearch, Kibana, automação, integração e arquitetura de sistemas.",
    status: "Em evolução",
    href: "#contato",
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
            <h1 className="mt-2 text-2xl font-black">
              Sistemas, automação e soluções digitais
            </h1>
          </div>

          <nav className="hidden gap-6 text-sm font-bold text-slate-300 md:flex">
            <a href="#sobre" className="hover:text-white">
              Sobre
            </a>
            <a href="#especialidades" className="hover:text-white">
              Especialidades
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
              Desenvolvimento • WMS • SaaS • Integrações • Sistemas operacionais
            </div>

            <h2 className="mt-8 max-w-4xl text-5xl font-black leading-tight md:text-7xl">
              Tecnologia para transformar processos em sistemas reais.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              A AJBSYSTEMS desenvolve soluções digitais para empresas que
              precisam organizar operação, controlar dados, automatizar fluxos e
              evoluir ideias técnicas para produtos utilizáveis.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#projetos"
                className="rounded-2xl bg-blue-500 px-6 py-4 text-center font-black text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-400"
              >
                Ver projetos
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
                Perfil técnico
              </p>

              <h3 className="mt-5 text-3xl font-black">
                Desenvolvimento com visão de negócio
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                Experiência prática em sistemas corporativos, WMS, banco de
                dados, aplicações web, integrações e construção incremental de
                produtos digitais.
              </p>

              <div className="mt-6 grid gap-3 text-sm font-bold text-slate-200">
                <div className="rounded-2xl bg-white/10 p-4">
                  Sistemas operacionais e administrativos
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  Experiência em logística e WMS
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  Portfólio técnico em evolução contínua
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="border-t border-white/10 bg-slate-900 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-blue-300">
            Sobre
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black">
            A AJBSYSTEMS nasce da prática: resolver problemas reais com sistemas bem construídos.
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            O foco é construir soluções que ajudem empresas a controlar melhor
            seus processos, reduzir improvisos e transformar conhecimento
            operacional em software funcional. O trabalho envolve desde MVPs
            comerciais até sistemas internos, integrações, bancos de dados,
            automação e interfaces operacionais.
          </p>
        </div>
      </section>

      <section id="especialidades" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-blue-300">
            Especialidades
          </p>

          <h2 className="mt-4 text-4xl font-black">Áreas de atuação</h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {expertise.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-lg"
              >
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-white/10 bg-slate-900 p-6">
            <h3 className="text-2xl font-black">Tecnologias e ferramentas</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-black text-blue-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projetos" className="border-t border-white/10 bg-slate-900 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-blue-300">
            Portfólio
          </p>

          <h2 className="mt-4 text-4xl font-black">Projetos e experiências</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.name}
                className="rounded-3xl border border-white/10 bg-white/10 p-8 shadow-xl"
              >
                <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-300">
                  {project.category}
                </p>

                <h3 className="mt-4 text-3xl font-black">{project.name}</h3>

                <p className="mt-4 leading-7 text-slate-300">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <span className="rounded-full bg-emerald-400/10 px-4 py-2 text-sm font-black text-emerald-200">
                    {project.status}
                  </span>

                  <Link
                    href={project.href}
                    target={project.href.startsWith("http") ? "_blank" : undefined}
                    className="rounded-2xl bg-blue-500 px-5 py-3 text-center font-black text-white transition hover:bg-blue-400"
                  >
                    Ver detalhes
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="px-6 py-20">
        <div className="mx-auto max-w-7xl rounded-3xl bg-white p-8 text-slate-950 shadow-2xl md:p-12">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-blue-700">
            Contato
          </p>

          <h2 className="mt-4 text-4xl font-black">
            Vamos conversar sobre sistemas, automação ou portfólio técnico.
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Entre em contato para discutir desenvolvimento de sistemas,
            evolução de MVPs, integrações, aplicações operacionais e soluções
            digitais para empresas.
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
        AJBSYSTEMS • Sistemas, automação, WMS, integrações e produtos digitais
      </footer>
    </main>
  );
}
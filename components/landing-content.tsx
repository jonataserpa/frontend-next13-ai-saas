"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Italic } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaAddressBook, FaFax, FaLinkedin, FaPhone } from "react-icons/fa";

const techs = [
  {
    name: "FrontEnd",
    avatar: "J",
    title: "React.js",
    description: "Especialista em react (Next.js), Redux, Formik, Zod, Yup",
  },
  {
    name: "BackEnd",
    avatar: "A",
    title: "Node.js",
    description: "Foco em desenvolvimento rápido usando o framework Nest.js (Prisma, TypeORM)",
  },
  {
    name: "DevOps - CI/CD",
    avatar: "M",
    title: "Kubernets or Nginx / Jenkis or Actions",
    description: "Orquestração de contêineres ou pm2: Automatiza, Escala e Otimiza.",
  },
  {
    name: "Inteligência artificial",
    avatar: "M",
    title: "AI UI",
    description: "Geração de código, imagens, musicas e video usando Open AI e Replicate AI",
  },
];

const portfolios = [
  {
    name: "Clone Netflix",
    title: "Netflix",
    url: "https://cdn.discordapp.com/attachments/1083115321935798314/1164581661464346664/login-netflix.png?ex=6543bc30&is=65314730&hm=42ed051ee54995f47734dc1faa50b3176d72137ade5a12304e492b5e1fe8f999&",
    href: "https://next13-netflix-tau.vercel.app/",
    techs: [
      {
        id: 1,
        description: "Environment, Typescript, NextJS Setup",
      },
      {
        id: 2,
        description: "MongoDB & Prisma connect, Database creation",
      },
      {
        id: 3,
        description: "Authentication with NextAuth, Google & Github Login",
      },
      {
        id: 4,
        description: "Full responsiveness on all pages",
      },
      {
        id: 5,
        description: "Cookie based authentication",
      },
      {
        id: 6,
        description: "API and Controllers creation",
      },
      {
        id: 7,
        description: "Detail-oriented effects and animations using TailwindCSS",
      },
      {
        id: 8,
        description: "React SWR data fetching",
      },
      {
        id: 9,
        description: "Zustand state management",
      },
    ],
  },
  {
    name: "The way english school",
    title: "theway",
    url: "https://cdn.discordapp.com/attachments/1083115321935798314/1164584939715575889/Capturar_select-area_20231019122431.png?ex=6543bf3e&is=65314a3e&hm=7f68ed44a7afcb6c9c516e8bc42e8f01234c6dab8a9f0ebc3b980d08cf328d17&",
    href: "https://thewayschoolenglish.netlify.app/",
    techs: [
      {
        id: 1,
        description: "Real-time message Socket.io",
      },
      {
        id: 2,
        description: "Attachments  UploadThing",
      },
      {
        id: 3,
        description: "Delete & Edit messages",
      },
      {
        id: 4,
        description: "Create Text, Audio and Video",
      },
      {
        id: 5,
        description: "1:1 conversation members",
      },
      {
        id: 6,
        description: "1:1 video calls members",
      },
      {
        id: 7,
        description: "Member management",
      },
      {
        id: 8,
        description: "Invite link generation",
      },
      {
        id: 9,
        description: "Infinite loading",
      },
      {
        id: 11,
        description: "UI TailwindCSS and ShadcnUI",
      },
      {
        id: 12,
        description: "Full responsivity",
      },
      {
        id: 13,
        description: "Light / Dark mode",
      },
      {
        id: 14,
        description: "Websocket fallback: alerts",
      },
      {
        id: 15,
        description: "ORM using Prisma",
      },
      {
        id: 16,
        description: "MySQL using Planetscale",
      },
      {
        id: 17,
        description: "Authentication with Clerk",
      },
    ],
  },
  {
    name: "Ecommerce",
    title: "Store",
    url: "https://cdn.discordapp.com/attachments/1083115321935798314/1164625195747770379/ecommerce.png?ex=6543e4bc&is=65316fbc&hm=096ac45a00cf7e2b1173339db5f6115c8e4bb9c9f91360148f2ce6fbaa140c5f&",
    href: "",
    techs: [
      {
        id: 1,
        description: "Environment, Typescript, NextJS Setup",
      },
      {
        id: 2,
        description: "Shadcn UI for the Admin",
      },
      {
        id: 3,
        description: "CMS, Admin and API",
      },
      {
        id: 4,
        description: "Full responsiveness",
      },
      {
        id: 5,
        description: "Authentication with Clerk",
      },
      {
        id: 6,
        description: "Stripe checkout",
      },
      {
        id: 7,
        description: "Stripe webhooks",
      },
      {
        id: 8,
        description: "MySQL + Prisma + PlanetScale",
      },
      {
        id: 9,
        description: "Zustand state management",
      },
      {
        id: 10,
        description: "Order creation",
      },
      {
        id: 11,
        description: "Categories creation",
      },
      {
        id: 12,
        description: "Products creation",
      },
      {
        id: 13,
        description: "Billboards creation",
      },
      {
        id: 14,
        description: "Admin dashboard",
      },
    ],
  },
  {
    name: "Messenger",
    title: "Chat",
    url: "https://cdn.discordapp.com/attachments/1083115321935798314/1164630311674581042/messenger.png?ex=6543e980&is=65317480&hm=11516da15920611857a0a9e6c464d1a471b6d100d6b91f9953ac4606d094452b&",
    href: "",
    techs: [
      {
        id: 1,
        description: "Environment, Typescript, NextJS Setup",
      },
      {
        id: 2,
        description: "Real-time messag using Pusher",
      },
      {
        id: 3,
        description: "Message notifications",
      },
      {
        id: 4,
        description: "Tailwind design for sleek UI",
      },
      {
        id: 5,
        description: "Authentication with NextAuth",
      },
      {
        id: 6,
        description: "Google Auth integration",
      },
      {
        id: 7,
        description: "File and image upload",
      },
      {
        id: 8,
        description: "Validation react-hook-form",
      },
      {
        id: 9,
        description: "Error with react-toast",
      },
      {
        id: 10,
        description: "Online/offline user status",
      },
      {
        id: 11,
        description: "Message attachments",
      },
      {
        id: 12,
        description: "Online/offline user status",
      },
      {
        id: 13,
        description: "User profile customization",
      },
      {
        id: 14,
        description: "Managing chat/room/channel",
      },
    ],
  },
];

export const LandingContent = () => {
  return (
    <>
      <div className="px-10 pb-20">
        <h2 className="text-center text-4xl text-white font-extrabold mb-10">
          Especialidades nas tecnologias:{" "}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {techs.map((item) => (
            <Card
              key={item.description}
              className="bg-[#192339] border-none text-white"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-x-2">
                  <div>
                    <p className="text-lg">{item.name}</p>
                    <p className="text-zinc-400 text-sm">{item.title}</p>
                  </div>
                </CardTitle>
                <CardContent className="pt-4 px-0">
                  {item.description}
                </CardContent>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      <div className="px-6 pb-20">
        <h2 className="text-center text-4xl text-white font-extrabold mb-10">
          Portfólios:{" "}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {portfolios.map((item) => (
            <Card
              key={item.name}
              className="bg-[#192339] border-none text-white"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-x-2">
                  <div>
                    <p className="text-lg">{item.name}</p>
                  </div>
                </CardTitle>
                <a href={item.href} target="_blank" className="pb-5">
                  <img
                    src={item.url}
                    alt="Imagem"
                    className="
                    cursor-pointer
                    object-cover
                    transition
                    duration
                    shadow-xl
                    rounded-md
                    group-hover:opacity-90
                    sm:group-hover:opacity-0
                    delay-300
                    w-full
                  "
                  />
                </a>

                <ul className="max-w-md space-y-1 text-white-500 list-disc list-inside dark:text-white-400">
                  <>
                    <div className="snap-x ...">
                      <div className="snap-start ...">
                        {item &&
                          item.techs?.map((tech) => {
                            return (
                              <>
                                <li>{tech.description}</li>
                              </>
                            );
                          })}
                      </div>
                    </div>
                  </>
                </ul>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      <div className="px-10 pb-20">
        <h2 className="text-center text-4xl text-white font-extrabold mb-10">
          API Back-End:{" "}
        </h2>
        <div className="text-center text-2xl text-white font-light mb-4">
          <Card className="bg-[#192339] border-none text-white">
            <CardTitle className="flex items-center flex-col hover:flex-col gap-4">
              <p className="p-8 gap-4 px-8">Documentação Swagger:</p>
              <Link
                href="https://nest.jonataserpa.net/docs/"
                target="_blank"
              >
                <p className="gap-4 px-8">
                  Produção:{" "}
                  <a className="text-blue-300">
                    {" "}
                    <u>https://nest.jonataserpa.net/docs/</u>
                  </a>
                </p>
              </Link>
              <p className="gap-4 px-8 py-8">
                <Link
                  href="https://nest.jonataserpa.net/docs/"
                  target="_blank"
                >
                  <p className="gap-4 px-8">
                    Homologação:{" "}
                    <a className="text-blue-300">
                      <u>https://nest.jonataserpa.net/docs/</u>
                    </a>
                  </p>
                </Link>
              </p>
            </CardTitle>
          </Card>
        </div>
      </div>

      <div className="px-10 pb-20">
        <h2 className="text-center text-4xl text-white font-extrabold mb-10">
          Resume:{" "}
        </h2>
        <div className="text-center text-white mb-4">
          <Card className="bg-[#192339] border-none text-white">
            <CardTitle className="flex items-center flex-col hover:flex-col gap-4">
              <p className="p-8 gap-4 px-8 text-lg">
                Sou um desenvolvedor Sênior de Software e recentemente cursando
                MBA de Arquitetura de Software na FullCycle, com mais de 8 anos
                de experiência, e um conhecimento e habilidades sólidos no
                desenvolvimento web e e-commerce e Telecom B2B, B2C e B2E.
              </p>
              <p className="gap-4 px-8 text-lg">
                Minha expertise abrange tanto o Back-end quanto o Front-end e
                DevOps (Nginx e Kubernetes) dominando todo o ciclo de vida do
                produto/projeto, desde a concepção até a implantação e evolução
                contínua. No Front-end, minha experiência em Performance,
                Usabilidade e Conversão é completa. Nos últimos anos, dominando
                tecnologias como React.js e (Vuejs, Angular), mas o foco tem
                sido o React.js. Em Back-end, sou um expert em
                JavaScript/TypeScript (Node.js), PHP e Java, mas com foco em
                Node.js e estou constantemente enriquecendo minhas habilidades
                em outras opções, como atualmente em Go, principalmente voltado
                para microserviços com foco em Go/Node.js, outros meios de
                comunicação como GRPC alem do Rest.
              </p>
              <p className="gap-4 px-8 py-8 text-lg">
                Serviços da AWS(RDS, S3, EC2 entre outros) e assim como VPS da
                hostinger e Netlify tem sido um grande aprendizado para
                distinguir as diferenças de uso em cada situação, Habilidades
                adicionais como conhecimentos avançados em SEO, Observabilidade,
                Arquitetura baseada em microserviços e além de experiência em
                DevOps em alta escala tem me direcionado em novos rumos.
              </p>
            </CardTitle>
          </Card>
        </div>
      </div>

      <div className="px-10 pb-20">
        <h2 className="text-center text-4xl text-white font-extrabold mb-10">
          Contato:{" "}
        </h2>
        <div className="text-center text-white mb-4">
          <Card className="bg-[#192339] border-none text-white">
            <CardTitle className="flex items-center flex-col hover:flex-col gap-4">
              <div className="flex items-center gap-x-2">
                <div className="flex flex-row items-center gap-6 mt-8 justify-center">
                  <Link
                    href="https://www.linkedin.com/in/jonata-serpa/"
                    target="_blank"
                    className="flex items-center"
                  >
                    <FaLinkedin size={32} />
                    https://www.linkedin.com/in/jonata-serpa/
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-x-2">
                <div className="flex flex-row items-center gap-6 mt-8 justify-center">
                  <FaPhone size={32} />
                  (35) 9.9743-3853
                </div>
              </div>
              <div className="flex items-center gap-x-2">
                <div className="flex flex-row items-center gap-6 mt-8 justify-center">
                  <FaAddressBook size={32} />
                  jonataserpa@gmail.com
                </div>
              </div>
            </CardTitle>
          </Card>
        </div>
      </div>

      {/*<div className="px-10 pb-20">
        <h2 className="text-center text-4xl text-white font-extrabold mb-10">Livros que recomendo: </h2>
        <div className="text-center text-2xl text-white font-sans mb-4">
          <Card className="bg-[#192339] border-none text-white">
            <CardTitle className="flex items-center flex-col hover:flex-col gap-4">
              <p className="p-8 gap-4 px-8">
                Espiritual: 
                  - A biblia: principalmente o livro de romanos.
                  - Sem barganhas com Deus. (Caio fabio)
                  - Ego transformado. (Timothy Keller)
                  - dEUSES FALSOS. (Timothy Keller)
                Técnico: 
              </p>
               
              <p className="gap-4 px-8 py-8">
              </p>
            </CardTitle>
          </Card>
        </div>
          </div> */}
    </>
  );
};

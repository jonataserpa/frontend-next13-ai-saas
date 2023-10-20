"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const techs = [
  {
    name: "FrontEnd",
    avatar: "J",
    title: "React.js",
    description: "Especialista em react (Next.js), Redux, Formik, Zod",
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
    title: "Kubernets and Nginx",
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
  },
  {
    name: "The way english school",
    title: "theway",
    url: "https://cdn.discordapp.com/attachments/1083115321935798314/1164584939715575889/Capturar_select-area_20231019122431.png?ex=6543bf3e&is=65314a3e&hm=7f68ed44a7afcb6c9c516e8bc42e8f01234c6dab8a9f0ebc3b980d08cf328d17&",
    href: "https://thewayschoolenglish.netlify.app/",
  },
  {
    name: "Ecommerce",
    title: "Store",
    url: "https://cdn.discordapp.com/attachments/1083115321935798314/1164625195747770379/ecommerce.png?ex=6543e4bc&is=65316fbc&hm=096ac45a00cf7e2b1173339db5f6115c8e4bb9c9f91360148f2ce6fbaa140c5f&",
    href: "",
  },
  {
    name: "Messenger",
    title: "Chat",
    url: "https://cdn.discordapp.com/attachments/1083115321935798314/1164630311674581042/messenger.png?ex=6543e980&is=65317480&hm=11516da15920611857a0a9e6c464d1a471b6d100d6b91f9953ac4606d094452b&",
    href: "",
  }
]

export const LandingContent = () => {
  return (
    <>
      <div className="px-10 pb-20">
        <h2 className="text-center text-4xl text-white font-extrabold mb-10">Especialidades nas tecnologias: </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {techs.map((item) => (
            <Card key={item.description} className="bg-[#192339] border-none text-white">
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

      <div className="px-10 pb-20">
        <h2 className="text-center text-4xl text-white font-extrabold mb-10">Portfólios: </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {portfolios.map((item) => (
            <Card key={item.name} className="bg-[#192339] border-none text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-x-2">
                  <div>
                    <p className="text-lg">{item.name}</p>
                  </div>
                </CardTitle>
                <a href={item.href} target="_blank">
                  <img src={item.url} alt="Imagem" 
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
                  " />
                </a>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </>
  )
}
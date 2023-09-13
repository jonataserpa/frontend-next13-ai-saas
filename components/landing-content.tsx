"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    name: "DevOps",
    avatar: "M",
    title: "Kubernets",
    description: "Orquestração de contêineres, Automatiza, Escala e Otimiza.",
  },
  {
    name: "Inteligência artificial",
    avatar: "M",
    title: "AI UI",
    description: "Geração de código, imagens, musicas e video usando Open AI e Replicate AI",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">Tecnologias</h2>
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
  )
}
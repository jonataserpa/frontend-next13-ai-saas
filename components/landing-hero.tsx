"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { NextSeo } from "next-seo";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-white font-bold py-18 text-center space-y-5">
      <div className="text-3xl sm:text-5xl md:text-4xl lg:text-4xl space-y-5 font-extrabold">
        <NextSeo
          title="Jonata Serpa"
          description="Arquiteto de Software - Foco em desenvolvimento em soluções web"
          canonical="https://www.jonataserpa.com.br/"
        />
        <header>Jonata Serpa</header>
        <section className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-700">
          <TypewriterComponent
            options={{
              strings: [
                " - FullStack - ",
                "FronEnd - (React, Angular, Vue)",
                "BackEnd - (Nodejs, PHP, Java)",
                "DevOps - (Kubernetes, Nginx)"
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </section>
      </div>
      <header className="text-sm md:text-xl font-light text-zinc-200">
        Arquiteto de Software - Foco em desenvolvimento em soluções web
      </header>
      {/*<div className="text-sm md:text-xl font-light text-zinc-400">
        Visitantes ### <strong className="text-zinc-200">00055</strong> ###
          </div>*/}
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="premium" className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
            Projeto criado usando IA
          </Button>
        </Link>
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal">
        
      </div>
    </div>
  );
};

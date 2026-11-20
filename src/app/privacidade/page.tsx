import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Política de Privacidade — ${site.name}`,
  alternates: { canonical: "/privacidade" },
};

const sections = [
  {
    title: "Quem somos",
    body: `O ${site.name} é um canal que divulga ofertas de produtos para barbearia vendidos por lojas e marketplaces de terceiros, por meio de um grupo no WhatsApp.`,
  },
  {
    title: "Quais dados coletamos",
    body: "Este site não tem cadastro nem formulário. Coletamos apenas dados de navegação (como páginas visitadas, cliques no botão de entrada, tipo de dispositivo e origem do acesso) por meio de cookies, do Google Analytics (via Google Tag Manager) e do Pixel da Meta.",
  },
  {
    title: "Para que usamos",
    body: "Para medir o desempenho da página e dos nossos anúncios, entender de onde vêm os acessos e exibir anúncios mais relevantes nas plataformas da Meta (Facebook e Instagram).",
  },
  {
    title: "Grupo no WhatsApp",
    body: "Ao entrar no grupo, seu número de telefone e nome de perfil ficam visíveis conforme as regras do próprio WhatsApp. Não usamos esses dados para contato individual nem os compartilhamos com terceiros. Você pode sair do grupo a qualquer momento.",
  },
  {
    title: "Links de afiliado",
    body: "Os links divulgados levam a lojas de terceiros, como Shopee e Mercado Livre, e podem gerar comissão para nós, sem custo adicional para você. A compra e o tratamento dos seus dados nessas lojas seguem as políticas de cada uma.",
  },
  {
    title: "Seus direitos",
    body: "Nos termos da LGPD (Lei 13.709/2018), você pode pedir informações, correção ou exclusão de dados pessoais. Você também pode bloquear cookies nas configurações do seu navegador.",
  },
];

export default function Privacidade() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-12">
      <Link href="/" className="text-sm text-gold underline underline-offset-4">
        ← Voltar
      </Link>
      <h1 className="mt-6 font-display text-5xl leading-none font-extrabold uppercase">
        Política de Privacidade
      </h1>

      <div className="mt-8 space-y-7">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="font-display text-2xl font-bold text-gold uppercase">{section.title}</h2>
            <p className="mt-1.5 text-white/75">{section.body}</p>
          </section>
        ))}
        <section>
          <h2 className="font-display text-2xl font-bold text-gold uppercase">Contato</h2>
          <p className="mt-1.5 text-white/75">
            Dúvidas ou pedidos sobre seus dados:{" "}
            <a href={`mailto:${site.contactEmail}`} className="underline underline-offset-4">
              {site.contactEmail}
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}

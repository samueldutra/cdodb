import Image from "next/image";
import Link from "next/link";
import { BrandMarquee } from "@/components/BrandMarquee";
import {
  CapeIcon,
  ChairIcon,
  CheckIcon,
  ClipperIcon,
  DryerIcon,
  JarIcon,
  OrganizerIcon,
  RazorIcon,
  ShieldCheckIcon,
  SprayIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { ExitBanner } from "@/components/ExitBanner";
import { JoinButton } from "@/components/JoinButton";
import { StickyCta } from "@/components/StickyCta";
import { brl, discount, offers } from "@/content/offers";
import { site } from "@/lib/site";

const reassurances = ["Grátis", "Sem cadastro", "Saia quando quiser"];

const categories = [
  { icon: ClipperIcon, title: "Máquinas de Corte, Acabamento e Shavers", text: "Das marcas que o barbeiro usa no dia a dia." },
  { icon: DryerIcon, title: "Secadores e Eletrônicos", text: "Secador, soprador, chapinha e outros aparelhos para o atendimento." },
  { icon: RazorIcon, title: "Lâminas e navalhas", text: "Caixas fechadas, navalhetes e reposição para o mês inteiro." },
  { icon: JarIcon, title: "Pomadas e finalizadores", text: "Pomada, pó, gel e pós-barba para usar e revender." },
  { icon: CapeIcon, title: "Capas e acessórios", text: "Capas, pentes, tesouras, borrifadores e espanadores." },
  { icon: OrganizerIcon, title: "Organizadores para Bancada", text: "Suportes, bandejas e bases para deixar tudo à mão." },
  { icon: ChairIcon, title: "Cadeiras e móveis", text: "Cadeira, lavatório, bancada e espelho para montar o salão." },
  { icon: SprayIcon, title: "Higiene e descartáveis", text: "Esterilizador, álcool, papel de pescoço e toalhas." },
];

const steps = [
  { title: "Toque no botão", text: "“Entrar no grupo grátis”, aqui mesmo na página." },
  { title: "Entre no grupo", text: "O WhatsApp abre direto no convite. É só confirmar." },
  { title: "Receba as ofertas", text: "Os achados do dia chegam com o link direto da loja." },
];

const faq = [
  {
    q: "É grátis mesmo?",
    a: "Sim. Você não paga nada para entrar nem para ficar no grupo, e não precisa preencher cadastro.",
  },
  {
    q: "Vocês vendem os produtos?",
    a: "Não. A gente garimpa ofertas na Shopee e no Mercado Livre e manda o link. A compra, o pagamento e a entrega são feitos direto na loja.",
  },
  {
    q: "Como o Clube se mantém?",
    a: "Usamos links de afiliado: quando você compra por um link do grupo, podemos receber uma comissão da loja. Você não paga nada a mais por isso.",
  },
  {
    q: "Vou receber spam?",
    a: "Não. Só os administradores postam, e só ofertas para barbearia. Se não curtir, é só sair do grupo.",
  },
];

const ctaClass =
  "btn-wa flex w-full items-center justify-center gap-2.5 rounded-[18px] px-4 font-display font-extrabold tracking-wide text-white uppercase transition-transform hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-gold";

function Reassurances({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm ${className}`}>
      {reassurances.map((item) => (
        <li key={item} className="flex items-center gap-1.5">
          <CheckIcon className="size-3.5 text-wa" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function Cta({
  placement,
  label,
  size = "md",
}: {
  placement: string;
  label: string;
  size?: "md" | "lg";
}) {
  const big = size === "lg";
  return (
    <div data-cta-anchor className="mx-auto w-full max-w-md">
      <JoinButton
        placement={placement}
        className={`${ctaClass} ${big ? "h-[4.5rem] text-[1.45rem] whitespace-nowrap sm:text-[1.7rem]" : "h-16 text-2xl"}`}
      >
        <WhatsAppIcon className={big ? "size-8" : "size-7"} />
        {label}
      </JoinButton>
    </div>
  );
}

function SectionTitle({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <h2
      className={`text-center font-display text-4xl leading-[0.95] font-extrabold text-balance uppercase sm:text-5xl ${
        dark ? "text-ink" : "text-white"
      }`}
    >
      {children}
    </h2>
  );
}

export default function Home() {
  const sample = offers[0];

  return (
    <>
      <main className="pb-20 sm:pb-0">
        {/* Hero */}
        <section className="hero-bg relative overflow-hidden border-b border-gold/30 px-5 pt-7 pb-12">
          <div aria-hidden className="barber-stripes absolute inset-x-0 top-0 h-1.5" />
          <div className="relative mx-auto flex max-w-xl flex-col items-center text-center">
            <Image
              src="/brand/logo.svg"
              alt={site.name}
              width={935}
              height={779}
              unoptimized
              loading="eager"
              fetchPriority="high"
              className="w-36 drop-shadow-[0_8px_20px_rgb(0_0_0/0.6)] sm:w-44"
            />

            <p className="mt-5 inline-flex items-center gap-2.5 rounded-full border border-wa/35 bg-wa/10 px-4 py-1.5 text-xs font-bold tracking-[0.14em] text-wa uppercase shadow-[inset_0_1px_0_rgb(255_255_255/0.06)]">
              <span className="size-2.5 rounded-full bg-wa shadow-[0_0_8px_rgb(37_211_102/0.9)]" />
              Grupo gratuito no WhatsApp
            </p>

            <h1 className="mt-4 font-display text-[3.1rem] leading-[0.92] font-extrabold text-balance uppercase sm:text-7xl">
              Ofertas de barbearia{" "}
              <span className="text-gold-shine">todo dia</span> no seu WhatsApp
            </h1>

            <p className="mt-4 max-w-md text-lg text-pretty text-white/75">
              Máquinas, lâminas, pomadas e equipamentos com desconto na Shopee e
              no Mercado Livre.
            </p>

            <div className="mt-7 w-full">
              <Cta placement="hero" label="Entrar no grupo agora" size="lg" />
            </div>
            <Reassurances className="mt-4 text-white/75" />
          </div>
        </section>

        <BrandMarquee />

        {/* Prévia do grupo */}
        <section className="bg-paper px-5 py-14 text-ink">
          <SectionTitle dark>
            Veja como a oferta{" "}
            <span className="bg-gold box-decoration-clone px-2">chega pra você</span>
          </SectionTitle>
          <p className="mx-auto mt-3 max-w-md text-center text-ink/70">
            Mensagem curta, preço claro e link direto para a loja.
          </p>

          <div className="mx-auto mt-8 max-w-sm overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/10">
            <div className="flex items-center gap-3 bg-[#075e54] px-4 py-3 text-white">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-ink ring-2 ring-white/30">
                <Image src="/brand/logo.svg" alt="" width={30} height={25} unoptimized />
              </span>
              <div className="leading-tight">
                <p className="font-semibold">{site.name}</p>
                <p className="text-xs text-white/70">Só administradores enviam mensagens</p>
              </div>
            </div>
            <div className="space-y-2 bg-[#e7ddd3] px-3 py-4">
              <p className="mx-auto w-fit rounded-md bg-white/80 px-2.5 py-0.5 text-xs text-ink/60">
                Hoje
              </p>
              <div className="max-w-[88%] rounded-xl rounded-tl-none bg-white p-3 text-[0.95rem] leading-snug shadow-sm">
                <p className="font-bold">🔥 OFERTA DO DIA</p>
                <p className="mt-1.5">{sample.name}</p>
                <p className="mt-1.5">
                  <span className="text-ink/50 line-through">De {brl(sample.from)}</span>
                  <br />
                  <span className="font-bold">Por {brl(sample.to)}</span> ({discount(sample)}% OFF)
                </p>
                <p className="mt-1.5 text-[#027eb5] underline">🛒 Ver oferta no {sample.store}</p>
                <p className="mt-1 text-right text-[0.7rem] text-ink/40">09:12</p>
              </div>
              <div className="max-w-[88%] rounded-xl rounded-tl-none bg-white p-3 text-[0.95rem] leading-snug shadow-sm">
                <p>⚡ Cupom relâmpago em lâminas — vale só hoje.</p>
                <p className="mt-1 text-right text-[0.7rem] text-ink/40">14:40</p>
              </div>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-ink/50">Prévia ilustrativa das mensagens do grupo.</p>
        </section>

        {/* Categorias */}
        <section className="bg-coal px-5 py-14">
          <SectionTitle>
            Tudo pra sua <span className="text-gold">barbearia</span>
          </SectionTitle>
          <ul className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
            {categories.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4 rounded-2xl bg-steel/60 p-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gold text-ink">
                  <Icon className="size-6" />
                </span>
                <div>
                  <h3 className="font-display text-xl leading-tight font-bold uppercase">{title}</h3>
                  <p className="mt-0.5 text-sm text-white/65">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Como funciona */}
        <section className="bg-paper px-5 py-14 text-ink">
          <SectionTitle dark>Como funciona</SectionTitle>
          <ol className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.title} className="flex gap-4 sm:flex-col sm:items-center sm:text-center">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-ink font-display text-2xl font-extrabold text-gold">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-display text-2xl leading-tight font-bold uppercase">{step.title}</h3>
                  <p className="mt-0.5 text-ink/70">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-9">
            <Cta placement="como-funciona" label="Quero as ofertas" />
          </div>
        </section>

        {/* Perguntas frequentes */}
        <section className="px-5 py-14">
          <SectionTitle>Perguntas frequentes</SectionTitle>
          <div className="mx-auto mt-8 max-w-xl space-y-3">
            {faq.map((item) => (
              <details key={item.q} className="group rounded-2xl border border-white/10 bg-coal px-5 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span className="text-2xl leading-none text-gold transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-white/70">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA final */}
        <section className="relative overflow-hidden bg-gold px-5 py-14 text-ink">
          <div aria-hidden className="barber-stripes absolute inset-x-0 top-0 h-2.5" />
          <div className="mx-auto max-w-xl text-center">
            <h2 className="font-display text-5xl leading-[0.92] font-extrabold text-balance uppercase sm:text-6xl">
              Pare de pagar preço cheio no seu material
            </h2>
            <p className="mx-auto mt-4 max-w-md text-lg text-ink/80">
              Entre no {site.name} e receba os achados do dia direto no WhatsApp.
            </p>
            <div className="mt-7">
              <Cta placement="final" label="Entrar no grupo grátis" />
            </div>
            <Reassurances className="mt-4 font-medium text-ink/80 [&_svg]:text-ink" />
          </div>
        </section>
      </main>

      <footer className="px-5 pt-10 pb-28 text-center text-sm text-white/50 sm:pb-10">
        <div className="mx-auto mb-7 inline-flex items-center gap-3.5 rounded-2xl border border-gold/50 bg-coal py-3 pr-6 pl-4 text-left">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gold text-ink">
            <ShieldCheckIcon className="size-7" />
          </span>
          <span>
            <span className="block font-display text-2xl leading-none font-extrabold tracking-wide text-gold uppercase">
              Afiliado autorizado
            </span>
            <span className="mt-1 block text-xs font-medium tracking-wide text-white/70 uppercase">
              Ofertas de lojas parceiras
            </span>
          </span>
        </div>
        <p className="mx-auto max-w-xl">
          O {site.name} divulga ofertas de terceiros e pode receber comissão por
          compras feitas pelos links do grupo, sem custo adicional para você.
          Preços e disponibilidade são definidos pelas lojas e podem mudar a
          qualquer momento.
        </p>
        <p className="mx-auto mt-3 max-w-xl">
          Participamos dos programas de afiliados da Shopee e do Mercado
          Livre. Este site não é administrado nem patrocinado por essas
          empresas, nem por WhatsApp ou Meta.
        </p>
        <p className="mt-5">
          <Link href="/privacidade" className="underline underline-offset-4 hover:text-white">
            Política de Privacidade
          </Link>
          <span className="mx-2">·</span>© {site.name}
        </p>
      </footer>

      <StickyCta />
      <ExitBanner />
    </>
  );
}

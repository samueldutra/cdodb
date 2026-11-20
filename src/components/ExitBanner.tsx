"use client";

import { useEffect, useRef } from "react";
import { CheckIcon, WhatsAppIcon } from "./icons";
import { JoinButton } from "./JoinButton";
import { trackEvent } from "@/lib/analytics";

const SEEN_KEY = "exit-banner-visto";
const MIN_TIME_MS = 5000;

function alreadySeen() {
  try {
    return sessionStorage.getItem(SEEN_KEY) === "1";
  } catch {
    return false;
  }
}

function markSeen() {
  try {
    sessionStorage.setItem(SEEN_KEY, "1");
  } catch {
    // Sem sessionStorage (aba privada etc.): segue sem lembrar.
  }
}

/**
 * Banner de saída: última chamada para entrar no grupo. Aparece uma única vez
 * por visita, e nunca para quem já tocou em um botão de entrada.
 * - Computador: quando o mouse sai pela parte de cima da janela.
 * - Celular: quando a pessoa rola rápido de volta para o topo, o gesto típico
 *   de quem vai fechar a aba ou voltar.
 */
export function ExitBanner() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || alreadySeen()) return;

    const startedAt = Date.now();
    let done = false;
    let maxY = 0;
    let lastY = window.scrollY;
    let lastT = startedAt;
    let upDistance = 0;
    let upSince = startedAt;

    function cleanup() {
      done = true;
      document.removeEventListener("mouseout", onMouseOut);
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("scroll", onScroll);
    }

    function open() {
      if (done || Date.now() - startedAt < MIN_TIME_MS) return;
      cleanup();
      markSeen();
      dialog?.showModal();
      trackEvent("banner_saida_exibido");
    }

    function onMouseOut(event: MouseEvent) {
      if (!event.relatedTarget && event.clientY <= 0) open();
    }

    // Quem já tocou em um botão de entrada não precisa do banner.
    function onClick(event: MouseEvent) {
      const target = event.target as Element | null;
      if (target?.closest("a[data-placement]")) {
        cleanup();
        markSeen();
      }
    }

    function onScroll() {
      const now = Date.now();
      const y = window.scrollY;
      const dy = y - lastY;
      maxY = Math.max(maxY, y);

      if (dy < 0 && now - lastT < 150) {
        if (upDistance === 0) upSince = lastT;
        upDistance -= dy;
      } else {
        upDistance = 0;
      }
      lastY = y;
      lastT = now;

      const fastUp = upDistance > 350 && now - upSince < 600;
      if (fastUp && maxY > 600) open();
    }

    document.addEventListener("mouseout", onMouseOut);
    document.addEventListener("click", onClick, true);
    window.addEventListener("scroll", onScroll, { passive: true });
    return cleanup;
  }, []);

  const close = () => dialogRef.current?.close();

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="exit-banner-title"
      onClick={(event) => {
        // Toque fora do cartão (no fundo escuro) fecha.
        if (event.target === event.currentTarget) close();
      }}
      className="m-auto w-[calc(100%-2rem)] max-w-md overflow-visible rounded-3xl border border-gold/40 bg-transparent p-0 text-white backdrop:bg-black/75 backdrop:backdrop-blur-sm"
    >
      <div className="hero-bg relative overflow-hidden rounded-3xl px-6 pt-9 pb-6 text-center">
        <div aria-hidden className="barber-stripes absolute inset-x-0 top-0 h-1.5" />
        <button
          type="button"
          onClick={close}
          aria-label="Fechar"
          className="absolute top-3 right-3 flex size-9 items-center justify-center rounded-full bg-white/10 text-xl leading-none text-white/80 hover:bg-white/20"
        >
          ×
        </button>

        <p className="text-xs font-bold tracking-[0.14em] text-wa uppercase">Antes de sair</p>
        <h2
          id="exit-banner-title"
          className="mt-2 font-display text-4xl leading-[0.95] font-extrabold text-balance uppercase"
        >
          Vai continuar pagando <span className="text-gold-shine">preço cheio?</span>
        </h2>
        <p className="mt-3 text-base text-white/75">
          As ofertas de hoje já estão no grupo. Entrar leva 5 segundos e você sai quando quiser.
        </p>

        <JoinButton
          placement="exit"
          className="btn-wa mt-6 flex h-16 w-full items-center justify-center gap-2.5 rounded-[14px] font-display text-2xl font-extrabold tracking-wide whitespace-nowrap text-white uppercase"
        >
          <WhatsAppIcon className="size-6" />
          Entrar no grupo grátis
        </JoinButton>

        <ul className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-white/70">
          {["Grátis", "Sem cadastro", "Sem spam"].map((item) => (
            <li key={item} className="flex items-center gap-1.5">
              <CheckIcon className="size-4 text-wa" />
              {item}
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={close}
          className="mt-5 text-sm text-white/50 underline underline-offset-4 hover:text-white/80"
        >
          Agora não, obrigado
        </button>
      </div>
    </dialog>
  );
}

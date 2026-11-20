"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "./icons";
import { JoinButton } from "./JoinButton";

/**
 * Barra fixa no rodapé (só no mobile). Aparece quando nenhum outro botão de
 * entrada (marcado com data-cta-anchor) está visível na tela. Quando oculta,
 * fica `inert`: sai da árvore de acessibilidade e do foco do teclado (aria-hidden
 * com link focável dentro é erro de acessibilidade).
 */
export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const anchors = document.querySelectorAll("[data-cta-anchor]");
    const onScreen = new Set<Element>();

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) onScreen.add(entry.target);
        else onScreen.delete(entry.target);
      }
      setVisible(onScreen.size === 0);
    });

    anchors.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      inert={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur transition-transform duration-300 sm:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <JoinButton
        placement="sticky"
        className="btn-wa flex h-13 w-full items-center justify-center gap-2 rounded-[14px] font-display text-xl font-extrabold tracking-wide text-white uppercase"
      >
        <WhatsAppIcon className="size-5" />
        Entrar no grupo grátis
      </JoinButton>
    </div>
  );
}

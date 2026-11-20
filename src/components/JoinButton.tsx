"use client";

import type { MouseEvent, ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

type Props = {
  /** Onde o botão está na página (vai no evento, para comparar posições). */
  placement: string;
  className?: string;
  children: ReactNode;
};

/**
 * Link para /entrar. É um <a> comum (funciona sem JavaScript); no clique
 * dispara o evento Lead no Pixel e repassa UTMs/fbclid para o redirecionador.
 */
export function JoinButton({ placement, className, children }: Props) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    const eventId =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : String(Date.now());

    const params = new URLSearchParams(window.location.search);
    params.set("pos", placement);
    params.set("eid", eventId);
    event.currentTarget.href = `/entrar?${params.toString()}`;

    // Evento do Google Analytics (GA4).
    trackEvent("entrar_grupo", { placement, event_id: eventId });

    window.fbq?.(
      "track",
      "Lead",
      { content_name: "grupo_whatsapp", content_category: placement },
      { eventID: eventId },
    );
  }

  return (
    <a
      href="/entrar"
      rel="nofollow"
      onClick={handleClick}
      className={className}
      data-placement={placement}
    >
      {children}
    </a>
  );
}

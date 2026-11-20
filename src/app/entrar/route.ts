import { get } from "@vercel/edge-config";
import { connection, NextResponse, type NextRequest } from "next/server";

const ALLOWED_PREFIX = "https://chat.whatsapp.com/";

/**
 * Link do grupo atual. Ordem de busca:
 * 1. Edge Config (chave `whatsappGroupUrl`) — troca sem novo deploy.
 * 2. Variável de ambiente WHATSAPP_GROUP_URL — exige redeploy para trocar.
 */
async function resolveGroupUrl(): Promise<string | null> {
  let url: string | undefined;

  if (process.env.EDGE_CONFIG) {
    try {
      url = await get<string>("whatsappGroupUrl");
    } catch (error) {
      console.error("[entrar] falha ao ler o Edge Config", error);
    }
  }

  url ??= process.env.WHATSAPP_GROUP_URL;

  // Só aceita links de convite do WhatsApp, para a rota nunca virar
  // um redirecionador aberto.
  return url?.startsWith(ALLOWED_PREFIX) ? url : null;
}

export async function GET(request: NextRequest) {
  // Garante execução a cada acesso: sem isso o Next pré-renderiza a rota no
  // build e o link do grupo ficaria congelado.
  await connection();

  const groupUrl = await resolveGroupUrl();

  const target = groupUrl ?? new URL("/?grupo=indisponivel", request.url);
  if (!groupUrl) {
    console.error("[entrar] link do grupo não configurado ou inválido");
  }

  const response = NextResponse.redirect(target, 302);
  response.headers.set("Cache-Control", "no-store");
  response.headers.set("X-Robots-Tag", "noindex, nofollow");
  return response;
}

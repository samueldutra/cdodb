/**
 * Google Analytics 4 direto (sem Tag Manager). Só carrega quando
 * NEXT_PUBLIC_GA_ID está definido, então em desenvolvimento sem a variável
 * nada é enviado.
 *
 * O stub do gtag roda na hora (cliques antes do carregamento ficam na fila do
 * dataLayer), mas o gtag.js em si só é baixado depois do evento load da página,
 * para não competir com o logo e o resto do conteúdo.
 */
import Script from "next/script";

export function GoogleAnalytics() {
  const id = process.env.NEXT_PUBLIC_GA_ID;
  if (!id || !/^G-[A-Z0-9]+$/.test(id)) return null;

  return (
    <Script id="ga-init" strategy="afterInteractive">
      {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${id}');
function loadGa(){var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id=${id}';document.head.appendChild(s);}
if (document.readyState === 'complete') loadGa(); else window.addEventListener('load', loadGa);`}
    </Script>
  );
}

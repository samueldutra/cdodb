/**
 * Marcas exibidas na faixa rolante.
 * Para mostrar o logo, coloque o arquivo em public/marcas/ (SVG ou PNG com
 * fundo transparente, de preferência em branco) e informe o caminho em `logo`.
 * Sem logo, aparece o nome da marca em texto.
 */
export type Brand = { name: string; logo?: string };

export const brands: Brand[] = [
  { name: "Wahl" },
  { name: "JRL" },
  { name: "BaBylissPRO" },
  { name: "Andis" },
  { name: "Kemei" },
  { name: "VGR" },
];

/**
 * ATENÇÃO: dados ILUSTRATIVOS. Troque por ofertas reais (as mesmas postadas
 * no grupo) antes de rodar tráfego. A página já avisa que são exemplos.
 */
export type Offer = {
  category: string;
  name: string;
  from: number;
  to: number;
  store: "Shopee" | "Mercado Livre";
  /**
   * Foto do produto, de preferência quadrada (ex.: 800x800, .webp ou .jpg).
   * Coloque o arquivo em public/produtos/ e informe "/produtos/arquivo.webp".
   * Sem imagem, o card mostra um espaço reservado.
   */
  image?: string;
};

export const offers: Offer[] = [
  {
    category: "Máquina de corte",
    name: "Máquina de corte profissional sem fio",
    from: 599,
    to: 419,
    store: "Mercado Livre",
  },
  {
    category: "Acabamento",
    name: "Trimmer de acabamento lâmina T",
    from: 289,
    to: 199,
    store: "Shopee",
  },
  {
    category: "Finalização",
    name: "Kit 6 pomadas modeladoras efeito matte",
    from: 149,
    to: 99,
    store: "Shopee",
  },
  {
    category: "Acessórios",
    name: "Capa de corte profissional antiestática",
    from: 79,
    to: 49,
    store: "Mercado Livre",
  },
];

export const brl = (value: number) =>
  value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });

export const discount = (o: Offer) => Math.round((1 - o.to / o.from) * 100);

import Image from "next/image";
import { brands } from "@/content/brands";

function BrandList({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {brands.map((brand) => (
        <li key={brand.name} className="flex h-16 items-center px-7">
          {brand.logo ? (
            <Image
              src={brand.logo}
              alt={hidden ? "" : brand.name}
              width={120}
              height={40}
              className="h-8 w-auto object-contain opacity-80"
            />
          ) : (
            <span className="font-display text-2xl font-extrabold tracking-wider whitespace-nowrap text-white/70 uppercase">
              {brand.name}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

/** Faixa com as marcas passando. A lista é duplicada para o loop ficar contínuo. */
export function BrandMarquee() {
  return (
    <section aria-label="Marcas que aparecem no grupo" className="border-y border-gold/30 bg-ink py-3">
      <p className="mb-1 text-center text-xs font-semibold tracking-[0.2em] text-gold uppercase">
        Marcas que aparecem no grupo
      </p>
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="marquee-track flex w-max">
          <BrandList />
          <BrandList hidden />
        </div>
      </div>
    </section>
  );
}

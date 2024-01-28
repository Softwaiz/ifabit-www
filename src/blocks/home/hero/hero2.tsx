import Carousel from "@/components/carousel";
import { AssetImage } from "@/components/image/index.client";
import { getCurrencies } from "@/core/utils";

export async function Hero2() {
  let currencies = await getCurrencies();

  return (
    <div className="w-full min-h-height grid grid-cols-5 bg-layer text-slate-900">
      <div className="col-span-2 bg-primary-500 py-header">
        <div className="w-full relative">
          <Carousel
            options={{
              loop: true,
              slidesToScroll: 1,
              containScroll: "trimSnaps",
              align: "start",
            }}
          >
            {currencies.items.map((c) => {
              return (
                <div
                  key={c.id}
                  className="min-h-full px-2 py-4 flex flex-col items-center justify-end gap-4"
                >
                  <AssetImage
                    className="w-auto h-[240px] p-4 bg-white rounded-md aspect-square object-[0% 0%] object-cover"
                    src={c.logo || ""}
                  />
                  <h6 className="font-heading text-2xl font-bold">{c.label}</h6>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>

      <div className="col-span-3 p-16 text-white flex flex-col items-start justify-center gap-4">
        <h4 className="font-heading text-6xl font-bold">
          IFABIT vous sert de pont.
        </h4>
        <div className="w-full flex flex-col items-start justify-start gap-1 text-lg">
          <p>Transférer via plusieurs réseaux devient possible.</p>
          <p>
            Envoyez vos USDT, recevez du FCFA. Ou envoyez du FCFA, et recevez
            vos USDT.
            <br />
            <br />
            Simple comme bonjour !
          </p>
        </div>
      </div>
    </div>
  );
}

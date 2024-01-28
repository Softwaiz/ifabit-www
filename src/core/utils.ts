import { Currency } from "./types";

export async function getFileSource(asset: string) {
    let apiUrl = new URL('https://api.ifabit.com/assets');
    if (asset) {
        apiUrl.searchParams.append("file", asset);
    }

    let assetUrl = await fetch(apiUrl.toString())
        .then((res) => res.text()).catch((err) => undefined);

    if (assetUrl) {
        let spliced = assetUrl.substring(1);
        spliced = spliced.substring(0, spliced.length - 1);
        return { url: spliced };
    }
}

export async function getCurrencies() {
    let currencies = await fetch("https://api.ifabit.com/currencies").then(
        (res) => res.json() as Promise<{ items: Currency[] }>
      );

    return currencies.items;
}
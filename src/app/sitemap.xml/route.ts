
export async function GET(request: Request) {
    const links = [
        {
            path: '/',
        },
        {
            path: '/about-us',
        },
        {
            path: '/business',
        },
        {
            path: '/team',
        },
        {
            path: '/wallets',
        }
    ]

    let now = new Date();

    const xml = `
    <urlset
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
          http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

        <url>
            <loc>https://www.ifabit.com/</loc>
            <lastmod>2024-01-06T07:33:42+00:00</lastmod>
            <changefreq>daily</changefreq>
            <priority>0.80</priority>
        </url>

    ${links?.map(
        (p) => {
            return `    <url>
        <loc>https://www.ifabit.com${p.path}</loc>
            <lastmod>${now.toUTCString()}</lastmod>
            <changefreq>daily</changefreq>
            <priority>0.80</priority>
        </url>`
        }
    ).join("\n")
        }
    </urlset>
    `

    return new Response(xml, {
        headers: {
            'content-type': "application/xml"
        }
    });
}
import type { MetadataRoute } from "next";
import { SITE } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: SITE.url,                                           lastModified: now, changeFrequency: "weekly",  priority: 1.0  },
    { url: `${SITE.url}/servicios`,                            lastModified: now, changeFrequency: "monthly", priority: 0.9  },
    { url: `${SITE.url}/trabajos`,                             lastModified: now, changeFrequency: "monthly", priority: 0.8  },
    { url: `${SITE.url}/contacto`,                             lastModified: now, changeFrequency: "yearly",  priority: 0.7  },
    { url: `${SITE.url}/diseno-web-bahia-blanca`,              lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE.url}/turnos-online-bahia-blanca`,           lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE.url}/software-a-medida-bahia-blanca`,       lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE.url}/automatizaciones-bahia-blanca`,        lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE.url}/blog`,                                 lastModified: now, changeFrequency: "weekly",  priority: 0.7  },
    { url: `${SITE.url}/blog/cuanto-cuesta-pagina-web-bahia-blanca`, lastModified: now, changeFrequency: "yearly", priority: 0.75 },
    { url: `${SITE.url}/blog/como-aparecer-en-google-negocio-local`, lastModified: now, changeFrequency: "yearly", priority: 0.75 },
  ];
}

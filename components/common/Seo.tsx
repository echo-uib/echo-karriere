import { Helmet } from "react-helmet";

import { defaultSEOConfig } from "@/utils";

export interface Props {
  description?: string;
  title?: string;
}

export function SEO({ description: desc, title }: Props): JSX.Element {
  const meta = defaultSEOConfig;

  const description = desc ?? meta.description;
  const image = `${meta.canonical}/icons/icon-256x256.png`;

  return (
    <Helmet
      htmlAttributes={{ lang: "no" }}
      title={title}
      titleTemplate={`%s | ${meta.title}`}
      defaultTitle="echo karriere"
      meta={[
        { name: "name", content: title ?? meta.title },
        { name: `description`, content: description },
        { name: "image", content: image },

        { name: `twitter:card`, content: `summary` },
        { name: "twitter:site", content: `echo karriere` },
        { name: `twitter:title`, content: title ?? meta.title },
        { name: `twitter:description`, content: description },
        { name: `twitter:creator`, content: "echo karriere" },
        { name: "twitter:image", content: image },

        { property: "og:type", content: "website" },
        { property: "og:title", content: title ?? meta.title },
        { property: "og:url", content: meta.canonical },
        { property: "og:image", content: image },
        { property: "og:description", content: description },
        { property: "og:site_name", content: `echo karriere` },
      ]}
    />
  );
}

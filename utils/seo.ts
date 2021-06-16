import { DefaultSeoProps } from "next-seo";

export const defaultSEOConfig: DefaultSeoProps = {
  titleTemplate: "%s | echo karriere",
  description: "echo karriere er en karrieredag for IT-studenter i Bergen.",
  canonical: "https://www.echokarriere.no",
  openGraph: {
    url: "https://www.echokarriere.no",
    title: "echo karriere",
    description: "echo karriere er en karrieredag for IT-studenter i Bergen.",
    site_name: "echo karriere",
  },
};

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import SEO from "../next-seo.config";
import { DefaultSeo } from "next-seo";
import ScriptGa from "../ScriptGa";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
			<DefaultSeo {...SEO} />
			<ScriptGa />
      <Component className="font-" {...pageProps} />
    </>
  );
}

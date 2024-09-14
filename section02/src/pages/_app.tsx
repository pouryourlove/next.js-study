import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return(
  <>
  <header>헤더입니다</header>
  <Component {...pageProps} />
  </>
  )
}

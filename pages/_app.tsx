import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { SnackbarProvider } from "notistack";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </SnackbarProvider>
  );
}

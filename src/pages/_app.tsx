import { AppProps } from "next/app";
import 'bootstrap/dist/css/bootstrap.min.css'
import { CartContextProvider } from "@/hooks/useCart";


function MyApp({Component, pageProps}: AppProps) {
  return (
    <CartContextProvider>
      <Component {...pageProps} />
    </CartContextProvider>
  )
}

export default MyApp;
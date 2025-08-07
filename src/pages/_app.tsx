import "@/styles/globals.css";
import { DEFAULT_META_DATA } from "@/contants/meta-data";
import { AppPropsWithLayout } from "@/types/page";
import { Meta } from "@/libs/ui";

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const metaProps = Component.metadata || DEFAULT_META_DATA;
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Meta {...metaProps} />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

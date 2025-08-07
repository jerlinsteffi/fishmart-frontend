import { Metadata } from "next";
import Head from "next/head";

export const Meta = ({ title, keywords, description }: Metadata) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="keywords"
        content={Array.isArray(keywords) ? keywords.join(",") : keywords || undefined}
      />
      <meta name="description" content={description || undefined} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{typeof title === "string" ? title : <>{title}</>}</title>
    </Head>
  );
};

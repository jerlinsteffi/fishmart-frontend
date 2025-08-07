import { HOME_META_DATA } from "@/contants/meta-data";
import { Layout } from "@/libs/dashboard-layout";
import { NextPageWithLayout } from "@/types/page";
import React from "react";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <div>Hello</div>
    </>
  );
};

Home.metadata = HOME_META_DATA;
Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default Home;

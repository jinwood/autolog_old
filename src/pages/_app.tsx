import { type AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import "~/styles/globals.css";
import { api } from "~/utils/api";
import Layout from "~/components/layout";

config.autoAddCss = false;

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);

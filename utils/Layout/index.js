import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Transition from "./transition";
import '../../config/firebaseClient.ts';
import ButtonHorizontal from "../../components/molecules/button-horizontal";
import css from "./layout.module.scss";

const Layout = ({ children }) => {
  const router = useRouter();

  const [isCookieConsented, setIsCookieConsented] = React.useState(false);

  React.useEffect((_) => {
    setIsCookieConsented(
      window.localStorage.getItem("hasCookieConsent") || "ask"
    );
  }, []);

  return (
    <div className={css["layout"]}>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            function initMap () {
              window.mapHasGeometry = true;
            }
            `,
          }}
        />
        <script
          defer
          id="google-maps-api-script"
          src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDstLnDS4RWd0BfMo1So7tASzLwGv17U8Y&libraries=geometry&callback=initMap`}
        ></script>

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#00708d" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta itemProp="inLanguage" content="pt-BR" />
        <meta property="og:locale" content="pt-BR" />
        <title>Schools Calendar</title>
        <link rel="icon" type="image/x-icon" href="/images/favicon2.ico" />
        {isCookieConsented === "ok" ? (
          <>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window,document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '541541827257348');
                    fbq('track', 'PageView');
                `,
              }}
            />
          </>
        ) : null}
      </Head>
      <Transition location={router.pathname}>
        <main className={css["main"]}>{children}</main>
      </Transition>

      {isCookieConsented === "ask" ? (
        <div className={css["cookie-notif-container"]}>
          <div className={css["cookie-notif-message-container"]}>
            <div className={css["message"]}>
              Nós usamos cookies e outras tecnologias semelhantes para melhorar
              a sua experiência em nossos serviços, personalizar publicidade e
              recomendar conteúdo de seu interesse. Ao utilizar nossos serviços,
              você concorda com tal monitoramento. Informamos ainda que
              atualizamos nossa Política de Privacidade.
            </div>
            <div className={css["btn-container"]}>
              <ButtonHorizontal
                className={css["btn"]}
                style="orange"
                onClick={(event) => {
                  setIsCookieConsented("ok");
                  window.localStorage.setItem("hasCookieConsent", "ok");
                }}
              >
                Prosseguir
              </ButtonHorizontal>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default Layout;

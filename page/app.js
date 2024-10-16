import Head from 'next/head';
import '../styles/globals.css';  // If you plan to add any global CSS

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var _vwo_code = _vwo_code || (function(){
                var account_id=YOUR_ACCOUNT_ID;
                // Additional SmartCode goes here
              })();
            `,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Cormorant+Infant&family=Reenie+Beanie&family=Roboto:ital@1&family=Tilt+Neon&display=swap"
            rel="stylesheet"
          />
        </>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
          integrity="sha384-ezLKkhFv/3sL1muurAg0sDZ4CBPCcPukawZjBEGg30sxM57wC3S/jEdvqxBcO7GX"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/fonts/font-awesome-4.7.0/font-awesome.min.css"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="/fonts/iconic/css/material-design-iconic-font.min.css"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/fonts/linearicons-v1.0.0/icon-font.min.css"
        />
        <>
          <link
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
            rel="stylesheet"
          />
          <script
            src="https://kit.fontawesome.com/a076d05399.js"
            crossOrigin="anonymous"
            async
          />
          {/* Include jQuery */}
          <script
            src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
            async
          />

          {/* Include Bootstrap JavaScript */}
          <script
            src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
            async
          />
        </>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="pt-BR">
                <Head>
                    <meta charSet="utf-8" />
                    <link rel="dns-prefetch" href="//fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="true" />
                    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#cc2c51" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <meta name="msapplication-TileColor" content="#ffc40d" />
                    <meta name="theme-color" content="#ffffff" />
                    <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
                    <meta name='application-name' content='Byma' />
                    <meta name='apple-mobile-web-app-status-bar-style' content='default' />
                    <meta name='apple-mobile-web-app-title' content='Byma' />

                    <link rel='manifest' href='/manifest.json' />
                    <meta name="mobile-web-app-capable" content="yes" />
                    <meta name="description" content="A plataforma para garantir o ingresso do seu evento. Sem filas, sem dores de cabeça e com apenas um clique." />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <link href="https://fonts.googleapis.com/css?family=Barlow:400,700|Poppins:400,700&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument

import { Html, Head, Main, NextScript} from "next/document";

export default function Document() {
    return (
        <Html lang="fr">
            <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.cdnfonts.com/css/aktiv-grotesk-cd-trial" rel="stylesheet" />

            {/* fontNunito */}
            
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Meddon&display=swap" rel="stylesheet" />

            {/* fontMeddon */}

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap" rel="stylesheet" />

            {/* fontArchivoBlack */}

            <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
            
            {/* Animate On Scroll Library */}

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css" />
            <script defer src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js" />
            <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
            {/* tailwind elements */}
            </Head>
            <body className="bg-customblue">
            <script defer src="https://unpkg.com/aos@next/dist/aos.js%22%3E"/>
            <script defer>AOS.init();</script>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

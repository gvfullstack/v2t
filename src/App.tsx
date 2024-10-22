import { useEffect } from "react";
import { AudioManager } from "./components/AudioManager";
import Transcript from "./components/Transcript";
import { useTranscriber } from "./hooks/useTranscriber";

function App() {
    const transcriber = useTranscriber();

    useEffect(() => {
        // Add meta tag for AdSense
        const metaTag = document.createElement("meta");
        metaTag.name = "google-adsense-account";
        metaTag.content = "ca-pub-5673092573089857";
        document.head.appendChild(metaTag);

        // Load AdSense script
        const script = document.createElement("script");
        script.src =
            "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5673092573089857";
        script.async = true;
        script.crossOrigin = "anonymous";
        document.head.appendChild(script);
    }, []);

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="container flex flex-col justify-center items-center">
                <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl text-center">
                    Voice To Text
                </h1>
                <h2 className="mt-3 mb-5 px-4 text-center text-1xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
                    ML-powered speech recognition directly in your browser.
                </h2>
                <h3 className="mt-3 mb-5 px-4 text-center text-1xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
                    When the transcription is complete, you can download the
                    entire transcript as a text or JSON filename using the buttons
                    below.
                </h3>

                <AudioManager transcriber={transcriber} />
                <Transcript transcribedData={transcriber.output} />
            </div>

            <div className="absolute bottom-4">
                Made with{" "}
                <a
                    className="underline"
                    href="https://github.com/xenova/transformers.js"
                >
                    🤗 Transformers.js
                </a>
            </div>

        </div>
    );
}

export default App;

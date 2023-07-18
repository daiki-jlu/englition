export const translateText = async (text) => {
    const API_KEY = process.env.REACT_APP_TRANSLATE_API_KEY;

    const response = await fetch(`https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            q: text,
            target: "ja", // target language
            source: "en", // source language
        }),
    });

    if (response.ok) {
        const data = await response.json();
        return data.data.translations[0].translatedText;
    } else {
        throw new Error("翻訳に失敗しました。");
    }
};

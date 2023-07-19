import React, { useState } from "react";
import { translateText } from "../../services/translate";

function TranslationForm() {
    const [text, setText] = useState("");
    const [translation, setTranslation] = useState("");

    const handleTranslate = async (event) => {
        event.preventDefault();
        try {
            const translatedText = await translateText(text);
            setTranslation(translatedText);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleTranslate}>
            <input
                type="text"
                placeholder="Enter text to translate"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button>Translate</button>
            {translation && <p>{translation}</p>}
        </form>
    );
}

export default TranslationForm;

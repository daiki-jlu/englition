import React, { useState } from "react";
import TranslationForm from "./TranslationForm";

function TranslationButton() {
    const [showForm, setShowForm] = useState(false);

    const handleButtonClick = () => {
        setShowForm(!showForm);
    };

    return (
        <div>
            <button onClick={handleButtonClick}>Translate</button>
            {showForm && <TranslationForm />}
        </div>
    );
}

export default TranslationButton;

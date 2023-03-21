import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { availableLanguages } from "../../i18n";

import { Form } from 'react-bootstrap';

const DropdownLanguage = () => {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState("id");

    const handleLangChange = (evt: { target: { value: any; }; }) => {
        const lang = evt.target.value;
        console.log(lang);
        setLanguage(lang);
        i18n.changeLanguage(lang);
      };

    return (
        <Form.Select 
            onChange={ handleLangChange } 
            value={ language } 
            className="language"
        >
            {availableLanguages.map((language) => (
            <option key={language}>{language}</option>
          ))}
        </Form.Select>
    );
};
export default DropdownLanguage;
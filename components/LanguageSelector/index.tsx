import { roboto400 } from '@/styles/fonts/RobotoFonts';
import { AR, GB } from 'country-flag-icons/react/3x2';
import { useEffect, useState } from 'react';
import Styles from './LanguageSelector.module.scss';
import i18n from '@/locales/i18n';
interface Language {
  flag: string;
  language: string;
  code: string;
  component: JSX.Element;
}
const languages: Language[] = [
  {
    flag: 'GB',
    language: 'English',
    code: 'en',
    component: <GB title='English' className={Styles['languageselector-container__selected-flag']} />,
  },
  {
    flag: 'ES',
    language: 'Español',
    code: 'es',
    component: <AR title='Español' className={Styles['languageselector-container__selected-flag']} />,
  },
];

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('GB');
  const [selectedComponent, setSelectedComponent] = useState<JSX.Element | null>(null);
  const [showList, setShowList] = useState(false);

  const handleClick = () => setShowList(!showList);

  const handleSelect = (lang: Language) => {
    setSelectedLanguage(lang.flag);
    i18n.changeLanguage(lang.code);
    setShowList(false);
  };

  useEffect(() => {
    const langSelect = languages.find((e) => e.flag === selectedLanguage);
    if (langSelect)
      setSelectedComponent(
        <>
          {langSelect.component}
          <h5 className={roboto400.className}>{langSelect.language}</h5>
        </>
      );
  }, [selectedLanguage]);

  useEffect(() => {
    handleSelect(languages[1]);
  }, []);

  return (
    <div className={Styles['languageselector-container']}>
      <div className={Styles['languageselector-container__selected']} onClick={handleClick}>
        {selectedComponent}
      </div>
      {showList && (
        <div className={Styles['languageselector-container__list']} onMouseLeave={() => setShowList(false)}>
          <ul>
            {languages.map((lang, index) => (
              <li key={index}>
                {/* <a href='' onClick={() => handleSelect(lang)}> */}
                <div className={Styles['language-item']}>
                  <span onClick={() => handleSelect(lang)}>
                    {lang.component} {lang.language}
                  </span>
                </div>
                {/* </a> */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;

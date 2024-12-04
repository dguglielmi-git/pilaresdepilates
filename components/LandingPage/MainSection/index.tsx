import { roboto500 } from '@/styles/fonts/RobotoFonts';
import Image from 'next/image';
import Styles from './MainSection.module.scss';
import { useTranslation } from 'react-i18next';

const MainSection = () => {
  const { t } = useTranslation();

  return (
    <section className={Styles['mainsection-container']}>
      <div className={Styles['mainsection-container__signup']}>
        <span>
          <h1 className={roboto500.className}>{t('mainSectionHeader')}</h1>
        </span>

        <div className={Styles['mainsection-container__signup-text']}>
          <span>
            <h3 className={roboto500.className}>{t('mainSectionSubHeader')}</h3>
          </span>
          <span>
            <h4 className={roboto500.className}>{t('mainSectionSubtitle')}</h4>
          </span>
        </div>
       
      </div>
      <div className={Styles['mainsection-container__logo']}>
        <Image src='/pilaresdepilatestransparent.png' width={750} height={640} alt='Snappy Logo Picture' />
      </div>
    </section>
  );
};

export default MainSection;

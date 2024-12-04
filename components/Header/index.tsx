/* eslint-disable @next/next/no-img-element */
'use client';
import { roboto400 } from '@/styles/fonts/RobotoFonts';
import LanguageSelector from '../LanguageSelector';
import Styles from './Header.module.scss';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Dialog } from 'primereact/dialog';

const Header = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <section className={Styles['header-app']}>
      <LanguageSelector />
      <article className={Styles['header-app__menu']}>
        <button className={Styles['header-app__menu-btn']} onClick={() => setVisible(true)}>
          <h3 className={roboto400.className}>{t('loginButton')}</h3>
        </button>
      </article>
      <Dialog
        header={t('dialogLoginClientTitle')}
        visible={visible}
        style={{ width: '50vw' }}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
      >
        <p className='m-0'>{t('dialogLoginClientMessage')}</p>
      </Dialog>
    </section>
  );
};

export default Header;

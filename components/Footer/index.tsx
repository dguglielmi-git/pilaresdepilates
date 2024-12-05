'use client';
import { roboto400, roboto900 } from '@/styles/fonts/RobotoFonts';
import Image from 'next/image';
import Styles from './Footer.module.scss';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className={Styles['footer']}>
      <div className={Styles['footer__container']}>
        <div className={Styles['footer__container-logo']}>
          <Image src='/pilarespilateslogo.jpg' width={150} height={150} alt='Pilares de Pilates Logo Picture' />
        </div>
        <div className={Styles['footer__container-contact']}>
          <h3 className={roboto900.className}>{t('footerGetInTouch')}</h3>
          <div>
            <span>
              <h4 className={roboto400.className}>
                <strong className={Styles['strong']}>{t('footerTeacher')}</strong> Erika Lopez
              </h4>
            </span>
            <span>
              <h4 className={roboto400.className}>
                <strong className={Styles['strong']}>{t('footerEmail')}</strong> contacto@pilaresdepilates.com.ar
              </h4>
            </span>
            <span>
              <h4 className={roboto400.className}>
                <strong className={Styles['strong']}>{t('footerAddress')}</strong> Combate de los Pozos 433 - Capital
                Federal, Buenos Aires, Argentina
              </h4>
            </span>
            <span>
              <h4 className={roboto400.className}>
                <strong className={Styles['strong']}>{t('footerPhone')}</strong>{' '}
                <Link
                  href='https://w.app/PilaresDePilates'
                  target='_blank'
                  className={Styles['footer__container-contact__whatsapp']}
                >
                  +54 11-7161-0644
                </Link>
              </h4>
            </span>
          </div>
        </div>
      </div>
      <div className={Styles['footer__copyright']}>
        <span>Pilares de Pilates © 2024</span>
      </div>
    </div>
  );
};

export default Footer;

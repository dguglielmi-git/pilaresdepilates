import Link from 'next/link';
import Styles from './LocationSection.module.scss';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const Location = () => {
  const { i18n } = useTranslation();
  return (
    <section className={Styles['location']}>
      <section className={Styles['location__title']}>
        <h1>{i18n.t('pilaresLocationTitle')}</h1>
        <p>{i18n.t('pilaresLocationSubtitle')}</p>
      </section>
      <section className={Styles['location__map']}>
        <Link href='https://maps.app.goo.gl/6SFJWGjBN3rMj2Bt5' target='_blank'>
          <Image src='/mapa-combate.png' width={450} height={200} alt='mapa' />
        </Link>
      </section>
    </section>
  );
};

export default Location;

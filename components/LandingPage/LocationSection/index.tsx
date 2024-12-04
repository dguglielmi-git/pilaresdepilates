import Link from 'next/link';
import Styles from './LocationSection.module.scss';
import Image from 'next/image';

const Location = () => {
  return (
    <section className={Styles['location']}>
      <section className={Styles['location__title']}>
        <h1>Donde estamos</h1>
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

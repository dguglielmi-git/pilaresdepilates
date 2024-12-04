import { roboto400 } from '@/styles/fonts/RobotoFonts';
import { PriceCardProps } from '@/types/PriceCardProps';
import Styles from './PriceCard.module.scss';
import Image from 'next/image';

const PriceCard = (props: PriceCardProps) => {
  return (
    <div className={Styles['pricecard-container']}>
      <div className={Styles['pricecard-container__name']}>
        <p>{props.name}</p>
      </div>
      <div className={Styles['pricecard-container__picture']}>
        <Image src={props.imageUrl} width={100} height={100} alt='PilaresDePilates' />
      </div>
      <div className={Styles['pricecard-container__details']}>
        <div className={Styles['pricecard-container__details__title']}>
          <h2 className={roboto400.className}>{props.title}</h2>
        </div>
        <div className={Styles['pricecard-container__details__content']}>
          <p className={roboto400.className}>{props.content}</p>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;

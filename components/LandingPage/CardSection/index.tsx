import React from 'react';
import PriceCard from './PriceCard';
import { PriceCardProps } from '@/types/PriceCardProps';
import Styles from './CardSection.module.scss';
import Waves from '@/components/Waves';
import { useTranslation } from 'react-i18next';

const CardSection = () => {
  const { i18n } = useTranslation();

  const cards: PriceCardProps[] = [
    {
      name: i18n.t('pilaresFirstCardCardName'),
      title: i18n.t('pilaresFirstCardCardTitle'),
      content: '$26.000',
      imageUrl: '/pilates-one.jpg',
    },
    {
      name: i18n.t('pilaresSecondCardCardName'),
      title: i18n.t('pilaresSecondCardCardTitle'),
      content: '$33.000',
      imageUrl: '/pilates-two.jpg',
    },
    {
      name: i18n.t('pilaresThirdCardCardName'),
      title: i18n.t('pilaresThirdCardCardTitle'),
      content: '$40.000',
      imageUrl: '/pilates-three.jpg',
    },
  ];

  return (
    <section className={Styles['cardsection-container']}>
      <Waves />

      <section className={Styles['cardsection-container__title']}>
        <h1>{i18n.t('pilaresPlanSectionTitle')}</h1>
        <h4>
        {i18n.t('pilaresPlanSectionSubtitle')}
        </h4>
      </section>
      <div className={Styles['cardsection-container__cards']}>
        {cards.map((card, index) => (
          <PriceCard name={card.name} key={index} title={card.title} content={card.content} imageUrl={card.imageUrl} />
        ))}
        <article className={Styles['cardsection-container__waves']}>
          <Waves backgroundColor='#e5e5e5' />
        </article>
      </div>
    </section>
  );
};

export default CardSection;

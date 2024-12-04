import { Galleria, GalleriaResponsiveOptions } from 'primereact/galleria';
import Styles from './StudioGallery.module.scss';
import { useMemo } from 'react';

interface Item {
  itemImageSrc?: string;
  thumbnailImageSrc?: string;
  alt: string;
  title?: string;
}

const StudioGallery = () => {
  //   const [images, setImages] = useState<Item[] | undefined>([]);
  const responsiveOptions: GalleriaResponsiveOptions[] = [
    {
      breakpoint: '991px',
      numVisible: 4,
    },
    {
      breakpoint: '767px',
      numVisible: 3,
    },
    {
      breakpoint: '575px',
      numVisible: 1,
    },
  ];

  const images = useMemo(() => {
    return [
      {
        itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1s.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1',
      },
      {
        itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1s.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1',
      },
    ];
  }, []);

  const itemTemplate = (item: Item) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
  };

  const thumbnailTemplate = (item: Item) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
  };

  return (
    <section className={Styles['studio-gallery']}>
      <section className={Styles['studio-gallery__title']}>
        <h1>Nuestro Studio</h1>
      </section>
      <section className={Styles['studio-gallery__gallery']}>
        <Galleria
          value={images}
          responsiveOptions={responsiveOptions}
          numVisible={5}
          style={{ maxWidth: '640px' }}
          item={itemTemplate}
          thumbnail={thumbnailTemplate}
          circular
          autoPlay
          transitionInterval={2000}
          showThumbnails
          //   fullScreen
        />
      </section>
    </section>
  );
};

export default StudioGallery;

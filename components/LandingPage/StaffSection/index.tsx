import Styles from './StaffSection.module.scss';

const StaffSection = () => {
  return (
    <section className={Styles['staff']}>
      <section className={Styles['staff__title']}></section>
      <section className={Styles['staff__cards']}></section>
    </section>
  );
};

export default StaffSection;

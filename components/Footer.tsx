import styles from '../styles/Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <h3>Способ оплаты</h3>
        <img width="250" src="visa_mc.png" alt="" />
      </div>
      <div>
        <h3>Контакты</h3>
        <p>Адрес: г. Алматы, ​Толе би 266, ТД «Тастак», 1 этаж, 5A бутик</p>
        <p>Телефоны: +7 777 931 95 33, +7 778 572 25 96, +7 777 771 89 29</p>
        <p>
          Электронная почта: admin@raspberrypi.kz Доставка: по г. Алматы
          бесплатно, в другие города бесплатно (Казпочта), ускоренная доставка
          оговаривается и оплачивается отдельно.
        </p>
      </div>
    </footer>
  )
}

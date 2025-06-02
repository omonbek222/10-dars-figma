import mapImg from '../assets/mapp.png';
import plantImg from '../assets/okean.png';

function DeliverySection() {
  return (
    <section className="bg-white px-6 md:px-10 py-14 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="bg-blue-900 text-white text-center text-lg md:text-xl font-semibold py-8 px-6 rounded mb-12 shadow">
          Мы продумали всё, чтобы вы могли <br /> купить металлопрокат по выгодной цене <br /> и с доставкой за 2–3 дня
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-14 items-center">
          <div className="space-y-5 text-sm leading-relaxed">
            <p>
              Производим и отгружаем металлопродукцию <strong>напрямую со своих производственных площадок</strong>, 
              а также со складов в 26 городах.
            </p>
            <p>
              Выбирайте ближайший склад — <strong>это позволит вам получить продукцию быстрее и дешевле</strong>, 
              благодаря меньшей стоимости логистики.
            </p>
          </div>
          <img src={mapImg} alt="Карта складов" className="rounded w-full shadow-md" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img src={plantImg} alt="Производство металла" className="rounded w-full shadow-md" />
          <div className="space-y-5 text-sm leading-relaxed">
            <p>
              Стратегически размещённые металлобазы и филиалы позволяют <strong>сократить сроки доставки до 2–3 дней</strong>, 
              а также <strong>предоставлять низкие цены</strong> за счёт оптимизации логистики.
            </p>
            <p>
              Мы постоянно поддерживаем в наличии наиболее востребованные позиции, что позволяет отгружать продукцию 
              сразу после оплаты.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DeliverySection;

import metalImg from '../assets/metal.png';

function Products() {
  return (
    <section className="px-10 py-14 bg-gray-50">
      <h2 className="text-2xl font-bold text-gray-800 mb-3">
        Выгодные цены на металлопрокат в Новосибирске
      </h2>
      <p className="mb-6 text-sm text-gray-600">
        Обратитесь к менеджеру и он отправит вам цены на нужные позиции
      </p>

      <div className="bg-white shadow rounded p-6 grid md:grid-cols-2 gap-6">
        <div>
          <div className="flex flex-wrap gap-4 text-sm text-blue-700 font-semibold mb-4">
            <div>Штрипс, лента оцинкованная</div>
            <div>Сетка</div>
            <div>Профнастил</div>
            <div>Металл</div>
            <div>Арматура</div>
            <div>Инд. позиции</div>
          </div>
          <h3 className="text-lg font-semibold mb-2">
            Штрипс, лента оцинкованная
          </h3>
          <ul className="list-disc pl-5 text-sm text-gray-700 mb-4">
            <li>Оцинкованный штрипс</li>
            <li>Оцинкованная стальная лента</li>
            <li>Оцинкованная лента по ГОСТ</li>
          </ul>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">
            Узнать стоимость
          </button>
        </div>
        <img src={metalImg} alt="Штрипс" className="max-w-md w-full mx-auto" />
      </div>
    </section>
  );
}

export default Products;

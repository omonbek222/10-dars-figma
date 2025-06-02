import metal from '../assets/metal.png';

function PricesSection() {
  return (
    <section className="bg-white w-full px-6 md:px-10 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Sarlavha */}
        <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-2">
          Выгодные цены на <br className="hidden md:block" />
          металлопрокат в Новосибирске
        </h2>

        {/* Taglavha */}
        <p className="text-sm text-gray-700 mb-6">
          Обратитесь к менеджеру и он отправит вам цены на нужные позиции
        </p>

        <p className="text-sm font-semibold text-gray-800 mb-4">
          Посмотрите какие товарные группы есть в наличии в Новосибирске
        </p>

        {/* Kategoriyalar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 border border-gray-300 rounded p-4 text-center text-xs text-gray-700 mb-8">
          <div className="hover:underline cursor-pointer">Штрипс, лента оцинкованная</div>
          <div className="hover:underline cursor-pointer">Сетка</div>
          <div className="hover:underline cursor-pointer">Профиль оцинкованный</div>
          <div className="hover:underline cursor-pointer">Профнастил</div>
          <div className="hover:underline cursor-pointer">Металлоконструкции</div>
          <div className="hover:underline cursor-pointer">Индивидуально под заказ</div>
        </div>

        {/* Mahsulot bloki */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src={metal}
            alt="Штрипс"
            className="w-full max-w-xl mx-auto"
          />

          <div>
            <h3 className="text-sm font-semibold mb-2">Штрипс, лента оцинкованная</h3>
            <ul className="text-sm text-gray-700 mb-4 list-disc pl-4">
              <li>Оцинкованный штрипс</li>
              <li>Оцинкованная стальная лента</li>
              <li>Оцинкованные полосы ГК</li>
            </ul>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 text-sm rounded">
              Узнать стоимость
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricesSection;

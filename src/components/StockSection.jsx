import metal1 from '../assets/orama.png'; 
import skladImage from '../assets/zavod.png'; 

function StockSection() {
  return (
    <section className="px-6 md:px-10 py-14 bg-white w-full">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-blue-800 mb-2">
          Поддерживаем остатки на наших складах
        </h2>
        <p className="text-sm text-gray-600 mb-8">
          благодаря тщательно спланированному объему производства и сбыта
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Mahsulotlar ro'yxati */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <img src={metal1} alt="Штрипс" className="w-20 h-20 object-contain" />
              <p className="text-sm text-gray-800">Штрипс, полоса<br /><strong>более 1 000 тонн</strong></p>
            </div>
            <div className="flex items-center gap-4">
              <img src={metal1} alt="Профиль" className="w-20 h-20 object-contain" />
              <p className="text-sm text-gray-800">Профиль<br /><strong>более 200 тонн</strong></p>
            </div>
            <div className="flex items-center gap-4">
              <img src={metal1} alt="Сетка" className="w-20 h-20 object-contain" />
              <p className="text-sm text-gray-800">Сетка<br /><strong>более 300 тонн</strong></p>
            </div>
            <div className="flex items-center gap-4">
              <img src={metal1} alt="Профнастил" className="w-20 h-20 object-contain" />
              <p className="text-sm text-gray-800">Профнастил<br /><strong>более 300 тонн</strong></p>
            </div>
          </div>

          {/* Sklad rasmi va matn */}
          <div className="relative">
            <img src={skladImage} alt="Склад" className="w-full rounded shadow" />
            <p className="text-xs text-gray-700 mt-2">
              Мы специально поддерживаем определенные остатки, чтобы гарантировать отгрузку за 1–2 дня после оплаты
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StockSection;

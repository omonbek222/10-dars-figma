import metalImg from '../assets/metal.png';

function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-10 py-12 gap-10 bg-white">
      <div className="max-w-xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          Металлопрокат в наличии в Новосибирске от производителя<br />
          <span className="text-blue-700">с доставкой до вас за 1–2 дня по цене ниже рыночной</span>
        </h1>
        <p className="mb-6 text-sm text-gray-600">
          Склады и филиалы производителя в 26 крупных городах по всей территории РФ
        </p>
        <button className="bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-700">
          Получить прайс с персональными ценами
        </button>
      </div>
      <div className="relative">
        <img src={metalImg} alt="Металлопрокат" className="max-w-md w-full" />
        <button className="absolute bottom-4 right-4 bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500 text-sm">
          Получить прайс с персональными ценами
        </button>
      </div>
    </section>
  );
}

export default Hero;

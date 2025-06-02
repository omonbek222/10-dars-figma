import metalImg from '../assets/metal.png';

function Hero() {
  return (
    <section className="w-full bg-white px-6 md:px-10 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Chap matnli qism */}
        <div className="max-w-xl">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Металлопрокат в наличии в Новосибирске от производителя<br />
            <span className="text-blue-700">
              с доставкой до вас за 1–2 дня по цене ниже рыночной
            </span>
          </h1>
          <p className="mb-6 text-sm text-gray-600">
            Склады и филиалы производителя в 26 крупных городах по всей территории РФ
          </p>
          <button className="bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-700 text-sm">
            Получить прайс с персональными ценами
          </button>
        </div>

        {/* O'ngda rasm qismi */}
        <div className="relative w-full max-w-md">
          <img src={metalImg} alt="Металлопрокат" className="w-full rounded" />
          <button className="absolute bottom-4 right-4 bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500 text-sm">
            Получить прайс с персональными ценами
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;

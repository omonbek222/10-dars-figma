import benefitImg from '../assets/Oramatemir.png'; 
import logo1 from '../assets/logo4.png';
import logo2 from '../assets/logo1.png';
import logo3 from '../assets/logo2.png';
import logo4 from '../assets/logo3.png';
import cert1 from '../assets/hujat2.png';
import cert2 from '../assets/hujat2.png';
import cert3 from '../assets/hujat1.png';
import cert4 from '../assets/hujat2.png';

function BenefitsSection() {
  return (
    <section className="bg-white px-6 md:px-10 py-14 text-gray-800">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Advantages */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-center mb-6">
            Какие еще выгоды от работы с нами?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <p className="text-sm leading-relaxed">
              Мы заботимся об удобстве и высокой отдаче от работы с клиентами. <br />
              <strong>Персональные менеджеры, быстрая отгрузка, скидки и бонусы</strong> — лишь малая часть выгод, 
              которые вы получите, начав с нами сотрудничество.
            </p>
            <img src={benefitImg} alt="Выгоды" className="rounded w-full shadow-md" />
          </div>
        </div>

        {/* Partners */}
        <div className="text-center">
          <p className="text-sm mb-4">
            Нам доверяют и работают с нами такие производственные и строительные компании, как:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <img src={logo1} alt="Партнёр 1" className="h-10 object-contain" />
            <img src={logo2} alt="Партнёр 2" className="h-10 object-contain" />
            <img src={logo3} alt="Партнёр 3" className="h-10 object-contain" />
            <img src={logo4} alt="Партнёр 4" className="h-10 object-contain" />
          </div>
        </div>

        {/* Certificates */}
        <div className="bg-gray-100 p-6 rounded">
          <h3 className="text-center text-sm font-semibold mb-4">
            Производимая продукция соответствует регламентам ГОСТ, ОСТ, ТУ и международным стандартам
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-items-center">
            <img src={cert1} alt="Сертификат 1" className="h-40 object-contain" />
            <img src={cert2} alt="Сертификат 2" className="h-40 object-contain" />
            <img src={cert3} alt="Сертификат 3" className="h-40 object-contain" />
            <img src={cert4} alt="Сертификат 4" className="h-40 object-contain" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default BenefitsSection;

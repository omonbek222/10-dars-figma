export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 md:flex md:justify-between">
        
        <div className="mb-8 md:mb-0 md:w-1/3">
          <h2 className="text-2xl font-bold text-white mb-3">ВашСайт</h2>
          <p className="text-gray-400 max-w-xs">
            Наша цель — предоставлять лучшие услуги и обеспечивать удовлетворение наших клиентов.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 md:w-2/3">
          <div>
            <h3 className="text-white font-semibold mb-4">Разделы сайта</h3>
            <ul>
              <li className="mb-2 hover:text-white cursor-pointer">Главная</li>
              <li className="mb-2 hover:text-white cursor-pointer">Услуги</li>
              <li className="mb-2 hover:text-white cursor-pointer">Проекты</li>
              <li className="mb-2 hover:text-white cursor-pointer">Блог</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Контакты</h3>
            <ul>
              <li className="mb-2 hover:text-white cursor-pointer">Телефон: +998 90 123 45 67</li>
              <li className="mb-2 hover:text-white cursor-pointer">Email: info@вашсайт.uz</li>
              <li className="mb-2 hover:text-white cursor-pointer">Адрес: Ташкент, Узбекистан</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Социальные сети</h3>
            <ul className="flex space-x-4">
              <li>
                <a href="#" aria-label="Facebook" className="hover:text-white">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.5228-4.4772-10-10-10S2 6.4772 2 12c0 4.9912 3.657 9.1288 8.438 9.878v-6.987h-2.54v-2.89h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.89h-2.33V21.88C18.343 21.1288 22 16.9912 22 12z"/></svg>
                </a>
              </li>
              <li>
                <a href="#" aria-label="Twitter" className="hover:text-white">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14.86A4.48 4.48 0 0 0 22.4.36a9.05 9.05 0 0 1-2.86 1.1A4.52 4.52 0 0 0 16.67 0c-2.66 0-4.81 2.2-4.81 4.92 0 .39.04.76.13 1.12C7.7 5.82 4.06 4.09 1.67 1.15a4.85 4.85 0 0 0-.65 2.48c0 1.7.9 3.2 2.27 4.08a4.44 4.44 0 0 1-2.18-.62v.06c0 2.38 1.7 4.38 3.95 4.83a4.46 4.46 0 0 1-2.17.1c.61 1.96 2.37 3.38 4.45 3.43A9.05 9.05 0 0 1 1 19.27 12.8 12.8 0 0 0 7.29 21c8.73 0 13.52-7.5 13.52-14v-.64A9.6 9.6 0 0 0 23 3z"/></svg>
                </a>
              </li>
              <li>
                <a href="#" aria-label="Instagram" className="hover:text-white">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.657 0 3 1.343 3 3v10c0 1.657-1.343 3-3 3H7c-1.657 0-3-1.343-3-3V7c0-1.657 1.343-3 3-3zm5 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm4.5-.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        &copy; 2025 ВашСайт. Все права защищены.
      </div>
    </footer>
  );
}

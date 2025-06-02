function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b shadow-sm">
      <div className="flex justify-between items-center px-10 py-4">
        <div className="text-blue-800 font-bold text-xl">GEFEST</div>
        <div className="flex gap-6 items-center text-sm">
          <button className="text-blue-600 border border-blue-600 px-4 py-1 rounded hover:bg-blue-50">
            Уже наш поставщик?
          </button>
          <div className="text-right">
            <div className="font-bold">+7 (495) 444-44-44</div>
            <a href="#" className="text-blue-600 underline text-xs">
              Заказать обратный звонок
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

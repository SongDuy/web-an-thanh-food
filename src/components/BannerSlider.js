import { useEffect, useState } from 'react';

const banners = [
  {
    title: 'Thực phẩm sạch mỗi ngày',
    subtitle: 'An toàn – Tươi ngon – Nguồn gốc rõ ràng',
    bg: 'bg-green-200',
  },
  {
    title: 'Rau củ tươi từ nông trại',
    subtitle: 'Giao hàng nhanh – Giá hợp lý',
    bg: 'bg-yellow-200',
  },
  {
    title: 'An Thanh Food',
    subtitle: 'Chăm sóc bữa ăn gia đình Việt',
    bg: 'bg-blue-200',
  },
];

const BannerSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const banner = banners[current];

  return (
    <section
      className={`w-full h-[500px] flex items-center justify-center transition-all duration-700 ${banner.bg}`}
    >
      <div className="w-full h-[500px] bg-yellow-100 flex items-center justify-center">

        {/* Khung hiện thị Banner */}
        <div className="relative w-[1120px] h-[500px] bg-yellow-200 flex items-center justify-center">

          {/* Biểu ngữ cho Banner */}
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-2">
              {banner.title}
            </h2>
            <p className="text-lg">
              {banner.subtitle}
            </p>
          </div>

          {/* Nút chuyển Banner */}
          < div className="absolute bottom-3 left-5 right-0 flex items-center">
            {Array.from({ length: 12 }).map((_, index) => (
              <button
                key={index}
                className="w-[15px] h-[15px] mx-1 rounded-full bg-white opacity-60 hover:opacity-100"
              />
            ))}
          </div>
          
        </div>

      </div>

    </section>
  );
};

export default BannerSlider;

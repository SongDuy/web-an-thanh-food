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
      className={`h-[300px] flex items-center justify-center transition-all duration-700 ${banner.bg}`}
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-2">
          {banner.title}
        </h2>
        <p className="text-lg">
          {banner.subtitle}
        </p>
      </div>
    </section>
  );
};

export default BannerSlider;

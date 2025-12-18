import { useEffect, useState, useCallback } from 'react';

const banners = [
  {
    title: "999 lá thư gửi cho chính mình**",
    subtitle: "1. Bắt đầu từ hôm nay, mỗi ngày hãy luôn nở nụ cười trên môi, trên đời này ngoài sinh tử ra thì mọi sự đều là chuyện nhỏ. Cho dù gặp chuyện phiền lòng cũng đừng tự làm khó mình; bất luận hôm nay xảy ra bao nhiêu chuyện đen đủi, đều không nên cảm thấy bi thương. Hôm nay là ngày bạn trẻ nhất trong những ngày tháng sau này, vì còn có ngày mai, hôm nay mãi chỉ là bước khởi đầu của con đường tương lai.",
    author: "Miêu Công Tử",
    bgImage: 'https://tintuc.dienthoaigiakho.vn/wp-content/uploads/2025/09/hinh-nen-full-hd-1920x1080-cho-may-tinh-34.jpg',
  },
  {
    title: '999 lá thư gửi cho chính mình**',
    subtitle: "2. Ðời người sẽ luôn có sự ấm áp bất ngờ và những hy vọng bất tận. Bất kể con đường phía trước có bao nhiêu khổ ải, chỉ cần phương hướng chính xác thì dù gập ghềnh khúc khuỷu đến mấy, cũng sẽ gần với hạnh phúc hơn là đứng ở vạch xuất phát.",
    author: "Miêu Công Tử",
    bgImage: 'https://i.redd.it/pb5d9d1uif1d1.jpeg',
  },
  {
    title: '999 lá thư gửi cho chính mình**',
    subtitle: "3. Bạn là một người mạnh mẽ, từng giây từng phút đều yêu cầu bản thân phải đạt được một trăm phần trăm sự kỳ vọng. Nhưng quá khắt khe không phải lúc nào cũng tốt, bạn vốn không phải thiên tài, xin hãy cho phép bản thân được phạm lỗi. Ðừng quá vội vàng, sự cố gắng của bạn, thời gian sẽ giúp bạn thực hiện.",
    author: "Miêu Công Tử",
    bgImage: 'https://i.redd.it/pf98j1djrbw41.jpg',
  },
  {
    title: '999 lá thư gửi cho chính mình**',
    subtitle: "4. Thời gian thay đổi, con người cũng thay đổi. Cuộc đời là một bộ phim tuyệt bản không cách nào phát lại, có những việc cho dù bạn có nỗ lực đến đâu, không thể quay trở lại. Khoảng cách xa nhất trên thế giới này không phải yêu, chẳng phải hận, mà là người thân quen dần dần trở thành xa lạ.",
    author: "Miêu Công Tử",
    bgImage: 'https://i.pinimg.com/originals/97/6e/d7/976ed774dfe37806ab5fa1b9ab1a2c9c.jpg',
  },
  {
    title: '999 lá thư gửi cho chính mình**',
    subtitle: "5. Rất nhiều lần sau khi bạn đã nỗ lực phấn đấu hết mình nhưng không thể đạt được kết quả như mong muốn, tuyệt đối không phải do bạn không xứng đáng mà là cơ hội vẫn chưa tới. Ðiều bạn cần làm chính là, cắn chặt răng tiếp tục kiên trì nỗ lực, chỉ như vậy mà thôi.",
    author: "Miêu Công Tử",
    bgImage: 'https://maytinhgiaphat.vn/wp-content/uploads/2025/09/anh-nen-may-tinh-4k-1.jpg',
  },
  {
    title: '999 lá thư gửi cho chính mình**',
    subtitle: "6. Cái gọi là kỳ tích, thực ra là như thế này: Kỳ tích không phải là thứ ông trời ban cho một người vốn chẳng đáng có được nó, mà là sự khen thưởng đang thong dong tìm tới người chăm chỉ, nó chỉ đến muộn một chút thôi chứ tuyệt đối không vắng mặt.",
    author: "Miêu Công Tử",
    bgImage: 'https://i.imgur.com/Nv5lnNW.jpg',
  },
  {
    title: '999 lá thư gửi cho chính mình**',
    subtitle: `7. Miyaki Hayao từng nói trong phim của mình: "Tôi luôn tin tưởng trên thế giới này nhất định có một cái tôi khác, làm những việc tôi không dám làm, sống cuộc đời mà tôi muốn sống." Thực ra, mỗi người đều có một cái tôi khác, chỉ cần chúng ta bằng lòng, vậy thì sẽ chẳng có việc gì chúng ta không dám làm, và chúng ta sẽ sống cuộc đời mình muốn.`,
    author: "Miêu Công Tử",
    bgImage: 'https://tophinhanh.net/wp-content/uploads/2024/02/hinh-nen-may-tinh-4k-1920x1080-8.jpg',
  },

  {
    title: '999 lá thư gửi cho chính mình**',
    subtitle: "8. Có lẽ bạn cảm thấy mình là kẻ trắng tay, có lẽ bạn vô cùng ngưỡng mộ nhà to, xe đẹp của ông chủ, những đôi khuyên tai cao cấp lấp lánh của các chị em bạn học. Thực ra, bạn không cần ngưỡng mộ những thứ đó, năm tháng nỗ lực phấn đấu sẽ mang tất cả tới cho bạn. Còn những năm tháng tuổi trẻ của bạn, họ không cách nào có lại được.",
    author: "Miêu Công Tử",
    bgImage: 'https://cdn2.fptshop.com.vn/unsafe/800x0/hinh_nen_may_tinh_4k_17_29d739a94a.png',
  },
  {
    title: '999 lá thư gửi cho chính mình**',
    subtitle: "9. Hiện tại chính là kết quả của mọi hành động trong quá khứ. Nếu bạn ghét bạn hiện tại, bạn nên suy nghĩ lại về chính mình. Vì mỗi thứ bạn không bằng lòng, đều do trước đây bạn chưa từng cố gắng.",
    author: "Miêu Công Tử",
    bgImage: 'https://mega.com.vn/media/news/2905_hinh-nen-may-tinh-xinh-cuc-chill.jpg',
  },
  {
    title: '999 lá thư gửi cho chính mình**',
    subtitle: "10. Tuổi trẻ chính là vào lúc đối mặt khó khăn vất vả, phải nỗ lực phấn đấu. Bạn nhất định phải tin tưởng, đằng sau mọi sự nỗ lực phần thưởng luôn được tăng lên gấp bội. Cuộc sống hôm nay là do sự quyết định của ba năm trước, nhưng nếu hôm nay bạn vẫn sống cuộc sống giống như ba năm trước, vậy thì ba năm sau bạn vẫn sẽ chỉ như vậy mà thôi.",
    author: "Miêu Công Tử",
    bgImage: 'https://blogchiasekienthuc.com/wp-content/uploads/2022/12/hinh-nen-may-tinh-fantasy-4k-blogchiasekienthuc.com-1.png',
  },
  {
    title: '999 lá thư gửi cho chính mình**',
    subtitle: "11. Thật ra phấn đấu chính là mỗi ngày đều sống nghiêm túc, mỗi việc dù nhỏ cũng phải làm tốt, không dây dưa lề mề, không oán thán, không đùn đẩy trách nhiệm, không lười biếng trốn tránh. Nỗ lực từng ngày, từng ngày mới có thể hội tụ được tất cả sự dũng cảm giúp bạn kiên trì, dẫn bạn đến nơi mà bạn muốn.",
    author: "Miêu Công Tử",
    bgImage: 'https://symbols.vn/wp-content/uploads/2022/01/Hinh-Nen-Anime-Chill-nu-ngoi-doc-sach-cuc-dep.jpg',
  },
  {
    title: '999 lá thư gửi cho chính mình**',
    subtitle: "12. Trong những năm tháng cuộc đời, người nào cố gắng nhất định sẽ thoát kén thành bướm. Bạn phải tin rằng, có một ngày bản thân sẽ phá kén thoát ra, trưởng thành hoàn mỹ hơn cả sự mong đợi của mọi người, nhưng quá trình này vốn vô cùng gian khổ, vất vả, có lúc sẽ cảm thấy nản lòng chùn bước. Ðối mặt với hiện thực tàn khốc, bạn cảm thấy bản thân vô cùng nhỏ bé, yếu đuối, nhưng đó chính là một phần của cuộc sống. Làm tốt những gì của hiện tại, sau đó tất cả sẽ dần tốt hơn.",
    author: "Miêu Công Tử",
    bgImage: 'https://i.ytimg.com/vi/snkg2CQM0HQ/maxresdefault.jpg',
  },
];

const BannerSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prevImage, setPrevImage] = useState(banners[0].bgImage);
  const [prevNextImage, setPrevNextImage] = useState(banners[1].bgImage);

  // 1. TỐI ƯU: Tải trước toàn bộ ảnh vào bộ nhớ đệm
  useEffect(() => {
    banners.forEach((banner) => {
      const img = new Image();
      img.src = banner.bgImage;
    });
  }, []);

  // Tính toán ảnh tiếp theo của slide hiện tại
  const nextImage = banners[(current + 1) % banners.length].bgImage;

  // 2. TỐI ƯU: Hàm cập nhật slide chính xác kể cả khi click nhảy slide
  const updateSlide = useCallback((newIndex) => {
    if (newIndex === current) return;

    // Ảnh nền ngoài cũ phải là ảnh tiếp theo của slide vừa hiển thị
    setPrevImage(banners[current].bgImage);
    setPrevNextImage(nextImage);

    setCurrent(newIndex);
  }, [current, nextImage]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      updateSlide((current + 1) % banners.length);
    }, 30000);
    return () => clearInterval(timer);
  }, [isPaused, current, updateSlide]);

  const banner = banners[current];

  return (
    <section className="w-full h-[500px] overflow-hidden">
      <div className="relative w-full h-full flex items-center justify-center bg-black">

        {/* LỚP NỀN NGOÀI: Cơ chế 2 lớp để triệt tiêu chớp đen */}
        {/* Lớp cũ duy trì nền */}
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-sm scale-105"
          style={{ backgroundImage: `url(${prevNextImage})` }}
        />
        {/* Lớp mới Fade-in lên trên */}
        <div
          key={`outer-${nextImage}`}
          className="absolute inset-0 bg-cover bg-center animate-fade-in filter blur-sm scale-105"
          style={{ backgroundImage: `url(${nextImage})` }}
        />

        {/* VÙNG CHỨA BANNER CHÍNH */}
        <div
          className="relative w-[1120px] h-full overflow-hidden z-10 shadow-2xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Lớp ảnh cũ chính */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${prevImage})` }}
          />
          {/* Lớp ảnh mới chính */}
          <div
            key={`inner-${current}`}
            className="absolute inset-0 bg-cover bg-center animate-fade-in"
            style={{ backgroundImage: `url(${banner.bgImage})` }}
          />

          {/* Title - Tăng z-index lên 30 để đảm bảo bao văn bản được */}
          <div className="absolute top-[50px] left-0 right-0 flex items-center justify-center z-20">
            <h1 className="text-4xl font-serifTitle tracking-wide text-black text-shadow-white text-center cursor-pointer select-text">
              {banner.title}
            </h1>
          </div>

          {/* VÙNG NỘI DUNG CHÍNH */}
          <div className="absolute h-full left-0 right-0 flex justify-center z-10">
            <div className="w-full h-full overflow-y-scroll overscroll-contain
                [&::-webkit-scrollbar]:w-2
                [&::-webkit-scrollbar-track]:bg-transparent
                [&::-webkit-scrollbar-thumb]:bg-white/40
                [&::-webkit-scrollbar-thumb]:rounded-full">
              <div className="min-h-full flex items-center justify-center py-4 px-10">
                <p
                  className="max-w-2xl text-lg font-serifBook leading-loose whitespace-pre-line cursor-pointer text-white text-shadow-black text-justify transition-opacity duration-1000 select-text"
                  style={{ textAlignLast: 'center' }}
                >
                  {banner.subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Author - Tăng z-index lên 30 */}
          <div className="absolute bottom-[50px] right-10 flex items-center z-20">
            <p className="text-md italic font-serifBook text-black text-shadow-white cursor-pointer select-text">
              Trích sách - Tác giả: "{banner.author}"
            </p>
          </div>

          {/* Nút chuyển Banner */}
          <div className="absolute bottom-4 left-5 flex justify-center items-center gap-2 z-20">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => updateSlide(index)}
                className={`w-[15px] h-[15px] rounded-full transition-all duration-300 ${index === current ? "bg-white" : "bg-black hover:bg-white"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSlider;
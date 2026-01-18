import { useEffect, useState, useCallback } from 'react';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const banners = [
  {
    title: "999 lá thư gửi cho chính mình**",
    subtitle: "1. Bắt đầu từ hôm nay, mỗi ngày hãy luôn nở nụ cười trên môi, trên đời này ngoài sinh tử ra thì mọi sự đều là chuyện nhỏ. Cho dù gặp chuyện phiền lòng cũng đừng tự làm khó mình; bất luận hôm nay xảy ra bao nhiêu chuyện đen đủi, đều không nên cảm thấy bi thương. Hôm nay là ngày bạn trẻ nhất trong những ngày tháng sau này, vì còn có ngày mai, hôm nay mãi chỉ là bước khởi đầu của con đường tương lai.",
    author: "Miêu Công Tử",
    bgImage: 'https://i.pinimg.com/originals/bb/d3/98/bbd398b474004a5a0acfe78e1754a691.gif',
  },
  {
    title: '999 lá thư gửi cho chính mình**',
    subtitle: "2. Ðời người sẽ luôn có sự ấm áp bất ngờ và những hy vọng bất tận. Bất kể con đường phía trước có bao nhiêu khổ ải, chỉ cần phương hướng chính xác thì dù gập ghềnh khúc khuỷu đến mấy, cũng sẽ gần với hạnh phúc hơn là đứng ở vạch xuất phát.",
    author: "Miêu Công Tử",
    bgImage: 'https://wallpapers-clan.com/wp-content/uploads/2024/03/starfall-night-sky-mountains-aesthetic-gif-preview-desktop-wallpaper.gif',
  },
  {
    title: '999 lá thư gửi cho chính mình**',
    subtitle: "3. Bạn là một người mạnh mẽ, từng giây từng phút đều yêu cầu bản thân phải đạt được một trăm phần trăm sự kỳ vọng. Nhưng quá khắt khe không phải lúc nào cũng tốt, bạn vốn không phải thiên tài, xin hãy cho phép bản thân được phạm lỗi. Ðừng quá vội vàng, sự cố gắng của bạn, thời gian sẽ giúp bạn thực hiện.",
    author: "Miêu Công Tử",
    bgImage: 'https://i.pinimg.com/originals/52/83/59/5283594dd6b1d0dd4b8a59c723a35024.gif',
  },
  {
    title: '999 lá thư gửi cho chính mình**',
    subtitle: "4. Thời gian thay đổi, con người cũng thay đổi. Cuộc đời là một bộ phim tuyệt bản không cách nào phát lại, có những việc cho dù bạn có nỗ lực đến đâu, không thể quay trở lại. Khoảng cách xa nhất trên thế giới này không phải yêu, chẳng phải hận, mà là người thân quen dần dần trở thành xa lạ.",
    author: "Miêu Công Tử",
    bgImage: 'https://i.pinimg.com/originals/b2/2a/a2/b22aa22b2f3f55b6468361158d52e2e7.gif',
  },
  {
    title: '999 lá thư gửi cho chính mình**',
    subtitle: "5. Rất nhiều lần sau khi bạn đã nỗ lực phấn đấu hết mình nhưng không thể đạt được kết quả như mong muốn, tuyệt đối không phải do bạn không xứng đáng mà là cơ hội vẫn chưa tới. Ðiều bạn cần làm chính là, cắn chặt răng tiếp tục kiên trì nỗ lực, chỉ như vậy mà thôi.",
    author: "Miêu Công Tử",
    bgImage: 'https://i.redd.it/v7m0pcaa1cyb1.gif',
  },
  {
    title: '999 lá thư gửi cho chính mình**',
    subtitle: "6. Cái gọi là kỳ tích, thực ra là như thế này: Kỳ tích không phải là thứ ông trời ban cho một người vốn chẳng đáng có được nó, mà là sự khen thưởng đang thong dong tìm tới người chăm chỉ, nó chỉ đến muộn một chút thôi chứ tuyệt đối không vắng mặt.",
    author: "Miêu Công Tử",
    bgImage: 'https://i.redd.it/my-collection-of-8-bit-live-wallpaper-gifs-1920x1080-v0-lhnvupvps4h91.gif?width=1920&auto=webp&s=520d605ae6924efb14322059477dc10e86131699',
  },
  {
    title: '999 lá thư gửi cho chính mình**',
    subtitle: `7. Miyaki Hayao từng nói trong phim của mình: "Tôi luôn tin tưởng trên thế giới này nhất định có một cái tôi khác, làm những việc tôi không dám làm, sống cuộc đời mà tôi muốn sống." Thực ra, mỗi người đều có một cái tôi khác, chỉ cần chúng ta bằng lòng, vậy thì sẽ chẳng có việc gì chúng ta không dám làm, và chúng ta sẽ sống cuộc đời mình muốn.`,
    author: "Miêu Công Tử",
    bgImage: 'https://haycafe.vn/wp-content/uploads/2021/12/Anh-gif-dep-binh-yen.gif',
  },

  {
    title: '999 lá thư gửi cho chính mình**',
    subtitle: "8. Có lẽ bạn cảm thấy mình là kẻ trắng tay, có lẽ bạn vô cùng ngưỡng mộ nhà to, xe đẹp của ông chủ, những đôi khuyên tai cao cấp lấp lánh của các chị em bạn học. Thực ra, bạn không cần ngưỡng mộ những thứ đó, năm tháng nỗ lực phấn đấu sẽ mang tất cả tới cho bạn. Còn những năm tháng tuổi trẻ của bạn, họ không cách nào có lại được.",
    author: "Miêu Công Tử",
    bgImage: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/588a44195922117.66168b374ece8.gif',
  },
  {
    title: '999 lá thư gửi cho chính mình**',
    subtitle: "9. Hiện tại chính là kết quả của mọi hành động trong quá khứ. Nếu bạn ghét bạn hiện tại, bạn nên suy nghĩ lại về chính mình. Vì mỗi thứ bạn không bằng lòng, đều do trước đây bạn chưa từng cố gắng.",
    author: "Miêu Công Tử",
    bgImage: 'https://i.pinimg.com/originals/b7/f7/88/b7f788e000ffb2854a98d937b8a46593.gif',
  },
  {
    title: '999 lá thư gửi cho chính mình**',
    subtitle: "10. Tuổi trẻ chính là vào lúc đối mặt khó khăn vất vả, phải nỗ lực phấn đấu. Bạn nhất định phải tin tưởng, đằng sau mọi sự nỗ lực phần thưởng luôn được tăng lên gấp bội. Cuộc sống hôm nay là do sự quyết định của ba năm trước, nhưng nếu hôm nay bạn vẫn sống cuộc sống giống như ba năm trước, vậy thì ba năm sau bạn vẫn sẽ chỉ như vậy mà thôi.",
    author: "Miêu Công Tử",
    bgImage: 'https://i.redd.it/fisnfas5ip7c1.gif',
  },
  {
    title: '999 lá thư gửi cho chính mình**',
    subtitle: "11. Thật ra phấn đấu chính là mỗi ngày đều sống nghiêm túc, mỗi việc dù nhỏ cũng phải làm tốt, không dây dưa lề mề, không oán thán, không đùn đẩy trách nhiệm, không lười biếng trốn tránh. Nỗ lực từng ngày, từng ngày mới có thể hội tụ được tất cả sự dũng cảm giúp bạn kiên trì, dẫn bạn đến nơi mà bạn muốn.",
    author: "Miêu Công Tử",
    bgImage: 'https://i.pinimg.com/originals/7a/14/51/7a1451c07ba25f8c2f1ae81f8da4ad9f.gif',
  },
  {
    title: '999 lá thư gửi cho chính mình**',
    subtitle: "12. Trong những năm tháng cuộc đời, người nào cố gắng nhất định sẽ thoát kén thành bướm. Bạn phải tin rằng, có một ngày bản thân sẽ phá kén thoát ra, trưởng thành hoàn mỹ hơn cả sự mong đợi của mọi người, nhưng quá trình này vốn vô cùng gian khổ, vất vả, có lúc sẽ cảm thấy nản lòng chùn bước. Ðối mặt với hiện thực tàn khốc, bạn cảm thấy bản thân vô cùng nhỏ bé, yếu đuối, nhưng đó chính là một phần của cuộc sống. Làm tốt những gì của hiện tại, sau đó tất cả sẽ dần tốt hơn.",
    author: "Miêu Công Tử",
    bgImage: 'https://cdna.artstation.com/p/assets/images/images/085/156/062/original/aurora-alleyway-v6-main.gif?1740086262',
  },
];

const BannerSlider = () => {
  // Khởi tạo state từ localStorage (nếu có), nếu không thì mặc định là 0

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Khởi tạo ảnh cũ dựa trên current đã lấy từ storage
  const [prevImage, setPrevImage] = useState(banners[0].bgImage);
  const [prevNextImage, setPrevNextImage] = useState(
    banners.length > 1 ? banners[1].bgImage : banners[0].bgImage
  );

  // 1. TỐI ƯU: Tải trước toàn bộ ảnh
  useEffect(() => {
    banners.forEach((banner) => {
      const img = new Image();
      img.src = banner.bgImage;
    });
  }, []);

  const nextImage = banners[(current + 1) % banners.length].bgImage;

  const updateSlide = useCallback((newIndex) => {
    if (newIndex === current) return;
    setPrevImage(banners[current].bgImage);
    setPrevNextImage(nextImage);
    setCurrent(newIndex);
  }, [current, nextImage]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      updateSlide((current + 1) % banners.length);
    }, 15000);
    return () => clearInterval(timer);
  }, [isPaused, current, updateSlide]);

  const prevSlide = () => {
    updateSlide((current - 1 + banners.length) % banners.length);
  };

  const nextSlide = () => {
    updateSlide((current + 1) % banners.length);
  };

  const banner = banners[current];

  return (
    <div className="pt-[100px]">
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
            className="relative w-[1120px] h-full overflow-hidden z-10 shadow-2xl group"
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

            {/* PREV BUTTON */}
            <button
              onClick={prevSlide}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-8 h-14 rounded-md shadow-sm bg-black/30 hover:bg-black/50 text-white text-2xl flex items-center justify-center opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 ease-in-out"
            >
              <ArrowBackIosNewIcon />
            </button>

            {/* NEXT BUTTON */}
            <button
              onClick={nextSlide}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-8 h-14 rounded-md shadow-sm bg-black/30 hover:bg-black/50 text-white text-2xl flex items-center justify-center opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 ease-in-out"
            >
              <ArrowForwardIosIcon />
            </button>

            {/* Title - Tăng z-index lên 30 để đảm bảo bao văn bản được */}
            <div className="absolute top-[50px] left-0 right-0 flex items-center justify-center z-20">
              <h1 className="text-4xl font-serifTitle tracking-wide text-black text-shadow-white text-center cursor-pointer select-text">
                {banner.title}
              </h1>
            </div>

            {/* VÙNG NỘI DUNG CHÍNH */}
            <div className="absolute inset-0 flex justify-center z-10">
              <div className="w-full h-full overflow-y-scroll overflow-x-hidden overscroll-contain [scrollbar-gutter:stable] [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.4)_transparent] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/40 [&::-webkit-scrollbar-thumb]:rounded-full">
                {/* Thêm py-10 để đảm bảo khi cuộn lên xuống không bị dính sát mép trên/dưới */}
                <div className="w-full min-h-full flex items-center justify-center py-10 px-6">
                  <p
                    className="w-full max-w-2xl px-1 text-lg font-serifBook leading-loose whitespace-pre-line cursor-pointer text-white text-shadow-black text-justify break-words transition-opacity duration-1000 select-text"
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 8,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textAlignLast: 'center',
                    }}
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
    </div>
  );
};

export default BannerSlider;
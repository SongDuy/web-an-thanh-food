import { useEffect, useState } from 'react';

const banners = [
  {
    title: "999 lá thư viết cho chính mình*",
    subtitle: "1. Bắt đầu từ hôm nay, mỗi ngày hãy luôn nở nụ cười trên môi, trên đời này ngoài sinh tử ra thì mọi sự đều là chuyện nhỏ. Cho dù gặp chuyện phiền lòng cũng đừng tự làm khó mình; bất luận hôm nay xảy ra bao nhiêu chuyện đen đủi, đều không nên cảm thấy bi thương. Hôm nay là ngày bạn trẻ nhất trong những ngày tháng sau này, vì còn có ngày mai, hôm nay mãi chỉ là bước khởi đầu của con đường tương lai.",
    author: "Miêu Công Tử",
    bg: "bg-green-200",
  },
  {
    title: '999 lá thư viết cho chính mình*',
    subtitle: "2. Ðời người sẽ luôn có sự ấm áp bất ngờ và những hy vọng bất tận. Bất kể con đường phía trước có bao nhiêu khổ ải, chỉ cần phương hướng chính xác thì dù gập ghềnh khúc khuỷu đến mấy, cũng sẽ gần với hạnh phúc hơn là đứng ở vạch xuất phát.",
    author: "Miêu Công Tử",
    bg: 'bg-yellow-200',
  },
  {
    title: '999 lá thư viết cho chính mình*',
    subtitle: "3. Bạn là một người mạnh mẽ, từng giây từng phút đều yêu cầu bản thân phải đạt được một trăm phần trăm sự kỳ vọng. Nhưng quá khắt khe không phải lúc nào cũng tốt, bạn vốn không phải thiên tài, xin hãy cho phép bản thân được phạm lỗi. Ðừng quá vội vàng, sự cố gắng của bạn, thời gian sẽ giúp bạn thực hiện.",
    author: "Miêu Công Tử",
    bg: 'bg-blue-200',
  },
  {
    title: '999 lá thư viết cho chính mình*',
    subtitle: "4. Thời gian thay đổi, con người cũng thay đổi. Cuộc đời là một bộ phim tuyệt bản không cách nào phát lại, có những việc cho dù bạn có nỗ lực đến đâu, không thể quay trở lại. Khoảng cách xa nhất trên thế giới này không phải yêu, chẳng phải hận, mà là người thân quen dần dần trở thành xa lạ.",
    author: "Miêu Công Tử",
    bg: 'bg-blue-200',
  },
  {
    title: '999 lá thư viết cho chính mình*',
    subtitle: "5. Rất nhiều lần sau khi bạn đã nỗ lực phấn đấu hết mình nhưng không thể đạt được kết quả như mong muốn, tuyệt đối không phải do bạn không xứng đáng mà là cơ hội vẫn chưa tới. Ðiều bạn cần làm chính là, cắn chặt răng tiếp tục kiên trì nỗ lực, chỉ như vậy mà thôi.",
    author: "Miêu Công Tử",
    bg: 'bg-blue-200',
  },

];

const BannerSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 30000);

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

          {/*Hiện thị các trích dẫn hay từ sách cho Banner */}
          <div className="w-full h-[500px] relative px-6">
            {/* Title */}
            <div className="absolute top-[50px] px-[60px] left-0 right-0 text-center">
              <h2 className="text-4xl font-serifTitle tracking-wide text-black text-shadow-white">
                {banner.title}
              </h2>
            </div>

            {/* Nội dung */}
            <div className="flex h-full items-center justify-center">
              <p className="max-w-2xl text-lg text-center font-serifBook leading-loose whitespace-pre-line text-white text-shadow-black">
                {banner.subtitle}
              </p>
            </div>

            {/* Author */}
            <div className="absolute bottom-[50px] right-8 text-right">
              <p className="text-md italic font-serifBook text-black text-shadow-white">
                Trích - Tác giả: "{banner.author}"
              </p>
            </div>
          </div>

          {/* Nút chuyển Banner */}
          < div className="absolute bottom-3 left-5 right-0 flex items-center">
            {Array.from({ length: 12 }).map((_, index) => (
              <button
                key={index}
                className="w-[15px] h-[15px] mx-1 border rounded-full bg-white opacity-60 hover:opacity-100"
              />
            ))}
          </div>

        </div>

      </div>

    </section>
  );
};

export default BannerSlider;

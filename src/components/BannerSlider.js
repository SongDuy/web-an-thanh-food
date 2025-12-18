import { useEffect, useState } from 'react';

const banners = [
  {
    title: "999 lá thư gửi cho chính mình**",
    subtitle: "1. Bắt đầu từ hôm nay, mỗi ngày hãy luôn nở nụ cười trên môi, trên đời này ngoài sinh tử ra thì mọi sự đều là chuyện nhỏ. Cho dù gặp chuyện phiền lòng cũng đừng tự làm khó mình; bất luận hôm nay xảy ra bao nhiêu chuyện đen đủi, đều không nên cảm thấy bi thương. Hôm nay là ngày bạn trẻ nhất trong những ngày tháng sau này, vì còn có ngày mai, hôm nay mãi chỉ là bước khởi đầu của con đường tương lai.",
    author: "Miêu Công Tử",
    bg: "bg-green-200",
  },
  {
    title: '999 lá thư gửi cho chính mình**',
    subtitle: "2. Ðời người sẽ luôn có sự ấm áp bất ngờ và những hy vọng bất tận. Bất kể con đường phía trước có bao nhiêu khổ ải, chỉ cần phương hướng chính xác thì dù gập ghềnh khúc khuỷu đến mấy, cũng sẽ gần với hạnh phúc hơn là đứng ở vạch xuất phát.",
    author: "Miêu Công Tử",
    bg: 'bg-yellow-200',
  },
  {
    title: '999 lá thư gửi cho chính mình**',
    subtitle: "3. Bạn là một người mạnh mẽ, từng giây từng phút đều yêu cầu bản thân phải đạt được một trăm phần trăm sự kỳ vọng. Nhưng quá khắt khe không phải lúc nào cũng tốt, bạn vốn không phải thiên tài, xin hãy cho phép bản thân được phạm lỗi. Ðừng quá vội vàng, sự cố gắng của bạn, thời gian sẽ giúp bạn thực hiện.",
    author: "Miêu Công Tử",
    bg: 'bg-blue-200',
  },
  {
    title: '999 lá thư gửi cho chính mình**',
    subtitle: "4. Thời gian thay đổi, con người cũng thay đổi. Cuộc đời là một bộ phim tuyệt bản không cách nào phát lại, có những việc cho dù bạn có nỗ lực đến đâu, không thể quay trở lại. Khoảng cách xa nhất trên thế giới này không phải yêu, chẳng phải hận, mà là người thân quen dần dần trở thành xa lạ.",
    author: "Miêu Công Tử",
    bg: 'bg-blue-200',
  },
  {
    title: '999 lá thư gửi cho chính mình**',
    subtitle: "5. Rất nhiều lần sau khi bạn đã nỗ lực phấn đấu hết mình nhưng không thể đạt được kết quả như mong muốn, tuyệt đối không phải do bạn không xứng đáng mà là cơ hội vẫn chưa tới. Ðiều bạn cần làm chính là, cắn chặt răng tiếp tục kiên trì nỗ lực, chỉ như vậy mà thôi.",
    author: "Miêu Công Tử",
    bg: 'bg-blue-200',
  },
  {
    title: '999 lá thư gửi cho chính mình**',
    subtitle: "6. Cái gọi là kỳ tích, thực ra là như thế này: Kỳ tích không phải là thứ ông trời ban cho một người vốn chẳng đáng có được nó, mà là sự khen thưởng đang thong dong tìm tới người chăm chỉ, nó chỉ đến muộn một chút thôi chứ tuyệt đối không vắng mặt.",
    author: "Miêu Công Tử",
    bg: 'bg-blue-200',
  },
  {
    title: '999 lá thư gửi cho chính mình**',
    subtitle: `7. Miyaki Hayao từng nói trong phim của mình: "Tôi luôn tin tưởng trên thế giới này nhất định có một cái tôi khác, làm những việc tôi không dám làm, sống cuộc đời mà tôi muốn sống." Thực ra, mỗi người đều có một cái tôi khác, chỉ cần chúng ta bằng lòng, vậy thì sẽ chẳng có việc gì chúng ta không dám làm, và chúng ta sẽ sống cuộc đời mình muốn.`,
    author: "Miêu Công Tử",
    bg: 'bg-blue-200',
  },

  {
    title: '999 lá thư gửi cho chính mình**',
    subtitle: "8. Có lẽ bạn cảm thấy mình là kẻ trắng tay, có lẽ bạn vô cùng ngưỡng mộ nhà to, xe đẹp của ông chủ, những đôi khuyên tai cao cấp lấp lánh của các chị em bạn học. Thực ra, bạn không cần ngưỡng mộ những thứ đó, năm tháng nỗ lực phấn đấu sẽ mang tất cả tới cho bạn. Còn những năm tháng tuổi trẻ của bạn, họ không cách nào có lại được.",
    author: "Miêu Công Tử",
    bg: 'bg-blue-200',
  },
  {
    title: '999 lá thư gửi cho chính mình**',
    subtitle: "9. Hiện tại chính là kết quả của mọi hành động trong quá khứ. Nếu bạn ghét bạn hiện tại, bạn nên suy nghĩ lại về chính mình. Vì mỗi thứ bạn không bằng lòng, đều do trước đây bạn chưa từng cố gắng.",
    author: "Miêu Công Tử",
    bg: 'bg-blue-200',
  },
  {
    title: '999 lá thư gửi cho chính mình**',
    subtitle: "10. Tuổi trẻ chính là vào lúc đối mặt khó khăn vất vả, phải nỗ lực phấn đấu. Bạn nhất định phải tin tưởng, đằng sau mọi sự nỗ lực phần thưởng luôn được tăng lên gấp bội. Cuộc sống hôm nay là do sự quyết định của ba năm trước, nhưng nếu hôm nay bạn vẫn sống cuộc sống giống như ba năm trước, vậy thì ba năm sau bạn vẫn sẽ chỉ như vậy mà thôi.",
    author: "Miêu Công Tử",
    bg: 'bg-blue-200',
  },
  {
    title: '999 lá thư gửi cho chính mình**',
    subtitle: "11. Thật ra phấn đấu chính là mỗi ngày đều sống nghiêm túc, mỗi việc dù nhỏ cũng phải làm tốt, không dây dưa lề mề, không oán thán, không đùn đẩy trách nhiệm, không lười biếng trốn tránh. Nỗ lực từng ngày, từng ngày mới có thể hội tụ được tất cả sự dũng cảm giúp bạn kiên trì, dẫn bạn đến nơi mà bạn muốn.",
    author: "Miêu Công Tử",
    bg: 'bg-blue-200',
  },
  {
    title: '999 lá thư gửi cho chính mình**',
    subtitle: "12. Trong những năm tháng cuộc đời, người nào cố gắng nhất định sẽ thoát kén thành bướm. Bạn phải tin rằng, có một ngày bản thân sẽ phá kén thoát ra, trưởng thành hoàn mỹhơn cả sự mong đợi của mọi người, nhưng quá trình này vốn vô cùng gian khổ, vất vả, có lúc sẽ cảm thấy nản lòng chùn bước. Ðối mặt với hiện thực tàn khốc, bạn cảm thấy bản thân vô cùng nhỏ bé, yếu đuối, nhưng đó chính là một phần của cuộc sống. Làm tốt những gì của hiện tại, sau đó tất cả sẽ dần tốt hơn.",
    author: "Miêu Công Tử",
    bg: 'bg-blue-200',
  },
];

const BannerSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const banner = banners[current];

  return (
    <section className="w-full h-[500px] overflow-hidden">
      <div className="w-full h-full bg-yellow-100 flex items-center justify-center">

        <div
          className="relative w-[1120px] h-full bg-yellow-200 transition-shadow duration-300"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          {/* Title */}
          <div className="absolute top-[50px] left-0 right-0 flex items-center justify-center z-10">
            <h1 className="text-4xl font-serifTitle tracking-wide text-black text-shadow-white text-center cursor-pointer">
              {banner.title}
            </h1>
          </div>

          {/* VÙNG NỘI DUNG CHÍNH */}
          <div className="absolute h-full left-0 right-0 flex justify-center">

            <div
              className="w-full h-full overflow-y-scroll overscroll-contain [overflow-anchor:none]
                /* Custom Scrollbar */
                [&::-webkit-scrollbar]:w-2
                [&::-webkit-scrollbar-track]:bg-transparent
                [&::-webkit-scrollbar-thumb]:bg-white/40
                [&::-webkit-scrollbar-thumb]:rounded-full
                [&::-webkit-scrollbar-thumb]:hover:bg-white/80"
            >
              {/* Wrapper: flex items-center -> Đã đảm bảo căn giữa theo chiều dọc (trên/dưới) */}
              <div className="min-h-full flex items-center justify-center py-4">

                {/* THAY ĐỔI Ở ĐÂY:
                   1. text-justify: Căn đều 2 bên lề trái phải.
                   2. style={{ textAlignLast: 'center' }}: Dòng cuối cùng căn giữa (đẹp hơn cho quote).
                */}
                <p
                  className="max-w-2xl text-lg font-serifBook leading-loose whitespace-pre-line cursor-pointer text-white text-shadow-black text-justify"
                  style={{ textAlignLast: 'center' }}
                >
                  {banner.subtitle}
                </p>

              </div>
            </div>
          </div>

          {/* Author */}
          <div className="absolute bottom-[50px] right-10 flex items-center z-10">
            <p className="text-md italic font-serifBook text-black text-shadow-white cursor-pointer">
              Trích sách - Tác giả: "{banner.author}"
            </p>
          </div>

          {/* Nút chuyển Banner */}
          <div className="absolute bottom-4 left-5 flex justify-center items-center gap-2 z-20">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-[15px] h-[15px] rounded-full border transition-all duration-300 ${index === current ? "bg-white scale-110 opacity-100" : "bg-gray-100 opacity-100 hover:opacity-100"
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
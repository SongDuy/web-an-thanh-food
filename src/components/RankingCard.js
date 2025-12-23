const RankingCard = () => {
  const productImg = "https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png";

  return (
    <div className="w-full h-[120px] border rounded shadow hover:bg-red-50 p-4">
      <div className="w-full h-full flex gap-3">
        <div className="min-w-[90px] h-full border">
          <img
            src={productImg}
            alt="Rau cải xanh"
            className="w-full h-full object-cover transition-transform duration-500"
          />
        </div>

        <div className="w-full h-full grid grid-cols-[70%_30%]">
          <div className="w-full border">

          </div>
          <div className="w-full border">

          </div>
        </div>
      </div>
    </div>
  );
};

export default RankingCard;
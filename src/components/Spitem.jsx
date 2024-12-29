import { IoMdOpen } from "react-icons/io";

function Spitem({ sanpham }) {
  return (
    <div className="gap-10 rounded-xl bg-white border hover:shadow-md cursor-pointer flex flex-col items-center">
      {/* Hình ảnh */}
      <img
        src={sanpham?.img}
        alt={sanpham?.name}
        className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-t-xl"
      />

      {/* Nội dung */}
      <div className="p-4 flex flex-col flex-grow w-full">
        {/* Tên sản phẩm */}
        <h2 className="font-bold text-black text-base sm:text-lg mb-2 truncate">
          {sanpham?.name}
        </h2>

        <div className="flex items-center justify-between mt-auto">
          {/* Giá sản phẩm */}
          <h2 className="font-bold text-lg sm:text-xl lg:text-2xl text-red-500">
            {sanpham?.price} đ
          </h2>

          {/* Xem chi tiết */}
          <h2 className="text-primary text-sm sm:text-base flex items-center">
            Xem chi tiết <IoMdOpen className="ml-1" />
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Spitem;

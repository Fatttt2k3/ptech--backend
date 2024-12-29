import React from 'react'
import logov1 from "./../assets/logov1.jpg"
function InfoSection() {
  return (
<section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
      <div>
        <div className="max-w-lg md:max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            CÔNG TY CUNG CẤP THIẾT BỊ TIN HỌC PTECH
          </h2>

          <p className="mt-4 text-gray-700">
          PTECH là công ty chuyên cung cấp các thiết bị tin học hiện đại, đáp ứng nhu cầu đa dạng của cá nhân và doanh nghiệp. Với phương châm "Chất lượng làm nên uy tín," PTECH luôn cam kết mang đến các sản phẩm chính hãng, bền bỉ và hiệu suất cao. Đội ngũ nhân viên tận tâm và chuyên nghiệp của chúng tôi luôn sẵn sàng hỗ trợ khách hàng trong việc lựa chọn thiết bị phù hợp.
           PTECH không ngừng cải tiến dịch vụ để mang lại trải nghiệm mua sắm tốt nhất cho mọi khách hàng.
          </p>
        </div>
      </div>

      <div>
        <img
          src={logov1}
          className="rounded"
          alt=""
        />
      </div>
    </div>
  </div>
</section>  )
}

export default InfoSection
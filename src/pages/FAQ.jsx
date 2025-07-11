import React from "react";

const FAQ = () => {
  return (
    <>
      <section className="faq-section">
        <h2>Câu hỏi thường gặp</h2>
        <div className="faq-list">
          <div className="faq-item">
            <p className="faq-question">Chính sách đổi trả?</p>
            <p className="faq-answer">Đổi trả trong 7 ngày với sản phẩm lỗi.</p>
          </div>
          <div className="faq-item">
            <p className="faq-question">Thời gian giao hàng?</p>
            <p className="faq-answer">2-5 ngày tùy khu vực.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;

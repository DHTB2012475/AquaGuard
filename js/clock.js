function updateTime() {
  const date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let ampm = "AM";

  // Định dạng 12 giờ và thiết lập AM/PM
  if (h >= 12) {
    h = h - 12;
    ampm = "PM";
  }
  h = h == 0 ? 12 : h;

  // Thêm số 0 phía trước nếu giờ, phút hoặc giây nhỏ hơn 10
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  // Lấy ngày, tháng, và năm hiện tại
  const day = date.getDate();
  const month = date.getMonth() + 1; // Tháng trong JavaScript bắt đầu từ 0
  const year = date.getFullYear();

  // Định dạng ngày và tháng với 2 chữ số
  const formattedDay = day < 10 ? "0" + day : day;
  const formattedMonth = month < 10 ? "0" + month : month;

  // Cập nhật ngày và thời gian lên giao diện
  document.getElementById(
    "currentDate"
  ).innerText = `Ngày: ${formattedDay}/${formattedMonth}/${year}`;
  document.getElementById("currentTime").innerText = `${h}:${m}:${s} ${ampm}`;
}

// Cập nhật ngày giờ mỗi giây
setInterval(updateTime, 1000);
updateTime(); // Gọi ngay khi trang tải lần đầu

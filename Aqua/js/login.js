// Bắt sự kiện submit của form đăng nhập
document
  .querySelector(".login100-form")
  .addEventListener("submit", function (event) {
    // Ngăn chặn việc gửi form mặc định
    event.preventDefault();

    // Lấy giá trị nhập vào từ ô tài khoản và mật khẩu
    const username = document.querySelector("input[name='email']").value;
    const password = document.querySelector("input[name='pass']").value;

    // Kiểm tra thông tin đăng nhập
    if (username === "HuuTran" && password === "aqua123") {
      // Nếu đúng, chuyển hướng đến trang login_adimin.html
      window.location.href = "adminclient.html";
    } else {
      // Nếu sai, hiển thị thông báo lỗi
      alert("Tên đăng nhập hoặc mật khẩu không đúng. Vui lòng thử lại.");
    }
  });

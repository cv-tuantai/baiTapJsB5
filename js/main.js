// Tạo hàm DomID
function domID(id) {
  return document.getElementById(id);
}

/* Bài 1 */
// input: Dom tới các thẻ input lấy thông tin: điểm chuẩn, khu vực, đối tượng, điểm môn thứ 1, điểm môn thứ 2, điểm môn thứ 3: kiểu number
domID("btnResult").onclick = function () {
  var benchmark = Number(domID("benchmark").value);
  var location = Number(domID("location").value);
  var user = Number(domID("user").value);
  var firstScore = Number(domID("firstScore").value);
  var secondScore = Number(domID("secondScore").value);
  var thirdScore = Number(domID("thirdScore").value);
  // output: Tổng điểm kiểu number và kết quả đậu hay rớt kiểu string
  var totalScore = 0;
  var totalResult = "";
  // process: Tính tổng điểm = điểm môn thứ 1 + điểm môn thứ 2 + điểm môn thứ 3 + điểm khu vực + điểm đối tượng. Dùng IF để lọc ra trường hợp có môn bằng 0 để đánh rớt, sau đó lọc trường hợp có tổng điểm bé hơn điểm chuẩn để đánh rớt
  totalScore = firstScore + secondScore + thirdScore + location + user;
  if (firstScore == 0 || secondScore == 0 || thirdScore == 0) {
    totalResult = "Bạn đã rớt do có môn bị 0 điểm. Tổng điểm là: " + totalScore;
  } else if (
    totalScore < benchmark &&
    benchmark > 0 &&
    firstScore > 0 &&
    secondScore > 0 &&
    thirdScore > 0
  ) {
    totalResult =
      "Bạn đã rớt do tổng điểm bé hơn điểm chuẩn. Tổng điểm là: " + totalScore;
  } else if (
    totalScore >= benchmark &&
    benchmark > 0 &&
    firstScore > 0 &&
    secondScore > 0 &&
    thirdScore > 0
  ) {
    totalResult = "Bạn đã đậu. Tổng điểm là: " + totalScore;
  } else {
    totalResult = "Nhập đúng số điểm, điểm không thể là số âm";
  }
  //   print result: Gọi hàm DomID
  domID("txtResult").innerHTML = totalResult;
};

/* Bài 2 */
// input: Dom tới các thẻ input lấy thông tin: Tên người dùng kiểu string và số kw tiêu thụ kiểu number
var btnBill = (domID("btnBill").onclick = function () {
  var inputName = domID("inputName").value;
  var inputKw = Number(domID("inputKw").value);
  // output: Số tiền điện: kiểu number
  var eleBill = 0;
  // process: Dùng IF để tính tiền điện theo từng mốc kw
  if (inputKw > 0 && inputKw <= 50) {
    eleBill = inputKw * 500;
  } else if (inputKw > 50 && inputKw <= 100) {
    eleBill = 50 * 500 + (inputKw - 50) * 650;
  } else if (inputKw > 100 && inputKw <= 200) {
    eleBill = 50 * 500 + 50 * 650 + (inputKw - 100) * 850;
  } else if (inputKw > 200 && inputKw <= 350) {
    eleBill = 50 * 500 + 50 * 650 + 100 * 850 + (inputKw - 200) * 1100;
  } else if (inputKw > 350) {
    eleBill =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (inputKw - 350) * 1300;
  } else {
    alert("Số kw không hợp lệ, vui lòng nhập lại");
  }
  //   print result: Gọi hàm domID
  domID("txtBill").innerHTML =
    "Họ tên: " +
    inputName +
    " - Số tiền điện: " +
    eleBill.toLocaleString() +
    " đồng.";
});

/* Bài 3 */
// input: Dom tới các thẻ input lấy thông tin: Họ tên: string, tổng thu nhập năm: number, số người phụ thuộc: number
var btnTax = (domID("btnTax").onclick = function () {
  var taxName = domID("taxName").value;
  var totalSalary = Number(domID("totalSalary").value);
  var dependent = Number(domID("dependent").value);
  //   output: họ tên: string, tiền thuế thu nhập cá nhân: number
  var totalTax = 0;
  // process: Tính thu nhập chịu thuế = Tổng thu nhập năm -4tr * 12 - số người phụ thuộc * 1,6tr * 12 (do mức giảm trừ 4tr và 1,6tr là theo tháng, phải đổi thành năm)
  var taxableIncome = totalSalary - 4e6 * 12 - dependent * 1.6e6 * 12;
  //   Tính tiền thuế theo bậc thuế lũy tiến
  if (taxableIncome >= 0 && taxableIncome <= 60e6 && dependent >= 0) {
    totalTax = taxableIncome * 0.05;
  } else if (taxableIncome > 60e6 && taxableIncome <= 120e6 && dependent >= 0) {
    totalTax = 60e6 * 0.05 + (taxableIncome - 60e6) * 0.1;
  } else if (
    taxableIncome > 120e6 &&
    taxableIncome <= 210e6 &&
    dependent >= 0
  ) {
    totalTax = 60e6 * 0.05 + 60e6 * 0.1 + (taxableIncome - 120e6) * 0.15;
  } else if (
    taxableIncome > 210e6 &&
    taxableIncome <= 384e6 &&
    dependent >= 0
  ) {
    totalTax =
      60e6 * 0.05 + 60e6 * 0.1 + 90e6 * 0.15 + (taxableIncome - 210e6) * 0.2;
  } else if (
    taxableIncome > 384e6 &&
    taxableIncome <= 624e6 &&
    dependent >= 0
  ) {
    totalTax =
      60e6 * 0.05 +
      60e6 * 0.1 +
      90e6 * 0.15 +
      174e6 * 0.2 +
      (taxableIncome - 384e6) * 0.25;
  } else if (
    taxableIncome > 624e6 &&
    taxableIncome <= 960e6 &&
    dependent >= 0
  ) {
    totalTax =
      60e6 * 0.05 +
      60e6 * 0.1 +
      90e6 * 0.15 +
      174e6 * 0.2 +
      240e6 * 0.25 +
      (taxableIncome - 624e6) * 0.3;
  } else if (taxableIncome > 960e6 && dependent >= 0) {
    totalTax =
      60e6 * 0.05 +
      60e6 * 0.1 +
      90e6 * 0.15 +
      174e6 * 0.2 +
      240e6 * 0.25 +
      336e6 * 0.3 +
      (taxableIncome - 960e6) * 0.35;
  } else if (taxableIncome < 0) {
    totalTax = 0;
  } else {
    alert("Vui lòng nhập số chính xác");
  }
  //   print result:
  domID("txtTax").innerHTML =
    "Họ tên: " +
    taxName +
    " - Tiền thuế thu nhập cá nhân: " +
    totalTax.toLocaleString() +
    " VND.";
});

/* Bài 4 */
// Show/hide channel: Dom đến loại khách hàng, nếu loại khách hàng = "company" thì đổi thuộc tính display của thẻ input có id="connect" thành "block", ngược lại "none"
var customer = (domID("customer").onchange = function () {
  customer = domID("customer").value;
  if (customer == "company") {
    domID("connect").style.display = "block";
  } else {
    domID("connect").style.display = "none";
  }
});

// input: Dom tới các thẻ input lấy thông tin: loại khách hàng: string, mã khách hàng: string, số kênh cao cấp: number, số kết nối: number
var btnNet = (domID("btnNet").onclick = function () {
  var customer = domID("customer").value;
  var inputID = domID("inputID").value;
  var channel = Number(domID("channel").value);
  var connect = Number(domID("connect").value);
  // output: tiền cáp: number
  var cableMoney = 0;
  // process:
  if (customer == "company" && connect <= 10 && channel >= 0) {
    cableMoney = 15 + 75 + 50 * channel;
  } else if (customer == "company" && connect > 10 && channel >= 0) {
    cableMoney = 15 + 75 + 50 * channel + (connect - 10) * 5;
  } else if (customer == "user" && channel >= 0) {
    cableMoney = 4.5 + 20.5 + 7.5 * channel;
  } else {
    alert("Hãy chọn loại khách hàng hoặc số kênh cao cấp không phải số âm");
  }
  //   currency format
  var currencyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  //   print result
  domID("txtNet").innerHTML =
    "Mã khách hàng: " +
    inputID +
    " - Số tiền cáp: " +
    currencyFormat.format(cableMoney);
});

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

// Khai báo biến const giá tiền từng mức Kw
const kw_1 = 500;
const kw_2 = 650;
const kw_3 = 850;
const kw_4 = 1100;
const kw_5 = 1300;

// Tạo hàm tính tiền theo từng mức Kw
function calculateKm1(inputKw) {
  return inputKw * kw_1;
}

function calculateKm2(inputKw) {
  return (inputKw - 50) * kw_2;
}

function calculateKm3(inputKw) {
  return (inputKw - 100) * kw_3;
}

function calculateKm4(inputKw) {
  return (inputKw - 200) * kw_4;
}

function calculateKm5(inputKw) {
  return (inputKw - 350) * kw_5;
}
// input: Dom tới các thẻ input lấy thông tin: Tên người dùng kiểu string và số kw tiêu thụ kiểu number
var btnBill = (domID("btnBill").onclick = function () {
  var inputName = domID("inputName").value;
  var inputKw = Number(domID("inputKw").value);
  // output: Số tiền điện: kiểu number
  var eleBill = 0;
  // process: Gọi hàm để tính tiền điện theo từng mốc kw
  if (inputKw > 0 && inputKw <= 50) {
    eleBill = calculateKm1(inputKw);
  } else if (inputKw > 50 && inputKw <= 100) {
    eleBill = calculateKm1(50) + calculateKm2(inputKw);
  } else if (inputKw > 100 && inputKw <= 200) {
    eleBill = calculateKm1(50) + calculateKm2(100) + calculateKm3(inputKw);
  } else if (inputKw > 200 && inputKw <= 350) {
    eleBill =
      calculateKm1(50) +
      calculateKm2(100) +
      calculateKm3(200) +
      calculateKm4(inputKw);
  } else if (inputKw > 350) {
    eleBill =
      calculateKm1(50) +
      calculateKm2(100) +
      calculateKm3(200) +
      calculateKm4(350) +
      calculateKm5(inputKw);
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

// Khai báo biến const các mức thuế suất
const tax_1 = 0.05;
const tax_2 = 0.1;
const tax_3 = 0.15;
const tax_4 = 0.2;
const tax_5 = 0.25;
const tax_6 = 0.3;
const tax_7 = 0.35;

// Tạo hàm tính thuế theo từng bậc thuế
function calculateTax1(taxableIncome) {
  return taxableIncome * tax_1;
}

function calculateTax2(taxableIncome) {
  return (taxableIncome - 60e6) * tax_2;
}

function calculateTax3(taxableIncome) {
  return (taxableIncome - 120e6) * tax_3;
}

function calculateTax4(taxableIncome) {
  return (taxableIncome - 210e6) * tax_4;
}

function calculateTax5(taxableIncome) {
  return (taxableIncome - 384e6) * tax_5;
}

function calculateTax6(taxableIncome) {
  return (taxableIncome - 624e6) * tax_6;
}

function calculateTax7(taxableIncome) {
  return (taxableIncome - 960e6) * tax_7;
}

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
    totalTax = calculateTax1(taxableIncome);
  } else if (taxableIncome > 60e6 && taxableIncome <= 120e6 && dependent >= 0) {
    totalTax = calculateTax1(60e6) + calculateTax2(taxableIncome);
  } else if (
    taxableIncome > 120e6 &&
    taxableIncome <= 210e6 &&
    dependent >= 0
  ) {
    totalTax =
      calculateTax1(60e6) + calculateTax2(120e6) + calculateTax3(taxableIncome);
  } else if (
    taxableIncome > 210e6 &&
    taxableIncome <= 384e6 &&
    dependent >= 0
  ) {
    totalTax =
      calculateTax1(60e6) +
      calculateTax2(120e6) +
      calculateTax3(210e6) +
      calculateTax4(taxableIncome);
  } else if (
    taxableIncome > 384e6 &&
    taxableIncome <= 624e6 &&
    dependent >= 0
  ) {
    totalTax =
      calculateTax1(60e6) +
      calculateTax2(120e6) +
      calculateTax3(210e6) +
      calculateTax4(384e6) +
      calculateTax5(taxableIncome);
  } else if (
    taxableIncome > 624e6 &&
    taxableIncome <= 960e6 &&
    dependent >= 0
  ) {
    totalTax =
      calculateTax1(60e6) +
      calculateTax2(120e6) +
      calculateTax3(210e6) +
      calculateTax4(384e6) +
      calculateTax5(624e6) +
      calculateTax6(taxableIncome);
  } else if (taxableIncome > 960e6 && dependent >= 0) {
    totalTax =
      calculateTax1(60e6) +
      calculateTax2(120e6) +
      calculateTax3(210e6) +
      calculateTax4(384e6) +
      calculateTax5(624e6) +
      calculateTax6(960e6) +
      calculateTax7(taxableIncome);
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

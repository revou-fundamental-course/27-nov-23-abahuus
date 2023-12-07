const base = document.getElementById("base");
const height = document.getElementById("height");
const CountArea = document.getElementById("CountArea");
const areaResult = document.getElementById("areaResult");
const edge1 = document.getElementById("edge1");
const edge2 = document.getElementById("edge2");
const edge3 = document.getElementById("edge3");
const perimeterCount = document.getElementById("perimeterCount");
const perimeterResult = document.getElementById("perimeterResult");

CountArea.addEventListener("click", function () {
  let alas = base.value;
  let tinggi = height.value;
  let luas = 0.5 * parseFloat(alas) * parseFloat(tinggi);

  if (alas == [] && tinggi == []) {
    areaResult.innerHTML =
      "<p style=color:red> *Nilai Alas dan Tinggi tidak boleh kosong!</p>";
  } else if (alas == []) {
    areaResult.innerHTML =
      "<p style=color:red> *Nilai Alas tidak boleh kosong!</p>";
  } else if (tinggi == []) {
    areaResult.innerHTML =
      "<p style=color:red> *Nilai Tinggi tidak boleh kosong!</p>";
  } else {
    areaResult.innerHTML = `Luas = 1/2 x Alas x Tinggi<br> L = 1/2 x ${alas} x ${tinggi}<br> L = ${luas}`;
  }
});

perimeterCount.addEventListener("click", function () {
  let sisi1 = edge1.value;
  let sisi2 = edge2.value;
  let sisi3 = edge3.value;
  let keliling = parseFloat(sisi1) + parseFloat(sisi2) + parseFloat(sisi3);

  if (sisi1 == [] && sisi2 == [] && sisi3 == []) {
    perimeterResult.innerHTML =
      "<p style=color:red> *Nilai Semua Sisi tidak boleh kosong!</p>";
  } else if (sisi1 == [] && sisi3 == []) {
    perimeterResult.innerHTML =
      "<p style=color:red> *Nilai Sisi Pertama dan Ketiga tidak boleh kosong!</p>";
  } else if (sisi2 == [] && sisi3 == []) {
    perimeterResult.innerHTML =
      "<p style=color:red> *Nilai Sisi Kedua dan Ketiga tidak boleh kosong!</p>";
  } else if (sisi1 == [] && sisi2 == []) {
    perimeterResult.innerHTML =
      "<p style=color:red> *Nilai Sisi Pertama dan Kedua tidak boleh kosong!</p>";
  } else if (sisi1 == []) {
    perimeterResult.innerHTML =
      "<p style=color:red> *Nilai Sisi Pertama tidak boleh kosong!</p>";
  } else if (sisi2 == []) {
    perimeterResult.innerHTML =
      "<p style=color:red> *Nilai Sisi Kedua tidak boleh kosong!</p>";
  } else if (sisi3 == []) {
    perimeterResult.innerHTML =
      "<p style=color:red> *Nilai Sisi Ketiga tidak boleh kosong!</p>";
  } else {
    perimeterResult.innerHTML = `Keliling = Sisi 1 + Sisi 2 + Sisi 3<br> K = ${sisi1} + ${sisi2} + ${sisi3} <br> K = ${keliling}`;
  }
});

let areaReset = document.getElementById("areaReset");
areaReset.addEventListener("click", function () {
  base.value = "";
  height.value = "";
  areaResult.innerHTML = "";
});

let perimeterReset = document.getElementById("perimeterReset");
perimeterReset.addEventListener("click", function () {
  edge1.value = "";
  edge2.value = "";
  edge3.value = "";
  perimeterResult.innerHTML = "";
});


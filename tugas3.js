function seleksiNilai(nilaiAwal, nilaiAkhir, data, callBack1 = filtered1, callBack2 = filtered2) {
  if (nilaiAkhir > nilaiAwal) {
    let length = data.length;
    if (length > 5) {
      let data1 = callBack1(data, nilaiAwal);
      let data2 = callBack2(data1, nilaiAkhir);
      console.log(data2);
    } else {
      console.log("Jumlah angka dalam dataArray harus lebih dari 5");
    }
  } else {
    console.log("Nilai akhir harus lebih besar dari nilai awal");
  }
}

function filtered1(data, batasBawah) {
  const result = data.filter((word) => word >= batasBawah);
  return result;
}

function filtered2(data, batasAtas) {
  const result = data.filter((word) => word <= batasAtas);
  return result;
}

const dataArray = [2, 25, 4, 14, 17, 30, 8];

seleksiNilai(5, 20, dataArray);

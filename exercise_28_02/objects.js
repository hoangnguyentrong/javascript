var sachs = [
  {
    tacgia: 'Harper Lee',
    tieuDe: 'To Kill a Mockingbird',
    namXuatBan: 2020,
    trangthai: true
  },
  {
    tacgia: 'Ray Bradbury',
    tieuDe: 'Fahrenheit 451',
    namXuatBan: 2022,
    trangthai: false
  }
];
for(let sach in sachs) {
  console.log(sachs[sach].tacgia)
  console.log(sachs[sach].tieude)
  console.log(sachs[sach].namXuatBan)
  console.log(sachs[sach].trangthai)
}

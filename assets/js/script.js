// fungsi ini digunakan untuk me routing halaman utama sehingga pada
// saat aplikasi pertama dijalankan , konten home akan langsung dibuka

let limit = 4; //jumlah data yang ditampilkan pertama
let start = 0;
let action = "inactive";
let search = "";
let result = 1;

$(document).ready(function () {

  setTimeout(()=>{
    $("#intro").fadeOut("slow");
  },2000)
  
  home();
  $("#home").addClass("active");
  $("#katalog").removeClass("active");
  $("#profil").removeClass("active");
  $("#infos").removeClass("active");
});
 
//fungsi ini digunakan sebagai router halaman konten home
function home() {
  let menu = document.querySelector('#float-plus')
  menu.classList.add('hidden');
  $.ajax({
    type: "GET",
    url: "home.html",
    data: "data",
    dataType: "html",
    success: function (response) {
      $("#content").html(response);
      $("#home").addClass("active");
      $("#katalog").removeClass("active");
      $("#profil").removeClass("active");
      $("#infos").removeClass("active");
      $("#load_data").html("");
      // start = 0;
      // lazzy_loader(limit);
      // if (action == "inactive") {
      //   action = "active";
        // fetching_data(limit, start, search);
      // }
    },
  });
}

//fungsi ini digunakan sebagai router halaman konten katalog
function katalog() {
  
  let menu = document.querySelector('#float-plus')
  menu.classList.add('hidden');

  $.ajax({
    type: "GET",
    url: "katalog.html",
    data: "data",
    dataType: "html",
    success: function (response) {
      $("#content").html(response);
      $("#home").removeClass("active");
      $("#katalog").addClass("active");
      $("#profil").removeClass("active");
      $("#infos").removeClass("active");
      $("#load_data").html("");
      // start = 0;
      // lazzy_loader(limit);
      // if (action == "inactive") {
      //   action = "active";
        // fetching_data(limit, start, search);
      // }
    },
  });
}
  

//fungsi ini digunakan sebagai router halaman konten profil
function profil() {
  let menu = document.querySelector('#float-plus')
  menu.classList.add('hidden');
  $.ajax({
    type: "GET",
    url: "profil.html",
    data: "data",
    dataType: "html",
  
    success: function (response) {
      $("#content").html(response);
      $("#home").removeClass("active");
      $("#katalog").removeClass("active");
      $("#profil").addClass("active");
      $("#infos").removeClass("active");
    },
  });
}

function profilIn() {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: 'error',
    title: 'Masuk akun terlebih dahulu!'
  })
}

//fungsi ini digunakan untuk menampilkan alert informasi menggunakan library sweetalert2

function info() {
  let menu = document.querySelector('#float-plus')
  menu.classList.add('hidden');
  $.ajax({
    type: "GET",
    url: "info.html",
    data: "data",
    dataType: "html",
  
    success: function (response) {
      $("#content").html(response);
      $("#home").removeClass("active");
      $("#katalog").removeClass("active");
      $("#profil").removeClass("active");
      $("#infos").addClass("active");
    },
  });
}

function infoApk() {
  Swal.fire({
    title: "U-Tix (UNSAP Ticket) Lite",
    html: 
      "<p>Dibuat oleh</p>" + 
      "<strong>Muhamad Luthfi Assidiq</strong></p>" +
      "<p>A2.2000066</p>" +
      "<p>Universitas Sebelas April Sumedang</p>" +
      "<br><p><b>CRUD & perhitungan Matematis</b> ada pada menu Event & donasi</p>" +
      "<p>Klik <b>Pesan Tiket</b> event untuk create, kemudian klik keranjang di kanan atas untuk read, update, dan delete</p>" +
      "<p><b>LazyLoad</b> disisipkan pada html di gambar-gambar event dengan <i>loading='lazy</i>'</p>" +
      "<p>Fitur Akun belum tersedia</p>",
    icon: "info",
    confirmButtonText: "Tutup",
    confirmButtonColor: "#3085d6",
  });
}


function masuk(){
  let masuk = document.querySelector('#akunDetail');
  masuk.innerHTML = 
  '<div class="text-center py-4">' +
  '<p class="headline5 color-black500 semibold mb-2 flex-fill text-center">Masuk/Log in Akun</p>' +
  '<input type="text" placeholder="Masukkan email atau id anda ..." class=" shadow-md rounded mt-2 px-0 py-2 w-60"> </input>' +
  '<input type="password" placeholder="Masukkan password anda ..." class="shadow-md rounded mt-2 mb-4 px-0 py-2 w-60"> </input>' +
  '<br><a href="#" class="pt-2 italic text-blue-500" onclick="fiturGagal();">Lupa passord?</a>' +
  '<br><button class="mt-4 w-48 h-10 bg-orange-400 hover:bg-orange-500 rounded-2xl text-white bodytext2" onclick="fiturGagal();">Masuk</button>' +
  
  '</div>';
}

function daftar(){
  let masuk = document.querySelector('#akunDetail');
  masuk.innerHTML = 
  '<div class="text-center py-4">' +
  '<p class="headline5 color-black500 semibold mb-2 flex-fill text-center">Mendaftar/Sign up Akun</p>' +
  '<input type="text" placeholder="Masukkan email anda ..." class=" shadow-md rounded mt-2 px-0 py-2 w-60"> </input>' +
  '<input type="password" placeholder="Masukkan password anda ..." class=" shadow-md rounded mt-2 px-0 py-2 w-60"> </input>' +
  '<input type="password" placeholder="Konfirmasi password ..." class=" shadow-md rounded mt-2 px-0 py-2 w-60"> </input>' +
  '<button class="mt-4 w-48 h-10 bg-orange-400 hover:bg-orange-500 rounded-2xl text-white bodytext2" onclick="fiturGagal();">Daftar</button>' +
  '</div>'
}

function fiturGagal(){
  Swal.fire({
    title: "Fitur Belum Tersedia",
    html: 
    '<p>Nantikan fitur lengkapnya hanya di<img src="assets/images/UTtix-trans.png" class="w-28 text-center m-auto" onclick="home();"></img></p>', 
    icon: "error",
    confirmButtonText: "Tutup",
    confirmButtonColor: "#ed493e",
  });
}

function segeraDatang(){
  Swal.fire({
    title: "Event akan segera datang!",
    html: 
    '<p>Nantikan tiket event lainnya hanya di<img src="assets/images/UTtix-trans.png" class="w-28 text-center m-auto" onclick="home();"></img></p>', 
    icon: "warning",
    confirmButtonText: "Tutup",
    confirmButtonColor: "#ed493e",
  });
}

function terimaKasih(){
  Swal.fire({
    title: 'Terima kasih banyak!',
    text: 'Akhirnya bisa makan TvT',
    imageUrl: 'https://i.kym-cdn.com/photos/images/newsfeed/001/998/543/9a3.gif',
    imageWidth: 450,
    imageAlt: 'Custom image',
  })
}

//fungsi ini digunakan untuk mengambil data barang dari database melalui API
/*function fetching_data() {
  $.ajax({
    type: "GET",
    url: "http://localhost/api_toko_online/produk/list?search=" + $("#search").val(),
    dataType: "JSON",
    
    success: function (response) {
      $("#load_data").html("");
      if (response.status) {
        let card_data = "";
        $.each(response.data, function (i, v) {
          card_data += 
            `<a class="product-items w-50 flex-column" href="javascript:void(0)" onclick="dialog('${v.id}');">
            <div class="product-cover mb-2" style="background-image: url('${v.img}');"></div>
            <p class="bodytext1 semibold m-0 px-2 text-secondary">${v.nama}</p>
            <p class="bodytext2 color-black300 m-0 px-2">${v.deskripsi.substring(0,40)}</p>
            <p class="caption m-0 py-1 px-2 text-primary">Rp. ${numFormat(v.harga)}</p>
          </a>`;
          $("#load_data").html(card_data);
        });
      } else {
        $("#load_data").html(
          '<div class="col-12 text-center"><h4 class="text-danger">Oops, barang yang anda cari tidak di temukan</h4></div>'
        );
      }
    },
  });
}*/

//fungsi ini digunakan untuk mem format angka kedalam format curency
// function numFormat(x) {
//   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }

function mdOpen() {
  $("#md-barang").modal("show");
  $("#md-barang-title").html("Tambah Event");
  $("#image").attr("required", true);
  $("#form-barang")[0].reset();
}
  
// $(function () {
//   // when the form is submitted
//   $("#form-barang").on("submit", function(e) {
//     // if the validator does not prevent form submit
//     if (!e.isDefaultPrevented()) {
//       Swal.fire("Sedang menyimpan data");
//       Swal.showLoading();
//       $("#btnSubmit").text("Menyimpan...");
//       $("#btnSubmit").attr("disabled", true);
//       var formData = new FormData($("#form-barang")[0]);
//       $.ajax({
//         url: "http://localhost/api_toko_online/produk/simpan",
//         type: "POST",
//         data: formData,
//         contentType: false,
//         processData: false,
//         dataType: "JSON",
//         success: function (data) {
//           if (data.status) {
//             $("#form-barang")[0].reset();
//             $("#md-barang").modal("hide");
//             fetching_data();
//             Swal.fire({
//               text: data.message,
//               icon: "success",
//               confirmButtonText: "Ok",
//             });
//           } else {
//             Swal.fire({
//               text: data.message,
//               icon: "error",
//               confirmButtonText: "Ok",
//             });
//           }
//           $("#btnSubmit").text("Simpan");
//           $("#btnSubmit").attr("disabled", false);
//         },
//       });
//       return false;
//     }
//   });
// });

// function dialog(id) {
//   $("#md-dialog").modal("show");
//   $("#btnEdit").attr("data-id", id);
//   $("#btnHapus").attr("data-id", id);
// }

// function edit(id) {
//   $("#form-barang")[0].reset();
//   $("#md-dialog").modal("hide");
//   $("#md-barang").modal("show");
//   $("#md-barang-title").html("Edit Event");
//   $("#image").attr("required", false);
//   $.ajax({
//     type: "GET",
//     url: "http://localhost/api_toko_online/produk/detail/" + id,
//     dataType: "JSON",
//     success: function (response) {
//       if (response.status) {
//         $("#id").val(response.data.id);
//         $("#nama").val(response.data.nama);
//         $("#harga").val(response.data.harga);
//         $("#deskripsi").val(response.data.deskripsi);
//       } else {
//         Swal.fire({
//           text: response.message,
//           icon: "error",
//           confirmButtonText: "Ok",
//         });
//       }
//     },
//   });
// }

// function hapus(id) {
//   Swal.fire({
//     title: "Data Event Akan Dihapus?",
//     text: "Data yang di hapus tidak dapat di kembalikan",
//     icon: "question",
//     showCancelButton: true,
//     confirmButtonText: "Hapus",
//     confirmButtonColor: "#3085d6",
//     cancelButtonText: "Batal",
//     cancelButtonColor: "#d33",
//   }).then((result) => {
//     if (result.isConfirmed) {
//       Swal.fire("Sedang menghapus data");
//       Swal.showLoading();
//       $.ajax({
//         type: "GET",
//         url: "http://localhost/api_toko_online/produk/hapus/" + id,
//         dataType: "JSON",
//         success: function (response) {
//           if (response.status) {
//             Swal.fire({
//               text: response.message,
//               icon: "success",
//               confirmButtonText: "Ok",
//             });
//             fetching_data();
//             $("#md-dialog").modal("hide");
//           } else {
//             Swal.fire({
//               text: response.message,
//               icon: "error",
//               confirmButtonText: "Ok",
//             });
//           }
//         },
//       });
//     }
//   });
// }
  
// function fetching_data(limit, start, search) {
//   $.ajax({
//     url: "http://localhost/api_toko_online/produk/list",
//     method: "POST",
//     data: {
//       limit: limit,
//       start: start,
//       search: search,
//     },
//     dataType: "JSON",
//     cache: false,
//     success: function (response) {
//       result = response.result;
//       if (response.status) {
//         let card_data = "";
//         $.each(response.data, function (i, v) {
//           card_data = ` <div class="product-items w-50 flex-column"><a href="javascript:void(0)" onclick="dialog('${v.id}');">
//           <div class="product-cover mb-2" style="background-image:url('${v.img}');"></div>
//           <p class="bodytext1 semibold m-0 px-2 text-secondary">${v.nama}</p>
//           <p class="bodytext2 color-black300 m-0 px-2">${v.deskripsi.substring(0,40)}</p>
//           <p class="caption m-0 py-1 px-2 text-primary">Rp.${numFormat(v.harga)}</p></a>
//           <button class="w-full h-8 mt-1 bg-orange-400 hover:bg-orange-500 rounded-2xl text-white bodytext3 " onclick="profilIn();">Pesan Tiket</button>
//           </div>`;
//           $("#load_data").append(card_data);
//         });
//         action = "inactive";
//         $("#load_data_message").html("");
//       } else {
//         $("#load_data").html("");
//         $("#load_data_message").html('<div class="col-12 text-center"><h4 class="text-danger">Waduh! Event yang anda cari tidak ditemukan</h4></div>');
//         action = "active";
//       }
//     },
//   });
// }
  
// function lazzy_loader(limit) {
//   var output = "";
//   for (var count = 0; count < limit; count++) {
//     output += `
//       <a class="product-items w-50 flex-column shimmer" href="javascript:void(0)">
//         <div class="product-cover animate mb-2" ></div>
//         <p class="bodytext1 semibold m-0 px-2 text-secondary animate mb-2"></p>
//         <p class="bodytext2 color-black300 m-0 px-2 animate mb2"></p>
//         <p class="caption m-0 py-1 px-2 text-primary animate"></p>
//       </a>`;
//   }
//   $("#load_data_message").html(output);
// }

// $(window).scroll(function () {
//   if ($(window).scrollTop() + $(window).height() > $("#load_data").height() && action == "inactive" && result == 1) {
//     lazzy_loader(limit);
//     action = "active";
//     start = start + limit;
//     setTimeout(function () {
//       fetching_data(limit, start, search);
//     }, 1000);
//   }
// });
  
// function searchHandler() {
//   $("#load_data").html("");
//   search = $("#search").val();
//   fetching_data(limit, start, search);
// }

// splash
// let intro = document.querySelector('#intro');
// let logo = document.querySelector('#logo-header');
// let logoSpan = document.querySelector('#logo');

// window.addEventListener("DOMContentLoaded", () => {

//   setTimeout(()=>{
//     intro.fadeOut("slow");
//   },2300)
  
// })

// CRUD TIKET
const keranjang = document.querySelector('#keranjang');
const navMenu = document.querySelector('#nav-menu');

keranjang.addEventListener('click', function ( ) {
    navMenu.classList.toggle('hidden');
});

const dataListTiket = [];

function addListTiketA() {

  let nama = "Comifuro 16";
  let harga = 60000;
  let jumlah = 1;

  dataListTiket.push(setDataTiket(nama, harga, jumlah));

  showupTiket();
}

function addListTiketB() {

  let nama = "Comic Con";
  let harga = 50000;
  let jumlah = 1;

  dataListTiket.push(setDataTiket(nama, harga, jumlah));

  showupTiket();
}

function addListTiketC() {


  let nama = "HITC Jakarta";
  let harga = 200000;
  let jumlah = 1;

  dataListTiket.push(setDataTiket(nama, harga, jumlah));

  showupTiket();
}

function addListTiketD() {

  let nama = "AVA.ID";
  let harga = 60000;
  let jumlah = 1;

  dataListTiket.push(setDataTiket(nama, harga, jumlah));

  showupTiket();
}

function addListTiketE() {

  let nama = "JJMatsuri";
  let harga = 50000;
  let jumlah = 1;

  dataListTiket.push(setDataTiket(nama, harga, jumlah));

  showupTiket();
}

function doEditTiket(id) {
  var newJumlah = prompt("Masukkan Jumlah tiket", dataListTiket[id].jumlah);

  dataListTiket[id] = setDataTiket(dataListTiket[id].nama, dataListTiket[id].harga, newJumlah || dataListTiket[id].jumlah);

  showupTiket();
}

function doDeleteTiket(id) {
  dataListTiket.splice(id, 1);
  showupTiket();
}

function showupTiket() {
  const lists = document.getElementById("listTiket");
  const totals = document.getElementById("hargaAkhirTiket");

  lists.innerHTML = "";

  dataListTiket.map((record, i) => {
    let actEdit = `<a class="font-semibold" href="#" onclick="doEditTiket(${i})">Edit</a>`;
    let actDelete = `<a class="font-semibold" href="#" onclick="doDeleteTiket(${i})">Delete</a>`;

    lists.innerHTML += `<li class="h-auto w-auto m-2 rounded-xl border-solid border-orange-600 border-2 shadow-md">[ ${actEdit} | ${actDelete} ] ${record.nama} ( Rp.${record.harga} x ${record.jumlah} ) total Rp.${record.total} </li>`;
  });

 totals.innerHTML = dataListTiket.reduce((accumulator, object) => {
    return accumulator + object.total;
  }, 0);
}

function setDataTiket(nama, harga, jumlah) {
  let total = 0;

  total = harga * jumlah;

  return {
    nama: nama,
    harga: harga,
    jumlah: jumlah,
    total: total,
  };
}

function cart(){

  let keranjangEx = document.getElementById("keranjangEx");

  if (dataListTiket.length > 0){
    keranjangEx.src = "assets/images/keranjangNot.png";
  } else {
    keranjangEx.src = "assets/images/keranjang.png";
  }

}

// CRUD Donasi

const dataList = [];

function addList() {
  let nick = document.getElementById("nickname").value;
  let rupiah = document.getElementById("donate").value;

  dataList.push(setData(nick, rupiah));

  showup();
}

function doDelete(id) {
  dataList.splice(id, 1);
  showup();
}

function showup() {
  const list = document.getElementById("list");
  const totalDonasi = document.getElementById("total_donasi");

  list.innerHTML = "";

  dataList.map((record, i) => {

    let actDelete = `<a class="font-semibold" href="#" onclick="doDelete(${i})">Delete</a>`;

    list.innerHTML += `<li class="h-auto w-auto m-2 rounded-xl border-solid border-green-600 border-2"><span></span>[ ${actDelete} ] <i>${record.nick}</i> berdonasi Rp.${record.rupiah} </li>`;
  });

  totalDonasi.innerHTML = dataList.reduce((accumulator, object) => {
    return accumulator + object.total;
  }, 0);
}

function setData(nick, rupiah) {
  let total = 0;
  total = rupiah * 1;

  return {
    nick: nick,
    rupiah: rupiah,
    total: total,
  };
}
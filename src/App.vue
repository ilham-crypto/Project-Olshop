<template>
  <div class="all">
    <div class="bg-warning topnav fixed-top" id="myTopnav">
      <div class="mx-auto order-0">
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <span
              ><a class="nav-link" target="_blank" href="#"
                >LEBIH MURAH DI APP</a
              ></span
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" target="_blank" href="#">MENJADI SELLER</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" target="_blank" href="#">CUSTOMER CARE</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" target="_blank" href="#">LACAK PESANAN</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              type="submit"
              v-if="logout === null"
              href="/login"
              >LOGIN</a
            >
            <a
              class="nav-link"
              type="submit"
              v-if="logout !== null"
              @click="out"
              href="/"
              >LOGOUT</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div>
      <br />
      <nav class="navbar navbar-expand-lg bg-warning">
        <div class="container-fluid">
          <a class="navbar-brand" href="/beranda"
            ><img src="lajanda3.9.png" alt="logo" width="150px"
          /></a>
          <nav class="navbar navbar-expand-lg bg-warning">
            <form class="form-inline">
              <input
                style="width: 740px"
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-warning my-2 my-sm-0" type="submit">
                <i class="fas fa-search"></i>
              </button>
            </form>
          </nav>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <div class="w3-dropdown-hover" v-if="roles === 'castamer'">
                <button class="w3-button bg-warning" v-if="logout !== null">
                  <i class="fas fa-shopping-cart"></i>
                </button>
                <div class="w3-dropdown-content w3-bar-block w3-border">
                  <a
                    href="/custamer"
                    class="w3-bar-item w3-button"
                    v-if="roles === 'castamer'"
                    >Buka Toko</a
                  >
                  <a
                    href="/nav"
                    class="w3-bar-item w3-button"
                    v-if="roles === 'castamer'"
                    >Beli</a
                  >
                  <!-- <a
                  href="admin"
                  class="w3-bar-item w3-button"
                  v-if="roles === 'admin'"
                  >Admin</a
                > -->
                </div>
              </div>
            </ul>
          </div>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <div class="w3-dropdown-hover">
                <button class="w3-button bg-warning" v-if="logout !== null">
                  <i class="fas fa-user"></i>
                </button>
                <div class="w3-dropdown-content w3-bar-block w3-border">
                  <a
                    href="/profilcas"
                    class="w3-bar-item w3-button"
                    v-if="roles === 'castamer'"
                    >Profil</a
                  >
                  <a
                    href="admin1"
                    class="w3-bar-item w3-button"
                    v-if="roles === 'admin'"
                    >Profil Sesuai Database</a
                  >
                  <!-- <a
                  href="admin2"
                  class="w3-bar-item w3-button"
                  v-if="roles === 'admin'"
                  >Data Custamer yang Register</a
                > -->
                  <a
                    href="admin"
                    class="w3-bar-item w3-button"
                    v-if="roles === 'admin'"
                    >Crud Custamer</a
                  >
                </div>
              </div>
            </ul>
            <!-- <a
            class="btn btn-outline-success my-2 my-sm-0"
            style="margin-left: 2px"
            v-if="logout === null"
            href="/login"
          >
            Login
          </a>
          <a
            class="btn btn-outline-danger my-2 my-sm-0"
            v-if="logout !== null"
            @click="out"
            href="/"
          >
            Logout</a
          > -->
          </div>
        </div>
      </nav>
    </div>

    <router-view></router-view>
    <br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br />

    <footer class="bg-warning">
      <div class="container py-5">
        <div class="row py-3">
          <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <img
              src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1GtyaR8r0gK0jSZFnXXbRRXXa.png"
              width="350"
            />
          </div>
          <div class="col-lg-1 col-md-6 mb-4 mb-lg-0"></div>
          <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <img
              src="https://laz-img-cdn.alicdn.com/images/ims-web/TB15.kSPBr0gK0jSZFnXXbRRXXa.jpg  "
              width="350"
            />
          </div>
          <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <img
              src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1Y_N3dwgP7K4jSZFqXXamhVXa.jpg"
              width="350"
            />
          </div>
          <div class="col-lg-3 col-md-6 mb-lg-0" style="margin-top: 20px">
            <h6 class="text-uppercase font-weight-bold mb-2">
              Layanan Pelanggan
            </h6>
            <div class="nav-item active">
              <a class="text-grey" href="#">Pusat Bantuan</a>
            </div>
            <div class="nav-item active">
              <a class="text-grey" href="#">Cara Pembelian</a>
            </div>
            <div class="nav-item active">
              <a class="text-grey" href="#">Pengiriman</a>
            </div>
            <div class="nav-item active">
              <a class="text-grey" href="#">Kebijakan Produk International</a>
            </div>
            <div class="nav-item active">
              <a class="text-grey" href="#">Cara Pengembalian</a>
            </div>
            <div class="nav-item active">
              <a class="text-grey" href="#" style="background-color: orange"
                >Ada Pertanyaan? Hubungi kami di live chat (24 jam)</a
              >
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-lg-0" style="margin-top: 20px">
            <h6 class="text-uppercase font-weight-bold mb-2">
              Jelajahi Lajanda
            </h6>
            <div class="nav-item active">
              <a class="text-grey" href="#">Tentang Lajanda</a>
            </div>
            <div class="nav-item active">
              <a class="text-grey" href="#">Affiliate Program</a>
            </div>
            <div class="nav-item active">
              <a class="text-grey" href="#">Karir</a>
            </div>
            <div class="nav-item active">
              <a class="text-grey" href="#">Syarat & Ketentuan</a>
            </div>
            <div class="nav-item active">
              <a class="text-grey" href="#">Kebijakan Privasi</a>
            </div>
            <div class="nav-item active">
              <a class="text-grey" href="#">Press & Media</a>
            </div>
            <div class="nav-item active">
              <a class="text-grey" href="#">Jual Di Lajanda</a>
            </div>
            <div class="nav-item active">
              <a class="text-grey" href="#">Lajanda Security</a>
            </div>
            <div class="nav-item active">
              <a class="text-grey" href="#">Intelectual Property Protect ion</a>
            </div>
          </div>
          <ul class="list-inline" style="margin-top: -170px">
            <li class="list-inline-item">
              <img
                style="padding: 5px; margin-left: 525px"
                src="http://laz-img-cdn.alicdn.com/tfs/TB1PApewFT7gK0jSZFpXXaTkpXa-200-200.png"
                width="70"
              />
              <p
                style="margin-left: 600px; margin-top: -40px; font-weight: bold"
              >
                Download The App
              </p>
              <p style="margin-left: 600px; margin-top: -55px; color: white">
                Go where your heart beats
              </p>
            </li>
            <li class="list-inline-item">
              <a
                href="https://apps.apple.com/app/lazada-best-shopping-online/id785385147"
              >
                <img
                  src="https://photos5.appleinsider.com/gallery/19743-20724-18671-17964-appstore-top-l-l.jpg"
                  width="150"
              /></a>
            </li>
            <li class="list-inline-item">
              <a
                href="https://play.google.com/store/apps/details?id=com.lazada.android"
              >
                <img
                  src="https://e7.pngegg.com/pngimages/542/263/png-clipart-google-play-logo-google-play-android-app-store-google-play-text-logo.png"
                  width="150"
                />
              </a>
            </li>
          </ul>
          <div style="margin-top: 60px">
            <h6 class="text-uppercase font-weight-bold mb-2">
              Metode Pembayaran
            </h6>
            <ul class="list-inline mt-3">
              <li class="list-inline-item">
                <img
                  src="https://image.cermati.com/q_70/v1431504749/ogxuwgtitfwxavibahws.jpg"
                  width="50"
                />
              </li>
              <li class="list-inline-item">
                <img
                  src="https://w7.pngwing.com/pngs/924/607/png-transparent-mastercard-credit-card-business-debit-card-logo-mastercard-text-service-orange.png"
                  width="50"
                />
              </li>
              <li class="list-inline-item">
                <img
                  src="https://bisniz.id/wp-content/uploads/2021/09/cod-artinya-1.jpg"
                  width="50"
                />
              </li>
            </ul>
            <div style="margin-top: 95px">
              <h6 class="text-uppercase font-weight-bold mb-2">
                Nyaman Belanja Online
              </h6>
            </div>
            <div class="nav-item">
              <a class="text-grey" style="font-size: 12px"
                ><p>
                  Lazada adalah perintis e-commerce<br />(online shopping) di
                  beberapa negara<br />dengan pertumbuhan tercepat di dunia<br />yang
                  menawarkan pengalaman belanja<br />online cepat, aman dan
                  nyaman. Lazada<br />selalu hadir dengan pelayanan terbaik<br />dengan
                  metode pembayaran yang<br />
                  lengkap dan aman, jaminan<br />pengembalian barang, layanan<br />konsumen
                  24 jam dan promo-promo<br />terbaik seperti gratis ongkir,
                  cashback,<br />
                  voucher diskon dan pastinya diskon<br />untuk konsumen.
                  Sebagai salah satu<br />aplikasi belanja online terbaik di<br />Indonesia,
                  Lazada menyediakan jutaan<br />produk yang selalu update
                  setiap saat<br />
                  langsung di genggaman tangan.
                </p></a
              >
            </div>
            <h6 class="text-uppercase font-weight-bold mb-2">
              Terpercaya Se-Asia Tenggara
            </h6>
            <a class="text-grey" style="font-size: 12px">
              <p>
                Setiap hari adalah hari belanja di Lazada<br />Lebih dari
                sekedar e-commerce di<br />Indonesia, Lazada turut
                menciptakan<br />pengalaman belanja online terbaik untuk<br />setiap
                pelanggan di Indonesia bahkan<br />Asia Tenggara. Selain
                menyediakan<br />pengalaman belanja online yang lengkap<br />dan
                mudah bagi konsumen, Lazada juga<br />memastikan kepuasan seller
                untuk<br />berjualan online dengan berbagai<br />dukungan
                maksimal. Sehingga<br />
                hubungan antara pelanggan dan penjual<br />menciptakan rasa
                saling percaya dalam<br />budaya jual beli online terbaik di<br />Indonesia.
              </p>
            </a>
            <h6 class="text-uppercase font-weight-bold mb-2">
              Promo Belanja Online Terbaik
            </h6>
            <div class="nav-item">
              <a class="text-grey" style="font-size: 12px"
                ><p>
                  Belanja akan terasa lebih hemat dari<br />sebelumnya dengan
                  penawaran ekslusif<br />di Lazada. Mulai dari voucher
                  potongan<br />
                  harga, diskon spesial yang update tiap<br />hari, juga update
                  dari<br />
                  promo terbaru dari brand terbaik dalam<br />
                  dan luar negeri.<br />
                  Khusus pengguna baru yang belum<br />pernah belanja di Lazada,
                  kamu akan<br />
                  langsung mendapatkan gratis ongkir dan<br />juga voucher
                  diskon tambahan ditambah<br />lagi hadiah langsung setelah
                  download<br />
                  aplikasi Lazada.
                </p></a
              >
            </div>
            <h6 class="text-uppercase font-weight-bold mb-2">
              LazMall 100% Original dan<br />Lengkap
            </h6>
            <br /><br />
            <h6 class="text-uppercase font-weight-bold mb-2">
              Lajanda Southeast Asia
            </h6>
            <a href="https://www.lazada.co.id/products/">
              <img style="margin-left: -30px" src="indo.png" width="80" />
            </a>
            <a href="https://www.lazada.co.id/products/">
              <img style="margin-left: -10px" src="malay.png" width="46" />
            </a>
            <a href="https://www.lazada.com.ph/">
              <img src="filipina.png" width="50" />
            </a>
            <a href="https://www.lazada.sg/">
              <img src="singapure.png" width="46" />
            </a>
            <a href="">
              <img style="margin-left: -20px" src="thailand.png" width="90" />
            </a>
            <a href="">
              <img style="margin-left: -15px" src="vietnam.png" width="46" />
            </a>
          </div>
          <div style="margin-left: 280px; margin-top: -1250px">
            <h6
              style="margin-left: 250px"
              class="text-uppercase font-weight-bold mb-3"
            >
              Jasa Pengiriman
            </h6>
            <ul style="margin-left: 250px" class="list-inline mt-3">
              <li class="list-inline-item">
                <img
                  src="https://laz-img-cdn.alicdn.com/imgextra/i3/O1CN01dRAW561rRflpw9sUR_!!6000000005628-0-tps-180-62.jpg"
                  width="80"
                />
              </li>
              <li class="list-inline-item">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfwZ66mHtuV-3KnL9KasKtUUn1j4sAWeMpEA0brv-fJK0a7NbjcGe1ynyLtSrry9BFIGE&usqp=CAU"
                  width="50"
                />
              </li>
              <li class="list-inline-item">
                <img
                  src="https://i2.wp.com/seismicell.com/wp-content/uploads/2018/05/logo.png?fit=1000%2C426&ssl=1"
                  width="50"
                />
              </li>
            </ul>
            <ul style="margin-left: 250px" class="list-inline mt-4">
              <li class="list-inline-item">
                <img
                  src="https://laz-img-cdn.alicdn.com/tfs/TB1sBinj7L0gK0jSZFtXXXQCXXa-1384-1000.png"
                  width="50"
                />
              </li>
              <li class="list-inline-item">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYgDXl0pOJ5q06vPGXYGsQYsMLK2Y4iVcUl5Mb9EWrdmk1ntAhamoEkSs_XvWKraR6XeA&usqp=CAU"
                  width="100"
                />
              </li>
              <li class="list-inline-item">
                <img
                  src="https://www.casvely.com/wp-content/uploads/2021/01/grabexpress-logo-4A2226D41A-seeklogo.com_.png"
                  width="50"
                />
              </li>
            </ul>
            <a class="text-grey" style="font-size: 12px"
              ><p>
                Selain mudah dan nyaman belanja online<br />kini bisa sesuai
                dengan keinginanmu,<br />mulai dari koleksi produk, kategori
                dan<br />brand resmi yang kamu suka, hadir<br />langsung di
                halaman depan aplikasi.<br />
                Kemudahan berbelanja produk-produk<br />terkenal dunia semua ada
                di LazMall,<br />mulai dari Wardah, Adidas, L’Oreal,<br />Herschel,
                The Body Shop, Pampers dan<br />banyak lagi brand populer
                lainnya.<br />Temukan semua brand favoritmu di<br />LazMall,
                100% original dengan 15 hari<br />
                pengembalian dan 1 hari pengiriman.<br />Semua lengkap ada di
                Lazada mulai dari<br />produk elektronik , furnitur,
                olahraga,<br />kesehatan, kecantikan, kosmetik, tas,<br />fashion,
                hijab, kebutuhan ibu dan anak,<br />sepatu, pulsa, perlengkapan
                automotif,<br />kebutuhan hewan peliharaan, susu dan<br />masih
                banyak lagi.
              </p></a
            >
            <h6 class="text-uppercase font-weight-bold mb-2">
              Review Asli, Pembayaran<br />Aman Terpercaya!
            </h6>
            <a class="text-grey" style="font-size: 12px">
              <p>
                Lajanda juga menampilkan review produk<br />dari konsumen asli,
                rating seller dan fitur<br />chat langsung dengan seller. Kamu
                gak<br />perlu khawatir, karena metode<br />pembayaran bisa dan
                dijamin aman!<br />
                Termasuk pembayaran favorit kamu<br />seperti COD (bayar di
                tempat). Mau<br />bayar pakai Lazada Credit, bank transfer<br />kartu
                kredit, pembayaran di minimarket<br />dan aplikasi cicilan
                online populer<br />
                lainnya bisa di Lazada.
              </p>
            </a>
            <h6 class="text-uppercase font-weight-bold mb-2">
              Lajanda 12.12 Diskon Terbesar<br />Akhir Tahun!
            </h6>
            <a class="text-grey" style="font-size: 12px">
              <p>
                Lajanda 12.12 Grand Year End Sale sudah<br />menanti. Yuk,
                gabung dengan ratusan<br />juta orang yang sudah berbelanja
                online<br />di Lajanda dan dapatkan pengalaman<br />belanja
                terbaik, aman dan mudah. Di<br />Lazada 12.12 sale, Lazada<br />menghadirkan
                sederet promo menarik<br />yang bisa kamu dapatkan dan
                gunakan<br />secara langsung lho! Mulai tanggal 1<br />Desembersampai
                dengan 14 Desember<br />dan mega sale pada 12 Desember<br />Diantara
                promonya ada bonus dadakan<br />s.d. 1.2 Juta, Voucher 120 Ribu,
                Crazy<br />Flash Sale 12 Rupiah dan Gratis ongkir<br />tanpa
                minimum belanja se-Indonesia!<br />Jangan lewatkan pula Live
                Streaming<br />berhadiah langsung & banyak lagi.
              </p>
            </a>
            <br />
            <div style="margin-left: 280px">
              <h6 class="text-uppercase font-weight-bold mb-2">Follow Us</h6>
              <i
                style="font-size: 35px; color: midnightblue; padding-left: 2px"
                class="fab fa-facebook-square"
              ></i>
              <i
                style="font-size: 35px; color: darkturquoise; padding-left: 5px"
                class="fab fa-twitter-square"
              ></i>
              <i
                style="font-size: 35px; color: mediumblue; padding-left: 5px"
                class="fab fa-linkedin-in"
              ></i>
              <i
                style="font-size: 35px; color: orangered; padding-left: 5px"
                class="fab fa-google-plus-g"
              ></i>
              <i
                style="font-size: 35px; color: mediumblue; padding-left: 5px"
                class="fab fa-instagram"
              ></i>
              <i
                style="font-size: 35px; color: red; padding-left: 5px"
                class="fab fa-youtube-square"
              ></i>
              <i
                style="font-size: 35px; color: red; padding-left: 5px"
                class="fab fa-pinterest"
              ></i>
              <i
                style="font-size: 35px; color: orangered; padding-left: 5px"
                class="fas fa-blog"
              ></i>
            </div>
          </div>

          <div style="margin-top: -1250px; margin-left: 800px">
            <h6 class="text-uppercase font-weight-bold mb-2">Verified By</h6>
            <ul class="list-inline mt-auto">
              <li class="list-inline-item">
                <img
                  src="https://laz-img-cdn.alicdn.com/tfs/TB1lbmoqYr1gK0jSZR0XXbP8XXa-340-200.png"
                  width="100"
                />
              </li>
              <li class="list-inline-item">
                <img
                  src="https://laz-img-cdn.alicdn.com/tfs/TB1jyJMv.H1gK0jSZSyXXXtlpXa-184-120.png"
                  width="100"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="p-0 m-0 b-0" />
      <div class="bg-dark py-2">
        <div class="container text-center">
          <p class="text-muted mb-0 py-2">© 2021 Lajanda</p>
        </div>
      </div>
    </footer>
    <div id="ya" class="fixed-bottom">
      <a href="">
        <h5><i class="fab fa-whatsapp-square"></i></h5>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      roles: "",
      logout: {},
    };
  },
  mounted() {
    this.getUser();
  },
  methods: {
    out() {
      sessionStorage.clear();
    },
    getUser() {
      let user = JSON.parse(sessionStorage.getItem("USER_DATA"));
      this.roles = user === null ? "" : user.role;
      this.logout = user;
    },
  },
  userRole() {
    return JSON.parse(sessionStorage.getItem("USER_DATA")).role;
  },
  a() {
    alert("Kontak Person: 089677903703");
  },
};
</script>
<style >
.all {
  max-width: 1440px;
  margin: auto;
  /* border: 1px solid red; */
}
.site-footer {
  background-color: #fbcd00;
  padding: 45px 0 20px;
  font-size: 15px;
  line-height: 24px;
  color: black;
}
.site-footer hr {
  border-top-color: black;
  opacity: 0.5;
}
.site-footer hr.small {
  margin: 20px 0;
}
.site-footer h6 {
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  margin-top: 5px;
  letter-spacing: 2px;
}
.site-footer a {
  color: black;
}
.site-footer a:hover {
  color: #3366cc;
  text-decoration: none;
}
/* #sticky {
  position: fixed;
  top: 0;
  width: 100%;
  padding: inherit;
} */
.footer-links {
  padding-left: 0;
  list-style: none;
}
.fixed1 {
  position: fixed;
  top: 25px;
}

.footer-links li {
  display: block;
}
.footer-links a {
  color: black;
}
.footer-links a:active,
.footer-links a:focus,
.footer-links a:hover {
  color: #3366cc;
  text-decoration: none;
}
.footer-links.inline li {
  display: inline-block;
}
.site-footer .social-icons {
  text-align: right;
}
.site-footer .social-icons a {
  width: 40px;
  height: 40px;
  line-height: 40px;
  margin-left: 6px;
  margin-right: 0;
  border-radius: 100%;
  background-color: #33353d;
}
.copyright-text {
  margin: 0;
}
@media (max-width: 991px) {
  .site-footer [class^="col-"] {
    margin-bottom: 30px;
  }
}
@media (max-width: 767px) {
  .site-footer {
    padding-bottom: 0;
  }
  .site-footer .copyright-text,
  .site-footer .social-icons {
    text-align: center;
  }
}
.social-icons {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.social-icons li {
  display: inline-block;
  margin-bottom: 4px;
}
.social-icons li.title {
  margin-right: 15px;
  text-transform: uppercase;
  color: #96a2b2;
  font-weight: 700;
  font-size: 13px;
}
.social-icons a {
  background-color: #eceeef;
  color: #818a91;
  font-size: 16px;
  display: inline-block;
  line-height: 44px;
  width: 44px;
  height: 44px;
  text-align: center;
  margin-right: 8px;
  border-radius: 100%;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
}
.social-icons a:active,
.social-icons a:focus,
.social-icons a:hover {
  color: #fff;
  background-color: #29aafe;
}
.social-icons.size-sm a {
  line-height: 34px;
  height: 34px;
  width: 34px;
  font-size: 14px;
}
.social-icons a.facebook:hover {
  background-color: #3b5998;
}
.social-icons a.twitter:hover {
  background-color: #00aced;
}
.social-icons a.linkedin:hover {
  background-color: #007bb6;
}
.social-icons a.dribbble:hover {
  background-color: #ea4c89;
}
@media (max-width: 767px) {
  .social-icons li.title {
    display: block;
    margin-right: 0;
    font-weight: 600;
  }
}
#ya {
  border: none;
  width: 500px;
  margin-left: 1150px;
  size: 50px;
  box-shadow: 2px 2px 2px black;
}
</style>
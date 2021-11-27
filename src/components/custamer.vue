<template>
  <div id="app">
    <h2 style="text-align: center; margin-bottom: 12px">
      Product <br />
      <a href="/custamer1">
        <button
          style="
            background-color: green;
            color: white;
            width: auto;
            padding: 5px;
            border: 1px solid white;
          "
          id="pr"
        >
          Tambah Product
        </button>
      </a>
    </h2>
    <div class="continer">
      <div class="row">
        <div class="col" v-for="user in barang" :key="user.id">
          <div class="col">
            <blockquote @click="f()">
              <img :src="user.gambar" width="200px" height="200px" alt="..." />
            </blockquote>
            <div class="col">
              <h5 class="h5">
                {{ user.namaBarang }}
              </h5>
              <ul class="card-text list-unstyled">
                <li>
                  <small class="text-muted">Harga mulai</small>
                  <p class="h5">{{ user.harga }}</p>
                </li>
                <button
                  style="
                    background-color: green;
                    color: white;
                    width: 60px;
                    padding: 5px;
                    border: 1px solid white;
                  "
                  id="pr"
                  @click="del(user)"
                >
                  Hapus
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
export default {
  data() {
    return {
      form: {
        id: "",
        namaBarang: "",
        gambar: "",
        harga: "",
      },
      barang: "",
      updateSubmit: false,
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      axios
        .get("http://localhost:3000/barang")
        .then((res) => {
          this.barang = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    del(user) {
      axios.delete("http://localhost:3000/barang/" + user.id).then((res) => {
        this.load();
      });
    },
    f() {
      let beli = confirm(
        "Apakah anda igin membeli prodak ini klik Ok untuk melanjutkan"
      );
      if (beli) {
        alert(
          "Ok sedang di Proses dan jangan lupa pilih berapa yang anda inginkan.."
        );
        this.$router.push("/nav");
      } else {
        alert("Pembelian Gagal");
      }
    },
  },
};
</script>
<style scoped>
#app {
  border: 1px solid black none;
  padding: 10px;
  color: black;
  margin-top: 20px;
}
#pr {
  margin-bottom: 10px;
}
.border1 {
  width: auto;
  padding: 30px;
  background-color: none;
}
#border2 {
  width: auto;
  padding: 10px;
  display: flex;
}
.h5,
.card-title {
  color: black;
}
table {
  border: 1px solid white;
  padding: 20px;
  width: auto;
  border-collapse: collapse;
  background-color: white;
}
th {
  border: 1px solid white;
  height: 70px;
  text-align: center;
  background-color: blue;
}
td {
  border: 1px solid black none;
  text-align: center;
  color: black;
}
input,
select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
button[type="submit"] {
  width: 100%;
  background-color: lightskyblue;
  color: black;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button[type="button"] {
  width: 100%;
  background-color: lightskyblue;
  color: black;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.card-img-top {
  padding: 5px;
  margin: auto;
}
</style>
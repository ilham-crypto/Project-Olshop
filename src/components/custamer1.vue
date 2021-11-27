<template>
  <div class="app">
    <div class="pr">
      <div class="border1 row">
        <div class="awd">
          <h3>Tambahkan Barang</h3>
          <form @submit.prevent="add">
            <input type="hidden" v-model="form.id" />
            <label for=""><b> Nama Barang : </b></label><br />
            <input
              type="text"
              required
              v-model="form.namaBarang"
              placeholder="Masukkan Nama Barang..."
            /><br /><br />
            <label for=""><b> Harga : </b></label><br />
            <input
              type="text"
              required
              v-model="form.harga"
              placeholder="Masukkan Harga..."
            /><br /><br />
            <label for=""><b> Jumlah : </b></label><br />
            <select v-model="form.stok">
              <option value="">Pilih Jumlah</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <label for=""><b> Gambar : </b></label><br />
            <input
              type="text"
              required
              v-model="form.gambar"
              placeholder="Masukkan Gambar..."
            /><br /><br />
            <button
              type="submit"
              v-show="!updateSubmit"
              style="margin: auto"
              @click="f()"
            >
              <b> Tambahkan </b>
            </button>
            <!-- jika tidak update maka tombol update tidak muncul -->
            <button type="button" v-show="updateSubmit" @click="update(form)">
              <b> Update </b>
            </button>
            <!-- jika tombol edit di klik maka tombol add akan berubah menjadi update -->
          </form>
          <br />
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
        stok: "",
        gambar: "",
        harga: "",
        gambar: "",
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
    add() {
      axios.post("http://localhost:3000/barang/", this.form).then((res) => {
        this.load();
        alert("Sukses Ditambahkan");
        this.$router.push("/custamer")((this.form.id = "")),
          (this.form.namaBarang = ""),
          (this.form.stok = ""),
          (this.form.gambar = ""),
          (this.form.harga = "");
        this.form.gambar = "";
      });
    },
    edit(user) {
      this.updateSubmit = true;
      this.form.id = user.id;
      this.form.namaBarang = user.namaBarang;
      this.form.stok = user.stok;
      this.form.gambar = user.gambar;
      this.form.harga = user.harga;
    },
    update(form) {
      return axios
        .put("http://localhost:3000/barang/" + form.id, {
          namaBarang: this.form.namaBarang,
          stok: this.form.stok,
          gambar: this.form.gambar,
          harga: this.form.harga,
        })
        .then((res) => {
          this.load();
          this.form.id = "";
          this.form.namaBarang = "";
          this.form.stok = "";
          this.form.gambar = "";
          this.form.harga = "";
          this.updateSubmit = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    del(user) {
      axios.delete("http://localhost:3000/barang/" + user.id).then((res) => {
        this.load();
        let index = this.barang.indexOf(form.namaBarang);
        this.barang.splice(index, 1);
      });
    },
  },
};
</script>

<style scoped>
.app,
.awd {
  margin-right: 20px;
}
.border1 {
  border: 1px solid black none;
  background-color: blue;
  color: white;
  padding: 10px;
  background-color: none;
  width: 50%;
  margin-left: 300px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.pr {
  display: flex;
}
/* .border1 {
  width: 30%;
  padding: 10px;
  background-color: none;
} */
table {
  border: 1px solid white;
  padding: 20px;
  width: 800px;
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
</style>
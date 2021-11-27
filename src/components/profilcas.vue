<template>
  <div style="background-color: white">
    <div class="aaa" v-for="data in users" :key="data.id">
      <div class="row">
        <div class="rightcolumna">
          <div class="card1">
            <img
              src="https://group.lazada.com/static/ipr_annual_report/images/xxl-lazada-logo.svg"
              style="border-radius: 100px"
              width="100"
              height="100"
            />
            <div style="margin-left: 20px; padding-top: 20px">
              <p>
                <b>{{ data.username }}</b>
              </p>
              <button @click="edit(data)" type="button" style="border: none">
                <i class="far fa-edit"></i> Edit Profil</button
              ><br />
            </div>
          </div>
          <div class="addd">
            <p>
              <b
                ><i class="far fa-data"></i><i class="far fa-user"></i> Akun
                Saya</b
              >
            </p>
            <p>
              <b>Username &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</b>
              {{ data.username }}
            </p>
            <p>
              <b
                >Email
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</b
              >
              {{ data.email }}
            </p>
            <p>
              <b
                >No Hp
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</b
              >
              {{ data.notel }}
            </p>
            <p><b>Tanggal Lahir :</b> {{ data.tanggal }}</p>
          </div>
        </div>
        <div class="leftcolumna">
          <div class="card">
            <div class="border1 row">
              <br />
              <center>
                <h3>PROFIL SAYA</h3>
                <hr />
              </center>
              <br /><br />
              <br /><br />
              <form class="aa" @submit.prevent="add">
                <input type="hidden" v-model="form.id" />
                <label for=""><b> Username : </b></label><br />
                <input
                  style="width: 370px"
                  type="text"
                  required
                  v-model="form.username"
                  placeholder="Masukkan Username..."
                /><br /><br />
                <label for=""><b> Email : </b></label><br />
                <input
                  style="width: 370px"
                  type="text"
                  required
                  v-model="form.email"
                  placeholder="Masukkan Email..."
                /><br /><br />
                <label for=""><b> No Hp : </b></label><br />
                <input
                  style="width: 370px"
                  type="text"
                  required
                  v-model="form.notel"
                  placeholder="Masukkan No Hp..."
                /><br /><br />
                <label for=""><b> Tanggal Lahir : </b></label><br />
                <input
                  type="date"
                  v-model="form.tanggal"
                  name="tanggal"
                /><br /><br />
                <!-- jika tidak update maka tombol update tidak muncul -->
                <button
                  type="button"
                  v-show="updateSubmit"
                  @click="update(form)"
                  style="margin: auto; width: 370px"
                >
                  <b> Update </b>
                </button>
                <!-- jika tombol edit di klik maka tombol add akan berubah menjadi update -->
              </form>
              <br />
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
        username: "",
        email: "",
        notel: "",
        tanggal: "",
      },
      users: "",
      updateSubmit: false,
    };
  },
  mounted() {
    this.load();
  },
  computed: {
    userRole() {
      return JSON.parse(sessionStorage.getItem("USER_DATA")).role;
    },
  },
  methods: {
    load() {
      axios
        .get("http://localhost:3000/users")
        .then((res) => {
          this.users = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    add() {
      axios.post("http://localhost:3000/users/", this.form).then((res) => {
        this.load();
        (this.form.id = ""),
          (this.form.username = ""),
          (this.form.email = ""),
          (this.form.notel = ""),
          (this.form.tanggal = "");
      });
    },
    edit(data) {
      this.updateSubmit = true;
      this.form.id = data.id;
      this.form.username = data.username;
      this.form.email = data.email;
      this.form.notel = data.notel;
      this.form.tanggal = data.tanggal;
    },
    update(form) {
      return axios
        .put("http://localhost:3000/users/" + form.id, {
          username: this.form.username,
          email: this.form.email,
          notel: this.form.notel,
          tanggal: this.form.tanggal,
        })
        .then((res) => {
          this.load();
          this.form.id = "";
          this.form.username = "";
          this.form.email = "";
          this.form.notel = "";
          this.form.tanggal = "";
          this.updateSubmit = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    del(data) {
      axios.delete("http://localhost:3000/users/" + data.id).then((res) => {
        this.load();
        let index = this.users.indexOf(form.username);
        this.users.splice(index, 1);
      });
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
.aaa {
  font-family: Arial;
  padding: 10px;
  background: #f1f1f1;
}
/* Header/Blog Title */
.header {
  padding: 30px;
  text-align: center;
  background: white;
}
.header h1 {
  font-size: 50px;
}
/* Style the top navigation bar */
.topnav {
  overflow: hidden;
  background-color: #333;
}
/* Create two unequal columns that floats next to each other */
/* Left column */
.leftcolumna {
  margin-left: 20px;
  float: left;
  width: 71%;
}
/* Right column */
.rightcolumna {
  float: left;
  width: 25%;
  background-color: #f1f1f1;
  padding-left: 20px;
}
/* Fake image */
.fakeimg {
  background-color: #aaa;
  width: 100%;
  padding: 20px;
}
/* Add a card effect for articles */
.card1 {
  background-color: #f1f1f1;
  padding: 20px;
  display: flex;
  margin-top: 20px;
}
.card {
  background-color: white;
  padding: 20px;
  margin-top: 20px;
}
/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
.cba {
  margin-left: 50px;
}
.addd {
  margin-left: 20px;
}
/* Footer */
.footer {
  padding: 20px;
  text-align: center;
  background: rgb(124, 121, 121);
  margin-top: 20px;
}
/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 800px) {
  .leftcolumn,
  .rightcolumn {
    width: 100%;
    padding: 0;
  }
}
/* Responsive layout - when the screen is less than 400px wide, make the navigation links stack on top of each other instead of next to each other */
@media screen and (max-width: 400px) {
  .topnav a {
    float: none;
    width: 100%;
  }
}
</style>
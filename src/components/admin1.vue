<template>
  <div id="app">
    <h2 style="text-align: center; margin-bottom: 12px">Data Admin</h2>
    <div class="container">
      <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
        <div class="col col-lg-3" v-for="user in admin" :key="user.id">
          <div class="col p-3 border bg-light">
            <blockquote @click="f()">
              <img :src="user.gambar" width="200px" height="200px" alt="..." />
            </blockquote>
            <div>
              <h5 class="h5">
                {{ user.username }}
              </h5>
              <ul class="card-text list-unstyled">
                <li>
                  <p class="h5">{{ user.password }}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    this.load();
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
    del(user) {
      axios.delete("http://localhost:3000/users/" + user.id).then(() => {
        this.load();
        let index = this.users.indexOf(user.username);
        this.users.splice(index, 1);
      });
    },
  },
  computed: {
    admin() {
      return this.users.filter((user) => {
        return user.role === "admin";
      });
    },
  },
};
</script>
<style scoped>
/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 500px) {
  .a {
    width: 40%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 500px) {
  .a {
    width: 40%;
  }
}
.kepo {
  background-color: pink;
}
button {
  opacity: 100%;
}
table {
  border-collapse: collapse;
  width: 100%;
}
th,
td {
  text-align: left;
  padding: 8px;
}
tr:nth-child(even) {
  background-color: #f2f2f2;
}
th {
  background-color: black;
  color: white;
}
button {
  font-size: 15px;
  padding: 5px 15px;
}
</style>
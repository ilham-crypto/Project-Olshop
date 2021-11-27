<template>
  <div>
    <table>
      <tr>
        <th>No</th>
        <th>Username</th>
        <th>Email</th>
        <th>No Telepon</th>
        <th>Password</th>
      </tr>
      <tr v-for="(user, index) in castamer" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ user.username }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.notel }}</td>
        <td>{{ user.password }}</td>
      </tr>
    </table>
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
    castamer() {
      return this.users.filter((user) => {
        return user.role === "castamer";
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
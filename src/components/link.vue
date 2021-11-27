<template>
  <div style="text-align: center; padding-top: 70px">
    <div v-if="userRole === 'castamer'">
      <button><a href="/custamer1">Pembelian</a></button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button><a href="/custamer">St.Pembelian</a></button>
    </div>
    <div v-if="userRole === 'admin'">
      <h3>Presensi Mahasiswa</h3>
      <button><a href="/statistik">Statistik</a></button>
      <h3>Presensi Dosen</h3>
      <button><a href="/statistik1">Statistik</a></button>
    </div>
  </div>
</template>
<script>
export default {
  name: "link",
  computed: {
    userRole() {
      return JSON.parse(sessionStorage.getItem("USER_DATA")).role;
    },
  },
  methods: {
    presensi() {
      this.$router.push("/presensi");
      // alert("cukkk");
    },
    statistik() {
      this.$router.push("/statistik");
    },
  },
};
</script>
<template>
  <main>
    <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
      <a class="navbar-brand" href="#">Todo list app</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link" v-if="isAuthenticated"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              exact-active-class="active"
              to="/list"
              class="nav-link"
              v-if="isAuthenticated"
              >Task list</router-link
            >
          </li>
          <li>
            <router-link
              exact-active-class="active"
              to="/login"
              class="nav-link"
              v-if="!isAuthenticated"
              >Login</router-link
            >
          </li>
          <!-- Logout button -->
          <li>
            <button
              class="btn btn-primary"
              type="button"
              @click="logout"
              v-if="isAuthenticated"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
    <div>
      <router-view> </router-view>
    </div>
  </main>
</template>

<script>
//Verify if the user is logged in
export default {
  created() {
    if (localStorage.getItem("access_token")) {
      this.$router.push({ name: "list" });
    } else {
      this.$router.push({ name: "login" });
    }
  },
  computed: {
    isAuthenticated() {
      return localStorage.getItem("access_token");
    },
  },
  methods: {
    logout() {
      localStorage.removeItem("access_token");
      localStorage.removeItem("user");
      this.$router.go({ name: "login" });
    },
  },
};
</script>
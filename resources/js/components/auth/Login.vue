<template>
  <div class="container">
    <div class="row" style="margin-top: 30px">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h4>Login</h4>
          </div>
          <div class="card-body">
            <form @submit.prevent="login">
              <div class="form-group">
                <label for="username">Username</label>
                <input
                  type="username"
                  class="form-control"
                  v-model="user.username"
                />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  class="form-control"
                  v-model="user.password"
                />
              </div>
              <div class="col-12">
                <br />
                <button class="btn btn-primary" type="submit">Login</button>
              </div>
              <div>
                <br />
                <router-link to="/register">Register</router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    //Login method with axios post request
    login() {
      axios
        .post("/oauth/token", {
          grant_type: "password",
          client_id: 2,
          client_secret: "KTOYZi08820np4OhHkRcDY3bCW9CwEv1MQnzbtfA",
          username: this.user.username,
          password: this.user.password,
        })
        .then((response) => {
          //Save the token in the local storage
          localStorage.setItem("access_token", response.data.access_token);
          axios
            .get("/api/user", {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("access_token"),
              },
            })
            .then((response) => {
              localStorage.setItem("user", JSON.stringify(response.data));
              this.$router.go({ name: "list" });
            });
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    },
  },
};
</script>
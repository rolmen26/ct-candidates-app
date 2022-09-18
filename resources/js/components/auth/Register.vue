<template>
  <div class="container">
    <div class="row" style="margin-top: 30px">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h4>Register</h4>
          </div>
          <div class="card-body">
            <form @submit.prevent="register">
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" v-model="user.name" />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" v-model="user.email" />
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
                <button class="btn btn-primary" type="submit">Register</button>
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
  name: "register",
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    //Register method with axios post request
    register() {
      axios
        .post("/api/register", this.user)
        .then((response) => {
          alert(response.data.message);
          this.$router.push({ name: "login" });
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    },
  },
};
</script>
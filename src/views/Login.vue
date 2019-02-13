<template >
  <div>
    <b-container>
      <b-row style="padding-top:5%;">
        <b-col cols="3"></b-col>
        <b-col  cols="6" class="login">
          <b-row>
            <b-col cols="2"></b-col>
            <b-col   cols="8">
              <div class="picture" >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="64"
                  height="64"
                  viewBox="0 0 40 40"
                  style=" fill:#000000;"
                >
                  <g id="surface1">
                    <path
                      style=" fill:#DFF0FE;"
                      d="M 20 20.5 C 14.761719 20.5 10.5 16.238281 10.5 11 C 10.5 5.761719 14.761719 1.5 20 1.5 C 25.238281 1.5 29.5 5.761719 29.5 11 C 29.5 16.238281 25.238281 20.5 20 20.5 Z "
                    ></path>
                    <path
                      style=" fill:#4788C7;"
                      d="M 20 2 C 24.964844 2 29 6.035156 29 11 C 29 15.964844 24.964844 20 20 20 C 15.035156 20 11 15.964844 11 11 C 11 6.035156 15.035156 2 20 2 M 20 1 C 14.476563 1 10 5.476563 10 11 C 10 16.523438 14.476563 21 20 21 C 25.523438 21 30 16.523438 30 11 C 30 5.476563 25.523438 1 20 1 Z "
                    ></path>
                    <path
                      style=" fill:#B6DCFE;"
                      d="M 2.5 38.5 L 2.5 36.199219 C 2.5 28.59375 13.65625 25.710938 14.519531 25.5 L 25.480469 25.5 C 26.34375 25.710938 37.5 28.59375 37.5 36.199219 L 37.5 38.5 Z "
                    ></path>
                    <path
                      style=" fill:#4788C7;"
                      d="M 25.417969 26 C 26.570313 26.289063 37 29.105469 37 36.199219 L 37 38 L 3 38 L 3 36.199219 C 3 29.105469 13.429688 26.289063 14.582031 26 L 25.417969 26 M 25.539063 25 L 14.460938 25 C 14.460938 25 2 27.828125 2 36.199219 C 2 36.199219 2 37.40625 2 39 L 38 39 C 38 37.40625 38 36.199219 38 36.199219 C 38 27.828125 25.539063 25 25.539063 25 Z "
                    ></path>
                  </g>
                </svg>
              </div>
              <div style="padding-top:3%;">
                <b-form-input class="input" v-model="email" type="text" placeholder="Email"></b-form-input>
                <br>

                <b-form-input v-model="password" type="password" placeholder="Password"></b-form-input>
                <br>

                <b-button style="background-color:#63ace5;" @click="login" >Log In</b-button>
                <br>
              </div>

              <div style="padding-top:2%;">
                <p>You don't have an account ? You can
                  <router-link style="color: #adcbe3;" to="/sign-up">create one</router-link>
                </p>
              </div>
            </b-col>
            <b-col cols="2"></b-col>
          </b-row>
        </b-col>
        <b-col cols="3"></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.$router.replace("/");
          },
          err => {
            alert("Oops. " + err.message);
          }
        );
    }
  }
};
</script>

<style >
/* "scoped" attribute limit the CSS to this component only */
.login {
  background-color: #4b86b4;
  border-radius:5px;
}
body {
  background: #ebf2f7;
}
.picture{
padding-top:2%;
 display: inline-block;
}

</style>
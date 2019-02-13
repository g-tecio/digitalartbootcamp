<template>
  <div class="sign-up">
    <b-container>
      <b-row style="padding-top:5%;">
        <b-col cols="3"></b-col>
        <b-col cols="6" class="login">
          <b-row>
            <b-col cols="2"></b-col>
            <b-col cols="8">
              <div  style="padding-top:2%;">
                <div style="padding-top:3%;">
                  <p class="p-sign">Let's create a new account !</p>

                </div>
                
                <b-form-input class="input" v-model="email" type="text" placeholder="Email"></b-form-input>
                
                <br>
                <b-form-input v-model="password" type="password" placeholder="Password"></b-form-input>
                
                <br>
                <b-button style="background-color:#63ace5;" @click="signUp" >Sign Up</b-button>
                
                
              </div>
              <div style="padding-top:2%;">
                <span>or go back to
                  <router-link  to="/login" style="color: #adcbe3;">login</router-link>.
                </span>
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
  name: "signUp",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signUp: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.$router.replace("home");
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
.p-sign{
  
   font-size: 20px;
   color: #dddddd;
}
</style>
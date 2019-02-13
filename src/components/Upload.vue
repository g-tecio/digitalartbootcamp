<template>
  <div>
    <b-container>
      <b-row>
        <b-col cols="2"></b-col>
        <b-col
          cols="8"
          style="background-color: white; box-shadow: 0 4px 8px 0 rgba(99, 172, 229, 0.2), 0 6px 20px 0 rgba(99, 172, 229, 0.19); padding-top:2%;"
        >
          <div class="inFile">
            <br>

            <progress :value="uploadValue" max="100" id="uploader">0%</progress>
            <br>

            <div class="fileUpload btn btn-primary fUp">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="50"
                  height="50"
                  viewBox="0 0 224 224"
                  style=" fill:#000000;"
                >
                  <g
                    fill="none"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                    style="mix-blend-mode: normal"
                  >
                    <path d="M0,224v-224h224v224z" fill="none"></path>
                    <g fill="#ffffff">
                      <g id="surface1">
                        <path
                          d="M112,49c-18.53906,0 -34.64453,8.66797 -46.15625,21.4375c-0.95703,-0.10937 -1.80468,-0.4375 -2.84375,-0.4375c-15.39453,0 -28,12.60547 -28,28c-12.11328,7.38282 -21,19.85157 -21,35c0,23.10547 18.89453,42 42,42h35v-14h-35c-15.53125,0 -28,-12.46875 -28,-28c0,-11.62109 7.05469,-21.54687 17.0625,-25.8125l4.8125,-1.96875l-0.65625,-5.25c-0.13672,-1.14843 -0.21875,-1.80468 -0.21875,-1.96875c0,-7.82031 6.17969,-14 14,-14c0.98438,0 2.07813,0.13672 3.28125,0.4375l4.375,1.09375l2.625,-3.5c8.96875,-11.51172 22.96875,-19.03125 38.71875,-19.03125c22.94141,0 42.08203,15.77734 47.46875,36.96875l1.3125,5.46875l5.90625,-0.21875c1.47657,-0.08203 1.80469,-0.21875 1.3125,-0.21875c15.53125,0 28,12.46875 28,28c0,15.53125 -12.46875,28 -28,28h-35v14h35c23.10547,0 42,-18.89453 42,-42c0,-22.09375 -17.41797,-39.78516 -39.15625,-41.34375c-8.55859,-24.63672 -31.36328,-42.65625 -58.84375,-42.65625zM112,105l-28,28h21v56h14v-56h21z"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg> Bowse
              </span>
              <input id="uploadBtn" type="file" class="upload" name="file" @change="onFileSelected">
            </div>
          </div>

          <b-row>
            <b-col cols="6">
              <br>
              <p>Image name</p>

              <b-form-input type="text" @change="setTitle"></b-form-input>
              <br>
              <p>Description</p>
              <b-form-input type="text" @change="setDescription"></b-form-input>
              <br>
            
              <div class="row">
                        <div class="col-sm-4">
                          <div class="form-group">
                            
                            <div class="input-group">
                              <label id="Price">
                              Price
                              
                            </label>
                              <input type="number" class="form-control" placeholder="$" name>
                              
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group">
                            
                            <label id="Category">
                             Category
                              
                            </label>
                             <b-form-select v-model="selected" :options="options"  />
                          </div>
                          <!-- form-group.// -->
                        </div>
                      </div>
              
              

              <b-button @click="onUpload" style="background-color:#63ace5;">Upload</b-button>
            </b-col>
            <b-col cols="6" style="padding-top:1%;">
              <img width="290" :src="this.picture">
            </b-col>
          </b-row>

          <br>
        </b-col>
        <b-col cols="2"></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import firebase from "firebase";
import "firebase/storage";

export default {
  name: "upload",
  data() {
    return {
      selectedFile: null,
      uploadValue: 0,
      picture: null,

      imgtitle: "default",
      imgdescription: "a nice photo",
      selected: null,
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'Abstract' },
        { value: 'b', text: 'Animals' },
        { value: 'c', text: 'Art' },
        { value: 'b', text: 'Nature' },
        { value: 'e', text: 'Food' },
        { value: 'f', text: 'People' }
      ]
    };
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    },

    setTitle: function(event) {
      this.imgtitle = event.target.value;
    },

    setDescription: function(event) {
      this.imgdescription = event.target.value;
    },

    onFileSelected: function(event) {
      this.selectedFile = event.target.files[0];
    },

    onUpload: function() {
      const userId = firebase.auth().currentUser.uid;
      const storageRef = firebase
        .storage()
        .ref(`/img/${userId}/${this.imgtitle}`);
      const task = storageRef.put(this.selectedFile);
      task.on(
        "state_changed",
        snapshot => {
          let percentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          this.uploadValue = percentage;
        },
        error => {
          console.log(error_message);
        },
        () => {
          this.uploadValue = 100;
          task.snapshot.ref.getDownloadURL().then(url => {
            this.picture = url;
            console.log(this.picture);
          });
        }
      );
    }
  }
};
</script>

<style >
.box__dragndrop,
.box__uploading,
.box__success,
.box__error {
  display: none;
}

.box.has-advanced-upload {
  background-color: white;
  outline: 2px dashed black;
  outline-offset: -10px;
}
.box.has-advanced-upload .box__dragndrop {
  display: inline;
}
.inFile {
  border-style: dashed;
  border-width: 2px;
  border-color: #4b86b4;
  border-radius: 5px;
}
p {
  text-align: left;
}

body {
  background: #ebf2f7;
}

.fUp {
  height: 20%;
  background-color: #63ace5;
  color: white;
}

.fileUpload {
  position: relative;
  overflow: hidden;
  margin: 10px;
}
.fileUpload input.upload {
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  padding: 0;
  font-size: 20px;
  cursor: pointer;
  opacity: 0;
  filter: alpha(opacity=0);
}
</style>
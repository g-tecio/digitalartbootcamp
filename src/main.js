import Vue from 'vue';
import './plugins/vuetify'
import firebase from 'firebase';
import App from './App.vue';
import router from './router';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './plugins/vuetify'
import { Carousel } from 'bootstrap-vue/es/components';
Vue.use(Carousel);
import Vuetify from 'vuetify'
Vue.use(Vuetify);
import 'vuetify/dist/vuetify.min.css'


Vue.use(BootstrapVue);

Vue.config.productionTip = false;

let app = '';
const config = {
	apiKey: "AIzaSyBBJe3dxiARWLHSUGdPe4GhqJWCv9Jq6ZE",
	authDomain: "imgfix-bba4f.firebaseapp.com",
	databaseURL: "https://imgfix-bba4f.firebaseio.com",
	projectId: "imgfix-bba4f",
	storageBucket: "imgfix-bba4f.appspot.com",
	messagingSenderId: "809527053147"
};

firebase.initializeApp(config);

var storage = firebase.storage();

firebase.auth().onAuthStateChanged(() => {
	if (!app) {
		/* eslint-disable no-new */
		app = new Vue({
			router,
			render: h => h(App)
		}).$mount('#app');
	}
});
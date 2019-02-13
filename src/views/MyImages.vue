<template>
	<div class="myimages">
		<HelloWorld msg="Welcome to Your Vue.js App"/>
		<h1>Here are your images</h1>
		<MyImageViewer></MyImageViewer>
		<button @click="logout">Logout</button>
	</div>
</template>

<script>
	import firebase from 'firebase';
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import MyImageViewer from '@/components/MyImageViewer.vue'

export default {
	name: 'myimages',
	components: {
		HelloWorld,
		MyImageViewer
	},
	methods: {
		logout: function() {
			firebase.auth().signOut().then(() => {
				this.$router.replace('login')
			})
		}
	}
}
</script>
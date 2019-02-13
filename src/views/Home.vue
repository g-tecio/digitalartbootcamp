<template>
	<div class="home">
		<HelloWorld msg="Welcome to Your Vue.js App"/>
		<DragFile></DragFile>
		<button @click="logout">Logout</button>
	</div>
</template>

<script>
	import firebase from 'firebase';
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import DragFile from '@/components/Upload.vue'

export default {
	name: 'home',
	components: {
		HelloWorld,
		DragFile
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

<style>

</style>

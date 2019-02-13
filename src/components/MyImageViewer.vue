<template>
	<div class="myimageviewer">
		<h2>Photos....</h2><br>
		<img :src="this.picture">
		<br>
		<button @click="loadUserImages"> Load photo</button>
	</div>
</template>

<script>
	import firebase from 'firebase';

	export default{
		name: 'myimageviewer',
		data(){
			return{
				picture: null
			}
		},
		methods: {
			logout: function() {
				firebase.auth().signOut().then(() => {
					this.$router.replace('login')
				})
			},

			loadUserImages: function() {

				this.picture = "https://storage.googleapis.com/imgfix-bba4f.appspot.com/img%2FANFMLC7oPkXDu8oTjiZklw6a2eJ3%2Fthumb_car5?GoogleAccessId=imgfix-bba4f%40appspot.gserviceaccount.com&Expires=16730323200&Signature=G2X23T%2FzahAZYLMaqSl2h%2BqBgUMCi7PJBy8pXT3352juoEogX%2BNiX5wyFkI46UZhUmr4upNDmTwAqSN7LkFJ6VPDuiqZE15hHozo3gqiJVkResqWOqSpKpbwE%2Fni6xH2YI6VMEqqEhpj0uylnzY5Ez6bMDWM4%2Fembab5O3uxuIKIWQKo%2BGB5pWqzUPTg9dF1eTNPqR1HpYuoFisNRxgxmSfCXy%2BeyZJDLssIMmsdgPJDDFQB7RlvNFQ48jLGjmrFyfT3cmr2FGVsV6Ph08InptArSiYo7op%2Fr6%2F4l7mw1N2ymYmqAbCs8oczjv6MpkwLBlxL194ql3fgPylV5KPyxA%3D%3D";
			}
		}
	}
	</script>

<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
	import Swiper from 'swiper';
	import '@/assets/css/iconfont.css';
	import Flexible from '@/assets/js/flexible.js';
	// import Flexible from '@/assets/flexible.js';
export default{
 data() {
        return {
            imageList: []
        };
    },
		created(){
		/* var value1 = localStorage.getItem('keyName');
		this.$store.state.token = value1; //VUEX
		console.log(this.$store.state.token)
		if(this.$store.state.token){
			this.$router.push({
		path: '/nopwd',
		query: {
			}
			});
		} */
		
		},
		methods:{
		}
	
}
</script>

<style>
	
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*{
	padding: 0;
	margin: 0;
}
.fixed{
	position: fixed;
}
.tc{
	text-align: center;
}
ul li{
	list-style: none;
}
a{
	text-decoration: none;
	color: #000;
}
</style>

const { createApp } = Vue;

createApp({
  data() {
    return{
      title:'Email List'
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail'
    }
  },

  methods:{
    getApi(){
      axios.get(this.apiUrl)
      .then( res => {
        console.log(res);
      })
    }
  },
  mounted() {
    this.getApi()
  },
}).mount('#app')
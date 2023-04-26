const { createApp } = Vue;

createApp({
  data() {
    return {
      title: 'Email List',
      api: 'https://flynn.boolean.careers/exercises/api/random/mail',
      email:'',
      loading: false
    }
  },
  methods:{
    getApi(){
      axios.get(this.api)
      .then( res => {
        console.log(res.data.response);
        this.email = res.data.response;
        this.loading = true
      } )
    }
  },
  mounted() {
    this.getApi()
  },
}).mount('#app')
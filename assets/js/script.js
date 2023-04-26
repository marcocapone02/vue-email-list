const { createApp } = Vue;

createApp({
  data() {
    return {
      title: 'Email List',
      api: 'https://flynn.boolean.careers/exercises/api/random/mail',
      emails: [],
      limit: 150
    }
  },
  methods:{
    getApi(){
      axios.get(this.api)
      .then( res => {
        this.emails.push(res.data.response);
        console.log(this.emails);
      } )
    }
  },
  mounted() {
    for (let i = 0; i < this.limit; i++){
      this.getApi()
    }
  },
}).mount('#app')
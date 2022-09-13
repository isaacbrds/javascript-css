<template>
  <div class="hello">
    <form class="form">
      <p>
        <input 
        type="text"
        placeholder="Insira o título da palestra"
        class="form-control" v-model="artigo.title">
      </p>
      <p>
        <input 
        type="text"
        placeholder="Insira o nome do palestrante"
        class="form-control" 
        v-model="artigo.attendee">
      </p>
      <p>
        <input 
        type="text"
        placeholder="Insira o horário da palestra"
        class="form-control"
        v-model="artigo.start_time">
      </p>
      <input type="hidden" v-model="artigo.id" />
      <p>
        <button 
        class="btn btn-primary" 
        v-on:click= "cadastrarArtigos">
          Cadastrar
        </button>
      </p>
    </form>
    <div class="card" >
      <div class="post" v-for="artigo in artigos" v-bind:key="artigo.id">
        <h3>{{artigo.id}}</h3>
        <p>{{artigo.title}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArtigosComponentes',
  data(){
    return{
      artigos: [],
      artigo: {
        id: '',
        title: '',
        attendee:'',
        start_time: '',
        session_id: 1
      }
    }
  },
  methods:{
    fetchArtigos(){
      fetch('http://localhost:3000/api/v1/lectures')
      .then(res=>res.json())
      .then(res=>{
        this.artigos = res.lectures
        console.log(res.lectures[0])
      })
      .catch(err=>console.log(err));
    },
    cadastrarArtigos(){
      if(this.artigo.title == ''){
      alert('Preencha o titulo')
      return
    }
    fetch('http://localhost:3000/api/v1/lectures',{
      method: 'POST',
      body: JSON.stringify(this.artigo),
      headers: {
        'content-type':'application/json'
      }
    })
    .then(res=>res.json())
    alert('Dados cadastrados com sucesso!')
    this.fetchArtigos()
    this.artigo.id = '',
    this.artigo.title = '',
    this.artigo.attendee = '',
    this.artigo.start_time = ''
    }
  },
  created(){
    console.log(this.fetchArtigos());
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

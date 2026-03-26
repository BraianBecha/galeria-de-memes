

<template>
  <navbar/>
 <saludo  texto-1="Bienvenidos al volquete de memes" texto-2="Todo se descarta" texto-3="¡Llevate lo que quieras!"/>
  <main>

 

 <h1 v-if="this.flag"> texto de prueba </h1>
  

  <div  v-if = "!islate">
     <timer @flag="changeFlag" @time-state="receiveIsLate" texto-1="Temática: Memes antigüos" texto-2="Estas imágenes se trasladarán a los vertederos del olvido en"  :tiempofinalsetprop ="tiempofinal"/> 

   

   <img-container :imgSrc = this.unlinkfoto />

   </div>
 
    <div v-else >
    <mensaje-de-fin mensaje1="Se terminó el tiempo" mensaje2="¡Gracias por participar!" mensaje3="---"/>
    </div>

    
  </main>

  <footer>
    <footer-component/>


  </footer>
</template>

<style scoped> 

@import url('../src/assets/main.css');
body{
  
background-color: linear-gradient(90deg, rgb(204, 197, 197) 0%, rgba(255, 248, 248, 1) 50%, rgb(241, 223, 211) 100%);
  
}
main{
  margin-top: 10rem;
}
</style >
<script>


export default {
  
  data() {
    return {
      islate : false,
      unlinkfoto : "",
      tiempofinal:"2027-03-26T17:00:00",     
      valorprueba: Boolean(false),
      flag: false
      
    };
  },
  mounted(){
    this.enviarDatos();
   
  },
   methods:{
           receiveIsLate(valor) { this.islate = valor; },
           changeFlag(valor){  this.islate = valor;},  
    
},


  

};
</script>
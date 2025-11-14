

<template>
  <navbar/>
 <saludo  texto-1="Bienvenidos al volquete de memes" texto-2="Todo se descarta" texto-3="¡Llevate lo que quieras!"/>
  <main>

 

 <h1 v-if="this.flag"> texto de prueba </h1>
  

  <div  v-if = "!islate">
     <timer @flag="changeFlag" @time-state="receiveIsLate" texto-1="Temática: Crítica social" texto-2="Estas imágenes se trasladarán a los vertederos del olvido en"  :tiempofinalsetprop ="this.tiempofinal"/> 

   

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
import { onMounted } from 'vue';
import { ref } from 'vue';
export default {
  
  data() {
    return {
      unlinkfoto : "",
      tiempofinal:"2025-11-14T12:58:00",     
      valorprueba: Boolean(false),
      flag: false
      
    };
  },
  mounted(){
    
   
  },
   methods:{
changeFlag(valor){
  this.islate = valor;
  console.log("llamada a changeFlag  " + this.flag );
    },



  
},
setup() {

 let islate = ref(false);
 function receiveIsLate(valor){
    
   islate.value = valor;
   
    //console.log("llamada a receiveIsLate  " + islate.value );
   };
   
   


    const enviarDatos = async () => {
      console.log('Enviando datos al servidor...')

       const fecha = new Date();
       const offsetMs = fecha.getTimezoneOffset() * 60 * 1000;
       const fechaLocal = new Date(fecha.getTime() - offsetMs);
       const fechaISOArgentina = fechaLocal.toISOString().slice(0, -1); 
       
      const payload = {
       fecha: fechaISOArgentina,
       accion: `Ingreso`
      }

      try {
        const respuesta = await fetch('https://hook.us2.make.com/msk1ra5ipt93i0ii6b7w4539ifeqhzey', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'          },
          body: JSON.stringify(payload)
        })

        if (!respuesta.ok) {
          throw new Error(`Error HTTP: ${respuesta.status}`)
        }

        const texto = await respuesta.text()
        console.log('Respuesta del servidor (texto):', texto)
         console.log('Payload enviado:', JSON.stringify(payload));

      } catch (error) {
        console.error('Error al enviar la solicitud:', error)
      }
    }

    onMounted(() => {
      enviarDatos() 
    })

     return {
    islate,
    receiveIsLate,
    enviarDatos
    }
    
  }
  

};
</script>
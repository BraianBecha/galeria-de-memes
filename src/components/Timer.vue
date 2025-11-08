<template>
  <div class="timer-container">
    

    <div class="timer-timer">

    <div class="img-container">  
<!-- 
<img class="img-timer" src="../../public/reloj-icono.png" alt="ícono de reloj de arena" />
-->
<img class="img-timer" src="../assets/camion.png" alt="ícono de reloj de arena" />

</div>


   <h1 id="texto1"> {{ texto1 }} </h1>   
    <h3 id="texto2"> {{ texto2 }} : </h3>
    <h3 id="tiempo"> {{ this.tiemporestantedisplay }} </h3>

<!-- 
<button @click="changeFlag"> Simulate Timeout </button>
-->

    </div>

  </div>
</template>

<script>
import { defineEmits } from 'vue';

  export default {
    props: [
      'texto1',
      'texto2',
      'tiempofinalsetprop'
          ],

    data(){
      return{
        
         tiemporestantedisplay:'',
         tiempoactual: new Date().getTime(),
         tiempofinalset:new Date(this.tiempofinalsetprop).getTime(),
         tiemporestante : new Date().getTime(),
         timer : null ,
         itslate: false
     }
   
    },

    mounted(){
      this.ticTac();
      this.timer = setInterval(this.ticTac, 1000)
        },  
    beforeUnmount() {
    clearInterval(this.timer);
  },

    watch: {   

    },

    methods:{
ticTac(){
  this.$emit('update:tiemporestantedisplay', this.tiemporestantedisplay);
console.log("ticTac() llamado");
 this.tiempoactual = new Date().getTime();   
this.tiemporestante = this.tiempofinalset - this.tiempoactual;
if(this.tiemporestante < 0){
  this.itslate= true;
 
}else{
  this.itslate= false;

}
this.$emit('time-state', this.itslate)
this.tiemporestantedisplay= this.traducirHora(this.tiemporestante);
},


traducirHora(date){
  const days = Math.floor(date / (1000 * 60 * 60 * 24));
      const hours = Math.floor((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((date % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((date % (1000 * 60)) / 1000);
let answer= `${days}d ${hours}h ${minutes}m ${seconds}s`;
return answer;
                },

                
    changeFlag(){
      this.$emit('time-state', !this.itslate)
                  },

     computed: {

      /*
    computedValue: {
      get() {
        return this.tiemporestantedisplay;
      },
      set(newValue) {
        this.$emit('update:modelValue', this.tiemporestantedisplay);
      }
    }*/
  }

  }
  }

</script>

<style>
 @import '../assets/main.css';
.img-timer{
margin: auto;
     width: 100%;
     height: 100%;
     max-width: 25rem;
     object-fit: scale-down;
    border-radius: 1rem;
   

}

.img-container{
  display: flex;
  justify-content: center;
  
}


.timer-container {
  width: 100%;  
  display: block;
  place-items: center;
  
}

.timer-timer{
 
border: 2px solid var(--color-dark-3);
  padding: 2rem;
  margin: 10px;
  border-radius: 1.5rem;
  max-width: fit-content;
   background-color: var(--color-3);
}

#tiempo{
    display: inline;
    align-content:  center;
    font-size: 2rem;
    color: var(--color-purpura);
    background-color: var(--color-4);
    padding: 1rem;
    margin: 2rem;
    border-radius: 0.25rem;
}


@media (max-width: 400px) {
  .timer-container {
    position: relative  ;
        font-size: 1rem;
        margin-top: 5rem;
        margin-bottom: 5rem;
    }

    #texto1{
        font-size: 1.3rem;
    } 
    #texto2{
        font-size: 0.7rem;
    }
    #tiempo{
        font-size: 1rem;
         padding: 0.5rem;
         margin: 0.3rem;
    }
    .timer-timer {
      margin: 0;
      padding: 0.7rem;
    }
}


@media (min-width: 401px) and (max-width: 700px) {
    .timer-container {
        font-size: 1rem;
        margin-top: 3rem;
    }

    #texto1{
        font-size: 1rem;
    } 
    #texto2{
        font-size: 0.6rem;
    }
    #tiempo{
        font-size: 0.8rem;
         padding: 0.5rem;
         margin: 0.3rem;
    }
    .timer-timer {
      margin: 0;
      padding: 0.7rem;
    }


    
}
</style>
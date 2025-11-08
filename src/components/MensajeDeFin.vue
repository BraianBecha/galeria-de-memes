<template>
    <div class="msj-container">
      <h1 class="msj"> {{ mensaje1 }}  

      </h1>
      <img :src="img"  />
      <h2 class="msj"> {{ mensaje2 }} 
         </h2>
      <p class="msj"> {{ mensaje3 }} 
         </p>
      
      </div>
</template>
<script>    

export default {
    props: [ 
        'mensaje1',
        'mensaje2',
        'mensaje3',
        'img'     
    ],
    data    (){

        return{
                   
        }
    
    }
  
};

</script>

<style scoped>
@import url('../assets/main.css');

.msj {
    /* font-size: 1.5rem;  */
    text-align: center;
    margin: 2rem;
    color: var(--color-dark);
  
}

.msj-container{
    width: 100%;
    margin-top: 10rem;
    margin-bottom: 40rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--color-dark-3);

}

</style>
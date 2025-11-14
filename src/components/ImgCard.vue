<template>

             <div class="card" >                
                <div class="card-front">
                    <div class="card-img">
                        <img :src = this.imgSrc  alt="project-Img">                        
                       
                    </div>                     
                    <div class="card-description">

                         <p> {{ description }}
                            
          <br>          
                </p>                      
                    </div> 
                   
                       
                   <!--  <div class="card-tools">   <a  :href = this.imgSrc download @click="enviarDescarga">   Descargar  </a> </div>   -->
                     <button class="card-tools" @click="descargarImagen">Descargar imagen</button>
                   
              
                </div>
                 <div class="contexto">                   
                </div>
            </div> 




</template>


<script>

export default {
    props: [
        'description',
        'imgSrc'       
    ],
    data    (){
        return{
                   
        }
    
    },
    methods:
    {
        descargarImagen(){
            console.log('Descarga iniciada');
            this.enviarDescarga();
            const link = document.createElement('a')
            link.href = this.imgSrc
            link.download = this.imgSrc.substring(this.imgSrc.lastIndexOf('/') + 1) 
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        },
     
    async enviarDescarga(){
      console.log('Enviando datos de descarga al servidor...')
       
      
       const fecha = new Date();
       const offsetMs = fecha.getTimezoneOffset() * 60 * 1000;
       const fechaLocal = new Date(fecha.getTime() - offsetMs);
       const fechaISOArgentina = fechaLocal.toISOString().slice(0, -1); 
       
      const payload = {
       fecha: fechaISOArgentina,
       accion: `Descarga de imagen ${this.imgSrc}`
      }

      try {
        const respuesta = await fetch('https://hook.us2.make.com/msk1ra5ipt93i0ii6b7w4539ifeqhzey', {
          method: 'POST',
             headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
         
        })

        if (!respuesta.ok) {
          throw new Error(`Error HTTP: ${respuesta.status}`)
        }

        const texto = await respuesta.text()
console.log('Respuesta del servidor (texto):', texto)

      } catch (error) {
        console.error('Error al enviar la solicitud:', error)
      }

      
    }  
    }
  
};

</script>


<style scoped>
@import url('../assets/main.css');



.card{
   display: grid;
    grid-template-columns: auto;
    width: var(--card-width);
    height: var(--card-height);   
    margin: 1rem;
    position: relative;
    transition: transform 0.3s;
    transform-style: preserve-3d;
    cursor: pointer;
    border: solid, 2px, var(--color-dark-3);
    border-radius: 1rem;    
}


.card-front{
    display: grid;
    grid-template-rows: repeat(13, 1fr);
}
.card-front .card-img{
    overflow: overlay;
    display: grid;
    grid-row-start: 1;
    grid-row-end: 11;

}

.card-description{

    grid-row-start: 11;
    grid-row-end: 13;    
    flex-wrap: wrap;
    align-items: center;
    margin:0.5rem;

}



 .card-front {
    position: absolute;
    width: 100%;
    height: 100%;
    font-size: small;
    background-color: var(--color-4);
    border-radius: 1.1rem;
    list-style: none;
    overflow: hidden;
}


.card-title{
    font-size: 1rem;
    padding: 0.3rem;
    display: flex ;
    justify-content: center;
    border-bottom: 1px solid var(--color-dark-3);
}

.card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
}

.card-tools{

    grid-row-start: 13;
    grid-row-end: 14;
     display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: center;

}

.card-tools {
background-color: var(--color-purpura); ;
    color: beige;
    font-size: 1rem ;
    margin: 0.2rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
}

.card-tools > div:hover{
    background-color: var(--color-dark-3);
    cursor: pointer;
}
.card-tools a{
    text-decoration: none !important;
    all:unset;
        margin: 0.2rem;
    padding: 1rem;
}




@media (max-width: 700px) {

    .card-img img {
        height: auto;
        object-fit: contain;
    }

    .card{
        margin:0;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        max-height: 300px;
    }


}

</style>
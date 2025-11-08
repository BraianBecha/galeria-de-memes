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
                    <div class="card-tools">
                       
                    <div>    <a  :href = this.imgSrc download>   Descargar  </a> </div>  
                     
                    </div> 
              
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

.card-tools > div{
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
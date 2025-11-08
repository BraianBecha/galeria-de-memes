<template >
    <div class="saludo-container">
       
     <div class="saludo">
        <img class="banner" src="../assets/oxido.jpg" alt="banner imagen" />
        <h1> {{ texto1 }} </h1>
        <h3> {{ texto2 }} </h3>
        <h5> {{ texto3 }} </h5>
        </div>
</div>
</template> 
<script>
    export default {
        props: [
            'texto1',
            'texto2',
            'texto3'
        ],
        data(){
            return{
               
            }
        },
        mounted(){
           
        }
        
    
    

}
    </script>
    <style>

.saludo {
    color: var(--color-4);
    font-size: 1.3rem;
    margin: 1.5rem;
    margin-top: 5rem;
    text-shadow: 2px 2px 4px var(--color-dark);
}
h1,h2,h3{
    margin: 1rem;
    
}
.saludo-container{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

}   
.banner{
    width: 100%;
    max-height: 33rem;
    min-height: 550px;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0.8;
}

@media (max-width: 400px) {
   h1{
        font-size: 1.3rem;
    }
    h2,h3{
        font-size: 1rem;
    }
     .saludo {
        font-size: 1rem;
        margin-top: 2rem;
    }
    .banner{
        min-height: 400px;
    
}
}

@media (min-width: 401px) and (max-width: 700px) {
    .saludo {
        font-size: 1rem;
        margin-top: 3rem;
    }
    .banner{
        min-height: 600px;
    }
}
</style>

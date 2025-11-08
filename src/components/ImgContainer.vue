<template>

    
    <div class="card-container" >               

         <img-card v-for="(uri, i) in uris" :key = "i" :imgSrc = "uri" description = "Sin descripción" />  

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
           
            imagenes : {},
            uris : []
           
        }
    
    },
    mounted(){
        console.log("mounted");
        this.cargarImagenes();
        console.log("uris cargadas uris :", this.uris); 
        console.log("imagenes cargadas en imgcontainer.vue :", this.imagenes); 
        console.log("target :", this.imagenes.target); 
       
    },
    methods: {

        cargarImagenes(){

            console.log("cargarImagenes()");
             /* this.imagenes = import.meta.glob('../assets/marte-1/*.{jpg,png,jpeg,gif}', { eager: true }); */
             this.imagenes = import.meta.glob('../assets/memes1/*.{jpg,png,jpeg,gif}', { eager: true });
             this.uris = Object.values(this.imagenes).map(modulo => modulo.default);

                  for (const path in this.uris) {  
                     console.log("modulo cargado:");
                    console.log(this.uris[path]);                  
                                                }
}
       
    }
    
}
</script>

<style scoped>

.card-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;  
    perspective: 1000px;        
}


</style>
<template>
    <header>
            
          
               <div>
           
<!-- 
                <div id="menu-p">
           
                    <p  @click="dropDown"> Menú </p>

              </div>
           
              <div v-if="!this.flag" id="dropdown-m">

            <ol>

                <li  @click="opcion1" > Qué es esto </li>
                <li  @click="opcion2" > Contacto </li>

            </ol>

           </div>

           -->

           </div>
           

           <h4 id="nav-title"> Amazing Flash Gallery  </h4>     

        
         <img   class="img-nav" src="../assets/favicon3.png" alt="ícono de perfil cohete espacial" />


   </header>
   
</template>
 
<script>

    export default {       
            data() {
                return {
                    flag: true                    
                };
            } ,
            methods: {
                
 dropDown(){

   this.flag = !this.flag;
    console.log("llamada a dropDown  " + this.flag);
  
},
opcion1(){
    console.log("opción 1");    
    this.dropDown();

 
            }  ,
            
 opcion2(){
 console.log("opción 2");    
 this.dropDown();   
        
     
  }       
    }

 }

</script>

<style scoped>


@import url('../src/assets/main.css');
@import url('../src/assets/base.css');
#menu-p >p{
   
    font-size: 0.8rem;
    border-radius: 0.5rem;
    margin: 0.5rem;
    padding: 1rem;
}
#menu-p :hover{
background-color: var(--color-purpura);
}
#dropdown-m{
    
    z-index: 2;
    position: relative;
    background-color: var(--color-1-1);
    border: solid 2px var(--color-dark);
    border-radius: 0.8rem;
    padding: 1rem;
}

#nav-title{
    margin-right: auto;
    
    margin: 2rem;
    /* margin-left: 6rem;  */
    font-style:italic; 
    font-size: 1.5rem;
    color: var(--color-3);
}


.img-nav{
        width: 5rem;
    height: 5rem;
}


#dropdown-m > ol > li{
   list-style: none;
   font-size: 1rem;
   padding: 0.5rem;
   border-radius: 1rem;
   
}

#dropdown-m  li:hover{
    background-color: var(--color-purpura);
}

header{
    max-height: 9rem;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    background: linear-gradient(to top, var(--color-2), var(--color-1-1 ));
    /*background: linear-gradient(to left, var(--color-2), var(--color-1 ),var(--color-2));*/
    color: var(--color-4);
    padding: 1rem;
   
    
    
}

@media (max-width: 400px) {
    #app{
        padding: 0;
    }
  #nav-title{
         margin: 0;
        font-size: 0.8rem;
        
    }
    .img-nav{
        width: 3rem;
        height: 3rem;
    }
    
}


@media (min-width: 401px) and (max-width: 700px) {

    #nav-title{
        font-size: 1rem;
        margin: 1rem;
    }
    .img-nav{
        width: 3rem;
        height: 3rem;
    }


}



</style>
<template>
    <div class="container-fluid w-75">
        <HeaderComp />

        <div class="listado-libros mb-3 px-3 py-5 mb-3 border rounded">
            <div class="text-end">
                <router-link to="/" class="btn btn-primary btn-lg text-end">Regresar al Home</router-link>
            </div>
            <h2 class="text-uppercase text-start">Listado Libros</h2>

            <div class="container-libros">
                <div class="row row-cols-2 g-4">
                    <div v-for="libro in libros" :key="libro.id" class="col">
                        <div class="card text-white text-start bg-info">
                            <div class="card-header">{{ libro.titulo }}</div>
                            <div class="card-body pt-5">
                                <h5 class="card-title">{{ libro.autor }}</h5>
                                <p class="card-text">{{ libro.descripcion }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <FooterComp />

        <!-- <div class="row">
        <div class="logo col-4">Logo</div>
        <h1 class="text-uppercase col-8 bg-success text-start">Libreria imagina</h1>
      </div> -->
        <!-- <img alt="Vue logo" src="../assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    </div>
</template>

<script>
import axios from 'axios';
import FooterComp from '@/components/FooterComp.vue'
import HeaderComp from '@/components/HeaderComp.vue'

export default {
    name: 'LibrosView',
    data() {
        return {
            libros: []
        }
    },
    mounted() {
        (async () => {
            try {
                const { data } = await axios("https://raw.githubusercontent.com/shaka0241/library_json/master/libros.json")
                console.log(data);
                this.libros = data.libros;
            } catch (error) {
                console.log(error);
            }
        })();
    },
    components: {
    FooterComp,
    HeaderComp
  }
}
</script>


<style scoped>
h1 {
    flex: 1;
}

ul {
    list-style: none
}

a {
    text-decoration: none;
}

.icon {
    width: 1rem;
    height: 1rem;
    display: flex;
}

.logo {
    width: 4rem;
    height: 4rem;
}
</style>
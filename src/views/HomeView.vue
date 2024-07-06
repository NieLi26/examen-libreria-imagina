<template>
  <div class="container-fluid w-75">
   <HeaderComp />

    <div class="proximos-eventos mb-3 p-3 mb-3 border border-black border-2 rounded">
      <h6 class="text-uppercase text-start">Proximos Eventos</h6>
      <div class="d-flex flex-column align-items-center gap-3">
        <div v-for="evento in eventos" :key="evento.id" class="card w-50">
          <div class="card-body">
            <div class="d-flex justify-content-between mb-2">
              <h5 class="card-title text-start">{{ evento.titulo }}</h5>
              <div class="d-flex flex-column border p-3 align-items-center gap-1">
                <svg width="20" height="20" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 511.996 511.996" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style="fill:#4DBF69;" d="M394.025,78.616H124.007c-11.809,0-21.382,9.573-21.382,21.382v381.883 c0,11.809,9.574,21.383,21.382,21.383h270.02c11.809,0,21.383-9.574,21.383-21.383V99.999 C415.408,88.189,405.835,78.616,394.025,78.616z"></path> <path style="opacity:0.2;fill:#333333;enable-background:new ;" d="M394.026,78.616h-270.02c-3.51,0-6.813,0.862-9.736,2.361 v365.965c0,24.634,20.042,44.676,44.675,44.676h254.101c1.499-2.922,2.361-6.225,2.361-9.736V99.999 C415.408,88.19,405.835,78.616,394.026,78.616z"></path> <path style="fill:#FFFFFF;" d="M428.966,43.676H158.947c-11.809,0-21.382,9.573-21.382,21.382v381.884 c0,11.809,9.574,21.383,21.382,21.383h270.02c11.809,0,21.383-9.574,21.383-21.383V65.058 C450.348,53.248,440.776,43.676,428.966,43.676z"></path> <path style="opacity:0.15;fill:#333333;enable-background:new ;" d="M438.702,46.037c-2.922-1.499-6.225-2.361-9.736-2.361 H158.947c-11.809,0-21.382,9.574-21.382,21.382v381.884c0,3.51,0.862,6.813,2.361,9.736h254.1c24.634,0,44.676-20.042,44.676-44.676 L438.702,46.037L438.702,46.037z"></path> <path style="fill:#4DBF69;" d="M394.025,8.735H124.007c-11.809,0-21.382,9.573-21.382,21.382v381.884 c0,11.809,9.574,21.383,21.382,21.383h270.02c11.809,0,21.383-9.574,21.383-21.383V30.118 C415.408,18.308,405.835,8.735,394.025,8.735z"></path> <path style="fill:#26150C;" d="M424.598,34.941h-4.823v-4.823C419.775,13.51,406.265,0,389.658,0H119.639 c-16.607,0-30.118,13.512-30.118,30.118v11.883h-1.062c-17.193,0-31.18,13.987-31.18,31.18s13.987,31.18,31.18,31.18h1.062v11.578 h-1.062c-17.193,0-31.18,13.988-31.18,31.18s13.987,31.18,31.18,31.18h1.062v11.579h-1.062c-17.193,0-31.18,13.988-31.18,31.18 s13.987,31.18,31.18,31.18h1.062v11.579h-1.062c-17.193,0-31.18,13.988-31.18,31.18c0,17.192,13.987,31.18,31.18,31.18h1.062v11.579 h-1.062c-17.193,0-31.18,13.987-31.18,31.18c0,17.193,13.987,31.18,31.18,31.18h1.062v11.883v69.881 c0,16.607,13.51,30.116,30.118,30.116h270.02c16.607,0,30.118-13.51,30.118-30.116v-4.824h4.823 c16.607,0,30.118-13.51,30.118-30.116V65.057C454.716,48.451,441.206,34.941,424.598,34.941z M89.521,382.647h-1.062 c-7.56,0-13.71-6.15-13.71-13.71c0-7.559,6.15-13.71,13.71-13.71h1.062C89.521,355.228,89.521,382.647,89.521,382.647z M89.521,308.709h-1.062c-7.56,0-13.71-6.15-13.71-13.71c0-7.56,6.15-13.71,13.71-13.71h1.062 C89.521,281.289,89.521,308.709,89.521,308.709z M89.521,234.768h-1.062c-7.56,0-13.71-6.15-13.71-13.71s6.15-13.71,13.71-13.71 h1.062C89.521,207.349,89.521,234.768,89.521,234.768z M89.521,160.829h-1.062c-7.56,0-13.71-6.15-13.71-13.71 s6.15-13.71,13.71-13.71h1.062C89.521,133.41,89.521,160.829,89.521,160.829z M89.521,86.89h-1.062c-7.56,0-13.71-6.15-13.71-13.71 c0-7.559,6.15-13.71,13.71-13.71h1.062C89.521,59.471,89.521,86.89,89.521,86.89z M106.992,355.228h11.395 c4.825,0,8.735-3.91,8.735-8.735s-3.91-8.735-8.735-8.735h-11.395v-56.469h11.395c4.825,0,8.735-3.91,8.735-8.735 c0-4.825-3.91-8.735-8.735-8.735h-11.395v-56.47h11.395c4.825,0,8.735-3.91,8.735-8.735s-3.91-8.735-8.735-8.735h-11.395V133.41 h11.395c4.825,0,8.735-3.91,8.735-8.735c0-4.825-3.91-8.735-8.735-8.735h-11.395V59.472h11.395c4.825,0,8.735-3.91,8.735-8.735 s-3.91-8.735-8.735-8.735h-11.395V30.118c0-6.974,5.674-12.647,12.647-12.647h270.02c6.974,0,12.647,5.673,12.647,12.647v13.558 v368.325c0,6.973-5.673,12.646-12.647,12.646H133.197h-13.558c-6.973,0-12.647-5.673-12.647-12.646V355.228z M402.305,481.882 c0,6.973-5.673,12.646-12.647,12.646H119.639c-6.973,0-12.647-5.673-12.647-12.646v-42.549c0.136,0.063,0.277,0.119,0.415,0.179 c0.266,0.119,0.532,0.236,0.802,0.347c0.206,0.085,0.413,0.165,0.623,0.246c0.271,0.105,0.545,0.207,0.821,0.304 c0.212,0.075,0.425,0.147,0.639,0.217c0.278,0.092,0.559,0.178,0.842,0.261c0.215,0.064,0.431,0.126,0.649,0.184 c0.288,0.078,0.578,0.149,0.869,0.219c0.217,0.051,0.433,0.104,0.651,0.15c0.299,0.064,0.601,0.121,0.903,0.176 c0.215,0.04,0.43,0.08,0.646,0.115c0.317,0.051,0.637,0.092,0.957,0.133c0.205,0.027,0.409,0.057,0.615,0.078 c0.356,0.038,0.716,0.064,1.076,0.09c0.174,0.012,0.346,0.03,0.521,0.04c0.536,0.028,1.076,0.044,1.619,0.044h4.823v4.824 c0,16.607,13.51,30.116,30.118,30.116h247.727v4.827H402.305z M437.246,446.942c0,6.973-5.673,12.646-12.647,12.646H411.04H154.58 c-6.973,0-12.647-5.673-12.647-12.646v-4.824h247.727c16.607,0,30.118-13.51,30.118-30.116V52.411h4.823 c6.974,0,12.647,5.673,12.647,12.646v381.885H437.246z"></path> </g></svg>
                <p class="m-0" >{{ evento.fecha }}</p>
                <p class="m-0" >{{ evento.hora }}</p>
              </div>
            </div>
            <!-- <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> -->
            <p class="card-text text-start">{{ evento.descripcion }}</p>
            <div class="d-flex gap-2 align-items-center">
              <!-- <img src="" alt=""> -->
              <svg width="40" height="40" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 511.996 511.996" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style="fill:#4DBF69;" d="M394.025,78.616H124.007c-11.809,0-21.382,9.573-21.382,21.382v381.883 c0,11.809,9.574,21.383,21.382,21.383h270.02c11.809,0,21.383-9.574,21.383-21.383V99.999 C415.408,88.189,405.835,78.616,394.025,78.616z"></path> <path style="opacity:0.2;fill:#333333;enable-background:new ;" d="M394.026,78.616h-270.02c-3.51,0-6.813,0.862-9.736,2.361 v365.965c0,24.634,20.042,44.676,44.675,44.676h254.101c1.499-2.922,2.361-6.225,2.361-9.736V99.999 C415.408,88.19,405.835,78.616,394.026,78.616z"></path> <path style="fill:#FFFFFF;" d="M428.966,43.676H158.947c-11.809,0-21.382,9.573-21.382,21.382v381.884 c0,11.809,9.574,21.383,21.382,21.383h270.02c11.809,0,21.383-9.574,21.383-21.383V65.058 C450.348,53.248,440.776,43.676,428.966,43.676z"></path> <path style="opacity:0.15;fill:#333333;enable-background:new ;" d="M438.702,46.037c-2.922-1.499-6.225-2.361-9.736-2.361 H158.947c-11.809,0-21.382,9.574-21.382,21.382v381.884c0,3.51,0.862,6.813,2.361,9.736h254.1c24.634,0,44.676-20.042,44.676-44.676 L438.702,46.037L438.702,46.037z"></path> <path style="fill:#4DBF69;" d="M394.025,8.735H124.007c-11.809,0-21.382,9.573-21.382,21.382v381.884 c0,11.809,9.574,21.383,21.382,21.383h270.02c11.809,0,21.383-9.574,21.383-21.383V30.118 C415.408,18.308,405.835,8.735,394.025,8.735z"></path> <path style="fill:#26150C;" d="M424.598,34.941h-4.823v-4.823C419.775,13.51,406.265,0,389.658,0H119.639 c-16.607,0-30.118,13.512-30.118,30.118v11.883h-1.062c-17.193,0-31.18,13.987-31.18,31.18s13.987,31.18,31.18,31.18h1.062v11.578 h-1.062c-17.193,0-31.18,13.988-31.18,31.18s13.987,31.18,31.18,31.18h1.062v11.579h-1.062c-17.193,0-31.18,13.988-31.18,31.18 s13.987,31.18,31.18,31.18h1.062v11.579h-1.062c-17.193,0-31.18,13.988-31.18,31.18c0,17.192,13.987,31.18,31.18,31.18h1.062v11.579 h-1.062c-17.193,0-31.18,13.987-31.18,31.18c0,17.193,13.987,31.18,31.18,31.18h1.062v11.883v69.881 c0,16.607,13.51,30.116,30.118,30.116h270.02c16.607,0,30.118-13.51,30.118-30.116v-4.824h4.823 c16.607,0,30.118-13.51,30.118-30.116V65.057C454.716,48.451,441.206,34.941,424.598,34.941z M89.521,382.647h-1.062 c-7.56,0-13.71-6.15-13.71-13.71c0-7.559,6.15-13.71,13.71-13.71h1.062C89.521,355.228,89.521,382.647,89.521,382.647z M89.521,308.709h-1.062c-7.56,0-13.71-6.15-13.71-13.71c0-7.56,6.15-13.71,13.71-13.71h1.062 C89.521,281.289,89.521,308.709,89.521,308.709z M89.521,234.768h-1.062c-7.56,0-13.71-6.15-13.71-13.71s6.15-13.71,13.71-13.71 h1.062C89.521,207.349,89.521,234.768,89.521,234.768z M89.521,160.829h-1.062c-7.56,0-13.71-6.15-13.71-13.71 s6.15-13.71,13.71-13.71h1.062C89.521,133.41,89.521,160.829,89.521,160.829z M89.521,86.89h-1.062c-7.56,0-13.71-6.15-13.71-13.71 c0-7.559,6.15-13.71,13.71-13.71h1.062C89.521,59.471,89.521,86.89,89.521,86.89z M106.992,355.228h11.395 c4.825,0,8.735-3.91,8.735-8.735s-3.91-8.735-8.735-8.735h-11.395v-56.469h11.395c4.825,0,8.735-3.91,8.735-8.735 c0-4.825-3.91-8.735-8.735-8.735h-11.395v-56.47h11.395c4.825,0,8.735-3.91,8.735-8.735s-3.91-8.735-8.735-8.735h-11.395V133.41 h11.395c4.825,0,8.735-3.91,8.735-8.735c0-4.825-3.91-8.735-8.735-8.735h-11.395V59.472h11.395c4.825,0,8.735-3.91,8.735-8.735 s-3.91-8.735-8.735-8.735h-11.395V30.118c0-6.974,5.674-12.647,12.647-12.647h270.02c6.974,0,12.647,5.673,12.647,12.647v13.558 v368.325c0,6.973-5.673,12.646-12.647,12.646H133.197h-13.558c-6.973,0-12.647-5.673-12.647-12.646V355.228z M402.305,481.882 c0,6.973-5.673,12.646-12.647,12.646H119.639c-6.973,0-12.647-5.673-12.647-12.646v-42.549c0.136,0.063,0.277,0.119,0.415,0.179 c0.266,0.119,0.532,0.236,0.802,0.347c0.206,0.085,0.413,0.165,0.623,0.246c0.271,0.105,0.545,0.207,0.821,0.304 c0.212,0.075,0.425,0.147,0.639,0.217c0.278,0.092,0.559,0.178,0.842,0.261c0.215,0.064,0.431,0.126,0.649,0.184 c0.288,0.078,0.578,0.149,0.869,0.219c0.217,0.051,0.433,0.104,0.651,0.15c0.299,0.064,0.601,0.121,0.903,0.176 c0.215,0.04,0.43,0.08,0.646,0.115c0.317,0.051,0.637,0.092,0.957,0.133c0.205,0.027,0.409,0.057,0.615,0.078 c0.356,0.038,0.716,0.064,1.076,0.09c0.174,0.012,0.346,0.03,0.521,0.04c0.536,0.028,1.076,0.044,1.619,0.044h4.823v4.824 c0,16.607,13.51,30.116,30.118,30.116h247.727v4.827H402.305z M437.246,446.942c0,6.973-5.673,12.646-12.647,12.646H411.04H154.58 c-6.973,0-12.647-5.673-12.647-12.646v-4.824h247.727c16.607,0,30.118-13.51,30.118-30.116V52.411h4.823 c6.974,0,12.647,5.673,12.647,12.646v381.885H437.246z"></path> </g></svg>
              <p class="mb-0" >{{ evento.ubicacion }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="promociones-activas mb-3 px-3 py-5 mb-3 border border-black border-2 rounded">
      <h6 class="text-uppercase text-start">Promociones Activas</h6>
      <div class="row row-cols-2 g-5">
        <div class="col" v-for="promocion in promociones" :key="promocion.id">
          <div  class="card text-start h-100">
            <h5 class="card-header">{{ promocion.titulo }}</h5>
            <div class="card-body">
              <h5 class="card-title">{{ promocion.validoHasta }}</h5>
              <p class="card-text">{{ promocion.descripcion }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="tematicas mb-3 px-3 py-5 mb-3 border border-black border-2 rounded">
      <h6 class="text-uppercase text-start">Tematicas</h6>
      <div class="d-flex flex-column gap-2">
        <div v-for="tematica in tematicas" :key="tematica.id" class="card text-start">
          <h5 class="card-header">{{ tematica.nombre }}</h5>
          <div class="card-body">
            <p class="card-text">{{ tematica.descripcion }}</p>
          </div>
        </div>

        <div class="card text-start">
          <h5 class="card-header">Titulo promocion</h5>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="tematicas mb-3 px-3 py-5 mb-3 border rounded bg-info">
      <h2 class="text-uppercase text-start">Listado de Libros</h2>
      <router-link to="/libros" class="btn btn-primary btn-lg text-uppercase mt-3">Ver listado de libros</router-link>
      <!-- <button class="btn btn-primary btn-lg text-uppercase mt-3">Ver listado de libros</button> -->
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

// @ is an alias to /src
import FooterComp from '@/components/FooterComp.vue'
import HeaderComp from '@/components/HeaderComp.vue'

export default {
  name: 'HomeView',
  data() {
    return {
      paginaInicio: {},
      eventos: [],
      promociones: [],
      tematicas: [],
      redesSociales: {},
      correo: "",
      direccion: "",
      numeros: ""
    }
  },
  // methods: {
    
  // },
  mounted() {
    ( async () => {
      try {
        const { data } = await axios("https://raw.githubusercontent.com/shaka0241/library_json/master/home.json")
        const { eventos, promociones, tematicasDestacadas, redesSociales, contacto } = data.paginaInicio;
        console.log(data);
        this.eventos = eventos;
        this.promociones = promociones;
        this.tematicas = tematicasDestacadas;
        this.redesSociales = redesSociales
        const { direccion, numerosTelefonicos, correoElectronico } = contacto;
        this.correo = correoElectronico;
        this.direccion = Object.values(direccion).join(", ");
        this.numeros = Object.values(numerosTelefonicos).join(", ");
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

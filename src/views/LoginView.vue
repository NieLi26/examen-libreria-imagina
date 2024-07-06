<template>
    <div class="container-fluid mt-5">
        <form @submit="onSubmit" class="form w-25 mx-auto border p-3 text-start">
            <h3>Login</h3>
            <hr>
            <div class="mb-3">
                <label for="username" class="form-label">Usuario</label>
                <input v-model="form.username" type="text" class="form-control" id="username">
            </div>

            <div class="mb-3">
                <label for="password" class="form-label">Contraseña</label>
                <input v-model="form.password" type="password" class="form-control" id="password">
            </div>

            <div class="text-center">
                <button type="submit" class="btn btn-primary btn-lg w-50">Login</button>
            </div>
            <hr class="my-5">
        </form>
    </div>
</template>

<script>
import axios from 'axios';



export default {
    name: 'LoginView',
    data() {
        return {
            credentials: {},
            form: {
                username: "",
                password: ""
            }
        }
    },
    methods: {
        async onSubmit(e) {
            e.preventDefault();
            const { username, password } = this.form;
            if ([username, password].includes("")) {
                alert("Todos los campos son obligatorios");
                return;
            }
            if (
                username !== this.credentials.username ||
                password !== this.credentials.password
            ) {
                alert("Credenciales incorrectas");
                return
            }

            this.$router.options.routes.forEach(route => {
                if (route.name == "home" || route.name == "libros") {
                    route.meta.login = false
                    return
                }
                route.meta.login = true
            });
            this.$router.push('/')

        }
    },
    mounted() {
        (async () => {
            try {
                const { data } = await axios("https://raw.githubusercontent.com/shaka0241/library_json/master/login.json")
                this.credentials = data.user;
            } catch (error) {
                console.log(error);
            }
        })();
    }
}
</script>
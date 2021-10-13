<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >


    <v-text-field
      v-model="correo"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>   

    <v-text-field
        v-model="password"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Normal with hint text"
        hint="At least 8 characters"
        counter
        @click:append="show1 = !show1"
    ></v-text-field>
    

    <v-btn
      block
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="ingresar"
    >
      INGRESO
    </v-btn>

    <v-btn
      block
      plain
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

    
  </v-form>
</template>



<script>
import axios from 'axios';

  export default {
    data: () => ({
      name: 'TheLogin',  
      mensaje: '',
      valid: true,  
      password : '',      
      correo: '',
      show1: false,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => (`The email and password you entered don't match`),
        },     
      
    }),

    methods: {
      ingresar () { // Va a realizar una peticion axios. Peticion http a nuestro Backend
        axios.post('http://localhost:3000/api/usuario/login', { // se envian dos parametros
            correo : this.correo,
            password : this.password
        })
        .then(respuesta => {
            return respuesta.data
        })
        .then(data =>{
            localStorage.setItem('token', data.tokenReturn) // Almacenamos el token en el local storage
            this.$router.push( {name : 'Admin'} ) //Agregamos, o lo mandamos a la vista del Admin
        })
        .catch(err =>{ // Hacemos un manejo de los errores, solamente imprimiendo en console
            this.mensaje = null;
            if([404,401].includes(err.response.status)){
                this.mensaje = "El correo o la contraseña son incorrectos"
                console.log(this.mensaje)
            }else{//en caso de error 500
                this.mensaje = "ocurrio un error interno"
                console.log(this.mensaje)
            }
        })
        
      },
      reset () {
        this.$refs.form.reset()
      },
      
    },
  }
</script>
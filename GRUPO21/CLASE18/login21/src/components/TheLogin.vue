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
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Contraseña"
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
    name: "TheLogin",
    data: () => ({
      mensaje : '',  
      password : '',  
      valid: true,
      correo: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      show1: false,
      rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => (`The email and password you entered don't match`),
        }
      
    }),

    methods: {
      ingresar () { // Va a realizar una petición axios. Una peticion http a nuestro Backend
        axios.post('http://localhost:3000/api/usuario/login', {
            correo : this.correo,
            password : this.password 
        })
        .then(respuesta => {  // Necesitamos que nos devuelva el data de la respuesta
            return respuesta.data
        } )
        .then( data => {
            localStorage.setItem('token', data.tokenReturn)//Almacenar el token en el localStorage
            this.$router.push({ name : 'Admin'}) // Agregamos, o lo mandamos a la vista del admin
        })
        .catch(err =>{
            this.mensaje = null;
            if([404, 401].includes(err.respuesta.status)){
                this.mensaje = 'El correo o la contraseña son incorrectos'
                console.log(this.mensaje)
            }else{
                this.mensaje = "Ocurrio un error interno"
                console.log(this.mensaje)
            }

        })




      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>
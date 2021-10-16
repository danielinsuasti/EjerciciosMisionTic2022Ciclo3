<template>
    <v-container>
        <v-data-table
            :headers="headers"
            :items="usuarios"
            sort-by="rol"
            class="elevation-1"
        >
            <template v-slot:top>
            <v-toolbar
                flat
            >
                <v-toolbar-title>
                  <h2>
                    Usuarios
                  </h2>                  
                </v-toolbar-title>


                <v-spacer></v-spacer>
                <v-dialog
                v-model="dialog"
                max-width="500px"
                >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    color="primary"
                    dark
                    class="mb-2"
                    v-bind="attrs"
                    v-on="on"
                    >
                    Crear Usuario
                    </v-btn>
                </template>
                <v-card>
                    <v-card-title>
                    <span class="text-h5">{{ formTitle }}</span>
                    </v-card-title>

                    <v-card-text>
                    <v-container>
                        <v-row>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                            <v-text-field
                            v-model="editedItem.nombre"
                            label="Nombre"
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                            <v-text-field
                            v-model="editedItem.correo"
                            label="Correo"
                            ></v-text-field>
                        </v-col>




                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >

                          <!-- <v-select
                            v-model="editedItem.rol"
                            :items="roles"                            
                            label="Rol"                            
                            required
                          ></v-select> -->

                            <v-text-field
                            v-model="editedItem.rol"
                            label="Rol"
                            ></v-text-field>


                        </v-col>



                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                            <v-text-field
                            v-model="editedItem.password"
                            label="Contraseña"
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                            <v-text-field
                            v-model="editedItem._id"
                            label="Identificador"
                            ></v-text-field>
                        </v-col>
                        </v-row>
                    </v-container>
                    </v-card-text>

                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="close"
                    >
                        Cancel
                    </v-btn>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="save"
                    >
                        Save
                    </v-btn>
                    </v-card-actions>
                </v-card>
                </v-dialog>
                <v-dialog v-model="dialogDelete" max-width="500px">
                <v-card>
                    <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                    <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                    <v-spacer></v-spacer>
                    </v-card-actions>
                </v-card>
                </v-dialog>
            </v-toolbar>
            </template>
            <template v-slot:[`item.actions`]="{ item }">
            <!-- <template v-slot:item.actions="{ item }"> -->

            <v-icon
                small
                class="mr-2"
                @click="editItem(item)"
            >
                mdi-pencil
            </v-icon>
            <v-icon
                small
                @click="deleteItem(item)"
            >
                mdi-delete
            </v-icon>
            </template>
            <template v-slot:no-data>
            <v-btn
                color="primary"
                @click="initialize"
            >
                Reset
            </v-btn>
            </template>
        </v-data-table>
    </v-container>
</template>



<script>

import axios from "axios";

  export default {
    name : "UsuariosDT",
    data: () => ({
      dialog: false,
      dialogDelete: false,
      // roles : ["Administrador","Gestor"],
      headers: [
        { text: 'ID', value: '_id' },
        {
          text: 'Nombre',
          align: 'start',
          sortable: false,
          value: 'nombre',
        },
        { text: 'Correo', value: 'correo' },
        { text: 'Rol', value: 'rol' },
        { text: 'Contraseña', value: 'password' },
        { text: 'Estado', value: 'estado' },
        { text: 'Acciones', value: 'actions', sortable: false },
      ],
      desserts: [],
      usuarios: [],
      editedIndex: -1,
      editedItem: {
        nombre: '',
        correo: 0,
        rol: "Gestor",
        contraseña: 0,
        Identificador: 0,
      },
      defaultItem: {
        nombre: '',
        correo: 0,
        rol: "Gestor",
        contraeña: 0,
        Identificador: 0,
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Ingresar Usuario' : 'Editar Usuario'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      // this.initialize()
      this.list()
    },

    methods: {
      initialize () {
        this.desserts = [
          {
            _id : '123123123123',
            nombre : 'nombreEstudiante',
            correo: 'estudiante@gmail.com',
            rol: 'Administrador',
            password: "as6f5da6sf45da6sf45d.as6df54a6sf45d",
            estado : 1,
          }
        ]
      },

      list () {

        axios.get("http://localhost:3000/api/usuario/list")
        .then((response) => {
          //manejar la respuesta satisfactoria
          this.usuarios = response.data;
          console.log(response)
        })
        .catch(function(error){
          //manejo en el caso de que la peticion sea fallida
          console.log(error);
          return error;
        })

      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>
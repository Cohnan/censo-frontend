<template>
<body>
    <div id="container">
        <div id="box">
            <!--mensajes de verificacion-->
                <div id="msg"></div>
                <div id="error" class="alert alert-danger ocultar" role="alert">
                    Las contraseñas no coinciden, vuelve a intentar.
                </div>
                <div id="ok" class="alert alert-success ocultar" role="alert">
                    Las contraseñas coinciden! Procesando formulario.
                </div>

            <form id="formulario" v-on:submit.prevent="processSignUp" onsubmit="verificarPassword(); return false">
                <!--USER ICON-->
                <div id="circle">
                    <i id="userIcon" class="fas fa-user-plus"></i>
                </div>
                <h1>Registro de usuario</h1>
                
                <!--NOMBRE-->
                <div id="icon">
                    <span> 
                        <i class="fas fa-user"></i>
                    </span>
                    <input type="text" class="form-control" id="name" placeholder="Nombre de usuario" v-model="user.nombre">
                </div>
                <br />

                <!--CORREO ELECTRÓNICO-->
                <div id="icon">
                    <span> 
                        <i class="far fa-envelope"></i>
                    </span>
                    <input type="email" id="email" placeholder="Correo electrónico" v-model="user.email">
                </div>
                <br />

                <!--CONTRASEÑA-->
                <div id="icon">
                    <span> 
                        <i class="fas fa-key"></i>
                    </span>
                    <input type="password" class="form-control" id="pass" placeholder="Contraseña" v-model="user.password" required>
                </div>
                <br />
                
                <!--CONFIRMACIÓN DE LA CONTRASEÑA-->
                <div id="icon">
                    <span> 
                        <i class="fas fa-unlock-alt"></i>
                    </span>
                    <input type="password" class="form-control" id="passSure" placeholder="Confirmación de la contraseña" required>
                </div>
                <br />  

                <!--BOTÓN-->
                <div>
                <button id="boton" type="submit">Registrar</button>
                &emsp;
                <!--LOG IN-->
                <router-link to="/user/login" id="linknav">Inicia sesión si ya tienes una cuenta</router-link>
                </div>
            </form>
        </div>
    </div>
	<!-- Fontawesome link -->
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
</body>
</template>

<script>
import axios from 'axios'; 
    export default{
        name: 'signUp',

        data: function(){
            return{
                user:{
                    nombre: "",
                    email: "",
                    password: ""
                }
            }
        },

        methods:{
            verificarPassword:function() {
                pass1 = document.getElementBy('pass');
                pass2 = document.getElementBy('passSure');

                if(pass1.value != pass2.value){
                    document.getElementById("error").classList.add("mostrar");
                    return false;
                }
                else{
                    document.getElementById("error").classList.remove("mostrar");
                    document.getElementById("ok").classList.remove("ocultar");
                    return true;
                }
            },

            processSignUp:function(){
                axios.post(
                    'http://localhost:8000/usuarios/',
                    this.user,
                    {headers:{}}
                )
                .then((result)=>{
                    let dataSignUp={
                        email: this.user.email,
                        token_access: result.data.access,
                        token_refresh: result.data.refresh,
                    }
                    this.$emit('completedSignUp', dataSignUp)
                })

                .catch((error)=>{
                    console.log(error);
                    alert("Error. Fallo en el registro de usuario.")
                });
            }
        }
    }
</script>

<style>
*{
    text-align: center;
}
.ocultar{
    display: none;
}

.mostrar{
    display: block;
}

#container{
    width: 100vw;
    height: 100vh;
    background-color: rgb(255, 255, 255);
    display: flex;
    justify-content: center;
    align-items: center;
}

#box{
    width: 40%;
    height: 70%;
    display: flex;
    background-color: #f3f1f1; 
    border: 2px solid;
    border-radius: 15px;
    border-color: #0072f4;
    border-radius: 1cm; 
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

#circle{
    background-color: rgb(251, 225, 153); 
    width: 150px; 
    height: 150px; 
    border-radius: 50%; 
    font-size: 1in; 
    margin-left: 30%;
}

#userIcon{
    margin-top: 20px;
}

#icon{
    margin-left: 10%;
    background-color: #6c757d;
    width: 80%;
}

#formulario{
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

#boton {
  color: #f4f7fa;
  background-color: #0072f4;
  border: 2px solid;
  border-radius: 15px;
  border-color: #0072f4;
  width: 80px;
  padding: 10px;
  margin: 0px;
  height: 16px;
  text-align: center;
  text-decoration: none;
}
#boton:hover{
    border-color: #ff8d0b;
    background-color: #ff8d0b;
    color: rgb(0, 0, 0);
}

input{
    font-size: 15px;
    width: 82%;
}
span{
    padding: 10px;
}
</style>

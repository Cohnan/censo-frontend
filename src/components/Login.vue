<template>
    <body>
        <div id="container">
            <div id="box">
                <form id="formulario" v-on:submit.prevent="processLoginUser" method="POST">
                    <!--USER ICON-->
                    <div id="circle">
                        <i id="userIcon" class="far fa-user"></i>
                    </div>
                    <h1>Iniciar sesión</h1>
                    
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
                        <input type="password" id="pass" placeholder="Contraseña" v-model="user.password"><br>
                    </div>
                    <br />
                    
                    <!--BOTÓN-->
                    <div>
                    <button id="boton" type="submit">Iniciar sesión</button>
                    &emsp;
                    <!--SIGN UP-->
                    <router-link to="/user/signup" id="linknav">Si no tienes una cuenta, registrate</router-link>
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
        name: 'logIn',

        data: function(){
            return{
                user:{
                    email: "",
                    password: ""
                }
            }
        },
    
        methods:{
            processLoginUser:function(){
                axios.post(
                    'localhost:8000/login/',
                    this.user,
                    {headers:{}}        
                )
                .then((result) => {
                    let dataLogin={
                        email: this.user.email,
                        token_access: result.data.access,
                        token_refresh: result.data.refresh
                    }
                    this.$emit('completedLogIn', dataLogin)
                })
                .catch((error) =>{
                    if(error.response.status == "401")
                        alert("Las credenciales son incorrectas.");
                });
            }
        } 
    }   
</script>

<style>
*{
    text-align: center;
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
    height: 60%;
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
    width: 77%;
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

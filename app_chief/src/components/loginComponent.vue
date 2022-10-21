<template>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
    crossorigin="anonymous">
    <div class="bckLogReg1">
    <div class="container">
        <div class="row">
            <div class="col">
                <img class="logoLogin" src="@/pictures/logoLogin.png" alt="logo login">
                <div id="textLogIn">Login</div>
                <form id="form">
                    <div id="all">
                        <div id="email">
                            <input type="text" placeholder="Email" v-model="email">
                        </div>
                        <div id="password">
                            <input type="text" placeholder="Password" v-model="password">
                        </div>
                    </div>
                    <button type="submit" id="login" @click.prevent="chiefOrNot">Log in</button><br>
                    <div id="register" @click=Registerf()>Register</div> 
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
import global from "../global.js"
export default {
    name:'loginComponent',
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
        loginFunction(){
            var ListOfUsers = [];
            axios.get('http://localhost:5000/users')
            .then((response) =>{
            var User = response.data;
            console.log(User)
            var verif = 0;
            ListOfUsers = User;
            console.log(this.email)
            
            for(var i = 0; i<ListOfUsers.length; i++){
                console.log(ListOfUsers[i].email)
                if(this.email == ListOfUsers[i].email && this.password == ListOfUsers[i].passwordP){
                    console.log(ListOfUsers[i].email)
                    global.state.emailGlobal = this.email;
                    verif = 1;
                }
            }
            console.log(verif)
            if(verif == 1){

                //Test de token
                /*console.log(this.email)
                axios.post('http://localhost:5000/users/login', {
                    email: this.email,
                }).then((reponse)=>{
                    console.log('auth sucess')
                    console.log(reponse.data)
                    axios.defaults.headers.common['authorization'] = `Bearer ${response.data.accessToken}`;

                }).catch((err)=>{
                    console.log(err)
                })*/
                
                localStorage.setItem("emailUser", global.state.emailGlobal);
                this.$router.push('/home');
                
            }
            
            })
            .catch(error => {
            console.log(error);
            })
        },
        loginChiefFunction(){
            var ListOfChiefs = [];
            axios.get('http://localhost:5000/chiefs')
            .then((response) =>{
            var Chief = response.data;
            var verif = 0;
            ListOfChiefs = Chief;
            for(var i = 0; i<ListOfChiefs.length; i++){
                if(this.email == ListOfChiefs[i].email && this.password == ListOfChiefs[i].passwordP){
                    global.state.emailGlobal = this.email;
                    verif = 1;
                }
            }
            console.log(global.state.emailGlobal);
            if(verif == 1){
                console.log(global.state.emailGlobal)
                localStorage.setItem("emailChief", global.state.emailGlobal);
                this.$router.push('/chiefprofil');
                
            }
            
            })
            .catch(error => {
            console.log(error);
            })
        },
        chiefOrNot(){
            console.log(global.state.ChiefOrNot);

            if(global.state.ChiefOrNot == "Oui"){
                console.log("chief");
                this.loginChiefFunction();
            }
            else{
                console.log("user");
                this.loginFunction();
            }
            
            
        },
        Registerf:function(){
            this.$router.push('/register');
        }
    }

}
</script>

<style>
    #all{
        width:20%;
        border:2px solid black;
        margin-left:40%;
        padding-top:1%;
        padding-bottom:1%;
    }

    #form{
        margin-top:1.5%;
    }

    #password{
        padding-top:4%;
    }


    #register{
        padding-top:1%;
    }
    #login{
        margin-top:1%;
        width: 20%;
    }
    .logoLogin{
        margin-right: 7%;
        padding-top:20%;
        width:4%;
    }
    
    #textLogIn{
        margin-top:-2.9%;
        margin-left:3%;
    }
    .bckLogReg1{
    background-image: url("@/assets/bckLogReg.jpg");
    background-size: cover;
    padding-bottom: 16.6%;
}
</style>
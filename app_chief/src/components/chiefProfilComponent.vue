<template>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
    crossorigin="anonymous">
    <div class="headerChief">
    <div><img class="profilLogin" src="@/pictures/profilPicture.png"><div class="profilNameLogin">{{firstName}}</div></div>
    <div class="nameSiteProfil"><a style="text-decoration: none; color:black" href="#" @click="disco">Chief4U</a></div>
</div>
    <div class="bckChief">
    <div class="container">
        <div class="row">
            <div class="col col1">
                <form>
                    <img class="profilPicture" src="@/pictures/profilPicture.png">
                    <div class="FLName">{{firstName}} {{lastName}}</div>
                    <div class="grade">{{grade}} Average grade</div>
                    <div class="infos">
                        <div>Informations :</div>
                        <div class="styleInfos">
                            <div></div>Email :&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&ensp;Phone Number :
                            <br><input type="text" placeholder="Email" v-model="email">
                            <input class="phoneNumberProfil" type="text" placeholder="Phone number" v-model="phoneNumber"><br>
                            <div  class="passwordProfil">Password :<br> <input type="text" placeholder="Phone number" v-model="password"></div>
                            <div  class="notifCook">Notif cook :<br>{{this.notif}}</div><button type="submit" class="accNotif" @click.prevent="accNotif">Accept</button><button type="submit" class="refNotif" @click.prevent="refNotif">Refuse</button><div id="buttonJS" @click="buttonFinish"></div>
                            <div class="typeOfFoodProfil">Type of Food : 
                            <select class="select" name="format" id="format" v-model="typeOfFood">
                                        <option selected disabled>{{typeOfFood}}</option>
                                        <option value="Italian">Italian</option>
                                        <option value="African">African</option>
                                        <option value="Greek">Greek</option>
                                        <option value="Mediterranean">Mediterranean</option>
                                        <option value="Portugese">Portugese</option>
                                        <option value="Thai">Thai</option>
                                        <option value="Spanich">Spanich</option>
                                        <option value="Oriental">Oriental</option>
                                        <option value="German">German</option>
                                        <option value="French">French</option>
                                        <option value="Indian">Indian</option>
                                        <option value="Others">Others</option>
                                    </select><br></div>
                        </div>
                    </div>
                    <button type="submit" class="sInfo" @click.prevent="printInfoChief">Save</button>
                </form>
            </div>
            <div class="col col2">
                <form>
                    <div class="description">
                        <div class="textDesc">Description :</div>
                        
                    </div>
                    <textarea class="areaDesc" v-model="description"></textarea>
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
    name:'chiefProfilComponent',
    data(){
        return{
            picture:'',
            profilPicture:'',
            firstName:'',
            lastName:'',
            email:'',
            typeOfFood:'',
            phoneNumber:'',
            description:'',
            password:'',
            notif:'',
            reserveBy:'',
            finish:'',
            lock:0,
            grade:0,

        }
    },
    beforeMount(){
                    global.state.emailGlobal = localStorage.getItem("emailChief");
                    axios.get('http://localhost:5000/chiefs/'+global.state.emailGlobal)
                    .then((response) =>{
                    var Chief = response.data;
                    var ListOfChief = [];
                    ListOfChief = Chief;
                    this.firstName = ListOfChief[0].firstName;
                    this.lastName = ListOfChief[0].lastName;
                    this.email = ListOfChief[0].email;
                    this.phoneNumber = ListOfChief[0].phoneNumber;
                    this.typeOfFood = ListOfChief[0].typeOfFood;
                    this.password = ListOfChief[0].passwordP;
                    this.description = ListOfChief[0].description;
                    this.notif = ListOfChief[0].notif;
                    this.reserveBy = ListOfChief[0].reserveBy;
                    this.grade = ListOfChief[0].grade;
                    console.log(this.notif)
                    if(this.notif == "Yes" && this.lock == 1){
                        var button = document.createElement('button')
                        button.type = 'button'
                        button.innerHTML = 'Finish'
                        button.className = 'btn-styled'
                        var cont = document.getElementById('buttonJS')
                        cont.appendChild(button)
                    }
                    })
                    .catch(error => {
                    console.log(error);
                    })
                    this.notif = localStorage.getItem("notif")
                    
            
        },
    methods:{
        printInfoChief(){
            axios.patch('http://localhost:5000/chiefs/'+global.state.emailGlobal, {
                phoneNumber: this.phoneNumber, email: this.email, password: this.password, description : this.description, typeOfFood : this.typeOfFood
            });
        },
        accNotif(){
            if(this.notif == "Yes" && this.lock == 0){
                this.lock = 1
                console.log("acc")
                localStorage.setItem("notif", this.notif)
                var button = document.createElement('button')
                button.type = 'button'
                button.innerHTML = 'Finish'
                button.className = 'btn-styled'
                var cont = document.getElementById('buttonJS')
                cont.appendChild(button)
            }else if(this.lock == 1){alert("Already accepted")}
            else{
                alert("You don't have notif")
            }
            
        },
        refNotif(){
            global.state.emailGlobal =localStorage.getItem("emailChief");
            if(this.notif == "Yes" && this.lock == 0){
                axios.patch('http://localhost:5000/chiefs/'+global.state.emailGlobal, {
                notif: "No", dispo:"Yes", reserveBy:"none"
                });
                axios.patch('http://localhost:5000/users/'+this.reserveBy, {
                    reserve: "none"
                });
            }else if(this.lock == 1){alert("You have to finish")}
            else{
                alert("You don't have notif")
            }
            this.$router.go()
        },
        buttonFinish(){
            this.lock = 0
            axios.patch('http://localhost:5000/chiefs/'+global.state.emailGlobal, {
                notif: "No", dispo:"Yes", reserveBy:"none"
                });
                axios.patch('http://localhost:5000/users/'+this.reserveBy, {
                    reserve: "none"
                });
            console.log("finish")
            localStorage.removeItem("notif")
            this.$router.go()
        },
        disco(){
            localStorage.clear();
        }
    }
}
</script>

<style>
    .bckChief{
        background-image:url("@/assets/bckChief.jpg");
        position:relative;
        background-size: cover;
        background-repeat: no-repeat;
        overflow: hidden;
        padding-bottom: 3.3%;
        border-bottom: 2px solid black;
    }

    .profilPicture{
        border-radius: 90%;
        width:35%;
        margin-top:7%;
        margin-right:80%;
    }

    .nameSiteProfil{
        margin-right:84%;
        font-size:40px;
    }

    .headerChief{
        border-bottom: 2px solid black;
    }

    .profilLogin{
        border-radius: 90%;
        margin-left:60%;
        margin-top:3.5%;
        width:5%;
    }
    .profilNameLogin{
        margin-top:-3.5%;
        margin-left:70%;
    }

    .FLName{
        margin-top:-25%;
        margin-right:-32%;
        font-size: 50px;
    }

    .grade{
        font-size:20px;
        margin-right:0%;
    }

    .styleInfos{
        width:90%;
        border:2px solid black;
        padding-left:2%;
        margin-top:2%;
        
        
    }
    #buttonJS{
        margin-left:67%;
        margin-top:-5.4%;
    }

    .btn-styled{
        height:22px;
    }

    .accNotif{
        margin-left:50%;
        height:20px;
        font-size:80%;
        text-align: center;
        padding-bottom: 4%;
        margin-top:2%;
    }

    .refNotif{
        margin-left:50%;
        height:20px;
        font-size:79%;
        text-align: center;
        padding-bottom: 1%;
    }

    .infos{
        text-align: left;
        margin-left: 8%;
        margin-top:12%;
    }

    .phoneNumberProfil{
        margin-left: 2%;
    }

    .passwordProfil{
        margin-top:2%;
    }

    .notifCook{
     margin-left:50%;
     margin-top:-12%;
    }

    .typeOfFoodProfil{
        margin-top:-10%;
        width:50%;
    }


    .areaDesc{
        width:100%;
        min-height: 180px;
        max-height: 180px;
        margin-top:1.6%;
    }

    .textDesc{
        text-align: left;
    }

    .description{
        margin-top:50%;

    }

    .sInfo{
        margin-top:1%;
        margin-left:-58%;
        width:26%;
        border:2px solid black;
    }

    .sDesc{
        width: 27%;
        margin-right: 75.5%;
    }

</style>
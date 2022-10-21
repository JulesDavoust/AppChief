<template>
    <nav>
<ul class="Menu" style="list-style-type: none">
  <li>
    <div class="border">Menu</div>
    <ul class="sub-menu">
      <li>
        <router-link to="/home"><div class="border">Home</div></router-link>
      </li>
      <li>
        <router-link to="/chief"><div class="border">Find A Chief</div></router-link>
      </li>
      <li>
        <router-link to="/"><div class="border" @click="disco">Disconnect</div></router-link>
      </li>
    </ul>
  </li>
</ul>
</nav>
<router-view/>
    <div class="alignment">
  <img alt="Site logo" class="slogo" src="@/assets/logo.png">
  <h1>Chief4U</h1>
  <span class="righter"><img alt="User profile picture" :src="require(`@/assets/${Userpp}`)" id="userpp" @click="profil"><span id="usern"> {{firstName}} {{lastName}}</span></span>
  </div>
</template>

<script>
import global from "../global.js"
import axios from 'axios'
export default {
    name:"HeaderView",
    data(){
      return{
        firstName:'',
        lastName:'',
      }
    },
    props:{
        Userpp:String
    },
    beforeMount(){
      global.state.emailGlobal = localStorage.getItem("emailUser")
    console.log(global.state.emailGlobal)
      axios.get('http://localhost:5000/users/'+global.state.emailGlobal)
            .then((response) =>{
            var User = response.data;
            this.listOfUser = User;
            console.log(this.listOfUser)
            this.firstName = this.listOfUser[0].firstName;
            this.lastName = this.listOfUser[0].lastName;
            })
            .catch(error => {
            console.log(error);
            })},
    
    methods:{
        profil(){
            console.log()
            this.$router.push('/userprofil');
        },
        disco(){
          localStorage.clear();
        }
    }
    }
</script>

<style>
  .Menu{
    margin-top:0%;
    margin-left:-3%;
  }

  .sub-menu{
    display: none;
    position:absolute;
    margin-top:-3.8%;
    margin-left: 2.45%;
  }

  nav li{
    display:inline-block;
    vertical-align: top;
  }

  nav li div{
    display: block;

  }

  nav li div:hover{
    background-color: #1abc9c;
    color: #fff;
    
  }

  nav li:hover .sub-menu{
    display: block;

    
  }

    .alignment{
    display:flex;
    position:absolute;
    top:0px;
    margin:5px;

    }
    .slogo{
        width:55px;
        height:55px;
    }

  .righter{
    position:absolute;
    right:-950px;
  }
  #userpp{
    border-radius: 50%;
    height:5vw;
    width:auto;
    border:1px solid black;
  }
  #usern{
    display:flex;
    position:absolute;
    top:30px;
    right:-105px;
    font-size:15px;
    font-style:oblique;
  }
</style>
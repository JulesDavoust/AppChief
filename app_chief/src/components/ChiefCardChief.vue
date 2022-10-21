<template>
    <article class="ChiefCardHomePages">
      <div class="Cdec">
      <img alt="Chief Picture" :src="require(`../assets/${cp}`)" class="Chiefp">
      <div class="a">
      <h2 class="cn">{{ChiefFN}} {{ChiefLN}}</h2>
  
      <div class="grade"><img src="../assets/heart.png" alt="grade logo" class="HeartOne"> {{AvGrade}}</div>Dispo : {{dispo}}
  
      <div class="Desc">{{Description}}
    <br>
      <span class="buttonClass">
      <button class="Learnmore" @click=chiefprofile()>Reserve</button>
      <button class="Learnmore" @click=Cancel()>Cancel</button>
      </span><br><br>
      <button class="Learnmore" @click=like()>Like</button>
      </div>
      </div>
      </div>
    </article>
  </template>
  
  <script>
import global from "../global.js";
  import axios from 'axios';
  export default {
    data(){
        return{
            emailUserReserve:''
            
        }
    },
      props:{
          cp:String,
          ChiefFN:String,
          ChiefLN:String,
          AvGrade:String,
          Description:String,
          email:String,
          dispo:String,
          grade1:Number,
      },
      methods:{
        chiefprofile : function(){
            global.state.emailGlobal =localStorage.getItem("emailUser");
            if(this.dispo == "Yes"){console.log(this.dispo);
            axios.patch('http://localhost:5000/chiefs/'+this.email, {
                notif: "Yes", dispo:"No", reserveBy:global.state.emailGlobal
            });
            axios.patch('http://localhost:5000/users/'+global.state.emailGlobal, {
                reserve: this.email
            });
            this.$router.go();}
            else{
                alert("Already reserve");
            }
            
            
        },
        Cancel(){
            global.state.emailGlobal =localStorage.getItem("emailUser");
            axios.get('http://localhost:5000/users/'+global.state.emailGlobal)
                    .then((response) =>{
                    var User = response.data;
                    var ListOfUser = [];
                    ListOfUser = User;
                    this.emailUserReserve = ListOfUser[0].reserve;
                    console.log(ListOfUser[0].reserve)
                    if(this.dispo == "No" && this.emailUserReserve == this.email){console.log(this.dispo);
                console.log("cancel")
            axios.patch('http://localhost:5000/chiefs/'+this.email, {
                notif: "No", dispo:"Yes", reserveBy:"none"
            });
            axios.patch('http://localhost:5000/users/'+global.state.emailGlobal, {
                reserve: "none"
            });
            this.$router.go();}
            else{
                alert("You can't cancel");
            }
                    })
                    .catch(error => {
                    console.log(error);
                    })
            
            
        },
        like(){
            var grade1
            console.log(this.email)
            axios.get('http://localhost:5000/chiefs/'+this.email)
            .then((response) =>{
                var User = response.data;
                grade1 = User[0].grade
                console.log(grade1)
                grade1 = grade1 + 1
                console.log(grade1)
                this.nextLike(grade1)
            })
            
            
        },
        nextLike(grade1){
            console.log(this.email)
            console.log(grade1)
            axios.patch('http://localhost:5000/chiefs/'+this.email, {
                grade: grade1
            });
            this.$router.go();
        }
      }
  }
  </script>
  
  <style>
      .a{
         display:block; 
         padding:20px;
      }
  
      .Cdec{
          border:1px solid black;
          background-color: blanchedalmond;
          height:200px;
          font-size:18px;
          margin-left:275px;
          padding:2px;
          display:inline-flex;
          width:70vw;
          text-align:left;
      }
      .Chiefp{
          margin-left:10px;
          border-radius: 50%;
          border:1px solid black;
      }
      .HeartOne{
          width:20px;
          height:20px;
      }
      .grade{
          display:flex;
  }
      .cn{
          margin-block:10px;
      }
      .Desc{
          font-size:10px;
      }
      .Learnmore{
  
              border:none;
              background:rgba(255, 210, 143, 0.874);
              border:none;
              border-radius: 10px;
      }
      .Learnmore:hover{
          color:orange;
      }
  </style>
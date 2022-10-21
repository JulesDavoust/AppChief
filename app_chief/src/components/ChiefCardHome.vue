<template>
    <article class="ChiefCardHomePage">
      <div class="cdec">
      <div class="imgChief"><img alt="Chief Picture" :src="require(`../assets/${cp}`)" class="chiefp"></div>
      <h2 id="nameChief">{{ChiefFN}} {{ChiefLN}}</h2>
      <div class="grade"><img src="../assets/heart.png" alt="grade logo" class="Heartone">{{AvGrade}}</div>Dispo : {{dispo}}
    
      <div class="desc">{{Description}}
      <br><br><br>
      <span class="buttonClass">
        <button class="LearnMore" @click=chiefprofile()>Reserve</button>
        <button class="LearnMore" @click=Cancel()>Cancel</button>
      </span><br><br>
      <button class="LearnMore" @click=like()>Like</button>
  </div>
      </div>
    </article>
  </template>
  
  <script>
  import global from "../global.js";
  import axios from 'axios';
  export default {
      props:{
          cp:String,
          ChiefFN:String,
          ChiefLN:String,
          AvGrade:String,
          Description:String,
          email:String,
          dispo:String,
          verif:String,
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
      .ChiefCardHomePage{
          border:1px solid black;
          background-color: blanchedalmond;
          height:390px;
          width:350px;
          font-size:18px;
          margin-left:5px;
          padding:2px;
          display:inline-block;
          text-align:left;
          border-radius: 5%;
      }
      #nameChief{
        margin-bottom: 2%;
      }

      .grade{
        margin-bottom:4%;
      }
      .chiefp{
          margin-left:65px;
          width:13vw;
          height:auto;
          border-radius: 50%;
          border:1px solid black;
  
      }
      .Heartone{
          width:20px;
          height:auto;
      }
      .cdec{
          margin-left:10px;
      }
      .desc{
          font-size:13px;
      }
      .LearnMore{
             border:none;
              background:rgba(255, 210, 143, 0.874);
              border:none;
              border-radius: 10px;
      }
      .LearnMore:hover{
          color:orange;
          }

  </style>
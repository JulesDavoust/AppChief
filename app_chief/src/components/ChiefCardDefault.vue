<template>
    <article class="ChiefCardHomePage">
      <div class="cdec">
      <img alt="Chief Picture" :src="require(`../assets/${cp}`)" class="chiefp">
      <h2 id="nameChief">{{ChiefFN}} {{ChiefLN}}</h2>
      <div class="grade"><img src="../assets/heart.png" alt="grade logo" class="Heartone">{{AvGrade}}</div>
      <div class="desc">{{Description}}
  
  </div>
      </div>
    </article>
  </template>
  
  <script>
  export default {
      props:{
          cp:String,
          ChiefFN:String,
          ChiefLN:String,
          AvGrade:String,
          Description:String,
      },
  }
  </script>
  
  <style>
    #nameChief{
        margin-bottom: 2%;
      }

      .grade{
        margin-bottom:4%;
      }
    
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
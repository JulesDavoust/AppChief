<template>
    <HeaderView Userpp="DefaultUser.jpg" UserLN="abc" UserFN="abc"/>
    <div class="ChiefList">
      <h2>This is all the Chief corresponding to your demands:</h2>
  
  <chief-card-home-pages cp="DefaultUser.jpg" v-for="items in listOfChiefs" :key="items.id"  :AvGrade="items.grade" :ChiefFN="items.firstName" :ChiefLN="items.lastName" :Description="items.description" :email="items.email" :dispo="items.dispo"></chief-card-home-pages>
  
  
  </div>
  <article class="block">
  <div class="filter">
          <input id="def" type="radio" name="food" value="def"  @click="selectFoodLocalStorage"/>All<br><br>
          <input id="Italian" type="radio" name="food" value="Italian"  @click="selectFoodLocalStorage"/>Italian<br><br>
          <input id="African" type="radio" name="food" value="African"  @click="selectFoodLocalStorage"/>African<br><br>
          <input id="Greek" type="radio" name="food" value="Greek"  @click="selectFoodLocalStorage"/>Greek<br><br>
          <input id="Mediterranean" type="radio" name="food" value="Mediterranean"  @click="selectFoodLocalStorage"/>Mediterranean<br><br>
          <input id="Portugese" type="radio" name="food" value="Portugese" @click="selectFoodLocalStorage"/>Portugese<br><br>
          <input id="Thai" type="radio" name="food" value="Thai"  @click="selectFoodLocalStorage"/>Thai<br><br>
          <input id="Spanich" type="radio" name="food" value="Spanich"  @click="selectFoodLocalStorage"/>Spanich<br><br>
          <input id="Oriental" type="radio" name="food" value="Oriental" @click="selectFoodLocalStorage"/>Oriental<br><br>
          <input id="German" type="radio" name="food" value="German" @click="selectFoodLocalStorage"/>German<br><br>
          <input id="French" type="radio" name="food" value="French" @click="selectFoodLocalStorage"/>French<br><br>
          <input id="Indian" type="radio" name="food" value="Indian" @click="selectFoodLocalStorage"/>Indian<br><br>
          <input id="Others" type="radio" name="food" value="Others" @click="selectFoodLocalStorage"/>Others<br><br>
  </div>
    </article>
  </template>
  
  <script>
  import axios from 'axios';
  import HeaderView from '@/components/HeaderView';
  import ChiefCardHomePages from '@/components/ChiefCardChief.vue'
  export default {
    data(){
      return{
        dataFood:'',
        listOfChiefs:[],
      }
    },
    components:
    {
      HeaderView,
      ChiefCardHomePages,
    },
    beforeMount(){
        this.dataFood = JSON.parse(localStorage.getItem('typeFood'))
        console.log(document.querySelector("input[id='Greek']"))
        console.log(this.dataFood)
        console.log(this.dataFood, "2")
        var table = [];
        console.log(this.dataFood)
        axios.get("http://localhost:5000/chiefs")
        .then((response)=>{
          table = response.data;
          console.log(table)
          if(this.dataFood == "def"){
            this.listOfChiefs = table;
          }else{
            for(var i = 0; i < table.length; i++){
              console.log("for", table[i].id)
              if(table[i].typeOfFood == this.dataFood){
                console.log("if")
                this.listOfChiefs.push(table[i]);
              }
            }
          }
          console.log(this.listOfChiefs)
        })
      },

    methods:{

      selectFoodLocalStorage:function(){
        let selected = document.querySelector("input[name='food']:checked");
        console.log(selected)
        this.dataFood = selected.value
        localStorage.setItem('typeFood', JSON.stringify(this.dataFood));
        this.$router.go()
      },

      
    }
  }
  </script>
  
  <style>
    .ChiefList{
      text-align:center;
    }
    .filter{
        display:fixed;
        text-align: left;
        margin-left: 27%;
        margin-top:5%;
    }
    .block{
        border:2px solid black;
        position: fixed;
        bottom: 15px;
        top: 24%;
        left: -2px;
        width: 200px;
        height:490px;
        border: 3px solid #000000;
    }
  </style>
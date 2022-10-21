<template>
    <BasicHeaderVue/>
  <div class="home">
    <div class="bann" :style="{backgroundImage: `url(${Image})`}">
    <button class="buttonArrowLeft" @click="arrowLeft"><img id="arrowLeft" src="../assets/arrow.png"></button>
    <button class="buttonArrowRight" @click="arrowRight"><img id="Right" src="../assets/arrow2.png"></button>
  </div>
    <HelloWorld class="underlined" msg="Welcome to Chief4U"/>
    <br/>
    <br/>
    <h3><p id="WebsiteD">
    Our website has been created for people who wants to feel luxury and discover more about traditional chief's food.<br/>
    Chiefs and non-chiefs are here to have a wonderful time having a good time eating different food from usual.<br/>
    We will provide the necessary information for you to find the perfect match !<br/>
    <br/>
    <br/>

    <br/>
    </p></h3>
    <div class="bestOfChief">
        <container>
          <ChiefCardDefault v-for="item in listOfBestChiefs" cp="heart.png" :key="item" :AvGrade=item.grade :ChiefFN=item.firstName :ChiefLN=item.lastName :Description=item.description></ChiefCardDefault>

        </container>
    </div>
</div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import HelloWorld from '@/components/HelloWorld.vue'
import BasicHeaderVue from '@/components/BasicHeaderVue.vue'
import ChiefCardDefault from '@/components/ChiefCardDefault.vue'
import Image1 from "@/assets/imgBann1.jpg"
import Image2 from "@/assets/imgBann2.jpg"
import Image3 from "@/assets/imgBann3.png"
export default {
  name: 'HomeView',
  data(){
  return{
    bannNbr:0,
    listOfBestChiefs:[],
    Image:Image1
  }
},
  components: {
    HelloWorld,
    BasicHeaderVue,
    ChiefCardDefault
},
  beforeMount(){
    axios.get('http://localhost:5000/chiefs')
            .then((response) =>{
            this.test = response.data;
            var transitTabl = this.test;
            if(transitTabl.length !=0){
                for(var j = 0; j<3; j++){
                  var a = 0;
                  var max = transitTabl[0].grade;
                  console.log(max)
                  var chiefsMax = transitTabl[0]
                    for(var i = 0; i<transitTabl.length; i++){
                        if(max <= transitTabl[i].grade){
                            max = transitTabl[i].grade
                            chiefsMax = transitTabl[i]
                            a = i
                        }
                    }
                    
            this.listOfBestChiefs.push(chiefsMax);
            transitTabl.splice(a, 1)
            console.log("suppr",transitTabl);
            
        }
    }
            console.log("LOBC",this.listOfBestChiefs)
            })
            .catch(error => {
            console.log(error);
            })
  },
  methods:{
    arrowRight(){
    if(this.bannNbr == 3){
      this.bannNbr = 1;
      this.setImage();
    }
    else{
      this.bannNbr = this.bannNbr + 1;
      this.setImage();
    }
    console.log(this.bannNbr)
  },
  arrowLeft(){
    
      if(this.bannNbr == 1){
        this.bannNbr = 3;
        this.setImage();
      }
      else{
        this.bannNbr = this.bannNbr - 1;
        this.setImage();
      }
    
    console.log(this.bannNbr);
  },
  setImage(){
    if(this.bannNbr == 1){
      this.Image = Image1;
    }else if(this.bannNbr == 2){
      this.Image = Image2;
    }else if(this.bannNbr == 3){
      this.Image = Image3;
    }
  }
}
}
</script>

<style>

.bestOfChief{
  background-image: url("@/assets/bestChief.jpg");
  margin-left:-11.80%;
  margin-top:-2%;
  padding-left:10%;
  padding-top:7%;
  width: 100.7%;
    height: 75vh;
  border-radius: 5%;
  border:10px solid rgb(156, 28, 28);
}
  container{
    display:flex;
  }
  .home{
    margin-left:10%;
  }
  .bann{
  position:relative;
  background-size: cover;
  overflow: hidden;
  text-align: center;
  margin-top:2%;
  margin-left:-11.9%;
  width:112.2%;
  height:72vh;
  border:2px solid black;
}
</style>
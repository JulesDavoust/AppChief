<template>
    <nav>

    <router-link to="/"><div class="border">Home</div></router-link>
    </nav>
    <router-view/>
    <div class="alignment">
  <img alt="Site logo" class="slogo" src="@/assets/logo.png">
  <h1>Chief4U</h1>
  <button class="righters" @click=loginpage()><span id="login">Log in</span></button>
  </div>
</template>

<script>
export default {
    name:"HeaderView",
    methods:{
        loginpage: function(){
            this.$router.push('/login');
        }
    }
    }
</script>

<style>
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

  .righters{
    position:absolute;
    margin-top:10%;
    right:-1090px;
    font-size:150%;
    border:2px solid black;
    background-color: #1abc9c;;
  }
  button{
    border:none;
    background:none;
  }

</style>
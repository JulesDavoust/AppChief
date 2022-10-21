<template>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
    crossorigin="anonymous">
    <div class="bckLogReg">
    <div class="container">
        <div class="row">
            <div class="col">
                <img class="logoLogin" src="@/pictures/logoLogin.png" alt="logo login">
                <div id="textLogIn">Register</div>
                <div class="input">
                    Chief Or Not ?<br>
                    <select class="select" name="format" id="formatYN" v-model="yesorno">
                                <option value="Oui">Oui</option>
                                <option value="Non">Non</option>
                    </select><br>
                    <button type="submit" id="button" @click.prevent="yesOrNo">Continue</button><br>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import global from "../global.js"
export default {
    name:'loginChiefOrNot',
    data(){
        return{
            yesorno:'',
        }
    },
    methods:{
        yesOrNo(){
            global.state.ChiefOrNot = this.yesorno;
            if(this.yesorno == "Oui"){
                this.$router.push('/registerationchief')
            }
            else{
                this.$router.push('/registerationuser');
            }
                

        }
    }
}
</script>

<style>
#formatYN{
    width:20%;
}

</style>
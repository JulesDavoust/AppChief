<template>
    <article class="block">
  <div class="filter">
        <input type="radio" name="food" value="italian"/>Italian<br><br>
        <input type="radio" name="food" value="African"/>African<br><br>
        <input type="radio" name="food" value="Greek"/>Greek<br><br>
        <input type="radio" name="food" value="Mediterranean"/>Mediterranean<br><br>
        <input type="radio" name="food" value="Portugese"/>Portugese<br><br>
        <input type="radio" name="food" value="Thai"/>Thai<br><br>
        <input type="radio" name="food" value="Spanich"/>Spanich<br><br>
        <input type="radio" name="food" value="Oriental"/>Oriental<br><br>
        <input type="radio" name="food" value="German"/>German<br><br>
        <input type="radio" name="food" value="French"/>French<br><br>
        <input type="radio" name="food" value="Indian"/>Indian<br><br>
        <input type="radio" name="food" value="Others"/>Others<br><br>
  </div>
    </article>
</template>

<script>
export default {
    data() {
        return {
            filters: [
            { id:"1" , filtern :'Italian'},
            { id:"2" , filtern :'Russian'},
            { id:"3" , filtern :'French'},
            { id:"4" , filtern :'Japanese'},
            { id:"5" , filtern :'Chinese'}

        ]
        }
    },
}



</script>

<style>

</style> 

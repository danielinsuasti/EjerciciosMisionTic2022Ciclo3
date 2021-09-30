<template>
    <div class="card" style="width: 18rem;">
        <img src="https://miro.medium.com/max/2560/1*Ht8T-vqbqy5iG7FzNQGjFA.png" alt="">
        <div class="card-body">
            <h5>Picture: {{codigo}} </h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <router-link 
            :to="{name: 'service', params: {id: codigo}}" 
            class="btn btn-block bg-warning">Go to {{codigo}}
        </router-link>
    </div>
</template>
<script>
export default {
    name: 'Card',
    props: ['codigo'],
    computed: {
        imagen: function(){
            return 'https://source.unsplash.com/collection/' + this.codigo
        }
    }
}
</script>

<style scoped>
    img {
        height: 150px;
    }
</style>
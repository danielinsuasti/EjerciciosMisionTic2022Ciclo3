<template>
  <div class="container">
    <h2 class="m-3">Service: {{$route.params.id}}</h2>
    <div class="card mt-3">
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <img src="https://miro.medium.com/max/2560/1*Ht8T-vqbqy5iG7FzNQGjFA.png" alt />
          </div>
          <div class="col-md-6">
            <h2>This is the service {{$route.params.id}}.</h2>
            <p>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="card mt-3">
        <div class="card-body">
            <button @click="back" class="btn btn-warning">Back</button>
            <button @click="home" class="btn btn-success ml-2">Home</button>
        </div>
    </div>
  </div>
</template>
<script>
export default {
    name: 'Service',
    methods: {
        back(){
            this.$router.go(-1)
        },
        home(){
            this.$router.push('/')
        }
    }
};
</script>
<style scoped>
img {
  width: 100%;
}
</style>
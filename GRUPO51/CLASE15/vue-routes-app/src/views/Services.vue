<template>
  <div>
    <div class="container">

        <h2 class="m-3">Services</h2>

        <div class="row row-cols-1 row-cols-md-3">
            <div class="col mb-4">
                <Card codigo="1" />
            </div>
            <div class="col mb-4">
                <Card codigo="2" />
            </div>
            <div class="col mb-4">
                <Card codigo="3" />
            </div>
            <div class="col mb-4">
                <Card codigo="4" />
            </div>
            <div class="col mb-4">
                <Card codigo="5" />
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import Card from '@/components/Card.vue'
export default {
    name: 'Services',
    components: {
        Card
    }
}
</script>

<template>
    <div>
        <Navbar/>
        <Pokemon/>
    </div>
</template>
<script>
import Navbar from '~/components/Navbar.vue'
import Pokemon from '~/components/Pokemon.vue'
export default {
  components: {
    Navbar,
    Pokemon
  }
}
</script>
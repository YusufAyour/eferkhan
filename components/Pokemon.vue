<template>
    <div class="father">
        <div class="son" v-for="item in elems">
            <div>
                <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img :src="'pokemons/'+item.id+'.png'" alt="">
                    </div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title">{{item.id}}</h3>
                        <p>{{item.content}}.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
     data() {
      return {
       elems : this.$store.state.pokemon.all
      }
    },
    computed: {
     
    }
}
</script>
<style scoped>
    .father{
        width: 90%;
        margin: 0 auto;
        display: flex;
    }
    .son{
        width: calc(100% / 3);
        padding: 5%;
    }
</style>
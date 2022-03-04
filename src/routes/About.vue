<template lang="">
    <div class="about">
        <div class="photo">
            <Loader v-if="imageLoading"
              absoulte />
            <img :src="image" alt="name" />
        </div>
        <div class="name">
            {{name}}
        </div>
        <div>{{email}}</div>
        <a>{{github}}</a>
        
    </div>
</template>
<script>
import Loader from '~/components/Loader'
import {mapState} from 'vuex'
export default {
    components: {
        Loader,
    },
    data() {
        return {
            imageLoading: false
        }
    },
    computed: {
        ...mapState('about',[
            'image',
            'name',
            'email',
            'github',
        ]),
        

    },
    mounted () {
        this.init();
    },
    methods: {
        async init() {
            await this.$loadImage(this.image)
            this.imageLoading = false
        }
    },
}
</script>
<style lang="scss" scoped>
//@import '~/scss/main';
.about {
  text-align: center;
  .photo {
    width: 250px;
    height: 250px;
    margin: 40px auto 20px;
    padding: 30px;
    border: 10px solid $gray-300;
    border-radius: 10%;
    box-sizing: border-box;
    background-color: $gray-200;
    position: relative;
    img {
      width: 100%;
    }
  }
  .name {
    font-size: 40px;
    font-family: "Oswald", sans-serif;
    margin-bottom: 20px;
  }
}
</style>
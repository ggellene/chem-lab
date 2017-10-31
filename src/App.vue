<template>
    <div class="eg-slideshow">
      <!--<div id="main-img">-->
        <!--<img v-bind:src="imageSrc" title="Chemistry Cat cat demonstrates how to wear protective safety glasses."/>-->
      <!--</div>-->
      <!--<div id="main-content">{{content}}</div>-->

    <slide v-for="(slide, index) in slideList">
      <div class="main-img">
        <img v-bind:src="slide.image"/>
      </div>
      <div class="main-content">This content will be fetched from {{slide.note}}</div>
      <button v-if="index !== 0" class="prev" @click.stop="previousSlide">
        &lt; Prev. slide
      </button>
      <button v-if="index < slideList.length - 1" class="next" @click.stop="nextSlide">
        Next slide &gt;
      </button>
    </slide>
  </div>
</template>

<script>
  import eagle from 'eagle.js';

  export default {
    name: 'app',
    components: {},
    props: ['contentRoot', 'images', 'notes'],
    data() {
      return {
        content: 'this is just some static text'
      }
    },
    computed: {
      imageList: function () {
        return this.images.split(',');
      },
      noteList: function () {
        return this.notes.split(',');
      },
      imageSrc: function () {
        return `/${this.contentRoot}/${this.images}`
      },
      noteSrc: function () {
        return `/${this.contentRoot}/${this.notes}`
      },
      slideList: function () {
        if(this.imageList.length !== this.noteList.length) {
          return [{note: 'The list of notes must be the same length as the list of images. ' +
          'You may have blank elements in either list by adding additional commas: "file,,file,etc"'}];
        }

        return this.imageList.map((image, index) => {
          return {
            image: `/${this.contentRoot}/${image}`,
            note: `/${this.contentRoot}/${this.noteList[index]}`
          }
        })
      }
    },
    methods: {},
    mixins: [eagle.slideshow]
//    created() {
//      fetch(this.noteSrc)
//        .then((response) => {
//          if (!response.ok) {
//            return this.content = 'There was a problem loading the lesson text';
//          }
//          return response.text();
//        })
//        .then((text) => {
//          this.content = text;
//
//        })
//    }
  }
</script>

<style>
  .main-img {
    max-width: 40%;
    float: left;
  }

  .main-img img {
    max-width: 100%;
    max-height: 100%;
  }

  .main-content {
    width: calc(60% - 1rem);
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    max-height: 100%;
    float: left;
    padding-left: 1em;
    padding-right: 1em;
    padding-top: 1em;
    overflow: scroll;
    overflow-x: hidden;
  }

  #app {
    width: 100%;
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>

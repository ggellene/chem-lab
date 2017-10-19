<template>
  <div id="app">
    <div id="main-img">
      <img src="./assets/sample.jpg" title="Chemistry Cat cat demonstrates how to wear protective safety glasses."/>
    </div>
    <div id="main-content">{{content}}</div>
  </div>
</template>

<script>

  export default {
    name: 'app',
    components: {},
    data () {
      return {
        content: 'this is just some static text'
      }
    },
    created () {
      fetch('/static/sample.txt')
        .then((response) => {
          if(!response.ok){
            return this.content = 'There was a problem loading the lesson text';
          }
          return response.text();
        })
        .then((text) => {
          this.content = text;

        })
    }
  }
</script>

<style>
  #main-img {
    max-width: 40%;
    float: left;
  }

  #main-img img {
    max-width: 100%;
    max-height: 100%;
  }

  #main-content {
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
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    /*color: #2c3e50;*/
    /*margin-top: 60px;*/
    /*float: left;*/
  }
</style>

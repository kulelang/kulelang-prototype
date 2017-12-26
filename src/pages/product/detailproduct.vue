<template>
  <f7-page class="bg">
        <f7-navbar>
            <f7-nav-left >
                <f7-link icon="icon-bars" open-panel="left"></f7-link>
                <p>diisi nama barang yg dipilih</p>
            </f7-nav-left>

            <f7-nav-right class="padding-right">
                <f7-link href="/search/">
                    <f7-icon ion="search"></f7-icon>
                </f7-link>
                <f7-link href="/cart/">
                    <f7-icon ion="android-cart"></f7-icon>
                </f7-link> 
            </f7-nav-right>
        </f7-navbar>
            <!-- Left Panel with Reveal effect -->
        <f7-panel left >
            <!-- Left panel content goes here -->
            <div class="content-block">
                 <!-- <p>Left Panel content here</p>
                    <p><a href="#" class="panel-close">Close me</a>
                 </p> -->
                 <f7-link close-panel>Close Panel</f7-link>
            </div>
        </f7-panel>

         <!-- ini buat semacam header dibawah -->
        <f7-toolbar bottom tabbed tabbar inner>
            <toolbar></toolbar>
        </f7-toolbar>
        
      <h1>hai ini detail produk</h1>

id="app"
      <div  >
              <div v-if="!image">
                <h2>Select an image</h2>
                <input type="file" @change="onFileChange">
              </div>
              <div v-else>
                <img :src="image" />
                <button @click="removeImage">Remove image</button>
              </div>
            </div>


  </f7-page>
</template>

<style>
  .round{
    border-radius: 30px;
    height: 30px;
    width: 30px;

  }
  
  .img {
    width: 300px;
    height: 300px;
    margin: auto;
    display: block;
    margin-bottom: 10px;
  }
  .button {
    
  }
</style>

<script>
import Toolbar from '../../components/Toolbar'

export default {
  name: 'DetailBarang',
  components : {
      'toolbar' : Toolbar
  },
  data: {
    image: ''
  },
  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function (e) {
      this.image = '';
    }
  }
}

</script>
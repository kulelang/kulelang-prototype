<template>
  <f7-page class="bg">
        <f7-navbar back-link="Kembali">
            <f7-nav-right class="padding-right">
                <f7-link href="/search/">
                    <f7-icon ion="search"></f7-icon>
                </f7-link>
                <f7-link href="/cart/">
                    <f7-icon ion="android-cart"></f7-icon>
                </f7-link> 
            </f7-nav-right>
        </f7-navbar>

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

export default {
  name: 'DetailBarang',
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
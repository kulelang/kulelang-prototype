
<template>
  <f7-page>
    <f7-navbar back-link="Kembali">
      <f7-nav-right class="padding-right">
        <f7-link href="#" data-popup=".test">
          <f7-icon ion="share "></f7-icon>
        </f7-link>
      </f7-nav-right>
    </f7-navbar>

    <!-- Popup -->
<f7-popup class="test">
  <!-- Popup content goes here -->
  <h1>Test</h1>
</f7-popup>
  
    <div class="bid__detail">
      <h1>Detail Lelang</h1>
      <div class="row">
        <div class="col-55">
          <div class="item-media">
            <img src="https://png.icons8.com/nolan/64/000000/lego-head.png">
          </div>
        </div>
        <div class="col-40">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum aliquam, rem dolores asperiores. Atque, iste, ad.</p>
          <a href="">
            <i class="ion-ios-stopwatch-outline"></i>
            Batas : 1 Hari 2 Jam
          </a>
          <br>
           <f7-buttons>
            <f7-button fill color="green">
              Open : Rp. xxxx
            </f7-button>
          </f7-buttons>
          &nbsp;
          <f7-buttons>
            <f7-button fill color="pink">
              Up : Rp. xxxx
            </f7-button>
          </f7-buttons>
        </div>
        <div class="col-100">
          Iki Digae Diskusi
        </div>
      </div>
    </div>
  
  </f7-page>
</template>

<style>
  .round {
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
  
  .bid__detail {
    margin: 20px;
    align-items: center;
    color: #666;
  }
</style>

<script>
  export default {
    name: 'DetailBarang',
  
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
      removeImage: function(e) {
        this.image = '';
      }
    }
  }
</script>

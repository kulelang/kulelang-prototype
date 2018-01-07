<template>
  <f7-page class="bg">
     <f7-navbar>
            <f7-nav-left icon="icon-bars" back-link="Kembali">
            </f7-nav-left>
            <f7-nav-right class="padding-right">
                <f7-link href="/home/">
                    <f7-icon ion="checkmark"></f7-icon>
                </f7-link>
        </f7-nav-right>
      </f7-navbar>
       <f7-card>
        <f7-card-header class="fontbold">Edit Profile</f7-card-header>
        <f7-card-content>
            <f7-list form class="font">
              <f7-list-item>
                <f7-label>Email</f7-label>
                <f7-input type="email" placeholder="Email" disabled></f7-input>
              </f7-list-item>
              <f7-list-item>
                <f7-label>Nama</f7-label>
                <f7-input type="text" placeholder="Nama"></f7-input>
              </f7-list-item>
              <f7-list-item>
                <f7-label>No Handphone</f7-label>
                <f7-input type="number" placeholder="nomor HP"></f7-input>
              </f7-list-item>
              <f7-list-item>
                <f7-label>Provinsi</f7-label>
                          <f7-input type="select" >
                            <option value="" disabled>--Pilih Provinsi--</option>
                            <option value="1">Male</option>
                            <option value="1">Female</option>
                          </f7-input>
              </f7-list-item>
              <f7-list-item>
                 <f7-label>Kota/Kab</f7-label>
                          <f7-input type="select" >
                            <option value="" disabled>--Pilih Kota/Kab--</option>
                            <option value="1">Male</option>
                            <option value="1">Female</option>
                          </f7-input>
              </f7-list-item>
              <f7-list-item>
                <f7-label>Kecamatan</f7-label>
                        
                          <f7-input type="select" >
                            <option value="" disabled>--Pilih Sub Kecamatan--</option>
                            <option value="1">Male</option>
                            <option value="1">Female</option>
                          </f7-input>
              </f7-list-item>
              <f7-list-item>
                <f7-label>Alamat</f7-label>
                <f7-input type="text" placeholder="Alamat"></f7-input>
              </f7-list-item>
              <f7-list-item>
                <f7-label>Kode POS</f7-label>
                <f7-input type="number" placeholder="Kode Pos" ></f7-input>
              </f7-list-item>
              <f7-list-item>
                <f7-label>Profile</f7-label>
                <!-- <div> -->
                  <div v-if="!image">
                    <input type="file" @change="onFileChange">
                  </div>
                  <div v-else>
                    <img :src="image" />
                    <button @click="removeImage">Remove image</button>
                  </div>
                <!-- </div> -->
              </f7-list-item>
              
           </f7-list>
        </f7-card-content>
        <f7-card-footer>
          <f7-button color="pink" block href="/Profile/">Simpan</f7-button>
          <f7-button color="blue" block href="/main/">Tidak</f7-button>
        </f7-card-footer>
      </f7-card>


    
  </f7-page>
</template>

<script>
  import Toolbar from '../../components/Toolbar'

  export default {
    name: 'EditProfile',
    components : {
        'toolbar' : Toolbar
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

<style>

  .fontbold{
    font-size: 15px;
    font-weight: bold
  }
  .font{
    font-size: 12px
  }
  .button {
    margin:0 auto; /* this will center  it */
  }
</style>

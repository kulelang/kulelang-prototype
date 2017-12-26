<template>
<f7-page class="bg">
    <f7-navbar >
            <f7-nav-left>
                <f7-link icon="icon-bars" open-panel="left"></f7-link>
                <p>Buat Barang Lelang</p>
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
        <f7-panel left cover>
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

        <f7-card>
            <f7-card-header class="fontbold">Anda Ingin Lelang Apa Hari Ini?</f7-card-header>
            <f7-card-content>
                <f7-list>
                    <f7-list-item>
                        <f7-label>Nama Produk *</f7-label>
                        <f7-input type="text" placeholder="Masukkan nama produk" ></f7-input>
                    </f7-list-item>
                    <f7-list-item>
                        <f7-label>Kategori</f7-label>
                          <f7-input type="select" >
                            <option value="" disabled>--Pilih Kategori--</option>
                            <option value="1">Brick</option>
                            <option value="1">Action Figures</option>
                            <option value="1">Model Kit</option>
                            <option value="1">Action Figures</option>
                            <option value="1">Plush</option>
                            <option value="1">DieCast</option>
                            <option value="1">Radio Control</option>
                            <option value="1">Card</option>
                            <option value="1">Tools & Material</option>
                            <option value="1">Lainnya</option>
                          </f7-input>
                          <f7-input type="select" >
                            <option value="" disabled>--Pilih Sub Kategori--</option>
                            <option value="1">Male</option>
                            <option value="1">Female</option>
                          </f7-input>
                    </f7-list-item>
                </f7-list>
            </f7-card-content>
        </f7-card>

        <f7-card>
          <f7-card-header class="fontbold">Gambar Produk</f7-card-header>
          <f7-card-content>
            <div >
              <div v-if="!image">
                <h2>Select an image</h2>
                <input type="file" @change="onFileChange">
              </div>
              <div v-else>
                <img :src="image" />
                <button @click="removeImage">Remove image</button>
              </div>
            </div>
           
          </f7-card-content>
        </f7-card>

        <f7-card>
          <f7-card-header class="fontbold">Detail Produk</f7-card-header>
          <f7-card-content>
            <f7-list>
              <f7-list-item>
                <f7-label>Deskripsi</f7-label>
                <textarea rows="4" cols="50" placeholder="textarea" style="border:1px solid grey"></textarea>
              </f7-list-item>
            </f7-list>
            
            <f7-list>
              <f7-list-item>
                <f7-label>Berat</f7-label>
                <f7-input type="number" placeholder="dalam satuan gram" ></f7-input>
                 <f7-label>gram</f7-label>
              </f7-list-item>
            </f7-list> 
             
             <f7-list>
              <f7-list-item >
                <f7-label>Kondisi</f7-label>
                <f7-list-item checkbox name="my-checkbox" value="1">Baru</f7-list-item>
                <f7-list-item checkbox name="my-checkbox" value="2">Bekas</f7-list-item>
              </f7-list-item>
            </f7-list> 
            
          </f7-card-content>
        </f7-card>

        <f7-card>
          <f7-card-header class="fontbold">Sistem Lelang</f7-card-header>
          <f7-card-content>
             <f7-list>
              <f7-list-item>
                <f7-label>Waktu Lelang</f7-label>
                <f7-input type="date" placeholder="Tanggal Mulai" value="2014-04-30"></f7-input>
                <f7-input type="time" placeholder="Jam Mulai" value="2014-04-30"></f7-input>
              </f7-list-item>
            </f7-list> 

            <f7-list>
              <f7-list-item>
                <f7-label>Waktu Berakhir</f7-label>
                <f7-input type="date" placeholder="Tanggal Berakhir" value="2014-04-30"></f7-input>
                <f7-input type="time" placeholder="Jam Berakhir" value="2014-04-30"></f7-input>
              </f7-list-item>
            </f7-list> 

            <f7-list>
              <f7-list-item>
                <f7-label>Open Bid (OB) (Rp)</f7-label>
                <f7-input type="number" placeholder="Masukkan Open Bid (OB)" ></f7-input>
              </f7-list-item>
            </f7-list> 

            <f7-list>
              <f7-list-item>
                <f7-label>Up Bid (UB) (Rp)</f7-label>
                <f7-input type="number" placeholder="Masukkan Up Bid (UB) (Rp)" ></f7-input>
              </f7-list-item>
            </f7-list> 

            <f7-list>
              <f7-list-item>
                <f7-label>Buy It Now (BIN) (Rp)</f7-label>
                <f7-input type="number" placeholder="Masukkan Buy It Now (BIN)" ></f7-input>
              </f7-list-item>
            </f7-list> 

          </f7-card-content>
        </f7-card>

        
          <f7-button round color="green" fill  href="#">Buat Lelang</f7-button>
          <br>
          <f7-button round color="red" fill  href="#">Batal</f7-button>
        



</f7-page>
</template>

<script>
import Toolbar from '../../components/Toolbar'

export default {
  name: 'InsertProduct',
  components : {
      'toolbar' : Toolbar
  },
  // new Vue({
  // el: '#app',
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
// })
}
</script>

<style>
  .round{
    border-radius: 30px;
    height: 30px;
    width: 30px;

  }
  
  .img {
    width: 30%;
    margin: auto;
    display: block;
    margin-bottom: 10px;
  }
  .button {
    
  }
</style>


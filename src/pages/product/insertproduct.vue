<template>
  <f7-page class="bg">
    <f7-navbar>
      <f7-nav-left icon="icon-bars" back-link="Kembali">
      </f7-nav-left>
    </f7-navbar>
    <f7-card>
      <f7-card-header class="fontbold">Anda Ingin Lelang Apa Hari Ini?</f7-card-header>
      <f7-card-content>
        <f7-list>
          <f7-list-item>
            <f7-label>Nama Produk *</f7-label>
            <f7-input type="text" placeholder="Masukkan nama produk"></f7-input>
          </f7-list-item>
          <f7-list-item>
            <f7-label>Kategori</f7-label>
            <f7-input type="select">
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
            <f7-input type="select">
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
        <!-- <div>
                    <div v-if="!image">
                      <h2>Select an image</h2>
                      <input type="file" @change="onFileChange">
                    </div>
                    <div v-else>
                      <img :src="image" />
                      <button @click="removeImage">Remove image</button>
                    </div> -->
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
            <f7-input type="number" placeholder="dalam satuan gram"></f7-input>
            <f7-label>gram</f7-label>
          </f7-list-item>
        </f7-list>
  
        <f7-list>
          <f7-list-item>
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
            <f7-input type="number" placeholder="Masukkan Open Bid (OB)"></f7-input>
          </f7-list-item>
        </f7-list>
  
        <f7-list>
          <f7-list-item>
            <f7-label>Up Bid (UB) (Rp)</f7-label>
            <f7-input type="number" placeholder="Masukkan Up Bid (UB) (Rp)"></f7-input>
          </f7-list-item>
        </f7-list>
  
        <f7-list>
          <f7-list-item>
            <f7-label>Buy It Now (BIN) (Rp)</f7-label>
            <f7-input type="number" placeholder="Masukkan Buy It Now (BIN)"></f7-input>
          </f7-list-item>
        </f7-list>
  
        <f7-list>
          <div class="btn__fr">
            <f7-button round color="green" fill href="#">Buat Lelang</f7-button>
            <!-- <f7-button round color="red" fill href="#">Batal</f7-button> -->
          </div>
        </f7-list>
  
      </f7-card-content>
    </f7-card>
  </f7-page>
</template>

<script>
  import Datepicker from 'vue-material-datepicker'
  
  export default {
    name: 'InsertProduct',
    components: {
      datepicker: Datepicker
    }
  }
</script>

<style>
  .btn__fr {
    padding: 10px;
  }
  
  .round {
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
</style>


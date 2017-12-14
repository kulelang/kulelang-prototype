<template>
<f7-page>
    <f7-navbar title="Kulelang">
        <f7-nav-right>
            <f7-link icon="icon-bars" open-panel="right"></f7-link>
        </f7-nav-right>
    </f7-navbar>


  <!-- ini buat semacam header dibawah -->
        <f7-toolbar bottom tabbed tabbar inner>
            <f7-link href="/main" active>
                <f7-icon ion="android-home" size="22px"></f7-icon>
            </f7-link>
            <f7-link href="/progress/">
                <f7-icon ion="android-time" size="22px"></f7-icon>
            </f7-link>
            <f7-link href="/about/">
                <f7-icon ion="information-circled" size="22px"></f7-icon>
            </f7-link>
            <f7-link href="/profile/">
                <f7-icon ion="android-person" size="22px"></f7-icon>
            </f7-link>
        </f7-toolbar>

<f7-list>
    
        <h2>Buat Lelang</h2>

</f7-list>
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
            <f7-list class="list__margin">
            <f7-list-item>
                <div class="square"></div>
                 <div class="square"></div>
                <div class="title">Add Image</div>             
            </f7-list-item>
             <f7-link text="Hapus" color="blue"></f7-link>
        </f7-list>
           
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
             
             <f7-list form>
              <f7-list-item >
                <f7-label>Kondisi</f7-label>
                <f7-list-item checkbox name="my-checkbox" value="1" title="Baru"></f7-list-item>
                <f7-list-item checkbox name="my-checkbox" value="2" title="Bekas"></f7-list-item>
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

        <f7-card>
          <f7-button round color="green" fill  href="#">Buat Lelang</f7-button>
          <br>
          <f7-button round color="red" fill  href="#">Batal</f7-button>
        </f7-card>


<!-- <div id='example-3'>
  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
  <label for="jack">Jack</label>
  <input type="checkbox" id="john" value="John" v-model="checkedNames">
  <label for="john">John</label>
  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
  <label for="mike">Mike</label>
  <br>
  <span>Checked names: {{ checkedNames }}</span>
</div> -->


</f7-page>
</template>

<script>
export default {
    name:'Insertproduct'
}

  // export default {
  //   data: function () {
  //     return {
  //       sorting: false,
  //       items: [1, 2, 3, 4, 5]
  //     }
  //   },
  //   methods: {
  //     onOpen: function () {
  //       this.sorting = !this.sorting;
  //     },
  //     onClose: function () {
  //       this.sorting = !this.sorting;
  //     },
  //     onSort: function (event, indexes) {
  //         console.log('sort', indexes);
  //     },
  //   }
  // }
</script>

<style>
  .round{
    border-radius: 30px;
    height: 30px;
    width: 30px;

  }
</style>


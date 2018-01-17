// menampilkan profile
<template>
  <f7-page class="bg">
     <f7-navbar>
            <f7-nav-left icon="icon-bars" back-link="Kembali">
            </f7-nav-left>
      </f7-navbar>

       <f7-card>
        <f7-card-header class="fontbold">Edit Alamat</f7-card-header>
        <f7-card-content>
            <f7-list form class="font">
              <f7-list-item>
                <f7-input type="text" placeholder="Nama"></f7-input>
              </f7-list-item>
              <f7-list-item>
                <f7-input type="number" placeholder="nomor HP"></f7-input>
              </f7-list-item>
              <f7-list-item>
                <f7-input type="number" placeholder="nomor HP lainnya"></f7-input>
              </f7-list-item>
              <f7-list-item>
                <f7-input type="text" placeholder="Alamat"></f7-input>
              </f7-list-item>
              <f7-list-item>
                <f7-input type="text" placeholder="Provinsi"></f7-input>
              </f7-list-item>
              <f7-list-item>
                <f7-input type="text" placeholder="Kota"></f7-input>
              </f7-list-item>
              <f7-list-item>
                <f7-input type="text" placeholder="Kecamatan"></f7-input>
              </f7-list-item>
              <f7-list-item>
                <f7-input type="number" placeholder="Kode Pos" ></f7-input>
              </f7-list-item>
              
           </f7-list>
        </f7-card-content>
        <f7-card-footer>
          <f7-button round color="pink" fill class="round" href="/Profile/">Simpan</f7-button>
          <f7-button round color="blue" fill class="round" href="/main/">Tidak</f7-button>
        </f7-card-footer>
        <f7-card-footer>
          
          
        </f7-card-footer>
      </f7-card>


    
  </f7-page>
</template>

<script>
  export default {
    name: 'TambahAlamat',
}

</script>

<style>
  .round{
    border-radius: 30px;
    width: auto;
    height: auto;
  }
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
  .padding-right{
    padding-right: 10px;
  }
</style>

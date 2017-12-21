// menampilkan profile
<template>
  <f7-page>
     <f7-navbar >
            <f7-nav-left>
                <f7-link icon="icon-bars" open-panel="left"></f7-link>
                <p>Tambah Alamat</p>
            </f7-nav-left>
            <f7-nav-right class="padding-right">
              <f7-link href="/main/">
                <f7-icon ion="android-search" size="22px"></f7-icon>
              </f7-link>
              <f7-link href="/main/">
                <f7-icon ion="android-cart" size="22px"></f7-icon>
              </f7-link>
            </f7-nav-right>
            
        </f7-navbar>
            <!-- Left Panel with Reveal effect -->
        <f7-panel left cover>
            <!-- Left panel content goes here -->
            <div class="content-block">
                 <p>Left Panel content here</p>
                    <p><a href="#" class="panel-close">Close me</a>
                 </p>
            </div>
        </f7-panel>

      <f7-toolbar bottom tabbed tabbar inner>
            <f7-link href="/main/">
                <f7-icon ion="android-home" size="22px"></f7-icon>
            </f7-link>
            <f7-link href="/progress/">
                <f7-icon ion="android-time" size="22px"></f7-icon>
            </f7-link>
            <f7-link href="/about/">
                <f7-icon ion="help-circled" size="22px"></f7-icon>
            </f7-link>
            <f7-link href="/profile/">
                <f7-icon ion="android-person" size="22px"></f7-icon>
            </f7-link>
        </f7-toolbar>

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
          <f7-button round color="pink" fill class="round" href="/profile/">Simpan</f7-button>
          <f7-button round color="blue" fill class="round" href="/main/">Tidak</f7-button>
        </f7-card-footer>
        <f7-card-footer>
          
          
        </f7-card-footer>
      </f7-card>


    
  </f7-page>
</template>

<script>
  export default {
        name:'TambahAlamat'
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

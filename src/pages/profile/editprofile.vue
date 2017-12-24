// menampilkan profile
<template>
  <f7-page class="bg">
     <f7-navbar >
            <f7-nav-left>
                <f7-link icon="icon-bars" open-panel="left"></f7-link>
                <p>Detail</p>
            </f7-nav-left>
            
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
        <toolbar></toolbar>
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
          <f7-button color="pink" fill href="/profile/">Simpan</f7-button>
          <f7-button color="blue" fill href="/main/">Tidak</f7-button>
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

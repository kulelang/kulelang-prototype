// menampilkan profile
<template>
  <f7-page class="bg">
     <f7-navbar >
            <f7-nav-left>
                <f7-link icon="icon-bars" open-panel="left"></f7-link>
                <p>Akun Saya</p>
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
        <f7-card-header class="fontbold">Informasi Akun</f7-card-header>
        <f7-card-content>
            <f7-list form class="font">
              <f7-list-item>
                <f7-label>E-mail</f7-label>
                <f7-input type="email" placeholder="E-mail" disabled></f7-input>
              </f7-list-item>
              <f7-list-item>
                <f7-label>Name</f7-label>
                <f7-input type="text" placeholder="Name" disabled></f7-input>
              </f7-list-item>
              <f7-list-item>
                <f7-label>Birth date</f7-label>
                <f7-input type="date" placeholder="Birth date" value="2014-04-30" disabled></f7-input>
              </f7-list-item>
           </f7-list>
        </f7-card-content>
        <f7-card-footer>
          <f7-button round color="pink" fill  href="/editkontak/">Ubah</f7-button>
        </f7-card-footer>
      </f7-card>

       <f7-card>
        <f7-card-header class="fontbold">Alamat Penagihan & Pengiriman</f7-card-header>
        <f7-card-content>
            <f7-list form class="font">
              <f7-list-item>
                <f7-label>Nama</f7-label>
                <f7-input type="text" placeholder="Nama" disabled ></f7-input>
              </f7-list-item>
              <f7-list-item>
                <f7-label>Alamat</f7-label>
                <f7-input type="text" placeholder="Alamat" disabled></f7-input>
              </f7-list-item>
              <f7-list-item>
                <f7-label>Nomor HP</f7-label>
                <f7-input type="number" placeholder="nomor HP" disabled></f7-input>
              </f7-list-item>
              <f7-list-item>
                <f7-label>Nomor HP lainnya</f7-label>
                <f7-input type="number" placeholder="nomor HP lainnya" disabled></f7-input>
              </f7-list-item>
           </f7-list>
        </f7-card-content>
        <f7-card-footer>
          <f7-button color="pink" fill  href="/editprofile/">Ubah</f7-button>
          <f7-button color="blue" fill  href="/tambahalamat/">Tambah Alamat Baru</f7-button>
        </f7-card-footer>
      
      </f7-card>

    
  </f7-page>
</template>

<script>
import Toolbar from '../../components/Toolbar'

export default {
  name: 'Profile',
  components : {
      'toolbar' : Toolbar
  }
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
</style>

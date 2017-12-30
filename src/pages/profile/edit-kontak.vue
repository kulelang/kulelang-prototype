// menampilkan profile
<template>
  <f7-page class="bg">
      <f7-navbar>
            <f7-nav-left icon="icon-bars" back-link="Kembali">
            </f7-nav-left>
      </f7-navbar>

      
      <f7-card>
        <f7-card-header class="fontbold">Informasi Kontak</f7-card-header>
        <f7-card-content>
            <f7-list form class="font">
             
              <f7-list-item>
                <f7-input type="text" placeholder="Nama" ></f7-input>
              </f7-list-item>
              <f7-list-item>
                <f7-input type="date" placeholder="Tanggal Lahir" value="2014-04-30" ></f7-input>
              </f7-list-item>
              <f7-list-item>
                  <f7-input type="password" placeholder="Password"></f7-input>
              </f7-list-item>
               <f7-list-item>
                <f7-input type="email" placeholder="E-mail" disabled></f7-input>
              </f7-list-item>
           </f7-list>
        </f7-card-content>
        <f7-card-footer>
          <f7-button  color="pink" fill  href="#">Simpan</f7-button>
          <f7-button color="green" fill  href="/home/">Tidak</f7-button>
        </f7-card-footer>
      </f7-card>
        
  </f7-page>
</template>

<script>
import Toolbar from '../../components/Toolbar'

export default {
  name: 'EditKontak',
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

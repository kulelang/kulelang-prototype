<template>
  <div class="padding bg">
    <f7-card align="center">
      <div class="item-media">
        <img src="https://png.icons8.com/nolan/64/000000/lego-head.png">
      </div>
      <f7-label class="fontbold">Aura Kanza</f7-label>
      <f7-label class="fontitalic">Verified Account
        <f7-icon ion="android-checkmark-circle" size="15px" class="icon-color"></f7-icon>
      </f7-label>
      <a href="/editprofile/" class="btn-setting">
        <f7-icon ion="android-settings" size="24px" class="setting-icon"></f7-icon>
        Atur Profil
      </a>
    </f7-card>
  
    <f7-card>
      <f7-card-header class="fontbold">Data Diri</f7-card-header>
      <f7-card-content>
        <f7-list form class="font">
          <f7-list-item>
            <f7-label>Birth date</f7-label>
            <f7-input type="date" placeholder="Birth date" value="2014-04-30" disabled></f7-input>
          </f7-list-item>
          <f7-list-item>
            <f7-label>Jenis Kelamin</f7-label>
            <f7-input type="text" placeholder="Jenis Kelamin" disabled></f7-input>
          </f7-list-item>
          <f7-list-item>
            <f7-label>E-mail</f7-label>
            <f7-input type="email" placeholder="E-mail" disabled></f7-input>
          </f7-list-item>
          <f7-list-item>
            <f7-label>Nomor Ponsel</f7-label>
            <f7-input type="number" placeholder="Nomor Ponsel" disabled></f7-input>
          </f7-list-item>
        </f7-list>
      </f7-card-content>
      <!-- <f7-card-footer>
            <f7-button round color="blue" block  href="#">Ubah</f7-button>
          </f7-card-footer> -->
    </f7-card>
  
    <f7-card>
      <f7-card-header class="fontbold">
        Toko Saya
      </f7-card-header>
      <div class="list-block media-list bg__list inset">
        <ul>
          <li v-for="item in items" :key="item.id">
            <a href="/detailbarang/" class="item-link item-content">
              <!-- <router-link to="/detailbarang/" class="item-link item-content">Home -->
              <div class="item-media">
                <img src="https://png.icons8.com/nolan/64/000000/lego-head.png">
              </div>
  
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">Aura Kanza</div>
                </div>
                <!-- <div>Open Bid Rp {{ item.open_bid }},-</div> -->
                <br>
              </div>
              <!-- </router-link> -->
            </a>
          </li>
        </ul>
      </div>
    </f7-card>
  
    <f7-card>
      <f7-card-header class="fontbold">Alamat Penagihan & Pengiriman</f7-card-header>
      <f7-card-content>
        <f7-list form class="font">
          <f7-list-item>
            <f7-label>Alamat</f7-label>
            <f7-input type="text" placeholder="Alamat" disabled></f7-input>
          </f7-list-item>
        </f7-list>
      </f7-card-content>
      <!-- <f7-card-footer>
            <f7-button round color="blue" block  href="#">Ubah</f7-button>
          </f7-card-footer> -->
    </f7-card>
  </div>
</template>

<script>
  export default {
    name: 'Profile',
    data() {
      let objek = [{
        _id: 1,
        name: 'Lego Star Wars',
        open_bid: 20000
      }]
      return {
        items: objek,
        item: ''
      }
    }
  }
</script>

<style>
  .padding {
    padding: 0;
    overflow: auto;
    height: 100%;
    box-sizing: border-box;
  }
  
  .round {
    border-radius: 30px;
    width: auto;
    height: auto;
  }
  
  .fontbold {
    font-size: 16px;
    font-weight: bold
  }
  
  .font {
    font-size: 12px
  }
  
  .jarak {
    padding-top: 10px;
  }
  
  .fontitalic {
    font-style: italic;
    font-size: 11px;
  }
  
  .icon-color {
    color: blue;
  }
  
  .setting-icon {
    color: aliceblue;
  }
  
  .btn-setting {
    background-color: #4CAF50;
    /* Green */
    border: none;
    color: white;
    padding: 2px 60px;
    text-align: center;
    display: inline-block;
    font-size: 12px;
    margin: 4px 2px;
    background-color: white;
    color: black;
    border: 1px solid #D3D4D8;
    border-radius: 12px;
  }
</style>

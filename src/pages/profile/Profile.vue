<template>
<div class="padding">
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
          <f7-button round color="blue" block  href="#">Ubah</f7-button>
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
          <f7-button round color="blue" block  href="#">Ubah</f7-button>
        </f7-card-footer>
      </f7-card>
</div>  

</template>

<script>
export default {
  name: 'Profile',
}

</script>

<style>
  .padding {
    padding: 0;
    overflow: auto;
    height: 100%;
    box-sizing: border-box;
  }

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

  .jarak{
    padding-top: 10px;
  }
</style>

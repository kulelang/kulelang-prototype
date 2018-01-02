<template>
    <div>
        <f7-toolbar top tabbed tabbar>
            <f7-link tab-link="#process">
                <f7-icon ion="android-time" size="20px"></f7-icon>Progress
            </f7-link>
            <f7-link href="">
                <f7-icon ion="android-done" size="22px"></f7-icon>Selesai
            </f7-link>
        </f7-toolbar>
    <div class="padding"></div>
    <div class="list-block media-list inset">
        <div class="card facebook-card">
            <div class="card-header">
                <div class="facebook-avatar"><img src="https://png.icons8.com/nolan/64/000000/lego-head.png"></div>
                <div class="facebook-name"><b>Nama Barang</b></div>
                <div class="facebook-name">Status Barang</div>
                <div class="facebook-name">No Resi</div>
                <div class="facebook-date" >Monday at 2:15 PM</div>
            </div>
            <div class="card-content">
                <div class="card-content-inner">
                <p>Alamat Pengiriman Barang</p>
                </div>
            </div>
        </div>
        
        <div class="card facebook-card">
            <div class="card-header">
                <div class="facebook-avatar"><img src="" width="50" height="50"></div>
                <div class="facebook-name"><b>Nama Barang</b></div>
                <div class="facebook-name">Status Barang</div>
                <div class="facebook-name">No Resi</div>
                <div class="facebook-date" >Monday at 2:15 PM</div>
            </div>
            <div class="card-content">
                <div class="card-content-inner">
                <p>Alamat Pengiriman Barang</p>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<style>
  .bg{
      background-color: #ECECEC;
  }
  .facebook-card .card-header {
    display: block;
    padding: 10px;
  }
  .facebook-card .facebook-avatar {
    float: left;
  }
  .facebook-card .facebook-name {
    margin-left: 80px;
    font-size: 14px;
    font-weight: 500;
  }
  .facebook-card .facebook-date {
    margin-left:80px;
    font-size: 13px;
    color: #8e8e93;
  }
  .facebook-card .card-footer {
    background: #fafafa;
  }
  .facebook-card .card-footer a {
    color: #81848b;
    font-weight: 500;
  }
  .facebook-card .card-content img {
    display: block;
  }
  .facebook-card .card-content-inner {
    padding: 15px 10px;
  }  
  .padding{
      padding-top: 30px;
  }
</style>

<style>
    .btn__floated{
        margin-bottom: 50px;
    }
    .card__margin {
        margin: 10px;
    }
</style>

<script>
export default {
    name : 'Progress',
}
</script>

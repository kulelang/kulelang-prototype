<template>
    <f7-page>
        <f7-navbar >
            <f7-nav-left>
                <f7-link icon="icon-bars" open-panel="left"></f7-link>
                <p>Pesanan</p>
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
            <f7-link href="/main/">
                <f7-icon ion="android-home" size="22px"></f7-icon>
            </f7-link>
            <f7-link tab-link="#progress">
                <f7-icon ion="android-time" size="22px"></f7-icon>
            </f7-link>
            <f7-link href="/about/">
                <f7-icon ion="help-circled" size="22px"></f7-icon>
            </f7-link>
            <f7-link href="/profile/" active>
                <f7-icon ion="android-person" size="22px"></f7-icon>
            </f7-link>
        </f7-toolbar>

        <!-- <f7-navbar back-link="Kembali">
        </f7-navbar> -->
         

        <f7-toolbar top tabbed tabbar>
            <f7-link tab-link="#progress">
                <f7-icon ion="android-time" size="20px"></f7-icon>Progress
            </f7-link>
            <f7-link href="/terkirim/">
                <f7-icon ion="android-done" size="22px"></f7-icon>Selesai
            </f7-link>
        </f7-toolbar>

<br><br><br>
        <!-- <f7-list class="list__margin">
            <f7-list-item>
                <div class="square"></div>    
                <div>Nama Barang</div>
                <div></div>
                <div></div>
            </f7-list-item>
        </f7-list> -->
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
 


        
    </f7-page>  
</template>

<style>
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
</style>

<script>
export default {
  name:'Progress'
}
</script>

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
  name: 'Progress'
}
</script>

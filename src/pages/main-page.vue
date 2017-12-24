<template>
    <f7-page class="bg" >
        <f7-navbar>
            <f7-nav-left >
                <f7-link icon="icon-bars" open-panel="left"></f7-link>
                <p>Halaman Utama</p>
            </f7-nav-left>
            
        </f7-navbar>
            <!-- Left Panel with Reveal effect -->
        <f7-panel left >
            <!-- Left panel content goes here -->
            <div class="content-block">
                 <p>Left Panel content here</p>
                    <p><a href="#" class="panel-close">Close me</a>
                 </p>
            </div>
        </f7-panel>

        <!-- ini buat semacam header dibawah -->
        <f7-toolbar bottom tabbed tabbar inner>
            <f7-link tab-link="#home" active>
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

        
        <f7-fab class="btn__floated" color="orange" href="/insertproduct/">
            <!-- <f7-link href="/insertproduct/"> -->
            <f7-icon icon="icon-plus"></f7-icon>
            <!-- </f7-link> -->
        </f7-fab>

        <!-- <f7-button raised color="orange" fill href="/insertproduct/" class="round">
             <f7-icon icon="icon-plus"></f7-icon>
        </f7-button> -->
        
        <!-- <f7-card href="/insertproduct/">
            <f7-list class="list__margin" >
                <f7-list-item>
                    <a href="/insertproduct/">
                    <div>
                        <img src="#" width="50" height="50">
                    </div>
                    <div class="title">Lego Badman</div>
                    </a>             
                </f7-list-item>
            </f7-list>
        </f7-card>

        <f7-block>
            <f7-list>
                <f7-list-item>
                    <f7-input type="text" placeholder="nama"></f7-input>
                    <f7-button>hai</f7-button>
                </f7-list-item>
            </f7-list>
        </f7-block> -->


<h3 class="padding-left">LELANG HARI INI</h3>
<!-- list-block buat bikin item -->
<div class="list-block media-list bg__list inset">
  <ul>
    <li>
      <a href="/detailbarang/" class="item-link item-content">
        <div class="item-media">
            <img src="#" width="50" height="50" class="padding-right">
        </div>
        <div class="item-inner">
          <div class="item-title-row">
            <div class="item-title">NAMA BARANG</div>
          </div>
          <!-- <div class="item-subtitle">Open Bid</div> -->
          
          <!-- ini open bidnya ngambil data dari item yg di upload -->
          <div>Open Bid Rp 10.000,-</div>
          <br>
        </div>
      </a>
    </li>
  </ul>
</div>

<div class="list-block media-list bg__list inset">
  <ul>
    <li>
      <a href="/detailbarang/" class="item-link item-content">
        <div class="item-media">
            <img src="#" width="50" height="50" class="padding-right">
        </div>
        <div class="item-inner">
          <div class="item-title-row">
            <div class="item-title">NAMA BARANG</div>
          </div>
          <!-- <div class="item-subtitle">Open Bid</div> -->
          
          <!-- ini open bidnya ngambil data dari item yg di upload -->
          <div>Open Bid Rp 10.000,-</div>
          <br>
        </div>
      </a>
    </li>
  </ul>
</div>  


<!-- Media list block has additional "media-list" class -->
<!-- <div class="list-block media-list">
    <ul>
        <li>
            <div class="item-content">
                <div class="item-media">
                    <img src="path/to/img.jpg">
                </div>
                <div class="item-inner">
                    <div class="item-title-row">
                        <div class="item-title">Element title</div>
                        <div class="item-after">Element label</div>
                    </div>
                    <div class="item-subtitle">Subtitle</div>
                    <div class="item-text">Additional description text</div>
                </div>
            </div>
        </li>
    </ul>
</div>   -->

    </f7-page>  

</template>

<style>
    .btn__floated {
        margin-bottom: 50px;
    }
    .list__margin {
        margin: 20px;
    }
    .square{
        background-color: #EEEE;
        padding: 50px;
    }
    .bg {
        background-color:#ECECEC;
    }
    .bg__list{
        background-color: white;
        border: 2px;
        box-shadow: 2px;
        margin-block-end: 1px;
        margin-block-start: 7px;
    }
    .padding-right{
        padding-right: 15px;
    }
    .item-title{
        font-weight: bold;
    }
    .padding-left{
        padding-left: 20px;
        /* border-radius: 25px; */
        border-style: hidden hidden solid hidden;
        border-color: orange;
        padding: 10px;  
        margin-inline-start: 20px;
        margin-inline-end: 20px;
    }
    .center{
        text-align: center;
    }


</style>

<script>
export default {
    name : 'Main'
}

</script>



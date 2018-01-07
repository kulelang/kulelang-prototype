<template>
  <!-- App -->
  <div id="app">
    <!-- Status bar overlay for full screen mode (Cordova or PhoneGap) -->
      <f7-statusbar></f7-statusbar>
      <!-- Views -->
      <f7-views>
        <!-- Your main view, should have "main" prop -->
        <f7-view main>
          <!-- Pages container, because we use fixed navbar and toolbar, it has additional appropriate props -->
          <f7-pages navbar-fixed toolbar-fixed>
            <!-- Initial Page -->
            <f7-page>
              <!-- Top Navbar-->
              <f7-navbar title="Kulelang Id"></f7-navbar>
              <div class="page-content">
                <!-- Slider -->
                <f7-swiper pagination>
                  <f7-swiper-slide>Slide 1 iki wes iso di slide loo cobaen lek gak percaya -->
                      <f7-button class="test" big fill theme="cyan" href="/sign/" active>Go Demo</f7-button>
                  </f7-swiper-slide>
                  <f7-swiper-slide>Slide 2 loo kan isok </f7-swiper-slide>
                  <f7-swiper-slide>Slide 3
                      <f7-button class="test" big fill theme="cyan" href="/signup/" active>Go Demo</f7-button>
                  </f7-swiper-slide>
                  
                </f7-swiper>
            </div>
                  <!-- Gambar Disini -->
            </f7-page>
          </f7-pages>
        </f7-view>
      </f7-views>
  </div>
</template> 

<style>
    .test{
      margin-bottom: 100px;
    }
    .swiper-container {
      height: 100%;
    }
    .swiper-slide {
      background:#fff;
    }
    .swiper-slide span {
      text-align:center;
      display:block;
      margin:20px;
      font-size:21px;
    }

</style>


<script>
export default {
  
}
// var myApp = new Framework7();

// // Init slider and store its instance in mySwiper variable
// var mySwiper = myApp.swiper(".swiper-container", {
//   pagination: ".swiper-pagination"
// });
</script>
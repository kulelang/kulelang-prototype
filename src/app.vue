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
                <div class="swiper-container">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide"><span>Slide 1</span></div>
                    <div class="swiper-slide"><span>Slide 2</span></div>
                    <div class="swiper-slide"><span>Slide 3</span></div>
                    <div class="swiper-slide"><span>Slide 4</span></div>
                  </div>
                  <div class="swiper-pagination"></div>
                </div>
            </div>
                  <!-- Gambar Disini -->
                  <f7-button class="test" big fill theme="cyan" href="/signup/" active>Go Demo</f7-button>

            </f7-page>
          </f7-pages>
        </f7-view>
      </f7-views>
  </div>
</template> 

<style>
    .test{
      margin: 20px;
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
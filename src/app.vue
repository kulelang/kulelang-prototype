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
</style>


<script>
export default {}
</script>
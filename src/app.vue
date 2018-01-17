<template>
  <!-- App -->
  <div id="app">
    <!-- Status bar overlay for full screen mode (Cordova or PhoneGap) -->
    <f7-statusbar></f7-statusbar>
    <!-- Views -->
    <f7-panel left layout="light">
      <f7-navbar title="Menu"></f7-navbar>
      <f7-block>
        <div class="item-media" align="center">
          <img src="https://png.icons8.com/nolan/64/000000/lego-head.png">
        </div>
        <div class="item-media" align="center">
          <f7-badge color="green">Not logged in</f7-badge>
        </div>
        <f7-list>
          <f7-list-item link="#" media="<img style='width: 30px;' src='https://beon.kulelang.id/assets/images/category-icons/bricks.svg'>" title="Masuk">
          </f7-list-item>
          <f7-list-item link="#" media="<img style='width: 30px;' src='https://beon.kulelang.id/assets/images/category-icons/actions.svg'>" title="Daftar">
          </f7-list-item>
          <f7-list-item link="#" media="<img style='width: 30px;' src='https://beon.kulelang.id/assets/images/category-icons/actions.svg'>" title="Produk">
          </f7-list-item>
        </f7-list>
      </f7-block>
    </f7-panel>
    <f7-views>
      <!-- Your main view, should have "main" prop -->
      <f7-view main>
        <!-- Pages container, because we use fixed navbar and toolbar, it has additional appropriate props -->
        <f7-pages navbar-fixed toolbar-fixed>
          <!-- Initial Page -->
          <f7-page>
            <!-- Top Navbar-->
            <f7-navbar>
              <f7-nav-left>
                <f7-link icon="icon-bars" open-panel="left"></f7-link>
              </f7-nav-left>
              <f7-nav-center>My App</f7-nav-center>
              <f7-nav-right class="padding-right">
                <f7-link href="/cart/">
                  <f7-icon ion="android-cart"></f7-icon>
                </f7-link>
              </f7-nav-right>
            </f7-navbar>
            <f7-tabs animated>
              <f7-tab id="home">
                <bid></bid>
              </f7-tab>
              <f7-tab id="search">
                <app-search></app-search>
              </f7-tab>
              <f7-tab id="about">
                <app-about></app-about>
              </f7-tab>
              <f7-tab id="profile">
                <app-profile></app-profile>
              </f7-tab>
            </f7-tabs>
            <f7-toolbar bottom tabbed tabbar inner>
              <f7-link href="#home" tab-link active>
                <f7-icon ion="android-home" size="24px"></f7-icon>
              </f7-link>
              <f7-link href="#search" tab-link>
                <f7-icon ion="android-search" size="24px"></f7-icon>
              </f7-link>
              <f7-link href="#about" tab-link>
                <f7-icon ion="help-circled" size="24px"></f7-icon>
              </f7-link>
              <f7-link href="#profile" tab-link>
                <f7-icon ion="android-person" size="24px"></f7-icon>
              </f7-link>
            </f7-toolbar>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-views>
  </div>
</template>

<style>
  
</style>


<script>
  import Bid from './components/Bid'
  import About from './components/About'
  import Profile from './pages/profile/Profile'
  import Search from './components/Search'  
  
  export default {
    components: {
      'bid': Bid,
      'app-about': About,
      'app-profile': Profile,
      'app-search': Search
    },
  }
</script>

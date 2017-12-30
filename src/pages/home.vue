<template>
  <f7-page tabbar-fixed class="bg">
    <f7-navbar title="Utama" sliding>
        <f7-nav-right class="padding-right">
                <f7-link href="/search/">
                    <f7-icon ion="search"></f7-icon>
                </f7-link>
                <f7-link href="/cart/">
                    <f7-icon ion="android-cart"></f7-icon>
                </f7-link> 
            </f7-nav-right>
    </f7-navbar>

    <f7-tabs animated>
      <f7-tab id="home">
        <bid></bid>
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
      <f7-link href="/process/" >
          <f7-icon ion="android-time" size="24px"></f7-icon>
      </f7-link>
      <f7-link href="#about" tab-link>
          <f7-icon ion="help-circled" size="24px"></f7-icon>
      </f7-link>
      <f7-link href="#profile" tab-link>
          <f7-icon ion="android-person" size="24px"></f7-icon>
      </f7-link>
    </f7-toolbar>

  </f7-page>
</template>

<script>

import Bid from '../components/Bid'
import About from '../components/About'
import Profile from '../pages/profile/Profile'

export default {
    name : 'Home',
    components : {
        'bid': Bid,
        'app-about': About,
        'app-profile': Profile
    }

}
</script>

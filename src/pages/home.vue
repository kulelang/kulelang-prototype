<template>

  <f7-page tabbar-fixed class="bg">
    <f7-panel left layout="light">
        <f7-navbar title="Kategori"></f7-navbar>
            <f7-block>
                <f7-list>
                    <f7-list-item
                        link="/home/"
                        media="<img src='https://png.icons8.com/color/48/lego-head.png' title='Lego Head' width='48' height='48'>"
                        title="Logo">
                    </f7-list-item>
                     <f7-list-item
                        link="/home/"
                        media="<img src='https://png.icons8.com/ios7/50/mobile-suit-gundam.png' title='Mobile Suit Gundam' width='50' height='50'>"
                        title="Gundam">
                    </f7-list-item>
                    <f7-list-item
                        link="/home/"
                        media="<img src='https://png.icons8.com/color/50/000000/lego.png'>"
                        title="Miniatur">
                    </f7-list-item>
                    <f7-list-item
                        link="/home/"
                        media="<img src='https://png.icons8.com/color/48/plush.png' title='Plush' width='48' height='48'>"
                        title="Plush">
                    </f7-list-item>
                    <f7-list-item
                        link="/home/"
                        media="<img src='https://png.icons8.com/color/50/000000/lego.png'>"
                        title="Action Figure">
                    </f7-list-item>
            </f7-list> 
        </f7-block>   
    </f7-panel>  
    
    <f7-navbar>
        <f7-nav-left>
            <f7-button icon="icon-bars" open-panel="left"></f7-button>
        </f7-nav-left>

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
    },
    data(){
        const menu = {
            title : 'Lego',
        }
        return {
            menus : menu
        }
    }

}
</script>

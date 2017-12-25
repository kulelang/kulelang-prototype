<template>
  <f7-page class="bg">
        <f7-toolbar bottom tabbed tabbar inner>
            <toolbar></toolbar>
        </f7-toolbar>
        
      <h1>hai ini detail produk</h1>

      <f7-tabs swipeable>
        <f7-tab id="tab1" active>Tab 1 content...</f7-tab>
        <f7-tab id="tab2">Tab 2 content...</f7-tab>
      </f7-tabs>

      <f7-swiper pagination next-button prev-button scrollbar>
  <f7-swiper-slide>Slide 1</f7-swiper-slide>
  <f7-swiper-slide>Slide 2</f7-swiper-slide>
  <f7-swiper-slide>Slide 3</f7-swiper-slide>
</f7-swiper>
  </f7-page>
</template>

<style>

</style>

<script>
import Toolbar from '../../components/Toolbar'

export default {
  name: 'DetailBarang',
  components : {
      'toolbar' : Toolbar
  }
}

</script>
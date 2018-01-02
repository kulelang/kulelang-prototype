<template>
    <f7-page class="bg" >
        <f7-navbar>
            <f7-nav-left back-link="Kembali">
            </f7-nav-left>
            <f7-nav-right class="padding-right">
            </f7-nav-right>
        </f7-navbar>
            <!-- Left Panel with Reveal effect -->
        <f7-panel left >
            <!-- Left panel content goes here -->
            <div class="content-block">
                 <f7-link close-panel>Close Panel</f7-link>
            </div>
        </f7-panel>

        <h1>HALAMAN SEARCH</h1>
        <div data-page="home" class="page">
  <!-- Search Bar -->
  <form data-search-list=".list-block-search" data-search-in=".item-title" class="searchbar searchbar-init">
    <div class="searchbar-input">
      <input type="search" placeholder="Search"><a href="#" class="searchbar-clear"></a>
    </div><a href="#" class="searchbar-cancel">Cancel</a>
  </form>
 
  <!-- Search Bar overlay -->
  <div class="searchbar-overlay"></div>
 
  <div class="page-content">
    <!-- This block will be displayed if nothing found -->
    <div class="content-block searchbar-not-found">
      <div class="content-block-inner">Nothing found</div>
    </div>
    <!-- This block will be displayed if anything found, and this list block is used a searbar target -->
    <div class="list-block list-block-search searchbar-found">
      <ul>
        <li>
          <a href="#" class="item-link item-content">
            <div class="item-media"><img src="http://lorempixel.com/160/160/people/1" width="80"></div>
            <div class="item-inner">
            <div class="item-title-row">
              <div class="item-title">&nbsp;&nbsp;In your Eyes</div>
              <div class="item-after">Open Bid Rp.2000</div>
            </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>      
    </f7-page>
</template>

<style>

</style>

<script>
export default {
    name : 'Search',

}
</script>
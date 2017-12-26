<template>
    <f7-page class="bg" >
        <f7-navbar>
            <f7-nav-left >
                <f7-link icon="icon-bars" open-panel="left"></f7-link>
                <p>Search</p>
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
            <!-- Left Panel with Reveal effect -->
        <f7-panel left >
            <!-- Left panel content goes here -->
            <div class="content-block">
                 <!-- <p>Left Panel content here</p>
                    <p><a href="#" class="panel-close">Close me</a>
                 </p> -->
                 <f7-link close-panel>Close Panel</f7-link>
            </div>
        </f7-panel>

        <!-- ini buat semacam header dibawah -->
        <f7-toolbar bottom tabbed tabbar inner>
        <base-toolbar></base-toolbar>
        </f7-toolbar>

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
        <li class="item-content">
          <div class="item-inner">
            <div class="item-title">Acura </div>
          </div>
        </li>
        <li class="item-content">
          <div class="item-inner" >
            <div class="item-title" href="/main/">Audi</div>
          </div>
        </li>
        ...
      </ul>
    </div>
  </div>
</div>      
    </f7-page>
</template>

<style>

</style>

<script>
    import Toolbar from '../components/Toolbar'

export default {
    name : 'Search',
    components: {
        'base-toolbar': Toolbar
    },
}
</script>
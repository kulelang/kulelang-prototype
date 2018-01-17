<template>
    <div>
    <div data-page="home">
      <!-- Search Bar -->
      <form data-search-list=".list-block-search" data-search-in=".item-title" class="searchbar searchbar-init">
        <div class="searchbar-input">
          <input type="search" placeholder="Search">
          <a href="#" class="searchbar-clear"></a>
        </div><a href="#" class="searchbar-cancel">Cancel</a>
      </form>
    </div>
    </div>
</template>

<script>
export default {
    name: 'Search'
}
</script>

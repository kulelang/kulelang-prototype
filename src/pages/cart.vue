<template>
    <f7-page class="bg" >
        <f7-navbar>
            <f7-nav-left >
                <f7-link icon="icon-bars" open-panel="left"></f7-link>
                <p>Keranjang Belanja</p>
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


        <h1>HALAMAN CART</h1>
    </f7-page>
</template>

<style>

</style>

<script>
    import Toolbar from '../components/Toolbar'

export default {
    name : 'Cart',
    components: {
        'base-toolbar': Toolbar
    },
}
</script>
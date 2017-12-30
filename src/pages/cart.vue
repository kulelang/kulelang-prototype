<template>
    <f7-page class="bg" >
        <f7-navbar>
            <f7-nav-left back-link="Kembali">
            </f7-nav-left>
        </f7-navbar>
            <!-- Left Panel with Reveal effect -->
        <f7-panel left >
            <!-- Left panel content goes here -->
            <div class="content-block">
                 <f7-link close-panel>Close Panel</f7-link>
            </div>
        </f7-panel>
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
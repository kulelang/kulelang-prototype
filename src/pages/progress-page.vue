<template>
    <f7-page>
        <f7-toolbar bottom tabbed tabbar inner>
            <f7-link href="/main/">
                <f7-icon ion="android-home" size="22px"></f7-icon>
            </f7-link>
            <f7-link tab-link="#progress">
                <f7-icon ion="android-time" size="22px"></f7-icon>
            </f7-link>
            <f7-link href="/about/">
                <f7-icon ion="information-circled" size="22px"></f7-icon>
            </f7-link>
            <f7-link href="/profile/" active>
                <f7-icon ion="android-person" size="22px"></f7-icon>
            </f7-link>
        </f7-toolbar>

        <f7-navbar back-link="Kembali">
        </f7-navbar>
        <f7-toolbar top tabbed tabbar>
            <f7-link tab-link="#home">
                <f7-icon ion="android-time" size="20px"></f7-icon>Progress
            </f7-link>
            <f7-link>
                <f7-icon ion="android-done" size="22px"></f7-icon>Selesai
            </f7-link>
        </f7-toolbar>
    </f7-page>  
</template>


<script>
export default {
  name:'Progress'
}
</script>

<style>
    .btn__floated{
        margin-bottom: 50px;
    }
    .card__margin {
        margin: 10px;
    }
</style>


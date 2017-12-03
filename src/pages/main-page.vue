<template>
    <f7-page>
        <f7-navbar title="Kulelang">
            <f7-nav-right>
                <f7-link icon="icon-bars" open-panel="right"></f7-link>
            </f7-nav-right>
        </f7-navbar>
            <!-- Left Panel with Reveal effect -->
        <f7-panel right cover>
            <!-- Left panel content goes here -->
            <div class="content-block">
                 <p>Right Panel content here</p>
                    <p><a href="#" class="panel-close">Close me</a>
                 </p>
            </div>
            </f7-panel>

        <!-- ini buat semacam header dibawah -->
        <f7-toolbar bottom tabbed tabbar inner>
            <f7-link tab-link="#home" active>
                <f7-icon ion="android-home" size="22px"></f7-icon>
            </f7-link>
            <f7-link href="/progress/">
                <f7-icon ion="android-time" size="22px"></f7-icon>
            </f7-link>
            <f7-link href="/about/">
                <f7-icon ion="information-circled" size="22px"></f7-icon>
            </f7-link>
            <f7-link href="/profile/">
                <f7-icon ion="android-person" size="22px"></f7-icon>
            </f7-link>
        </f7-toolbar>

        
        <!-- <f7-fab class="btn__floated" color="orange"> -->
            <f7-link href="/insertproduct/">
            <f7-icon icon="icon-plus"></f7-icon>
            </f7-link>
        <!-- </f7-fab> -->
        <f7-button raised color="orange" fill href="/insertproduct/" class="round">
             <f7-icon icon="icon-plus"></f7-icon>
        </f7-button>
        

        <f7-list class="list__margin">
            <f7-list-item>
                <div class="square"></div>
                <div class="title">Lego Badman</div>             
            </f7-list-item>
        </f7-list>

        <f7-list class="list__margin">
            <f7-list-item>
                <div class="square"></div>
                <div class="title">Star Wars</div>             
            </f7-list-item>
        </f7-list>

        <f7-list class="list__margin">
            <f7-list-item>
                <div class="square"></div>
                <div class="title">Lord Of The Ring</div>             
            </f7-list-item>
        </f7-list>

    </f7-page>  

</template>

<style>
    .btn__floated {
        margin-bottom: 50px;
    }
    .list__margin {
        margin: 20px;
    }
    .square{
        background-color: #EEEE;
        padding: 50px;
    }


</style>

<script>
export default {
    name : 'Main'
}
</script>



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
                    <p><a href="#" class="panel-close">Close me</a></p>
            </div>
            </f7-panel>

        <f7-toolbar bottom tabbed tabbar >
            <f7-link tab-link="#home" active>
                <f7-icon ion="android-home" size="22px"></f7-icon>
            </f7-link>
            <f7-link href="/progress/">
                <f7-icon ion="android-time" size="22px"></f7-icon>
            </f7-link>
            <f7-link>
                <f7-icon ion="information-circled" size="22px"></f7-icon>
            </f7-link>
            <f7-link>
                <f7-icon ion="android-person" size="22px"></f7-icon>
            </f7-link>
        </f7-toolbar>

        <f7-fab class="btn__floated" color="orange">
            <f7-icon icon="icon-plus"></f7-icon>
        </f7-fab>

            <div class="card__margin">
        <div class="card demo-card-header-pic">
        <div style="background-image:url()" valign="top" class="card-header color-white no-border">Journey To Mountains</div>
        <div class="card-content">
            <div class="card-content-inner">
            <p class="color-gray">Posted on January 21, 2015</p>
            </div>
        </div>
        <div class="card-footer">
            <a href="#" class="link"></a>
            <a href="#" class="button button-fill color-orange">More</a>
        </div>
        </div>
    </div>
        
        
    </f7-page>  
</template>

<style>
    .btn__floated{
        margin-bottom: 50px;
    }
    .card__margin {
        margin: 10px;
    }
</style>


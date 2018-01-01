<template>
    <f7-page class="bg" >
        <f7-navbar>
            <f7-nav-left back-link="Kembali">
            </f7-nav-left>
        </f7-navbar>
        
        <div class="list-block inset">
            <h1>Cart</h1>
            <ul>
                 <li>
                    <a href="#" class="item-link item-content">
                        <div class="item-media"><i class="ion-cube"></i></div>
                            <div class="item-inner">
                            <div class="item-title">Item with badge</div>
                            <div class="item-after">
                                <a href="#">
                                    <i class="ion-minus"></i>
                                </a>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#" class="item-link item-content">
                        <div class="item-media"><i class="ion-cube"></i></div>
                            <div class="item-inner">
                            <div class="item-title">Item with badge</div>
                            <div class="item-after">
                                <a href="#">
                                    <i class="ion-minus"></i>
                                </a>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </f7-page>
</template>

<style>

</style>

<script>

export default {
    name : 'Cart',
}
</script>
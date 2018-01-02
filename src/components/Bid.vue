<template>
    <div >
        <f7-fab class="btn__floated" color="orange" href="/insertproduct/">

            <f7-icon icon="icon-plus"></f7-icon>
        </f7-fab>

        <h3 class="padding-left">LELANG HARI INI</h3>
        <!-- list-block buat bikin item -->
        <div class="list-block media-list bg__list inset">
        <ul>
            <li v-for="item in items" :key="item.id">
            <a href="/detailbarang/" class="item-link item-content">
            <!-- <router-link to="/detailbarang/" class="item-link item-content">Home -->
                <div class="item-media">
                    <img src="https://png.icons8.com/nolan/64/000000/lego-head.png">
                </div>
                <div class="item-inner">
                <div class="item-title-row">
                    <div class="item-title">{{ item.name }}</div>
                </div>
                <div>Open Bid Rp {{ item.open_bid }},-</div>
                <br>
                </div>
                <!-- </router-link> -->
            </a>
            </li>
        </ul>
        </div>  
    </div>
</template>

<style scoped>
    .btn__floated {
        margin-top: 500px;
    }
    .list__margin {
        margin: 20px;
    }
    .square{
        background-color: #EEEE;
        padding: 50px;
    }
    .bg {
        background-color:#ECECEC;
    }
    .bg__list{
        background-color: white;
        border: 2px;
        box-shadow: 2px;
        margin-block-end: 1px;
        margin-block-start: 7px;
    }
    .padding-right{
        padding-right: 15px;
    }
    .item-title{
        font-weight: bold;
    }
    .padding-left{
        padding-left: 20px;
        /* border-radius: 25px; */
        border-style: hidden hidden solid hidden;
        border-color: orange;
        padding: 10px;  
        margin-inline-start: 20px;
        margin-inline-end: 20px;
    }
    .center{
        text-align: center;
    }
    .btn-circle.btn-lg {
        width: 50px;
        height: 50px;
        padding: 10px 16px;
        font-size: 18px;
        line-height: 1.33;
        border-radius: 25px;
    }
</style>

<script>
export default {
    name : 'Bid',
    data(){
        let objek = [
          { _id : 1, name : 'Lego Star Wars',open_bid:20000},
          { _id : 2, name : 'Squishy 9Gag - Beruang Kuning',open_bid:50000},
          { _id : 3, name : 'HG IBO Kimaris Vidar',open_bid:60000},
          { _id : 4, name : 'Action figure', open_bid:7000}
        ]
        return {
            items : objek,
            item : ''
        }
    }
}
</script>

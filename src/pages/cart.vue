<template>
    <f7-page class="bg" >
        <f7-navbar>
            <f7-nav-left back-link="Kembali">
            </f7-nav-left>
        </f7-navbar>
       <div>
        <f7-card>
            <f7-card-header class="fontbold">Pesanan Anda</f7-card-header>
            <f7-card-content>
                <f7-list form >
                <f7-list-item>
                    <f7-label>Nama Barang</f7-label>
                    <f7-label>Panggil Harga</f7-label>
                </f7-list-item>
                <f7-list-item>
                    <f7-label>Nama Barang 2</f7-label>
                    <f7-label>Panggil Harga 2</f7-label>
                </f7-list-item>
            </f7-list>
            </f7-card-content>
            <f7-card-footer>
                    <f7-button color="orange"  href="/home/">Lanjutkan Berbelanja</f7-button>
            </f7-card-footer>
        </f7-card>

        <f7-card>
            <f7-card-header>
                <f7-label class="fontbold">Alamat Pengantaran</f7-label>
                <f7-link href="/editprofile/">Ubah</f7-link>
            </f7-card-header>
            <f7-card-content>
                <f7-list form>
                <f7-list-item>
                    <f7-icon ion="location" class="ukuran-icon" size="22px"></f7-icon>
                    <f7-label>panggil alamat dari profile</f7-label>
                </f7-list-item>
                
            </f7-list>
            </f7-card-content>
        </f7-card>

        <f7-card>
            <f7-card-header class="fontbold">Mau Bayar dengan Apa</f7-card-header>
            <f7-card-content>
                <f7-list form >
                <f7-list-item>
                    <f7-label>Nama Barang</f7-label>
                    <f7-label>Panggil Harga</f7-label>
                </f7-list-item>
                <f7-list-item>
                    <f7-label>Nama Barang 2</f7-label>
                    <f7-label>Panggil Harga 2</f7-label>
                </f7-list-item>
            </f7-list>
            </f7-card-content>
        </f7-card>

        <f7-card>
            <f7-card-header class="fontbold">Detail Pembayaran</f7-card-header>
            <f7-card-content>
                <f7-list form >
                    <f7-list-item>
                        <f7-label>Perkiraan Harga</f7-label>
                        <f7-label>Panggil Harga</f7-label>
                    </f7-list-item>
                    <f7-list-item>
                        <f7-label>Biaya Antar</f7-label>
                        <f7-label>123</f7-label>
                    </f7-list-item>
                    <!-- <f7-list-item>
                        <f7-label>Total</f7-label>
                        <f7-label>123.000</f7-label>
                    </f7-list-item> -->
                </f7-list>
            </f7-card-content>
            <f7-card-footer class="fontbold">
                 <!-- <f7-list form >
                    <f7-list-item> -->
                        <f7-label>Grand Total</f7-label>
                        <f7-label>123.000</f7-label>
                    <!-- </f7-list-item>
                </f7-list> -->
            </f7-card-footer>
        </f7-card>
        <f7-button big color="blue" fill href="/home/" >order</f7-button>
        </div>


    </f7-page>
</template>

<style>
.ukuran-icon{
    color:orange;
}
.btn-order{
    padding: 20px fill;
}
</style>

<script>

export default {
    name : 'Cart',
}
</script>
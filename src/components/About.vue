<template>
  <div class="padding">
    <h1 align="center">Frequently Asked Question</h1>
    <f7-list accordion>
        <f7-list-item accordion-item title="Apa itu Kulelang.id?" class="bold">
            <f7-accordion-content>
            <f7-block>
                <p style="color:#52524E">Kulelang.id adalah platform yang mempertemukan pelelang dan kolektor mainan untuk mempermudah melelang dan mendapatkan mainan</p>
            </f7-block>
            </f7-accordion-content>
        </f7-list-item>
        <f7-list-item accordion-item title="Bagaimana Cara Membuat Lelang?" class="bold">
            <f7-accordion-content>
            <f7-block>
                <!-- ini kenaapa linknya nak bisa di klik, tp kl di klik kanan bisa -->
                <p style="color:#52524E">Anda harus mendaftar di platform <a href="https://www.w3schools.com/html/">Kulelang.id</a> dan melengkapi data diri anda terlebih dahulu sebelum membuat lelang</p>
            </f7-block>
            </f7-accordion-content>
        </f7-list-item>
        <f7-list-item accordion-item title="Bagaimana Cara Melakukan BID?" class="bold">
            <f7-accordion-content>
            <f7-block>
                <p style="color:#52524E">Anda tetrlebih dahulu mendaftar akun <a href="https://www.w3schools.com/html/">Kulelang.id,</a> kemudian memilih barang yang akan di bid
                , dengan sistem kami anda tidak perlu menghitung total jumlah bid tertinggi dan harga setelah anda bid. Sistem kami otomatis akan menjumlahkannya. </p>
            </f7-block>
            </f7-accordion-content>
        </f7-list-item>
        <f7-list-item accordion-item title="Kenapa Lelang yang Saya Buat Tidak <br>Tampil?" class="bold">
            <f7-accordion-content>
            <f7-block>
                <p style="color:#52524E">
                    Setiap iklan di <a href="https://www.w3schools.com/html/">Kulelang.id</a> tidak langsung ditampilkan karena harus melalui
                    proses moderasi yaitu memeriksa aspek yang ada di form lelang yang dibuat pelelang.
               <br><br>
                    Apabila dalam proses moderasi, iklan anda buat layak ditampilkan maka kami akan langsung menampilkannya di halaman home kulelang. Namun, jika iklan
                    yang anda buat tidak sesuai dengan peraturan kami, maka iklan anda tidak akan kami tampilkan.
                <br><br>
                    Sebagai pelelang anda tidak diperbolehkan untuk melakukan edit iklan jika iklan yang anda buat sudah memiliki bidder, itu artinya iklan yang anda buat sudah diminati.
                    Iklan anda akan ditampilkan di home selama lelang masih berjalan. Halaman iklan anda tidak akan dihapus dan bisa diakses. Selamat melakukan bidding.
                </p>
            </f7-block>
            </f7-accordion-content>
        </f7-list-item>
        <f7-list-item accordion-item title="Bagaimana Saya Melakukan Pembayaran" class="bold">
            <f7-accordion-content>
            <f7-block>
                <p style="color:#52524E">
                    Setelah anda memenangkan lelang, barang yang akan anda menangkan akan masuk keranjang belanja, kemudian anda masukkan alamat pengiriman, kemudian klik checkout,
                    lakukan pembayaran sejumlah nominal yang telah disebutkan ke
                <br><br>
                    1. BCA No. 0111200156 a/n Bramastana Dewangga <br>
                    2. Cimb Niaga No. 761155075800 a/n Bramastana Dewangga
                <br><br>
                    Setelah melakukan pembayaran segera lakukan konfirmasi pembayaran, setelah pembayaran telah kami konfirmasi kami akan memberitahukan kepada pelelang untuk mengirimkan barang
                    kepada pemenang lelang.  
                </p>
            </f7-block>
            </f7-accordion-content>
        </f7-list-item>
        <f7-list-item accordion-item title="Bagaimana jika Barang dari Pelelang Tidak<br> Sesuai Deskripsi atau Rusak?" class="bold">
            <f7-accordion-content>
            <f7-block>
                <p style="color:#52524E">Karena uang dari pemenang masih di dompet <a href="https://www.w3schools.com/html/">Kulelang.id</a> maka jangan khawatir, karena anda bisa memberitahu kami jika barang tidak sesuai deskripsi atau rusak dan
                uang anda akan kami refund setelah anda mengirim barang kembali kepada pelelang. Jika sudah diterima oleh penjual maka kami akan merefund kepada pemenang lelang/ bider. </p>
            </f7-block>
            </f7-accordion-content>
        </f7-list-item>
        <f7-list-item accordion-item title="Bagaimana Jika Ada yang Melakukan<br> BID N RUN?" class="bold">
            <f7-accordion-content>
            <f7-block>
                <p style="color:#52524E">Kami akan melakukan banned akun pelaku BID and RUN dan kami akan menawarkan barang tersebut ke bidder tertinggi ke kedua, jika pelelang menyetujui maka
                    kami akan memberitahu bidder tertinggi kedua bahwa terjadi BID and RUN dan melakukan pembayaran sejumlah BID dari bidder tertinggi kedua.
                </p>
            </f7-block>
            </f7-accordion-content>
        </f7-list-item>
        
    </f7-list>
  </div>
</template>

<style>
.bold{
    /* font-weight:bold; */
     color:#0E2431;
}
.color{
     color:#607D8B;
}

.padding {
    padding: 0;
    overflow: auto;
    height: 100%;
    box-sizing: border-box;
}

</style>

<script>

export default {
    name : 'About',
}
</script>
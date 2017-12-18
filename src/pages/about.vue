<template>
  <f7-page>
    <f7-toolbar bottom tabbed tabbar inner>
            <f7-link href="/main/">
                <f7-icon ion="android-home" size="22px"></f7-icon>
            </f7-link>
            <f7-link href="/progress/">
                <f7-icon ion="android-time" size="22px"></f7-icon>
            </f7-link>
            <f7-link tab-link="#about">
                <f7-icon ion="help-circled" size="22px"></f7-icon>
            </f7-link>
            <f7-link href="/profile/" active>
                <f7-icon ion="android-person" size="22px"></f7-icon>
            </f7-link>
    </f7-toolbar>
    

    <f7-navbar back-link="Back" sliding></f7-navbar>
    <!-- <f7-block inner>
        <svg height="150" width="500">
          <ellipse cx="240" cy="100" rx="220" ry="30" style="fill:purple" />
          <ellipse cx="220" cy="70" rx="190" ry="20" style="fill:pink" />
          <ellipse cx="210" cy="45" rx="170" ry="15" style="fill:yellow" />
        </svg> 
      <p>Here is About page!</p>
      <p>You can go <f7-link back>back</f7-link>.</p>
      <p>Mauris posuere sit amet metus id venenatis. Ut ante dolor, tempor nec commodo rutrum, varius at sem. Nullam ac nisi non neque ornare pretium. Nulla mauris mauris, consequat et elementum sit amet, egestas sed orci. In hac habitasse platea dictumst.</p>
      <p>Fusce eros lectus, accumsan eget mi vel, iaculis tincidunt felis. Nulla tincidunt pharetra sagittis. Fusce in felis eros. Nulla sit amet aliquam lorem, et gravida ipsum. Mauris consectetur nisl non sollicitudin tristique. Praesent vitae metus ac quam rhoncus mattis vel et nisi. Aenean aliquet, felis quis dignissim iaculis, lectus quam tincidunt ligula, et venenatis turpis risus sed lorem. Morbi eu metus elit. Ut vel diam dolor.</p>
    </f7-block> -->
    <h1 align="center">Frequently Asked Question</h1>
    <f7-list accordion>
        <f7-list-item accordion-item title="Apa itu Kulelang.id?" class="bold">
            <f7-accordion-content>
            <f7-block>
                <p>Kulelang.id adalah platform yang mempertemukan pelelang dan kolektor mainan untuk mempermudah melelang dan mendapatkan mainan</p>
            </f7-block>
            </f7-accordion-content>
        </f7-list-item>
        <f7-list-item accordion-item title="Bagaimana Cara Membuat Lelang?" class="bold">
            <f7-accordion-content>
            <f7-block>
                <!-- ini kenaapa linknya nak bisa di klik, tp kl di klik kanan bisa -->
                <p>Anda harus mendaftar di platform <a href="https://www.w3schools.com/html/">Kulelang.id</a> dan melengkapi data diri anda terlebih dahulu sebelum membuat lelang</p>
            </f7-block>
            </f7-accordion-content>
        </f7-list-item>
        <f7-list-item accordion-item title="Bagaimana Cara Melakukan BID?" class="bold">
            <f7-accordion-content>
            <f7-block>
                <p>Anda tetrlebih dahulu mendaftar akun <a href="https://www.w3schools.com/html/">Kulelang.id,</a> kemudian memilih barang yang akan di bid
                , dengan sistem kami anda tidak perlu menghitung total jumlah bid tertinggi dan harga setelah anda bid. Sistem kami otomatis akan menjumlahkannya. </p>
            </f7-block>
            </f7-accordion-content>
        </f7-list-item>
        <f7-list-item accordion-item title="Kenapa Lelang yang Saya Buat Tidak <br>Tampil?" class="bold">
            <f7-accordion-content>
            <f7-block>
                <p>
                    Setiap iklan di <a href="https://www.w3schools.com/html/">Kulelang.id</a> tidak langsung ditampilkan karena harus melalui
                    proses moderasi yaitu memeriksa aspek yang ada di form lelang yang dibuat pelelang.
                </p>
                <p>
                    Apabila dalam proses moderasi, iklan anda buat layak ditampilkan maka kami akan langsung menampilkannya di halaman home kulelang. Namun, jika iklan
                    yang anda buat tidak sesuai dengan peraturan kami, maka iklan anda tidak akan kami tampilkan.
                </p>
                <p>
                    Sebagai pelelang anda tidak diperbolehkan untuk melakukan edit iklan jika iklan yang anda buat sudah memiliki bidder, itu artinya iklan yang anda buat sudah diminati.
                    Iklan anda akan ditampilkan di home selama lelang masih berjalan. Halaman iklan anda tidak akan dihapus dan bisa diakses. Selamat melakukan bidding.
                </p>
            </f7-block>
            </f7-accordion-content>
        </f7-list-item>
        <f7-list-item accordion-item title="Bagaimana Saya Melakukan Pembayaran" class="bold">
            <f7-accordion-content>
            <f7-block>
                <p>
                    Setelah anda memenangkan lelang, barang yang akan anda menangkan akan masuk keranjang belanja, kemudian anda masukkan alamat pengiriman, kemudian klik checkout,
                    lakukan pembayaran sejumlah nominal yang telah disebutkan ke
                </p>
                <p>
                    1. BCA No. 0111200156 a/n Bramastana Dewangga <br>
                    2. Cimb Niaga No. 761155075800 a/n Bramastana Dewangga
                </p>
                <p>
                    Setelah melakukan pembayaran segera lakukan konfirmasi pembayaran, setelah pembayaran telah kami konfirmasi kami akan memberitahukan kepada pelelang untuk mengirimkan barang
                    kepada pemenang lelang.  
                </p>
            </f7-block>
            </f7-accordion-content>
        </f7-list-item>
        <f7-list-item accordion-item title="Bagaimana jika Barang dari Pelelang Tidak<br> Sesuai Deskripsi atau Rusak?" class="bold">
            <f7-accordion-content>
            <f7-block>
                <p>Karena uang dari pemenang masih di dompet <a href="https://www.w3schools.com/html/">Kulelang.id</a> maka jangan khawatir, karena anda bisa memberitahu kami jika barang tidak sesuai deskripsi atau rusak dan
                uang anda akan kami refund setelah anda mengirim barang kembali kepada pelelang. Jika sudah diterima oleh penjual maka kami akan merefund kepada pemenang lelang/ bider. </p>
            </f7-block>
            </f7-accordion-content>
        </f7-list-item>
        <f7-list-item accordion-item title="Bagaimana Jika Ada yang Melakukan<br> BID N RUN?" class="bold">
            <f7-accordion-content>
            <f7-block>
                <p>Kami akan melakukan banned akun pelaku BID and RUN dan kami akan menawarkan barang tersebut ke bidder tertinggi ke kedua, jika pelelang menyetujui maka
                    kami akan memberitahu bidder tertinggi kedua bahwa terjadi BID and RUN dan melakukan pembayaran sejumlah BID dari bidder tertinggi kedua.
                </p>
            </f7-block>
            </f7-accordion-content>
        </f7-list-item>
        
    </f7-list>


  </f7-page>
</template>

<style>
.bold{
    font-weight:bold;
}
</style>

<script>
import Toolbar from './component/toolbar.vue'
export default {
    name: 'About'
}


</script>
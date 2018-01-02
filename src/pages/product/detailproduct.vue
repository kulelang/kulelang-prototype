
<template>
  <f7-page>
        <f7-navbar back-link="Kembali">
            <f7-nav-right class="padding-right">
                <f7-link href="/search/">
                    <f7-icon ion="search"></f7-icon>
                </f7-link>
                <f7-link href="/cart/">
                    <f7-icon ion="android-cart"></f7-icon>
                </f7-link> 
            </f7-nav-right>
        </f7-navbar>

<div class="bid__detail">

<h3>Detail Lelang</h3>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum aliquam, rem dolores asperiores. Atque, iste, ad. Voluptate pariatur molestiae dolorum ea modi nam, dolorem, nihil, minus sed neque mollitia minima.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro ipsa nam earum temporibus, facere reprehenderit iste, ea deleniti soluta eum itaque vero veniam quaerat doloremque nostrum explicabo ab, consequatur, delectus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque dolorem nisi quod aliquid eos et accusamus vel perferendis consequuntur officia, autem architecto ipsam fugiat ratione rem laboriosam? Eos, blanditiis consequatur.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum aliquam, rem dolores asperiores. Atque, iste, ad. Voluptate pariatur molestiae dolorum ea modi nam, dolorem, nihil, minus sed neque mollitia minima.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro ipsa nam earum temporibus, facere reprehenderit iste, ea deleniti soluta eum itaque vero veniam quaerat doloremque nostrum explicabo ab, consequatur, delectus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque dolorem nisi quod aliquid eos et accusamus vel perferendis consequuntur officia, autem architecto ipsam fugiat ratione rem laboriosam? Eos, blanditiis consequatur.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum aliquam, rem dolores asperiores. Atque, iste, ad. Voluptate pariatur molestiae dolorum ea modi nam, dolorem, nihil, minus sed neque mollitia minima.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro ipsa nam earum temporibus, facere reprehenderit iste, ea deleniti soluta eum itaque vero veniam quaerat doloremque nostrum explicabo ab, consequatur, delectus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque dolorem nisi quod aliquid eos et accusamus vel perferendis consequuntur officia, autem architecto ipsam fugiat ratione rem laboriosam? Eos, blanditiis consequatur.</p>
      

</div>

  </f7-page>
</template>

<style>
  .round{
    border-radius: 30px;
    height: 30px;
    width: 30px;

  }
  
  .img {
    width: 300px;
    height: 300px;
    margin: auto;
    display: block;
    margin-bottom: 10px;
  }

  .bid__detail {
    margin: 20px;
    align-items: center;
    color: #666;
  }

</style>

<script>

export default {
  name: 'DetailBarang',

  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function (e) {
      this.image = '';
    }
  }
}

</script>

// nampilin profile
<template>
  <f7-page>
    <!-- <f7-navbar back-link="Back" sliding></f7-navbar> -->
      <f7-navbar back-link="Password Dikirim" sliding>
            <f7-nav-right>
                <f7-link icon="icon-bars" open-panel="right"></f7-link>
            </f7-nav-right>
      </f7-navbar>

      <f7-panel right cover>
        <!-- Left panel content goes here -->
        <div class="content-block">
             <p>PROFILE</p>
             <p><a href="#" class="panel-close" >Close me</a></p>
        </div>
      </f7-panel>

     

        <h1 align="center">Minta Password</h1>
    <f7-block>
        <f7-list form>
            <f7-list-item>
                <f7-input type="text" placeholder="Alamat E-mail"></f7-input>
            </f7-list-item>
            <br>
            <f7-button big fill theme="cyan" href="#">Minta Password</f7-button>
            
            
        </f7-list>
    </f7-block>
    
  </f7-page>
</template>

<script>
export default {}

</script>

<style>
  .round{
    border-radius: 30px
  }
</style>

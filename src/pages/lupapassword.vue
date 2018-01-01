<template>
  <f7-page>
      <f7-navbar back-link="Password Dikirim" sliding>
      </f7-navbar>
        <h1 align="center">Minta Password</h1>
    <f7-block>
        <f7-list form>
            <f7-list-item>
                <f7-input type="text" placeholder="Alamat E-mail"></f7-input>
            </f7-list-item>
            <br>
            <f7-button color="green" fill  href="#">Minta Password</f7-button>
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

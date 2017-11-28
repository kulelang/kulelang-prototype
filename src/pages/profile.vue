<template>
  <f7-page>
    <!-- <f7-navbar back-link="Back" sliding></f7-navbar> -->
      <f7-navbar title="Kulelang">
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

      <f7-toolbar bottom tabbed tabbar inner>
            <f7-link href="/main/">
                <f7-icon ion="android-home" size="22px"></f7-icon>
            </f7-link>
            <f7-link href="/progress/">
                <f7-icon ion="android-time" size="22px"></f7-icon>
            </f7-link>
            <f7-link href="/about/">
                <f7-icon ion="information-circled" size="22px"></f7-icon>
            </f7-link>
            <f7-link tab-link="#profile" active>
                <f7-icon ion="android-person" size="22px"></f7-icon>
            </f7-link>
        </f7-toolbar>


    <f7-block inner>
      <p>PROFILE</p>
      <img :src="'./src/img/logo.png'">

        <f7-list form>
      <f7-list-item>
        <f7-label>Name</f7-label>
        <f7-input type="text" placeholder="Name"></f7-input>
      </f7-list-item>
       <f7-list-item>
        <f7-label>Birth date</f7-label>
        <f7-input type="date" placeholder="Birth date" value="2014-04-30"></f7-input>
      </f7-list-item>
       <f7-list-item>
        <f7-label>Gender</f7-label>
        <f7-input type="select">
          <option value="1">Male</option>
          <option value="1">Female</option>
        </f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Alamat</f7-label>
        <f7-input type="textarea" placeholder="Alamat"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Telephone</f7-label>
        <f7-input type="tel" placeholder="Telephone"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>E-mail</f7-label>
        <f7-input type="email" placeholder="E-mail"></f7-input>
      </f7-list-item>
      <!-- button -->
      <p><a href="#" class="button button-round">Round Button 1</a></p>
    </f7-list>
    </f7-block>
  </f7-page>
</template>

<script>
export default {}

</script>
<template>
    <f7-page>
    <f7-navbar back-link="Back"></f7-navbar>
    <f7-block>
    <!-- <div class="sample__thumb"></div> -->
    <h1 align="center">LOGIN</h1>
        <f7-list form>
            <f7-list-item>
                <f7-label>Username</f7-label>
                <f7-input type="text" placeholder="Username"></f7-input>
            </f7-list-item>
            <f7-list-item>
                <f7-label>Password</f7-label>
                <f7-input type="password" placeholder="Password" class="tengah"></f7-input>
            </f7-list-item>
            <f7-list-item checkbox name="my-checkbox" value="1" style="font-size:14px">
                Remember me
            </f7-list-item>
            <!-- gabisa nganan in --> 
            <f7-link href="/lupa" class="right">Lupa Password?</f7-link>
        </f7-list>
        
        <f7-button href="/home/" class="btn__margin" big fill theme="cyan"> Login</f7-button>
        <br><br>
        <f7-button class="btn__margin" big fill color="red"> <i class="ion-social-googleplus-outline"></i> Login using google</f7-button>
        <br>
         <!-- <g-signin-button
            :params="googleSignInParams"
            @success="onSignInSuccess"
            @error="onSignInError">
            Sign in with Google
        </g-signin-button> -->
        <br>
        <f7-button class="btn__margin" big fill color="blue"> <i class="ion-social-facebook"></i> Login using facebook</f7-button>
    </f7-block>
</f7-page>    
</template>

<style>
    .sample__thumb {
        padding: 10px;
        background-color: #FFFF;
    }
    .btn__margin{
        margin: 15px;
    }
    .right{
        text-align: right;
    }
    .g-signin-button {
    /* This is where you control how the button looks. Be creative! */
    display: inline-block;
    padding: 4px 8px;
    border-radius: 3px;
    background-color: #3c82f7;
    color: #fff;
    box-shadow: 0 3px 0 #0f69ff;
    }
</style>
    
<script>
export default {
    name:'Sign',
     data () {
    return {
      /**
       * The Auth2 parameters, as seen on
       * https://developers.google.com/identity/sign-in/web/reference#gapiauth2initparams.
       * As the very least, a valid client_id must present.
       * @type {Object}
       */
      googleSignInParams: {
        client_id: 'YOUR_APP_CLIENT_ID.apps.googleusercontent.com'
      }
    }
  },
  methods: {
    onSignInSuccess (googleUser) {
      // `googleUser` is the GoogleUser object that represents the just-signed-in user.
      // See https://developers.google.com/identity/sign-in/web/reference#users
      const profile = googleUser.getBasicProfile() // etc etc
    },
    onSignInError (error) {
      // `error` contains any error occurred.
      console.log('OH NOES', error)
    }
  }
}
</script>



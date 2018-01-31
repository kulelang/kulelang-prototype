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
        <br>
        <f7-button @click="signInWithGogle" class="btn__margin" big fill color="red"> <i class="ion-social-googleplus-outline"></i> Login using google</f7-button>
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

import firebase from 'firebase'

export default {
    name:'Sign',
    data() {
      return {
        loading : true,
        user : null,
      }
  },
    methods: {
        signInWithGogle : function() {
            const provider = new firebase.auth.GoogleAuthProvider()
            provider.addScope('https://www.googleapis.com/auth/plus.login')
            firebase.auth().signInWithPopup(provider).then((result) => {
                  let user = result.user
                  this.$f7.getCurrentView().loadPage('/sign')
                  console.log(user.displayName)
            }).catch(error => console.log(error) )
        }
    }
}
</script>



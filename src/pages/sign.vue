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
        
         <f7-button href="/main" class="btn__margin" big fill theme="cyan"> Login</f7-button>
        <br><br>
        <f7-button class="btn__margin" big fill color="red"> <i class="ion-social-googleplus-outline"></i> Login using google</f7-button>
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
</style>
    
<script>
export default {
    name:'Sign'
}
</script>



<template>
    <f7-page>
    <f7-navbar title="Signup" back-link="Back"></f7-navbar>
    <f7-block>

    <div class="sample__thumb"></div>
        <f7-list form>
            <f7-list-item>
                <f7-label>Username</f7-label>
                <f7-input type="text" placeholder="Name"></f7-input>
            </f7-list-item>
            <f7-list-item>
                <f7-label>Password</f7-label>
                <f7-input type="password" placeholder="Password"></f7-input>
            </f7-list-item>
                <f7-button class="btn__margin" big fill theme="cyan"> Login</f7-button>
                <br>
                <f7-button class="btn__margin" big fill color="red"> <i class="ion-social-googleplus-outline"></i>Login using google</f7-button>
                <f7-button class="btn__margin" big fill color="blue"> <i class="ion-social-facebook"></i>Login using facebook</f7-button>
        </f7-list>
    </f7-block>
</f7-page>    
</template>

<style>
    .sample__thumb {
        padding: 50px;
        background-color: #FFFF;
    }
    .btn__margin{
        margin: 5px;
    }
</style>
    
<script>
export default {}
</script>



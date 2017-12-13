<template>
<f7-page>
    <f7-navbar back-link="Back"></f7-navbar>
    <h1 align="center">DAFTAR</h1>
    <f7-block>
        <f7-list form>
            <h2>Buat Akun Baru</h2>
        </f7-list>
        
        <f7-list form>
            <f7-list-item>
                <!-- <f7-label>Username</f7-label> -->
                <f7-input type="text" placeholder="Username"></f7-input>
            </f7-list-item>
            <f7-list-item>
                <!-- <f7-label>Email</f7-label> -->
                <f7-input type="email" placeholder="Email"></f7-input>
            </f7-list-item>
            <f7-list-item>
                <!-- <f7-label>Nama</f7-label> -->
                <f7-input type="text" placeholder="Nama"></f7-input>
            </f7-list-item>
            <f7-list-item>
                <!-- <f7-label>No Telepon</f7-label> -->
                <f7-input type="number" placeholder="No Telepon"></f7-input>
            </f7-list-item>
            <f7-list-item>
                <!-- <f7-label>Password</f7-label> -->
                <f7-input type="password" placeholder="Password"></f7-input>
            </f7-list-item>
            <f7-list-item>
                <!-- <f7-label>Ulangi Password</f7-label> -->
                <f7-input type="password" placeholder="Ulangi Password"></f7-input>
            </f7-list-item>

             <f7-list-item checkbox name="my-checkbox" value="1" style="font-size:14px">Dengan ini menyetujui Syarat dan Ketentuan yang berlaku </f7-list-item>

            <!-- Button -->
                <f7-button big fill theme="cyan">Daftar</f7-button>
                <a href="/sign">Sign</a>
        </f7-list>
    </f7-block>
</f7-page>    
</template>
    
<style>

</style>

<script>
    export default {
        name:'Signup'
    }
</script>

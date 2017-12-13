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
                <f7-icon ion="information-circled" size="22px"></f7-icon>
            </f7-link>
            <f7-link href="/profile/" active>
                <f7-icon ion="android-person" size="22px"></f7-icon>
            </f7-link>
        </f7-toolbar>
  </f7-page>
</template>

<script>
export default {
  name: 'Toolbar'
}
</script>


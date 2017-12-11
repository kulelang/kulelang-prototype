<template>
  <f7-page>
    <!-- Simple Chip -->
<f7-chip text="Example Chip"></f7-chip>
<!-- Colored Chip -->
<f7-chip text="Another Chip" bg="red" color="white"></f7-chip>
<!-- Media Chip -->
<f7-chip text="Jane Doe" media='<img src="http://lorempixel.com/100/100/people/9/">'></f7-chip>
<!-- Deleteable Chip -->
<f7-chip text="Another Chip" deleteable @delete="onChipDelete"></f7-chip>
<!-- Deleteable Media Chip -->
<f7-chip text="Jane Doe" media='<img src="http://lorempixel.com/100/100/people/9/">' media-bg="red" deleteable @delete="onChipDelete"></f7-chip>
  

  <f7-card>
  <f7-card-header>Card header content</f7-card-header>
  <f7-card-content>Card content</f7-card-content>
  <f7-card-footer>Card footer content</f7-card-footer>
</f7-card>



<f7-list>
  <f7-list-item swipeout title="Item 1" @swipeout:deleted="onSwipeoutDeleted">
    <f7-swipeout-actions>
      <f7-swipeout-button delete>Delete</f7-swipeout-button>
    </f7-swipeout-actions>
  </f7-list-item>
  <f7-list-item swipeout title="Item 2" @swipeout:deleted="onSwipeoutDeleted">
    <f7-swipeout-actions>
      <f7-swipeout-button delete>Delete</f7-swipeout-button>
    </f7-swipeout-actions>
  </f7-list-item>
</f7-list>


<f7-grid>
  <f7-col>Col 1</f7-col>
  <f7-col>Col 2</f7-col>
  <f7-col>Col 3</f7-col>
</f7-grid>


<f7-grid no-gutter>
  <f7-col width="50">Col 50%</f7-col>
  <f7-col width="25">Col 25%</f7-col>
  <f7-col width="25">Col 25%</f7-col>
</f7-grid>

<div class="toolbar messagebar">
  <div class="toolbar-inner">
    <textarea placeholder="Message"></textarea>
    <a href="#" class="link">Send</a>
  </div>
</div>

<f7-messagebar placeholder="Message" @submit="onSubmit">
  <div slot="before-inner">Before inner</div>
  <div slot="after-inner">After inner</div>
  <div slot="before-textarea">Before textarea</div>
  <div slot="after-textarea">After textarea</div>
  <span slot="send-link">Send</span>
  <div>Default slot</div>
</f7-messagebar>
<!-- 
<f7-card title="Card Title" content="Card Content" footer="Card Footer"></f7-card> -->
  </f7-page>
</template>

<script>
export default {}
</script>
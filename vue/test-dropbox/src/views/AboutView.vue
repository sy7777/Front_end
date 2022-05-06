<template>
  <div class="about">
    <h1>This is an about page</h1>
    <DropboxSelector/>
  
  </div>
</template>

<script>
// @ is an alias to /src
import DropboxSelector from '@/components/dropbox.vue'

export default {
  name: 'DropboxView',
  components: {
    DropboxSelector
  }
}
</script>
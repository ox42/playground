<template>
  <div>success!</div>
</template>


<script>
import progress from 'nprogress'

export default {
  mounted() {
    progress.done()
    localStorage.setItem('cloudapps:gh-token', this.$route.query.access_token)
    window.close()
  }
}
</script>

<template>
    <div class="profile_content" style="overflow: auto">
      <user-info></user-info>

    </div>
</template>

<script>
  import UserInfo from './userInfo.vue'
  export default {
      components : {
            UserInfo
        }
  }
</script>

<style>
  .profile_content{
    background-color: white;
    width: 100%;
    height: 100%;
    position: fixed;
  }
</style>

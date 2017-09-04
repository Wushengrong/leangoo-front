<template>
<div class="menu-board">
<div style="border-bottom: 1px rgb(140,140,140) inset;background-color:#F5F5F5 ">看板导航</div>
<b-form-input  placeholder="输入看板名称进行过滤..." size="sm"></b-form-input>
  <b-btn  v-b-toggle.c1 variant="default"><icon name="user" scale="1"></icon><span>个人看板</span></b-btn>
  <b-collapse id="c1">
    <b-card>
      Content
    </b-card>
  </b-collapse>
</div>
</template>

<script >
export default{
    data(){
        return{

        }
    }
}

</script>

<style>
.menu-board{
  width: 300px;
  height: 500px;
  overflow: auto;
}
  .menu-board button {
    width: 300px;
    background-color: white;
    color: #428BCA;
    text-align: left;
    font-size: 14px;
    line-height: 14px;
  }
  .menu-board button span {
    position: relative;
    bottom: 3px;
    line-height: 14px;
    font-size: 14px;
  }

</style>

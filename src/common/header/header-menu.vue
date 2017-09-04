<template>
  <b-navbar toggleable="md" style="background-color:rgba(0,0,0,0.15);" type="dark" :sticky="isSticky">
    <b-nav-toggle target="nav_collapse"></b-nav-toggle>

    <b-navbar-brand href="#"><img src="../../assets/team_logo.png" height="34px" width="130px"></b-navbar-brand>

    <b-nav-form>
      <input type="text" id="header-search">
      <icon name="search" scale="1.2" style="color: white;position: relative;left: -25px;cursor: pointer"></icon>
    </b-nav-form>
    <ul class="header-center">
      <li>
        <a class="btn btn-default" href="https://www.leangoo.com/event.html" target="_blank">活动</a>
      </li>
      <li>
        <a class="btn btn-default" href="https://www.leangoo.com/category/%E6%96%87%E7%AB%A0" target="_blank">文章</a>
      </li>
      <li>
        <a class="btn btn-default" href="http://www.scrumcn.com/agile/" target="_blank">课程</a>
      </li>
    </ul>
    <b-nav is-nav-bar class="ml-auto">
      <b-nav-item-dropdown right variant="defalut" size="sm" :no-caret="no_caret">
        <template slot="button-content">
          <icon name="plus" scale="1" size="sm"></icon>
        </template>
        <div  class="newButton">
          <div style="border-bottom: 1px rgb(140,140,140) inset;background-color:#F5F5F5 ">
          <h5 class="text-center" >新建</h5>
          </div>
          <span>新建看板</span>
          <p>一个看板包括多个列表,每个列表包括多个任务卡片,团队通过看板共享任务,在线实时协作</p>
          <span>新建项目</span>
          <p>一个项目包括多个看板和多名项目成员,通过项目可以对看板进行分组管理,更好的实现项目协作</p>
        </div>
      </b-nav-item-dropdown>
      <b-button-group size="sm" style="margin-right:3px">
        <b-button variant="default" size="sm">
          <icon name="bars" scale="1"></icon>
        </b-button>
        <b-dropdown right variant="default" text="看板导航" size="sm" >
          <menu-board></menu-board>
        </b-dropdown>
      </b-button-group>
      <b-button-group>
        <img src="../../assets/agzou.jpg" width="32px" height="32px">
        <b-nav-item-dropdown right variant="default" size="sm" :no-caret="no_caret">
          <template slot="button-content">
            {{UserAccount}}
          </template>
          <b-dropdown-item href="#" to="/profile">用户中心</b-dropdown-item>
          <b-dropdown-item href="#">常用快捷操作</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item href="#">意见反馈</b-dropdown-item>
          <b-dropdown-item href="#">版本更新</b-dropdown-item>
          <b-dropdown-item href="#">返回首页</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item href="#">退出 </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-button-group>
    </b-nav>
  </b-navbar>
</template>


<script>
  import MenuBoard from '../../common/header/menu-board.vue'
export default {
  components:{
      MenuBoard
  },
  data() {
    return {
      isSticky: true,
      no_caret:true,
      UserAccount:''
    }
  },
  created(){
    this.$ajax.get('/getUserInfo').then(res=>{this.UserAccount=res.data.UserAccount})
  }
}

</script>

<style>
.navbar {
  height: 43px;
}

#header-search {
  border-radius: 9px;
  background-color: rgba(255, 255, 255, 0.3);
  border: none;
}

.header-center {
  position: absolute;
  left: 45%;
  top: 0;
  font-size: 14px;
  line-height: 20px;
  list-style: none;
}

.header-center li {
  list-style: none;
  float: left;
}

.header-center li a {
  color: white;
  cursor: pointer;
}

.ml-auto button {
  height: 32px;
  background-color: rgba(255, 255, 255, 0.3);
  color: rgb(255, 255, 255);
  cursor: pointer;
}
.ml-auto .nav-link:link {
  font-size: 14px;
  line-height: 14px;
  height: 32px;
  background-color: rgba(255, 255, 255, 0.3);
  color: rgb(255, 255, 255);
  border-radius: 4px;
}
.ml-auto .nav-link {
  font-size: 14px;
  line-height: 14px;
  height: 32px;
  background-color: rgba(255, 255, 255, 0.3);
  color: rgb(255, 255, 255);
  border-radius: 4px;
}
  .newButton{
    width: 300px;
  }
  .newButton p{
    font-size: 12px;
    color: rgb(140,140,140);
    cursor: pointer;
  }
  .newButton span{
    font-size: 14px;
    color: black;
    cursor: pointer;
  }

</style>

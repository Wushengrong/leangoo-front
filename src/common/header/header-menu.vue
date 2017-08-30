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
      <b-button variant="default" style="margin-right:3px">
        <icon name="plus" scale="1" size="sm"></icon>
      </b-button>
      <b-button-group size="sm" style="margin-right:3px">
        <b-button variant="default" size="sm">
          <icon name="bars" scale="1"></icon>
        </b-button>
        <b-dropdown right variant="default" text="看板导航" size="sm">
        </b-dropdown>
      </b-button-group>
      <b-button-group>
      <sapn></sapn><img src="../../assets/agzou.jpg" width="32px" height="32px"></span>
      <b-dropdown right variant="default" text="User" size="sm">
        <b-dropdown-item href="#" to="/profile">Profile</b-dropdown-item>
        <b-dropdown-item href="#">Signout</b-dropdown-item>
      </b-dropdown>
      </b-button-group>
    </b-nav>
  </b-navbar>
</template>


<script>
export default {
  data() {
    return {
      isSticky: true
    }
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
}

.ml-auto button {
  height: 32px;
  background-color: rgba(255, 255, 255, 0.3);
  color:rgb(255, 255, 255);
}
</style>

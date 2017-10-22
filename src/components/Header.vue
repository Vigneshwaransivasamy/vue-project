<template>
  <header class="header">
    <div class="header-wrap">
      <!-- <div class="options-icon mobile-only" onclick="showOptions()">
            <div class="hr-line"></div>
            <div class="hr-line margin-top-bottom-smallest"></div>
            <div class="hr-line"></div>
        </div> -->
      <nav class="nav flex occupy space-between">
        <div class="header-logo flex">
          <a class="margin-auto" href="/">ICON</a>
        </div>
        <div class="header__nav-wrap flex space-between">
          <ul class="header__nav--left flex space-between">
            <li class="nav-link selected"><router-link to="/">WHAT'S NEW</router-link></li>
            <li class="nav-link"><router-link to="/customize">CUSTOMIZE</router-link></li>
            <li class="nav-link"><router-link to="/fanbook">FANBOOK</router-link></li>
          </ul>
        </div>
        <div class="header__nav-wrap flex end">
          <ul class="header__nav--right flex space-between">
            <li class="nav-link"><router-link to="/login">Login</router-link></li>
            <li class="nav-link"><router-link to="/track-order">Track Order</router-link></li>
            <li class="nav-link"><router-link to="/wishlist">Wishlist</router-link></li>
            <li class="nav-link"><router-link to="/bag">Bag</router-link></li>
          </ul>
        </div>
        
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      isShowOptions: false
    }
  },
  methods: {
    showOptions: function () {
      this.isShowOptions = true
    }
  }
}
</script>

<style>
.header {
  position: fixed;
  height: 60px;
  top: 0px;
  right: 0px;
  left: 0;
  z-index: 99;
  background: #ffffff;
  box-sizing: border-box;
  border: 2px solid #f3f3f3;
}

.nav-link{
   align-self: center;
   opacity: 0.8;
   -webkit-transition: all 0.3s ease-in-out;
      -moz-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
           transition: all 0.3s ease-in-out;
}

.nav-link:hove, .nav-link:active{
  opacity: 1;
}

.header .header-logo{
  font-size: 24px;
  font-weight: bold;
}

.header__nav--left .nav-link{
  text-decoration: none;
  color: #000;
  font-size: 14px;
  letter-spacing: 1px;
  line-height: 18px;
  padding: 10px 0 18px;
  align-self: flex-end;
}

.header__nav--left .nav-link.selected, 
.header__nav--left .nav-link:active, 
.header__nav--left .nav-link:hover{
  border-bottom: 2px solid #ffd100;
  opacity: 1;
}

.header-wrap {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  width: 980px;
  min-width: 320px;
  height: 100%;
}
.header__nav--left{
  min-width: 360px;
  width: 100%;
}
.header__nav--right{
  min-width: 260px;
  width: 100%;
  font-family: 'BrandonGrotesque-Regular';
}
</style>

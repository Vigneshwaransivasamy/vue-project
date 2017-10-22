<template>
  <header class="header">
    <div class="header-wrap">
      <nav class="nav flex occupy space-between">
        <div class="header-logo flex">
          <a class="margin-auto" href="/">ICON</a>
        </div>
        <div class="header__nav-wrap-left flex space-between">
          <ul class="header__nav--left flex space-between">
            <li class="nav-link selected"><router-link to="/">WHAT'S NEW</router-link></li>
            <li class="nav-link"><router-link to="/collections">COLLECTIONS</router-link></li>
            <li class="nav-link"><router-link to="/men">MEN</router-link></li>
            <li class="nav-link"><router-link to="/women">WOMEN</router-link></li>
            <li class="nav-link"><router-link to="/customize">CUSTOMIZE</router-link></li>
            <!-- <li class="nav-link"><router-link to="/fanbook">FANBOOK</router-link></li> -->
          </ul>
        </div>
        <div class="header__nav-wrap-middle flex">
          <div class="header__nav--middle flex space-between search-field">
            <input placeholder="Search" class="desktop-searchBar" value="">
          </div>
        </div>
        <div class="header__nav-wrap-right flex end">
          <ul class="header__nav--right flex space-between">
            <li class="nav-link" title="Track Order"><router-link to="/track-order"><svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" version="1.1"><g id="surface1"><path style=" " d="M 2.800781 8 C 1.265625 8 0 9.265625 0 10.800781 L 0 37 C 0 38.644531 1.355469 40 3 40 L 7.09375 40 C 7.570313 42.828125 10.039063 45 13 45 C 15.960938 45 18.429688 42.828125 18.90625 40 L 34.09375 40 C 34.570313 42.828125 37.039063 45 40 45 C 42.960938 45 45.429688 42.828125 45.90625 40 L 47 40 C 47.832031 40 48.550781 39.613281 49.082031 39.082031 C 49.613281 38.550781 50 37.832031 50 37 L 50 27.402344 C 50 26.277344 49.582031 25.253906 49.199219 24.46875 C 48.8125 23.6875 48.421875 23.125 48.421875 23.125 L 48.410156 23.113281 L 44.292969 17.589844 L 44.28125 17.578125 C 43.394531 16.46875 41.972656 15 40 15 L 32 15 C 31.640625 15 31.308594 15.082031 31 15.207031 L 31 10.902344 C 31 9.300781 29.699219 8 28.097656 8 Z M 2.800781 10 L 28.097656 10 C 28.5 10 29 10.5 29 10.902344 L 29 38 L 18.90625 38 C 18.429688 35.171875 15.960938 33 13 33 C 10.039063 33 7.570313 35.171875 7.09375 38 L 3 38 C 2.445313 38 2 37.554688 2 37 L 2 10.800781 C 2 10.335938 2.335938 10 2.800781 10 Z M 15 12 C 9.5 12 5 16.5 5 22 C 5 27.5 9.5 32 15 32 C 20.5 32 25 27.5 25 22 C 25 16.5 20.5 12 15 12 Z M 15 14 C 19.398438 14 23 17.601563 23 22 C 23 26.398438 19.398438 30 15 30 C 10.601563 30 7 26.398438 7 22 C 7 17.601563 10.601563 14 15 14 Z M 14 16 L 14 21.5 L 10.402344 24.199219 L 11.597656 25.800781 L 16 22.5 L 16 16 Z M 32 17 L 36 17 L 36 26 C 36 26.832031 36.386719 27.550781 36.917969 28.082031 C 37.449219 28.613281 38.167969 29 39 29 L 48 29 L 48 37 C 48 37.167969 47.886719 37.449219 47.667969 37.667969 C 47.449219 37.886719 47.167969 38 47 38 L 45.90625 38 C 45.429688 35.171875 42.960938 33 40 33 C 37.039063 33 34.570313 35.171875 34.09375 38 L 31 38 L 31 18 C 31 17.832031 31.113281 17.550781 31.332031 17.332031 C 31.550781 17.113281 31.832031 17 32 17 Z M 38 17 L 40 17 C 40.828125 17 42.003906 17.933594 42.71875 18.824219 L 46.78125 24.273438 C 46.78125 24.273438 47.085938 24.710938 47.402344 25.355469 C 47.65625 25.871094 47.800781 26.472656 47.882813 27 L 39 27 C 38.832031 27 38.550781 26.886719 38.332031 26.667969 C 38.113281 26.449219 38 26.167969 38 26 Z M 13 35 C 15.222656 35 17 36.777344 17 39 C 17 41.222656 15.222656 43 13 43 C 10.777344 43 9 41.222656 9 39 C 9 36.777344 10.777344 35 13 35 Z M 40 35 C 42.222656 35 44 36.777344 44 39 C 44 41.222656 42.222656 43 40 43 C 37.777344 43 36 41.222656 36 39 C 36 36.777344 37.777344 35 40 35 Z "></path></g></svg></router-link></li>
            <li class="nav-link" title="Wishlist"><router-link to="/wishlist"><svg width="30" height="30" viewBox="0 0 24 23" xmlns="http://www.w3.org/2000/svg"><path d="M21.084 6.337s-.965-2.593-3.895-3.007c-2.851-.403-5.282 3.366-5.282 3.366-.004.005-2.13-3.83-5.091-3.332-2.92.492-3.895 3.007-3.895 3.007s-1.553 2.291 0 5.484c1.67 3.434 8.975 8.845 8.975 8.845l.011-.008s7.572-5.543 9.177-8.87c1.542-3.2 0-5.485 0-5.485z" stroke="#333" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg></router-link></li>
            <li class="nav-link" title="Bag"><router-link to="/bag"><svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M10.062 10.741c-.001.42-.359.76-.801.76-.441 0-.801-.342-.799-.76 0-.422.358-.762.8-.76.443 0 .8.338.8.76" fill="#333"></path><path d="M10.062 10.741c-.001.42-.359.76-.801.76-.441 0-.801-.342-.799-.76 0-.422.358-.762.8-.76.443 0 .8.338.8.76" stroke="#333" stroke-width=".5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.849 19.547c.053.566-.426 1.03-1.063 1.03H6.277c-.637 0-1.116-.464-1.063-1.03L6.182 9.11c.052-.566.617-1.03 1.254-1.03h9.19c.638 0 1.202.464 1.255 1.03l.968 10.436zM12.028 3.45c-1.83-.002-3.32 1.668-3.32 3.73v.783" stroke="#333" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.544 7.963l.005-.576v-.252c0-.1-.004-.198-.011-.296-.142-1.895-1.662-3.387-3.517-3.389" stroke="#333" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.552 10.729c-.002.419-.36.76-.801.759-.442 0-.801-.341-.8-.76 0-.421.358-.761.8-.76.443 0 .8.339.8.76" fill="#333"></path><path d="M15.552 10.729c-.002.419-.36.76-.801.759-.442 0-.801-.341-.8-.76 0-.421.358-.761.8-.76.443 0 .8.339.8.76" stroke="#333" stroke-width=".5" stroke-linecap="round" stroke-linejoin="round"></path></g></svg></router-link></li>
            <li class="nav-link" title="Login"><router-link to="/login"><svg width="30" height="30" viewBox="0 0 24 23" xmlns="http://www.w3.org/2000/svg"><g stroke="#33B2C1" stroke-width="1.065" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M11.696 4.327a3.325 3.325 0 1 1 .002 6.65 3.325 3.325 0 0 1-.002-6.65M18.309 17.896c.158-2.283-2.8-5.556-6.242-5.556-.14 0-.37-.007-.37 0-.14-.007-.132 0-.273 0-3.442 0-6.297 3.43-6.046 5.682.255 2.286 3.804 2.356 6.32 2.333 2.586.023 6.44-.002 6.61-2.459z"></path></g></svg></router-link></li>
          </ul>
        </div>
      </nav>
    </div>
    <div class="header__nav-wrap-left-clone flex space-between">
      <ul class="header__nav--left flex space-between">
        <li class="nav-link selected"><router-link to="/">WHAT'S NEW</router-link></li>
        <li class="nav-link"><router-link to="/collections">COLLECTIONS</router-link></li>
        <li class="nav-link"><router-link to="/men">MEN</router-link></li>
        <li class="nav-link"><router-link to="/women">WOMEN</router-link></li>
        <li class="nav-link"><router-link to="/customize">CUSTOMIZE</router-link></li>
        <!-- <li class="nav-link"><router-link to="/fanbook">FANBOOK</router-link></li> -->
      </ul>
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
  box-shadow: 0 1px 3px rgba(0,0,0,.08);
  font-family: 'BrandonGrotesque-Regular';
}

.nav-link{
   align-self: center;
   position: relative;
   -webkit-transition: color 200ms ease-in;
      -moz-transition: color 200ms ease-in;
        -o-transition: color 200ms ease-in;
           transition: color 200ms ease-in;
}

.nav-link:hove, .nav-link:active{
  opacity: 1;
}

.header__nav-wrap-left-clone{
  display: none;
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
  padding: 18px 0 18px;
  align-self: flex-end;
}

.header__nav--left .nav-link:first-child,
.header__nav--right .nav-link:first-child{
  margin-left: 0px;
}

.header__nav--left .nav-link,
.header__nav--right .nav-link{
  margin-left: 30px;
}

.header__nav-wrap-middle{
  height: 30px;
  align-self: center;
}

.header__nav--left .nav-link.selected,
.header__nav--left .nav-link:hover{
  color: rgb(214, 175, 0);
  opacity: 1;
}

.header__nav--left .nav-link.selected:after, 
.header__nav--left .nav-link:active:after, 
.header__nav--left .nav-link:hover:after{
  content: " ";
  height: 2px;
  width: 100%;
  background: rgb(214, 175, 0);
  position: absolute;
  bottom: -2px;
  left: 0px;
}

.header-wrap {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  min-width: 320px;
  height: 100%;
}
.header__nav--left{
  min-width: 100%;
}
.header__nav--right{
  min-width: 100%;
 
  font-size: 14px;
}
.header__nav-warp{
    font-size: 14px;
    height: 20px;
    line-height: 24px;
    width: 235px;
    color: #696e79;
    box-sizing: content-box;
    padding: 8px 10px 10px;
    margin: 0;
    outline: 0;
    border: 1px solid #d5d6d9;
    border-radius: 4px 0 0 4px;
    border-right: 0;
    background: #f5f5f6;
}

@media only screen and (max-width: 992px){
  .header__nav-wrap-left{
    display: none;
  }
  .header__nav-wrap-left-clone{
    display: block;
    box-shadow: 0 1px 3px rgba(0,0,0,.08);
  }
}
</style>

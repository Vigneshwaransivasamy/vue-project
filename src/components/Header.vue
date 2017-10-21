<template>
  <div class="header-wrap">
    <div class="header-logo">
      <div class="options-icon mobile-only" onclick="showOptions()">
          <div class="hr-line"></div>
          <div class="hr-line margin-top-bottom-smallest"></div>
          <div class="hr-line"></div>
      </div>
      <a href="/">ICON</a>
    </div>
    <div class="navbar-collapse collapse">
      <ul class="nav navbar-nav">
        <li><router-link to="/">WHAT'S NEW</router-link></li>
        <li><router-link to="/customize">CUSTOMIZE</router-link></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><router-link to="/FANBOOK">FANBOOK</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showOption () {

    }
  }
}
</script>

<style>
.header-wrap{
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

/**
+-------------------------------------------+
|           Standard Media Theme            |
+-------------------------------------------+
*/

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575px) { 
  /* .header-wrap{
    width: 
  }  */
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767px) { 
  .header-wrap{
    width: 750px;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991px) { 
  .header-wrap{
    width: 970px;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199px) { 
  .header-wrap{
    width: 1170
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) { 
  
}
</style>

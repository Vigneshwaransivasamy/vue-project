<template>
<div class="product-list-wrap">
  <div class="product-list" 
  v-for="(item, key) in product"
  v-bind:key="key">
    <header>
      <div class="product-title-head">
        {{product.title}}
      </div>
    </header>
    <main>
      <div class="product-image">
        <img v-bind:src="product.imageSrc"/>
      </div>
      <div class="product-image-type">
        <div class="product-colors"
            v-for="(color, key) in product.availableList"
            v-bind:key="key">
            <div 
              v-bind:class="computedClassName('color',key)" 
              v-bind:style="resolveBackground(color.hex)">

            </div>
            <div 
              v-bind:class="computedClassName('size',key)" 
              v-bind:style="resolveBackground(color.hex)">

            </div>
        </div>
      </div>
    </main>
    <footer>

    </footer>
  </div>
</div>
  
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isShowOptions: false
    };
  },
  methods: {
    colorType () {

    }
  },
  computed: {
    resolveBackground (hex) {
      return {
        bacgroundColor: hex
      }
    },
    computedClassName(prefix,index){
      return `${prefix}-${index}`
    }
  }
};
</script>

<style>

</style>

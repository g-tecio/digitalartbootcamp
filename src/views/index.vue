<template>
<div>
<sliderComp msg="index"/>
<hovComp ></hovComp>
</div>
  
</template>

<script>
import sliderComp from '@/components/Slider.vue'
import hovComp from '@/components/Hover.vue'

export default {
name: 'index',
  components: {
    sliderComp,
    hovComp
  }
};
</script>


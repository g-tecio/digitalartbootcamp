<template>
  <div>
     
     <payComp msg="pay"/>
  </div>
</template>

<script>
import payComp from '@/components/payComp.vue'


export default {
  name: 'pay',
  components: {
    payComp
  }
}
</script>
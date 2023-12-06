<!-- example of variant props in vue 3
export default {
    props: {
      variant: {
        type: String,
        validators: value =>
          ['primary', 'secondary', 'warning', 'danger'].includes(value),
      }, -->





<script>
export default {
  props: {
    variant: {
      type: String,
      default: 'default', // settare un default value
      validator: (value) =>
        ['golden', 'outlined-golden', 'outlined-grey', 'red'].includes(value),
    },
  },
  computed: {
    btnClass() {
      // in computed si definiscono differenti classi basati sulle variant
      return {
        'btn-golden': this.variant === 'golden',
        'btn-outlined-golden': this.variant === 'outlined-golden',
        'btn-outlined-grey': this.variant === 'outlined-grey',
        'btn-red': this.variant === 'red',
      };
    },
  },
  methods: {
    handleClick() {
      
      this.$emit('click');
    },
  },
};
</script>


<template>

    <button :class="btnClass" @click="handleClick">
         <slot></slot>

    </button>

</template>

<style lang="scss" scoped>

@use "../style/general.scss" as *;
@use "../style/partial/mixin" as *; 



.btn {
  padding: 10px 15px;
  font-size: 1rem;
  cursor: pointer;
}

.btn-golden {
  background-color: goldenrod;
  color: white;
}

.btn-outlined-golden {
  background-color: transparent;
  border: 2px solid goldenrod;
  color: goldenrod;
}

.btn-outlined-grey {
  background-color: transparent;
  border: 2px solid grey;
  color: grey;
}

.btn-red {
  background-color: red;
  color: white;
}



</style>
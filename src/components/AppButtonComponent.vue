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
        'btn-no-margin-golden': this.variant === 'no-margin-golden',
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
  padding: 1rem;
  font-size: 1rem;
  cursor: pointer;
}

.btn-golden {
  padding: 0.5rem 1rem ;
  background-color: $primary-gold;
  color: white;
  border: transparent;
  margin-top: 1.5rem;
  cursor: pointer;
}

.btn-no-margin-golden {
  padding: 0.5rem 1rem ;
  background-color: $primary-gold;
  color: white;
  border: transparent;
  
  cursor: pointer;
}


.btn-outlined-golden {
    padding: 0.5rem 1rem ;
  background-color: transparent;
  border: 2px solid $primary-gold;
  color: $primary-gold;
  cursor: pointer;
}

.btn-outlined-grey {
    padding: 0.5rem 1rem ;
  background-color: transparent;
  border: 2px solid $primary-gray;
  color: $primary-gray;
  cursor: pointer;
}

.btn-red {
  padding: 0.5rem 1rem ;
  width: 100%;
  background-color: $material-sienna;
  color: white;
  cursor: pointer;
}



</style>
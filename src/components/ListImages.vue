<template>
  <div class="list">
    <div class="list-wrapper">
      <div class="list-box" 
        v-for="image in imagesList" 
        :key="image.id" 
        data-aos="zoom-in"
        @click="$emit('removeImage', image.id)"
        >
        <img 
          class="list-image animate__animated animate__bounce animate__delay-2s" 
          :src="image.url" 
          :alt="image.title" 
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imagesList: {
      type: Array,
      required: true,
      default: () => [],
    },
  },

  methods: {

  }
};
</script>
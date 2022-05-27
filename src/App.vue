<template>
  <div id="app">
    <Header />
    <main>
      <p>He modificado la petición para que sólo me duvuelva los 100 primeros resultados.</p>
      <ListImages :imagesList="images" @removeImage="handlerRemoveImage" />
    </main>
  </div>
</template>

<script>
import axios from "axios"
import Header from "@/components/Header"
import ListImages from "@/components/ListImages"

import imagesApi from "@/api/imagesApi"
export default {
  name: 'App',
  components: {
    Header,
    ListImages
  },

  data() {
    return {
      images: []
    }
  },

  mounted() {
    this.handlerImagesApi()
  },

  methods: {
    async handlerImagesApi() {
      const resp = await imagesApi.get()
      this.images = resp.data
    },

    async handlerRemoveImage(imageId) {
      await axios.delete('https://jsonplaceholder.typicode.com/photos/' + imageId)
      this.images = this.images.filter(image => image.id !== imageId)
      this.$toast.success(`La imagen con id ${imageId} ha sido eliminada`);
    }
  }
}
</script>

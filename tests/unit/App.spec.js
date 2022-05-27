import { shallowMount } from "@vue/test-utils"
import App from "@/App"

describe("Helpers getPokemonOptions", () => {

    test("Debe de regresar un arreglo de 100 items", async() => {
        const wrapper = shallowMount(App)
        await wrapper.vm.handlerImagesApi()
        expect(wrapper.vm.images.length).toBe(100)
    })
})
import imagesApi from "@/api/imagesApi";

describe("Images API", () => {
    test("Axios debe de estar configurado con la base URL", () => {
        expect(imagesApi.defaults.baseURL).toContain("https://jsonplaceholder.typicode.com/photos")
    })
})
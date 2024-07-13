/* eslint-disable no-undef */
import { filesUpload } from "../../src/helpers/filesUpload";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.VITE_CLOUDINARY_NAME,
  api_key: process.env.VITE_CLOUDINARY_KEY,
  api_secret: process.env.VITE_CLOUDINARY_SECRET,
  secure: true,
});

/* eslint-disable no-undef */
describe("Preubas en fileUpload", () => {
  test("Debe de subir el archivo correctamente a cloudinary", async () => {
    const imageUrl =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/American_Beaver.jpg/599px-American_Beaver.jpg";

    const resp = await fetch(imageUrl);
    //console.log(resp)
    const blob = await resp.blob();
    //console.log(blob)

    const file = new File([blob], "beaver.jpg");
    //console.log(file)

    const url = await filesUpload(file);
    expect(typeof url).toBe("string");
    const segments = url.split("/");
    const imageId = segments[segments.length - 1].replace(".jpg", "");
    const cloudResponse = await cloudinary.api.delete_resources(
      ['journal/'+imageId],
      {
        resource_type: "image",
      }
    );
    console.log({cloudResponse})
  });
  test("Debe de retornar null", async () => {
    const file = new File([], "beaver.jpg");
    const url = await filesUpload(file);
    expect(url).toBe(null);
  });
});

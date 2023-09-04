// import axios from "axios";

// const upload = async (file) => {
//   const data = new FormData();
//   data.append("file", file);

//   try {
//     const cloudinaryBaseUrl = "https://api.cloudinary.com/v1_1/dbpdeqot4"; // Replace with your Cloudinary cloud name
//     const apiKey = "199168726998885";
//     const uploadPreset = "kcjv0aun"; // Replace with your actual upload preset name

//     const response = await axios.post(
//       `${cloudinaryBaseUrl}/upload`,
//       data,
//       {
//         headers: {
//           "Content-Type": "multipart/form-data"
//         },
//         params: {
//           upload_preset: uploadPreset,
//           api_key: apiKey
//         }
//       }
//     );


    

//     const { secure_url } = response.data;
//     return secure_url;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default upload;



import axios from "axios";

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "sme_connect");
  try {
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dbpdeqot4/image/upload",
      data
    );
    const { url } = res.data;
    return url;
  } catch (error) {
    console.log(error);
  }
};
export default upload;
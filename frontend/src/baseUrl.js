// export const baseApiURL = () => {
//   // console.log(process.env.REACT_APP_APILINK);
//   return process.env.REACT_APP_APILINK || 'http://localhost:5000/api';
// };
// baseApiURL();



export const baseApiURL = () => {
  // console.log("hello")
  // console.log(import.meta.env.VITE_APILINK);
  return import.meta.env.VITE_APILINK || 'http://localhost:5000/api';
};

// console.log(baseApiURL())
// import.meta.env.VITE_MEDIA_LINK
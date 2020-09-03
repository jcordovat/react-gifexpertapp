export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=DeimbMFoUVpI7Yyue3ME3fO2NdPV3GWM`;

  const resp = await fetch(url);
  const { data } = await resp.json();
  //console.log(data);

  const gifs = data.map(({ id, title, images }) => {
    return {
      id: id,
      title: title,
      url: images?.downsized_medium.url,
    };
  });
  return gifs;
  //setImages(gifs);
  //console.log(gifs);
};

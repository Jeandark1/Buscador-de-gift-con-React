export const getGifs = async({ category }) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=zfPdsll9QxgopnLsu7AA2CJe9t1MgvxC&q=${category}&limit=10`
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    return gifs;
}
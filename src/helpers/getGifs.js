export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${  encodeURI(category) }&limit=10&api_key=4OF9Ec6szGr6SFNSh9wwul9DoEZniiUP`;
    const response = await fetch( url );
    const { data } = await response.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;
}
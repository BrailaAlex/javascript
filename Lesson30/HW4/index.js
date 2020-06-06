const addImageV2 = url => {
    return new Promise((resolve, reject) => {
        const img = document.createElement('img');
        img.setAttribute('alt', 'User avatar');
        img.src = url;

        const pageElem = document.querySelector('.page');
        pageElem.append(img);

        // const onImageLoaded = () => {
        //     const { width, height } = img;
        //     resolve({ width, height });
        // }

        img.addEventListener('load', () => {
            const { width, height } = img;
            resolve({ width, height });
        });

        img.addEventListener('error', () => reject(new Error('Image load failed')));
    });
}
const res = 'https://wallpapershome.com/images/wallpapers/rihan-1080x1920-top-music-artist-and-bands-singer-actress-510.jpg';
const isPromise = addImageV2(res);
isPromise.then(data => console.log(data));
isPromise.catch(error => console.log(error));

export { addImageV2 };
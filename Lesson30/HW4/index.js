const addImageV2 = url => {
        return new Promise(function addImage(resolve, reject) {
            const img = document.createElement('img');
            img.setAttribute('alt', 'User avatar');
            img.src = url;

            const pageElem = document.querySelector('.page');
            pageElem.append(img);

            const onImageLoaded = () => {
                const { width, height } = img;
                resolve({ width, height });
            }

            img.addEventListener('load', onImageLoaded);

            const onImageLoadError = () => reject(new Error('Image load failed'))

            img.addEventListener('error', onImageLoadError);
        });
    }
    // const res = 'https://wallpapershome.com/images/wallpapers/rihan-1080x1920-top-music-artist-and-bands-singer-actress-510.jpg';
    // const isPromise = addImageV2(res);
    // isPromise.then(data => console.log(data));
    // isPromise.catch(error => console.log(error));

export { addImageV2 };
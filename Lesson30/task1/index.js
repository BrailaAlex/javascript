//addimage

const addImageWithPromise = imgSrc => {
    return new Promise((getImageSize, getErrorText) => {
        const imgElem = document.createElement('img');
        imgElem.setAttribute('alt', 'My Photo');
        imgElem.src = imgSrc;
        const containerElem = document.querySelector('.page');
        containerElem.append(imgElem);

        function onImageLoaded() {
            const { width, height } = imgElem;
            getImageSize({ width, height });
        };

        imgElem.addEventListener('load', onImageLoaded);
        imgElem.addEventListener('error', () => getErrorText(new Error('Image load failed')));
    });
};

const imgSrc = 'hps://wallpapershome.com/images/wallpapers/rihan-1080x1920-top-music-artist-and-bands-singer-actress-510.jpg';

const resultPromise = addImageWithPromise(imgSrc);

resultPromise.then(data => console.log(data)); //getting data from success result of Promise function
resultPromise.catch(error => console.log(error));
// console.log(result);
// export { addImage };
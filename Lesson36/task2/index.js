import { renderUserData } from './user.js';
import { renderRepos, cleanReposList } from './repos.js';
import { fetchUserData, fetchRepositories } from './gateways.js';
import { showSpinner, hideSpinner } from './spinner.js';


const defaultUser = { //setting default user with default avatar and empty name and location
    avatar_url: 'https://avatars3.githubusercontent.com/u10001',
    name: '',
    location: '',
};

renderUserData(defaultUser);

// const defaultAvatar = 'https://api.github.com/users/USERNAME'
//fetch and render user data ...


const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');


const onSearchUser = async() => {
    showSpinner();
    cleanReposList();
    try {
        const userName = userNameInputElem.value;
        const userData = await fetchUserData(userName);
        renderUserData(userData);
        const reposlist = await fetchRepositories(userData.repos_url);
        renderRepos(reposlist);
    } catch (error) {
        alert(error.message);
    } finally {
        hideSpinner();
    }
    // fetchUserData(userName)
    //     .then(userData => {
    //         renderUserData(userData);
    //         return userData.repos_url;
    //     })
    //     .then(url => {
    //         return fetchRepositories(url);
    //     })
    //     .then(reposlist => renderRepos(reposlist))
    //     .catch(error => alert(error.message))
    //     .finally(() => hideSpinner());
}

showUserBtnElem.addEventListener('click', onSearchUser);
//facebook
// const favorites = ['id-6', 'id-7'];

// const tree = {
//     id: 'id-1',
//     name: 'Products',
//     nodes: [{
//         id: 'id-6',
//         name: 'food',
//         nodes: [{
//             id: 'id-7',
//             name: "chps'",
//             nodes: []
//         }, ],
//     }, ],
// }

export const markFavorites = (tree, favorites) => {
    const isFavorite = favorites.includes(tree.id); //checks if node contains requested id on every step when we go deeper;

    return {
        ...tree,
        isFavorite,
        nodes: tree.nodes.map(childNode => markFavorites(childNode, favorites)),
    }
};
// const result = markFavourites(tree, favourites);
// console.log(result);
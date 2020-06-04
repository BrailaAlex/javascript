// const favourites = ['id-6', 'id-7'];

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

export const markFavourites = (tree, favourites) => {
    const isFavourite = favourites.includes(tree.id); //checks if node contains requested id on every step when we go deeper;
    return {
        ...tree,
        isFavourite,
        nodes: tree.nodes.map(childNode => markFavourites(childNode, favourites))
    }
};
// const result = markFavourites(tree, favourites);
// console.log(result);
const choice = (items) => {
    let rand = Math.floor(Math.random() * items.length);
    return (items[rand]);
};

const remove = (items, item) => {
    return (items.filter(stuff => stuff != item));
};

export { choice, remove };
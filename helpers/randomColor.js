const colors = ['red', 'blue', 'green'];
const randomColor = () => {
    return colors[ Math.floor(Math.random() * colors.length)];
};

module.exports = randomColor;
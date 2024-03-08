const User = function () {
    Object.defineProperties(this, {
        id: {
            enumerable: true,
            value: `UID-${parseInt(Math.random() * 30000)}-XZ`,
        },
    });
};

let joe = new User();

console.log(joe);
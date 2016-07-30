var NodePhysijs = {
    THREE: require('./libs/three.js'),
    Ammo: require('./libs/ammo.js'),
    Physijs: require('./libs/physi.js')(THREE, Ammo)
};

module.exports = NodePhysijs;

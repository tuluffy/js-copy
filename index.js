function copy(obj){
    let mid = {}, copyObj = {};

    Object.defineProperties(mid, Object.getOwnPropertyDescriptors(obj));
    copyObj = Object.getOwnPropertyDescriptors(mid);

    return copyObj;
};

export default copy;
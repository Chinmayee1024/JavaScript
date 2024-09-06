// 1.## CREATE A CONST Object CALLED "PRODUCT" TO STORE INFORMATION SHOWN IN Picture.
// =====================================================================================

const product={
    tittle:"BallPen" ,
    rating: 4,
    offer: 5,
    price: 270
};
console.log(product);//{tittle: 'BallPen', rating: 4, offer: 5, price: 270}

// 2. CREATE A CONSTANT OBJECT CALLED"PROFILE" TO STORE INFORMATION SHOWN IN THE PICTURE 

const profile={
    userName:"@chinmayee" ,
    isFollow:false,
    followers:256,
    following:153
};
console.log(profile);
console.log(typeof profile);//object
console.log(typeof profile["userName"]);//string
console.log(typeof profile["followers"]);//number
console.log(typeof profile["following"]);//number
console.log(typeof profile["isFollow"]);//boolean
const Jimp = require("jimp");

/**
 * @note thanks to https://www.codedrome.com/comparing-images-node-jimp/ for the image commparison notes
 *@see https://www.codedrome.com/comparing-images-node-jimp/ for how to use jimp
 */
 (async function(){

    // equal will be true, if images looks the same

    const img1 = await Jimp.read('img1.png');
    const img2 = await Jimp.read ('img2.png');

    console.log("img1.png\n=======================");
    console.log(`hash (base 64) ${img1.hash()}`);
    console.log(`hash (binary)  ${img1.hash(2)}`);


    console.log("img2.png\n=======================");
    console.log(`hash (base 64) ${img2.hash()}`);
    console.log(`hash (binary)  ${img2.hash(2)}`);

    console.log("img1.png ==> img2.png\n=======================");

    console.log(`distance       ${Jimp.distance(img1, img2)}`);
    console.log(`diff.percent   ${Jimp.diff(img1, img2).percent}\n`);


})()

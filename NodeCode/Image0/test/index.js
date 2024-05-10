const sharp = require('sharp');
const path = require('path');
console.log(1);
// console.log(path);
console.log(path.resolve(__dirname, 'water.png'));
console.log(path.resolve(__dirname, 'index.js'));
const imgPath = path.resolve(__dirname, 'water.png');

async function getMetadata() {
  /* 错误示范
  const metadata = await sharp(water.png).metadata();
    
    */
  //   sharp 模块需要传入完整的文件路径来读取图片
  const metadata = await sharp(imgPath).metadata();
  console.log(metadata);

  //   1. 修改大小
}

getMetadata();

//
async function resizeImage() {
  try {
    await sharp('water.png')
      .resize({
        // 注意这个修改图片大小是需要按照一定比例来实现的 这个是原来图片大小的两倍
        width: 210,
        heigh: 138,
      })
      .toFile('water-resized.png');
    console.log('修改大小成功，请查看');
    const metadataResized = await sharp(
      path.resolve(__dirname, 'water-resized.png')
    ).metadata();
    console.log(metadataResized);
  } catch (error) {
    console.log(error);
  }
}
resizeImage();

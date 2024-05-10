function processImage() {
  var fileInput = document.getElementById('imageInput');
  var file = fileInput.files[0];
  var formData = new FormData();
  formData.append('image', file);

  // 使用fetch()函数向后端发送POST请求
  // 指定了发送请求的URL为/process_image
  fetch('/process_image', {
    method: 'POST',
    body: formData,
  })
    // 当服务器返回响应后，使用.then()方法处理响应
    //   response.text())用于将响应的内容转换为文本形式
    .then((response) => response.text())
    .then((data) => {
      // 它将数据作为Base64编码的图片数据
      var imgElement = document.getElementById('previewImage');
      imgElement.src = data;
      imgElement.style.display = 'block';
    })
    .catch((error) => console.error('Error:', error));
}

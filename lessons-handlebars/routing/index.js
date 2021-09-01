// 6 giải thích kỹ hơn về routing
app.get('/', (req, res) => {  //  get đối số thứ 1 là tuyến đường của cái path
                              //  get đối số thứ 2 là 1 function() handlebars, 
                              // function() này sẽ được gọi lại khi mà cái tuyến đường của nó khớp
  res.render('home'); 
});                           // biến request là nó chứa những thông tin mà ứng dụng phía client nó yêu cầu lên server
                              // biến response: phản hồi, trả về như thế nào là do response xử lý  


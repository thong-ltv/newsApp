    //hàm gọi ajax lấy dữ liệu từ api
    function ajaxCall(domains, from) {
    
      $.ajax({

          // Our sample url to make request 
          url: 
          `https://newsapi.org/v2/everything?domains=${domains}&from=${from}&sortBy=popularity&pageSize=10&apiKey=9e7d75b45e7c4ffcbd7bac4d9d50dab4`,

          // Type of Request
          type: "GET",

          // Function to call when to
          // request is ok 
          success: function (data) {
            
            //lưu data ở localstorage
             localStorage.setItem("dataGet", JSON.stringify(data));
            //  console.log(JSON.parse(localStorage.getItem("dataGet"))['articles']);

             var dataConnect = "";
             if(data['totalResults'] > 0)
             {
                for (let i = 0; i < data['articles'].length; i++) {
                dataConnect += "<div class='col image px-3 pb-3 pt-3 mb-3 border border-dark' style=''>"
              + "<img style='width: 100%;' src=" + data['articles'][i]['urlToImage'] + " alt='' class='mb-3 imageIndex'> " 
              + "<p class='text-uppercase fw-bold'>" 
              + data['articles'][i]['title'] 
              + "</p>"
              + "<p>" 
              + data['articles'][i]['description']
              + "</p>"
              + "<p>"
              + data['articles'][i]['publishedAt']
              + "</p>"
              + "<a href=" + data['articles'][i]['url'] + ">Đọc thêm... </a>"
              + "</div>" 
              + "<br>";
            }
             }else{
              dataConnect += "<h3>Không có dữ liệu</h3>"
             }
             console.log(dataConnect)
            document.getElementById('indexHtml').innerHTML = dataConnect;
          },

          // Error handling 
          error: function (error) {
              console.log(`Error ${error}`);
          }
      });
    };

    // document.getElementById("btnGet").addEventListener("click", ajaxCall());
    document.getElementById("btnGet").addEventListener("click", () => {
        //lấy dữ liệu được chọn bởi người dùng
        var domains  = document.getElementById('selectDomains').value;
        var from  = document.getElementById('inputFrom').value;

        if(domains == 0){
            alert("Bạn vui lòng chọn trang tin tức muốn lấy thông tin!!!")
        }else{
            ajaxCall(domains, from);
        }
    });

    function htmlData(data, valueSearch) {
        var dataConnect = "";
        
        for (let i = 0; i < data['articles'].length; i++) {

            if(data['articles'][i]['title'].search(valueSearch) >= 0 ) {
                
                dataConnect += "<div class='col image px-3 pb-3 pt-3 mb-3 border border-dark' style=''>"
                        + "<img style='width: 100%;' src=" + data['articles'][i]['urlToImage'] + " alt='' class='mb-3 imageIndex'> " 
                        + "<p class='text-uppercase fw-bold'>" 
                        + data['articles'][i]['title'] 
                        + "</p>"
                        + "<p>" 
                        + data['articles'][i]['description']
                        + "</p>"
                        + "<p>"
                        + data['articles'][i]['publishedAt']
                        + "</p>"
                        + "<a href=" + data['articles'][i]['url'] + ">Đọc thêm... </a>"
                        + "</div>" 
                        + "<br>";
            }                    
        }
        // console.log(dataConnect)
        return dataConnect;    
    }
    
    //xử lý search
    document.getElementById("btnSearch").addEventListener("click", () => {
        // //lấy dữ liệu được chọn bởi người dùng
        // var search  = document.getElementById('inputSearch').value;
        // var data = JSON.parse(localStorage.getItem("dataGet"));

        // if(search != ""){
            
        //     var valueSearchTrim = search.trim();
        //     var arraySearchSplit = search.split(" ");
        //     var dataConnectSearch = "";
        //     dataConnectSearch += htmlData(data, valueSearchTrim);
        //     for(var i = 1; i < arraySearchSplit.length; i++) {
        //         dataConnectSearch += htmlData(data, arraySearchSplit[i]);
        //     }
        //     if(dataConnectSearch == "") {
        //         dataConnectSearch += "<h3>Không có dữ liệu</h3>";
        //     }
            
        //     document.getElementById('indexHtml').innerHTML = dataConnectSearch;
        //     console.log(dataConnectSearch)
        // }else{
        //     alert("Vui lòng nhập thông tin tìm kiếm!!! ")
        // }

         //lấy dữ liệu được chọn bởi người dùng
         var domains  = document.getElementById('selectDomains').value;
         var from  = document.getElementById('inputFrom').value;
        alert(domains)
         if(domains == 0){
             alert("Bạn vui lòng chọn trang tin tức muốn lấy thông tin!!!")
         }else{
             ajaxCall(domains, from);
         }
    });




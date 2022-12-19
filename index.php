<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index/index.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>News App</title>
</head>
<body>
    <div class="container">
        <div class="navbar2">
            <nav class="navbar navbar-expand-lg navbar-light bg-info">
                <div class="container-fluid">
                  <a class="navbar-brand fs-5" href="#newsApp">News App</a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item dropdown me-2 ms-4">
                        <select class="form-select form-select-sm mt-1 fs-5" aria-label=".form-select-sm example" id="selectDomains">
                          <option value=0 selected>Chọn trang tin tức</option>
                          <option value="vnexpress.net">vnexpress.net</option>
                          <option value="bbc.com">bbc.com</option>
                          <option value="cnn.com">cnn.com</option>
                          <option value="huffpost.com">huffpost.com</option>
                          <option value="foxsports.com">foxsports.com</option>
                          <option value="nbcnews.com">nbcnews.com</option>
                          <option value="forbes.com">forbes.com</option>
                          <option value="wsj.com">wsj.com</option>
                        </select>
                      </li>
                      <li class="nav-item dropdown me-2 ms-4 fs-5">
                        <label for="">From</label>
                        <input type="date" name="" id="inputFrom" class="mt-1 me-3">
                      </li>
                      <li>
                        <button type="submit" class="btn btn-outline-success ms-3 fs-5" id="btnGet">Get</button>
                      </li>
                    </ul>
                    <form class="d-flex">
                      <input class="form-control me-2 fs-5" type="search" placeholder="Search" aria-label="Search" id="inputSearch">
                      <button class="btn btn-outline-success fs-5" type="submit" id="btnSearch">Search</button>
                    </form>
                  </div>
                </div>
              </nav>
        </div>
    </div>

    <div class="container mt-4">
        <div class="row row-cols-2" id="indexHtml">  
        </div>
    </div>
</body>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-3.6.2.js" integrity="sha256-pkn2CUZmheSeyssYw3vMp1+xyub4m+e+QK4sQskvuo4=" crossorigin="anonymous"></script>
<script src="index/index.js"></script>

</html>
if (localStorage.getItem("token") === null) {
  $("#header").html(`<nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-cateble">
        <div class="container-xxl">
            <a class="navbar-brand" href="index.html">
            <img src="https://cateble.orangestudio.ml/images/feed.png" alt="" width="23" height="23" class="d-inline-block align-text-top">
                <span class="fw-bold">CatContact</span>
                <span class="align-text-top p-small">beta</span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#toggleMobileMenu" aria-controls="toggleMobileMenu" aria-expanded="false">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="toggleMobileMenu">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                <ul class="navbar-nav">
                    <li>
                        <a href="index" class="nav-link">Вход</a>
                    </li>
                   
                </ul>
            </div>
        </div>
    </div>
</nav>`);
}
else {
$("#header").html(`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
<nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-cateble">
        <div class="container-xxl">
            <a class="navbar-brand" href="feed.html">
            <img src="images/feed.png" alt="" width="23" height="23" class="d-inline-block align-text-top">
                <span class="fw-bold">Cateble</span>
                <span class="align-text-top p-small">beta</span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#toggleMobileMenu" aria-controls="toggleMobileMenu" aria-expanded="false">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="toggleMobileMenu">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li>
                        <input type="search" class="form-control col-auto" id="SearchUsers" placeholder="Найти людей">
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbar_dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-person-circle"></i> Вы
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbar_dropdown">
                            <li><a class="dropdown-item" href="profile"><i class="bi bi-person-circle"></i> Профиль</a></li>
                            <li><a class="dropdown-item" href="notifications"><i class="bi bi-bell"></i> Уведомления</a></li>
                            <li><a class="dropdown-item" href="settings"><i class="bi bi-gear"></i> Настройки</a></li>
                            <li><a class="dropdown-item" href="exit"><i class="bi bi-box-arrow-left"></i> Выйти</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="feed" class="nav-link"><i class="bi bi-newspaper"></i> Новости</a>
                    </li>
                    <li>
                        <a href="messages" class="nav-link"><i class="bi bi-chat"></i> Сообщения</a>
                    </li>
                    <li>
                        <a href="friends" class="nav-link"><i class="bi bi-people"></i> Друзья</a>
                    </li>
                    <li>
                        <a href="clubs" class="nav-link"><i class="bi bi-people"></i> Сообщества</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</nav>`);
}

$("#SearchUsers").keydown(function(e){
if(e.keyCode==13){
   window.location.href="search?q="+$("#SearchUsers").val();
}
})
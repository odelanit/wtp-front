<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="">
                    <img src="/images/logo.png" alt="logo">
                    <span>PT Tekno Innova Solusindo</span>
                </a>
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="">
                                HOME
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">
                                TENTANG KAMI
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">
                                PRODUK KAMI
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">
                                BANTUAN
                            </a>
                        </li>
                    </ul>
                    <a class="btn btn-contact" href="">
                        Hubungi Kami
                    </a>
                </div>
            </div>
        </nav>
        <Nuxt/>
    </div>
</template>

<style lang="scss" scoped>
.navbar {
    padding-bottom: 0;
    height: 75px;
}

.bg-light {
    box-shadow: 0 6px 3px 0 rgba(155, 155, 155, 0.86);
    background-color: #f3f3f3;
}

.navbar-brand {
    padding-bottom: 0;
    padding-top: 0;
    white-space: nowrap;
    font-weight: bold;

    img {
        height: 70px;
    }

    span {
        vertical-align: middle;
    }
}

@media (min-width: 992px) {
    .navbar-brand {
        margin-left: 126px;
        margin-right: 218px;
    }
}

.nav-item {
    position: relative;

    .nav-link {
        white-space: nowrap;
        font-weight: 600;
        line-height: 60px;
        color: #444446;
        height: 100%;
        padding-left: 20px;
        padding-right: 20px;
    }

    &.active {
        .nav-link {
            color: #70a8e5;
        }
    }

    &.active:after {
        content: "";
        position: absolute;
        left: 50%;
        bottom: -10px;
        transform: translate(-50%, -50%);
        background-color: #70a8e5;
        width: 14px;
        height: 14px;
        border-radius: 50%;
    }
}

.btn-contact {
    margin-left: auto;
    margin-right: 33px;
    opacity: 0.9;
    border-radius: 30px;
    box-shadow: 6px 1px 16px 0 rgba(0, 0, 0, 0.17);
    background-image: linear-gradient(281deg, #f4f4f4 0, #e6e6e6 100%);

    color: #70a8e5;
    white-space: nowrap;
    padding-left: 40px;
    padding-right: 40px;
}
</style>

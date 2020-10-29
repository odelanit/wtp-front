<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="">
                    <img src="/images/logo.png" alt="logo">
                    <span class="d-none d-md-inline">PT Tekno Innova Solusindo</span>
                </a>
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav d-none d-xxl-flex">
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
                </div>
                <a class="btn btn-contact d-none d-md-inline-block" href="">
                    Hubungi Kami
                </a>
                <button class="btn btn-menu d-md-none" @click="showMobileMenu">
                    <i class="fa fa-bars"></i>
                </button>
            </div>
        </nav>
        <Nuxt/>
        <div class="divider">
        </div>
        <footer>
            <div class="wrapper">
                <div class="row align-items-center">
                    <div class="col-lg-6 d-flex align-items-center">
                        <a href="" class="brand">
                            <img src="/images/logo.png" alt="">
                        </a>
                        <div class="vertical-divider">
                        </div>
                        <div class="intro">
                            <p><a href="">Imprint</a> | <a href="">Privacy Policy</a></p>
                            <p>&copy; 2020 PT.Tekno Innova Solusino</p>
                        </div>
                    </div>
                    <div class="col-lg-6 pt-2 pt-lg-0 text-right">
                        <a class="btn btn-social">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a class="btn btn-social">
                            <i class="fab fa-youtube"></i>
                        </a>
                        <a class="btn btn-social">
                            <i class="fab fa-whatsapp"></i>
                        </a>
                        <a class="btn btn-social">
                            <i class="fa fa-envelope"></i>
                        </a>
                        <a class="btn btn-social">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a class="btn btn-social">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
        <div class="mobile-menu">
            <button class="close" @click="hideMobileMenu">
                <i class="fa fa-times"></i>
            </button>
            <div class="nav-wrap">
                <ul class="nav flex-column">
                    <li class="nav-item">
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
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        showMobileMenu() {
            $('.mobile-menu').css('display', 'block')
        },
        hideMobileMenu() {
            $('.mobile-menu').css('display', 'none')
        }
    }
}
</script>

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
        //line-height: 60px;
        color: #444446;
        //height: 100%;
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
        bottom: -27px;
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

footer {
    .wrapper {
        padding: 22px 20px;
    }
}

@media (min-width: 992px) {
    footer {
        .wrapper {
            padding: 22px 140px;
        }
    }
}

footer {
    background-color: #f3f3f3;

    .brand img {
        height: 100px;
    }

    .vertical-divider {
        margin: auto 20px;
        border: solid 1px #707070;
        height: 80px;
    }

    .intro {
        color: #707070;

        p {
            margin-bottom: 6px;
            letter-spacing: 0.5px;
            font-size: 18px;
        }
    }

    .intro a {
        color: #707070;
    }

    .btn-social {
        color: #ffffff;
        background-color: #70a8e5;
        width: 40px;
        height: 40px;
        border-radius: 40px;
        margin-right: 6px;
        box-shadow: 5px 5px 6px 0 rgba(0, 0, 0, 0.16);
        position: relative;

        i {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        &:last-child {
            margin-right: 0;
        }
    }
}

@media (min-width: 1400px) {
    .d-xxl-flex {
        display: flex !important;
    }
}

.btn-menu {
    color: #70a8e5;
}

.mobile-menu {
    display: none;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    width: 400px;
    background-color: #ffffff;
    z-index: 1031;
    transition: all 0.1s ease-in-out;
    padding: 10px;
    box-shadow: -6px 0 6px 0 rgba(23,23,23,.06);

    .close {
        width: 60px;
        height: 60px;
    }

    .nav-wrap {
        padding-top: 100px;
        padding-bottom: 100px;
    }
}

</style>

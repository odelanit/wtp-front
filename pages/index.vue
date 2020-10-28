<template>
    <div class="main-content">
        <section class="section-1 text-center">
            <img class="bg" src="/images/1.png" alt="">
            <img class="slogan" src="/images/slogan.png" alt="">
            <a href="#" class="btn btn-blue"></a>
        </section>

        <section class="section-2">
            <div class="row">
                <div class="col-6">
                    <h3>
                        We work to <br> make <span class="text-blue">impact</span>
                    </h3>
                    <p>
                        Era digital seharusnya menyejahterakan banyak orang,<br>
                        bukan hanya segelintir orang. Kami akan terus menciptakan<br>
                        produk-produk digital yang inovatif untuk Indonesia sejahtera.
                    </p>
                    <div>
                        <a href="#" class="btn btn-blue border-radius-30">Hubungi Kami</a>
                    </div>
                </div>
                <div class="col-6">

                </div>
            </div>
            <div class="row">
                <div class="col-6">

                </div>
                <div class="col-6">

                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Index',
    head: function () {
        return {
            title: 'Home'
        }
    }
}
</script>

<style lang="scss" scoped>
.main-content {
    padding-top: 75px;
    color: #707070;

    section {
        padding-left: 150px;
        padding-right: 150px;
    }
}

.section-1 {
    background-image: url("/images/bg1.jpg");
    position: relative;
    padding-top: 82px;

    img {
        &.bg {
            width: 100%;
        }

        &.slogan {
            position: absolute;
            top: 35%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 30%;
        }
    }

    .btn-blue {
        width: 250px;
        height: 45px;
        opacity: 0.59;
        border-radius: 30px;
        box-shadow: 0 8px 6px 0 rgba(0, 0, 0, 0.16);
        background-color: #70a8e5;

        position: absolute;
        left: 50%;
        bottom: 8%;
        transform: translate(-50%, -50%);
    }
}

.section-2 {
    padding-top: 100px;
    padding-bottom: 100px;

    h3 {
        font-size: 32px;
        font-weight: bold;
        line-height: 1.33;
        color: #707070;
        margin-top: 30px;
        margin-bottom: 30px;
    }

    p {
        font-size: 18px;
        line-height: 1.5;
        letter-spacing: 0.25px;
        text-align: left;
        margin-top: 30px;
        margin-bottom: 50px;
    }

    .btn {
        padding-left: 30px;
        padding-right: 30px;
    }
}

</style>

@<template>
  <div class="container">
        <div class="container-header f aic mb2">
          <div class="h2 pr1 border-right">
            Sản phẩm
          </div>
          <div class="h5 pr1 pl1 brown">
            Sản phẩm
          </div>
        </div>
        <div class="container-nav relative f jcb mb2">
            <svg class="absolute" style="top: 33%; left: 0.8%" width="14" height="15" viewBox="0 0 14 15">
                <use xlink="http://www.w3.org/2000/svg" href="#search" x="0" y="0"></use>
            </svg>
          <input class="pl2" type="text" style="width: 417px" placeholder="Nhập sản phẩm bạn muốn tìm">
        </div>
        <div class="product">
            <div class="product-portfolio-notdata mb15">
                <div class="portfolio-header p3 mb1">
                    Danh mục sản phẩm
                </div>
                <div class="portfolio-body f fdc aic mb15 pt15 pb15 border-radius w100 bg-white-1">
                    <div class="portfolio-body__title p3 mb15">
                        Có vẻ như bạn chưa có danh mục sản phẩm nào
                    </div>
                    <div class="portfolio-btn f jcc aic pt075 pb075 pl1 pr1 border-radius bg-brown">
                        <svg width="16" height="12" viewBox="0 0 16 12">
                            <use xlink="http://www.w3.org/2000/svg" href="#folder" x="0" y="0"></use>
                        </svg>
                        <div class="h5 ml05 white">
                            Tạo danh mục ngay
                        </div>
                    </div>
                </div>
            </div>
            <div class="product-portfolio mb15">
                <div class="portfolio-header f jcb mb2">
                    <div class="portfolio-header__title p3 mb1">
                        Danh mục sản phẩm
                    </div>
                    <div class="portfolio-btn f jcc aic pt075 pb075 pl1 pr1 border-radius bg-brown">
                        <svg width="16" height="12" viewBox="0 0 16 12">
                            <use xlink="http://www.w3.org/2000/svg" href="#folder" x="0" y="0"></use>
                        </svg>
                        <div class="h5 ml05 white">
                            Tạo danh mục
                        </div>
                    </div>
                </div>
                <div class="portfolio-body">
                    <div class="portfolio-body__title f jcb aic mb1">
                        <div class="brown p2">Tạo gần đây</div>
                        <div class="blue cursor p4">Xem tất cả các mục (99)</div>
                    </div>
                    <div class="portfolio-list f jcb w100">
                        <div class="portfolio__item f aic w20 pt075 pb075 pl1 pr1 border border-radius bg-white-1">
                            <svg width="16" height="12" viewBox="0 0 16 12">
                                <use xlink="http://www.w3.org/2000/svg" href="#folderBrown" x="0" y="0"></use>
                            </svg>
                            <div class="ml05 h7">Mẹ và bé</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product-list-notdata">
                <div class="list-header p3 mb15">
                    Danh sách sản phẩm
                </div>
                <div class="list-filter f aic mb15">
                    <div @click="handleFilter" v-for="item in filter" :key="item" class="filter__item h7 pt05 pb05 pl075 pr075 mr05 border-radius cursor brown bg-brown-1">
                        {{item}}
                    </div>
                </div>
                <div class="f fdc aic pt2 pb2">
                    <svg width="78" height="78" viewBox="0 0 78 78">
                        <use xlink="http://www.w3.org/2000/svg" href="#smile" x="0" y="0"></use>
                    </svg>
                    <div class="mt15 p3">
                        Có vẻ như bạn chưa có sản phẩm nào
                    </div>
                    <div class="mt15">
                        <router-link to="/customer/add">
                            <div class="f aic pt075 pb075 pr1 pl1 border-radius white bg-brown">
                                <svg width="14" height="15" viewBox="0 0 14 15" class="mr05">
                                <use xlink="http://www.w3.org/2000/svg" href="#more" x="0" y="0"></use>
                                </svg>
                                <div class="h5">Thêm sản phẩm</div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="product-list">
                <div class="f jcb aic">
                    <div class="list-header p3 mb15">
                        Danh sách sản phẩm
                    </div>
                    <div class="mt15">
                        <router-link to="/customer/add">
                            <div class="f aic pt075 pb075 pr1 pl1 border-radius white bg-brown">
                                <svg width="14" height="15" viewBox="0 0 14 15" class="mr05">
                                <use xlink="http://www.w3.org/2000/svg" href="#more" x="0" y="0"></use>
                                </svg>
                                <div class="h5">Thêm sản phẩm</div>
                            </div>
                        </router-link>
                    </div>
                </div>
                <div class="list-filter f aic mb15">
                    <div @click="handleFilter" v-for="item in filter" :key="item" class="filter__item h7 pt05 pb05 pl075 pr075 mr05 border-radius cursor brown bg-brown-1">
                        {{item}}
                    </div>
                </div>
                <div class="f fdc aic w100">
                    <ItemList 
                    :titleSelect="selectTitle"
                    :function="handleStyle"
                    :handleInfo="handleInfoProductFilter"
                    ></ItemList>
                </div>
            </div>
        </div>

        <SvgView></SvgView>
  </div>
</template>

<script>
import SvgView from '../SvgView/SvgView.vue'
import ItemList from '../ItemListView/ItemList.vue'
export default {
    components: {
        SvgView,
        ItemList
    },
    data() {
        return {
            filter: ['Tất cả', 'Đang bán', 'Dừng bán'],
            dataFolder : [],
            selectTitle: "",
        }
    },
    methods: {
        handleFilter(event) {
            var select = document.getElementsByClassName('filter__item');
            for(let i = 0; i < select.length; i++) {
              select[i].classList.remove('select')
            }
            var button = event.target;
            button.classList.add('select');
            this.selectTitle = button.innerText;
        },
        handleStyle() {
            var item = document.getElementsByClassName('item-list');
            for (let i = 0; i < item.length; i++) {
                item[i].children[4].classList.add('price-style')
            }
            var status = document.getElementsByClassName('item-list');
            for (let i = 0; i < status.length; i++) {
                if (status[i].children[7].innerText == 'Đang bán') {
                   status[i].children[7].classList.add('on-sale')
                }
                else {
                    status[i].children[7].classList.add('stop-sale')
                }
            }
        },
        handleInfoProduct() {
            var info = document.getElementsByClassName('item-list')
            var header = document.getElementsByClassName('header')
            header[1].children[1].classList.add('width-fix')
            for(let i = 0; i < info.length; i++) {
                info[i].children[1].classList.add('width-fix')
                var title = info[i].children[1].innerText;
                var inventory = info[i].children[5].innerText;
                info[i].children[1].innerHTML = `
                    <div class="f jcc" style="width: 200px">
                        <div class"mr05 border-radius">
                            <img class="border-radius" style="width: 48px; height: 48px" src="https://ss-images.saostar.vn/pc/1594175247996/avengers-endgame-thor-feature.jpg" alt="">
                        </div>
                        <div class="f fdc jcb ml05">
                            <div class="blue p4 mb025">
                                ${title}
                            </div>
                            <div class="h6">
                                Tồn kho: ${inventory}
                            </div>
                        </div>
                    </div>
                `
            }
        },
        handleInfoProductFilter() {
            var info = document.getElementsByClassName('item-list')
            var header = document.getElementsByClassName('header')
            header[1].children[1].classList.add('width-fix')
            for(let i = 0; i < info.length; i++) {
                info[i].children[1].classList.add('width-fix')
                var title = info[i].children[1].children[0].children[1].children[0].innerText;
                var inventory = info[i].children[5].innerText;
                info[i].children[1].innerHTML = `
                    <div class="f jcc" style="width: 200px">
                        <div class"mr05 border-radius">
                            <img class="border-radius" style="width: 48px; height: 48px" src="https://ss-images.saostar.vn/pc/1594175247996/avengers-endgame-thor-feature.jpg" alt="">
                        </div>
                        <div class="f fdc jcb ml05">
                            <div class="blue p4 mb025">
                                ${title}
                            </div>
                            <div class="h6">
                                Tồn kho: ${inventory}
                            </div>
                        </div>
                    </div>
                `
                console.log(info[i].children[1].children[0].children[1].children[0])
            }
        }
    },
    created() {
        setTimeout(() => {
            // Không chạy vì đang hide trang nodata
            this.handleInfoProduct()
            this.handleStyle()
            var button = document.getElementsByClassName('filter__item')[3];
            button.classList.add('select');
        }, 100)
    },
}
</script>

<style scoped lang="scss">
@import "Product.scss";
</style>
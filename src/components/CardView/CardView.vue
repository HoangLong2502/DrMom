<template>
    <div class="">
        <div class="card-item border-radius mb1 bg-white-1" v-for="item in dataSelect" :key="item">
            <div class="card-item__header f jcb aic pt05 pb05 pl1 pr1 border-bottom">
                <h5 class="red">Tên quà tặng</h5>
                <div class="card-item__status h7 pt025 pb025 pl05 pr05 border-radius">
                    {{item.status}}
                </div>
            </div>
            <div class="card-item__body cursor pt1 pb1 pl1 pr1">
                <div class="f jcb aic mb05">
                    <div class="gray h6">Loại quà</div>
                    <div class="h6">{{item.type}}</div>
                </div>
                <div class="f jcb aic mb05">
                    <div class="gray h6">Điều kiện nhận</div>
                    <div class="h6">{{item.condition}}</div>
                </div>
                <div class="f jcb aic mb05">
                    <div class="gray h6">Số lượng</div>
                    <div class="h6">{{item.quantity}}</div>
                </div>
                <div class="f jcb aic mb05">
                    <div class="gray h6">Hạn sử dụng</div>
                    <div class="p4">{{item.expiry}}</div>
                </div>
            </div>
            <div class="card-item__total f jcb aic pt1 pb1 pr1 pl1">
                <div class="f fdc">
                    <div class="h7 mb05">Tổng giá trị quà</div>
                    <div class="p3 brown">600.000.000 VNĐ</div>
                </div>
                <div @click="loadStatusCard" class="h5 pt075 pb075 pl1 pr1 border border-radius bg-white-1">
                    Xem chi tiết
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        titleSelect: String,
    },
    data() {
        return {
            data: [
                {
                    status: 'Đang chạy',
                    type: 'Sản phẩm',
                    condition : 'Khách hạng thường',
                    quantity : '3 sản phẩm',
                    expiry : '11:11 12-12-2022'
                },
                {
                    status: 'Chưa chạy',
                    type: 'Sản phẩm',
                    condition : 'Khách hạng VIP',
                    quantity : '25 sản phẩm',
                    expiry : '11:11 12-12-2022'
                },
                {
                    status: 'Đã dừng',
                    type: 'Sản phẩm',
                    condition : 'Khách hạng VIP',
                    quantity : '10 sản phẩm',
                    expiry : '11:11 12-12-2022'
                },
                {
                    status: 'Đang chạy',
                    type: 'Sản phẩm',
                    condition : 'Khách hạng thường',
                    quantity : '5 sản phẩm',
                    expiry : '11:11 12-12-2022'
                },
                {
                    status: 'Chưa chạy',
                    type: 'Sản phẩm',
                    condition : 'Khách hạng thường',
                    quantity : '11 sản phẩm',
                    expiry : '11:11 12-12-2022'
                },
                {
                    status: 'Đã dừng',
                    type: 'Sản phẩm',
                    condition : 'Khách hạng thường',
                    quantity : '21 sản phẩm',
                    expiry : '11:11 12-12-2022'
                },
                {
                    status: 'Đã dừng',
                    type: 'Sản phẩm',
                    condition : 'Khách hạng VIP',
                    quantity : '10 sản phẩm',
                    expiry : '11:11 12-12-2022'
                },
                {
                    status: 'Đang chạy',
                    type: 'Sản phẩm',
                    condition : 'Khách hạng thường',
                    quantity : '5 sản phẩm',
                    expiry : '11:11 12-12-2022'
                },
            ],
            dataSelect: [],
        }
    },
    watch: {
        'titleSelect' : function() {
            this.dataSelect = []
            if(this.titleSelect == 'Tất cả') {
                for(let i = 0; i < this.data.length; i++) { 
                    this.dataSelect.push(this.data[i])
                }
            }
            else {
                for(let i = 0; i < this.data.length; i++) {
                    if(this.data[i].status == this.titleSelect) {
                        this.dataSelect.push(this.data[i])
                        console.log(this.dataSelect)
                    }
                }
            }
            setTimeout(() => {
                this.loadStatusCard()
            }, 1)
        }
    },
    methods: {
        loadStatusCard() {
            var statusCard = document.getElementsByClassName('card-item__status')
            console.log(this.titleSelect)
            for (let i = 0; i < statusCard.length; i++) {
                if (statusCard[i].innerText == "Đang chạy") {
                    statusCard[i].classList.add('active')
                }
                else if (statusCard[i].innerText == 'Chưa chạy') {
                    statusCard[i].classList.add('wait')
                }
                else {
                    statusCard[i].classList.add('stop')

                }
            }
        },
    },
    created() {
        for(let i = 0; i < this.data.length; i++) {
            this.dataSelect.push(this.data[i])
        }
        setTimeout(() => {
            this.loadStatusCard()
            
        }, 1)
    },
}
</script>

<style scoped lang="scss">
@import "Card.scss"
</style>
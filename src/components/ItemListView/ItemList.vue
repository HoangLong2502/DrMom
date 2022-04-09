<template>
  <div class="w100">
    <div class="header w100 f aic jcb p5 p5 pt1 pb1 pr1 pl1">
      <div class="f aic jcb" style="width: 5%">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <div class="p5 w10 align-c">STT</div>
      </div>
      <div v-bind:style="{ width: wid + '%'}" v-for="item in key" :key="item" class="align-c p5">
        {{ item }}
      </div>
    </div>
    <div class="body">
        <div v-for="(item, index) in dataSelect" :key="index" class="item-list w100 f aic jcb p5 pt1 pb1 pr1 pl1 mb1 border-radius bg-white-1">
          <div class=" f aic jcb" style="width: 5%">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <div class="p5 align-c">{{index + 1}}</div>
          </div>
          <div v-bind:style="{ width: wid + '%'}" v-for="item in item" :key="item" class="align-c h6 gray">
            {{item}}
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titleSelect: String,
    function: { type: Function},
    handleInfoProduct: { type: Function},
  },
  data() {
    return {
      key: [],
      data: [ 
        {
          'Sản phẩm' : 'Áo thun Hàn Quốc',
          'Loại sản phẩm' : 'Sản phẩm dịch vụ',
          'Giá sản phẩm': '135.000 VNĐ',
          'Giá khuyến mãi': '100.000 VNĐ',
          'Tồn kho' : '25 chiếc',
          'Đơn hàng đã bán': '50 Đơn',
          'Trạng thái' : 'Đang bán',
        },
        {
          'Sản phẩm' : 'Áo thun Hàn Quốc',
          'Loại sản phẩm' : 'Sản phẩm dịch vụ',
          'Giá sản phẩm': '135.000 VNĐ',
          'Giá khuyến mãi': '100.000 VNĐ',
          'Tồn kho' : '30  chiếc',
          'Đơn hàng đã bán': '50 Đơn',
          'Trạng thái' : 'Dừng bán',
        },
        {
          'Sản phẩm' : 'Áo thun Hàn Quốc',
          'Loại sản phẩm' : 'Sản phẩm dịch vụ',
          'Giá sản phẩm': '135.000 VNĐ',
          'Giá khuyến mãi': '100.000 VNĐ',
          'Tồn kho' : '25 chiếc',
          'Đơn hàng đã bán': '50 Đơn',
          'Trạng thái' : 'Đang bán',
        },
        {
          'Sản phẩm' : 'Áo thun Hàn Quốc',
          'Loại sản phẩm' : 'Sản phẩm dịch vụ',
          'Giá sản phẩm': '135.000 VNĐ',
          'Giá khuyến mãi': '100.000 VNĐ',
          'Tồn kho' : '30  chiếc',
          'Đơn hàng đã bán': '50 Đơn',
          'Trạng thái' : 'Dừng bán',
        }
      ],
      dataSelect: [ 
        {
          'Sản phẩm' : 'Áo thun Hàn Quốc',
          'Loại sản phẩm' : 'Sản phẩm dịch vụ',
          'Giá sản phẩm': '135.000 VNĐ',
          'Giá khuyến mãi': '100.000 VNĐ',
          'Tồn kho' : '25 chiếc',
          'Đơn hàng đã bán': '50 Đơn',
          'Trạng thái' : 'Đang bán',
        },
        {
          'Sản phẩm' : 'Áo thun Hàn Quốc',
          'Loại sản phẩm' : 'Sản phẩm dịch vụ',
          'Giá sản phẩm': '135.000 VNĐ',
          'Giá khuyến mãi': '100.000 VNĐ',
          'Tồn kho' : '30  chiếc',
          'Đơn hàng đã bán': '50 Đơn',
          'Trạng thái' : 'Dừng bán',
        },
        {
          'Sản phẩm' : 'Áo thun Hàn Quốc',
          'Loại sản phẩm' : 'Sản phẩm dịch vụ',
          'Giá sản phẩm': '135.000 VNĐ',
          'Giá khuyến mãi': '100.000 VNĐ',
          'Tồn kho' : '25 chiếc',
          'Đơn hàng đã bán': '50 Đơn',
          'Trạng thái' : 'Đang bán',
        },
        {
          'Sản phẩm' : 'Áo thun Hàn Quốc',
          'Loại sản phẩm' : 'Sản phẩm dịch vụ',
          'Giá sản phẩm': '135.000 VNĐ',
          'Giá khuyến mãi': '100.000 VNĐ',
          'Tồn kho' : '30  chiếc',
          'Đơn hàng đã bán': '50 Đơn',
          'Trạng thái' : 'Dừng bán',
        }
      ],
      wid: ''
    }
  },
  watch: {
    'titleSelect': function() {
      this.dataSelect = []
      this.handleFilter()
      setTimeout(() => {
        this.function()
        this.handleInfoProduct()
      }, 1)
    }
  },
  methods : {
    handleStatus() {
       this.wid = (60/this.key.length)
    },
    handleFilter() {
      if(this.titleSelect == 'Tất cả') {
        for(let i = 0; i < this.data.length; i++) {
          this.dataSelect.push(this.data[i])
        }
      } else {
        for(let i = 0; i < this.data.length; i++) {
          if(this.data[i]['Trạng thái'] == this.titleSelect) {
            this.dataSelect.push(this.data[i])
          }
        }
      }
    },
  },
  created() {
    this.key = Object.keys(this.data[0])
    this.handleStatus();
    setTimeout(() => {
      this.function()
      this.handleInfoProduct()
    }, 2)
  }
}
</script>

<style scoped lang="scss">
@import "Item.scss";
</style>
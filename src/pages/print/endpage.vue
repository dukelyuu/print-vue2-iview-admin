<template>
  <div style="background:#eee;padding: 20px;">
    <Table size="small" ref="table" height="800" :data="data" :columns="columns"></Table>
    <div>
      <i-button type="primary" @click="save">保存</i-button>
      <i-button type="ghost" style="margin-left: 8px">取消</i-button>
      <i-button style="margin-left: 8px" @click="previewPrintFull">打印预览</i-button>
      <i-button style="margin-left: 8px" @click="printDesign">打印设计</i-button>
      <i-button style="margin-left: 8px" @click="onAddRow">新增一行</i-button>
      <i-button style="margin-left: 8px" @click="onPrint">选择打印</i-button>
      <i-button style="margin-left: 8px" type="primary" @click="prev">上一页</i-button>
      <i-button style="margin-left: 8px" type="primary" @click="next">下一页</i-button>
      <i-button style="margin-left: 8px" type="primary" @click="home">首页</i-button>
    </div>
  </div>
</template>
<script>
import Lodopfuncs from '../../lib/CLodopfuncs.js'
import LodopFunc from '../../lib/LodopFuncs.js'

var LODOP; //声明为全局变量
//====获取LODOP对象的主过程：====
function getLodop(oOBJECT, oEMBED) {
  var LODOP;
  try {
    try {
      LODOP = getCLodop();
    } catch (err) { };

    if (!LODOP && document.readyState !== "complete") {
      alert("C-Lodop没准备好，请稍后再试！");
      return;
    };

    //清理原例子内的object或embed元素，避免乱提示：
    if (oEMBED && oEMBED.parentNode) oEMBED.parentNode.removeChild(oEMBED);
    if (oOBJECT && oOBJECT.parentNode) oOBJECT.parentNode.removeChild(oOBJECT);

    return LODOP;
  } catch (err) { alert("getLodop出错:" + err); };
};


function needCLodop() {
  return true;
};


import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
export default {
  props: {
    columns: {
      type: Array,
      default() {
        return [
          {
            title: '编号',
            key: 'NO',
            width: 65,
            fixed: 'left',
            render: function (h, context) {
              return h('p', '#' + context.index)
            }

          },
          {
            title: '地块名称',
            key: 'landName',
            //width: 200,
            //fixed: 'left'
            render: (h, params) => {
              const _this = this;

              return h('div', [
                h('Input', {
                  ref: 'landName' + params.index,
                  domProps: {
                    value: _this["landName" + params.index]
                  },
                  props: {

                    placeholder: "输入地块名称",
                    type: 'text',
                    size: 'small',

                  },
                  on: {
                    "on-change": function (event) {
                      _this['landName' + params.index] = event.target.value

                      _this.update_currentData({ "attrName": 'landName' + params.index, 'value': event.target.value })
                    }
                  }
                })
              ])
            }
          },
          {
            title: '地块编码',
            key: 'landNO',
            //width: 200
            render: (h, params) => {
              const _this = this;
              return h('div', [
                h('Input', {
                  ref: 'landNO' + params.index,
                   domProps: {
                    value: _this["landNO" + params.index]
                  },
                  props: {
                    placeholder: "输入地块编码",
                    type: 'text',
                    size: 'small',
                    value: ''
                  },
                  on: {
                    input: function (val) {
                      _this['landNO' + params.index] = val
                      _this.update_currentData({ "attrName": 'landNO' + params.index, value: val })
                    }
                  }
                })
              ])
            }
          },
          {
            title: '实测面积(亩)',
            key: 'realArea',
            // width: 200
            render: (h, params) => {
              
              const _this = this;
              return h('div', [
                h('Input', {
                  ref: 'realArea' + params.index,
                  domProps: {
                    value: _this["realArea" + params.index]
                  },
                  props: {
                    placeholder: "输入实测面积",
                    type: 'text',
                    size: 'small',
                    value: _this["realArea" + params.index]
                  },

                  on: {
                    input: function (val) {
                      _this['realArea' + params.index] = val
                      _this.update_currentData({ "attrName": 'realArea' + params.index, value: val })
                    }
                  }
                })
              ])
            }
          },
          {
            title: '是否基本农田',
            key: 'ifBasefarm',
            //width: 200
            render: function (h, params) {

              var options = ['是', '否'];
              var rs = [];
              rs = options.map(function (item) {
                var vnode = h('Option', {
                  props: {
                    value: item,
                    label: item
                  },
                  // slot: 'select'
                })
                return vnode
              })
              var _this = this;
              window.top.baseFarm = this;
              return h(
                'Select',
                {
                  ref: 'select' + params.index,
                  domProps: {
                    value: _this['ifBasefarm' + params.index],
                  },
                  props: {
                    placeholder: "选择是否基本农田",
                  },
                  directives: [
                    {
                      value: '2',
                      arg: 'foo',
                      
                    }
                  ],
                  on: {
                    "on-change": function (value) {
                    
                      //_this.$store.dispatch('UPDATE_CURRENTDATA', 'landName', 'test')
                      _this['ifBasefarm' + params.index] = value
                      if(_this.update_currentData){
                        _this.update_currentData({ "attrName": 'ifBasefarm' + params.index, 'value': value })
                      }else{
                        var val = { "attrName": 'ifBasefarm' + params.index, 'value': value }
                        localStorage.setItem('ifBasefarm' + params.index,JSON.stringify(val))
                      }
                      
                    }
                  },

                }, rs);

            }
          },
          {
            title: '四至',
            key: 'derection',
            //fixed: 'right',
            width: 300,
            render: (h, params) => {
              const _this = this;
              return h('div', [
                h('Input', {
                  ref: 'east' + params.index,
                  domProps: {
                    value: _this['east' + params.index]
                  },
                  props: {
                    placeholder: "东：",
                    type: 'text',
                    size: 'small',
                    value: ''
                  },
                  on: {
                    input: function (val) {
                      _this["east" + params.index] = val;
                      _this.update_currentData({ "attrName": 'east' + params.index, value: val })
                    }
                  }
                }),
                h('Input', {
                  ref: 'west' + params.index,
                  domProps: {
                    value: _this['west' + params.index]
                  },
                  props: {
                    placeholder: "西：",
                    type: 'text',
                    size: 'small'
                  },
                  on: {
                    input: function (val) {
                      _this["west" + params.index] = val;
                      _this.update_currentData({ "attrName": 'west' + params.index, value: val })
                    }
                  }
                }),
                h('Input', {
                  ref: 'south' + params.index,
                  domProps: {
                    value: _this['south' + params.index]
                  },
                  props: {
                    placeholder: "南：",
                    type: 'text',
                    size: 'small'
                  },
                  on: {
                    input: function (val) {
                      _this["south" + params.index] = val;
                      _this.update_currentData({ "attrName": 'south' + params.index, value: val })
                    }
                  }
                }),
                h('Input', {
                  ref: 'north' + params.index,
                  domProps: {
                    value: _this['north' + params.index]
                  },
                  props: {
                    placeholder: "北：",
                    type: 'text',
                    size: 'small'
                  },
                  on: {
                    input: function (val) {
                      _this["north" + params.index] = val;
                      _this.update_currentData({ "attrName": 'north' + params.index, value: val })
                    }
                  }
                })
              ]);
            }
          }
        ]
      }
    },
    data: {
      type: Array,
      default() {
        return [
          {
            landName: '12312312',
            landNO: '围棋翁23213',
            realArea: 111,
            ifBasefarm: '是',
          }
        ]
      }
    },
    result: {
      ifBasefarm: ''
    }
  },
  data() {
    return {
      currentColumns: [],
      currentData: [],
      landName0: '',
      landNO0: '',
      realArea0: '',
      ifBasefarm0: '',
      east0: '',
      west0: '',
      south0: '',
      north0: '',
      landName1: '',
      landNO1: '',
      realArea1: '',
      ifBasefarm1: '',

      items: ['是', '否']

    }
  },
  methods: {
    ...mapActions([
      'increment', // 映射 this.increment() 为 this.$store.dispatch('increment')
      'decrement',
      'update_currentData'
    ]),
    onAddRow() {
      this.data.push({})
    },
    onMakeData() {
      this.currentData = this.data.map((row, index) => {
        row._index = index;
        return row;
      })
    },
    onMakeColumns() {
      this.currentColumns = this.cloumns.map((col, index) => {
        col._sortType = 'normal',
          col._index = index;
        return col;
      })
    },
    save() {
      debugger
      var table = this.$refs.table
      //todo 获取localstorage里面的是否农田数据，刷新到状态管理器里面
      //
      this.update_currentData()
      var data = this.get_currentData
    },
    //打印预览
    previewPrintFull() {
      this.createDataBill();
      LODOP.PREVIEW();
    },
    //打印预览2
    previewPrint() {
      this.createDataBill();
      LODOP.PREVIEW();
    },


    //打印维护
    onSetup() {
      this.printerMaintenance()
    },
    //选择打印
    onPrint() {
      this.realPrint()
    },
    prev() {
      if (this.$parent.$data.current > 0) {
        this.$parent.$data.current -= 1;
      }
    },
    next() {

      if (this.$parent.$data.current < 4) {
        this.$parent.$data.current += 1;
      }
    },
    home() {
      this.$parent.$data.current = 0
    },
    //打印设计
    printDesign() {
      this.createFullBill();
      //		LODOP.SET_SHOW_MODE("HIDE_ITEM_LIST",true);//设置对象列表默认处于关闭状态
      //		LODOP.SET_SHOW_MODE("TEXT_SHOW_BORDER",1); //设置字符编辑框默认为single
      LODOP.PRINT_DESIGN();
    },
    printerMaintenance() {
      LODOP.PRINT_DESIGN();
    },
    realPrint() {
      this.createDataBill();
      //云打印C-Lodop返回结果用回调函数:
      if (LODOP.CVERSION) {
        CLODOP.On_Return = function (TaskID, Value) { if (Value) alert("已发出实际打印命令！"); else alert("放弃打印！"); };
        LODOP.PRINTA();
        return;
      };
      //控件返回结果用语句本身：
      if (LODOP.PRINTA())
        alert("已发出实际打印命令！");
      else
        alert("放弃打印！");
    },
    createFullBill() {
      LODOP = getLodop();


      LODOP.PRINT_INITA(10, 10, 1100, 740, "恩施农村土地确权证");
      LODOP.ADD_PRINT_SETUP_BKIMG("../../assets/地块.png");
      LODOP.ADD_PRINT_TEXT(536, 158, 115, 95, "地块名称1");
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(536, 280, 115, 95, "地块名称2");
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(537, 401, 115, 95, "地块名称3");
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(537, 523, 115, 95, "地块名称4");
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(536, 644, 115, 95, "地块名称5");
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(537, 766, 115, 95, "地块名称6");
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(538, 887, 115, 95, "地块名称7");
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(437, 160, 115, 95, "地块编码1");
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(337, 162, 115, 95, "实测面积1");
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(240, 161, 115, 95, "是否农田1");
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(437, 282, 115, 95, "地块编码2");
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(337, 284, 115, 95, "实测面积2");
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(240, 283, 115, 95, "是否农田2");
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(437, 403, 115, 95, "地块编码3\r\n");
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(337, 405, 115, 95, "实测面积3\r\n");
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(240, 404, 115, 95, "是否农田3\r\n");
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(238, 527, 115, 95, "是否农田4\r\n");
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(336, 526, 115, 95, "实测面积4\r\n");
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(436, 526, 115, 95, "地块编码4\r\n");
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(337, 647, 115, 95, "实测面积5\r\n");
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(436, 647, 115, 95, "地块编码5\r\n");
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(239, 648, 115, 95, "是否农田5\r\n");
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(241, 768, 115, 95, "是否农田6\r\n");
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(338, 769, 115, 95, "实测面积6\r\n");
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(437, 769, 115, 95, "地块编码6\r\n");
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(242, 888, 115, 95, "是否农田7\r\n");
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(339, 889, 115, 95, "实测面积7");
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(438, 889, 115, 95, "地块编码7");
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(178, 169, 110, 20, "东1");
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(178, 199, 110, 20, "西1");
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(178, 228, 110, 20, "南1");
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(178, 254, 110, 20, "北1");
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);






    },
    createDataBill() {
      LODOP = getLodop();



      LODOP.PRINT_INITA(10, 10, 1100, 740, "恩施农村土地确权证");
      LODOP.ADD_PRINT_SETUP_BKIMG("../../assets/地块.png");
      LODOP.ADD_PRINT_TEXT(536, 158, 115, 95, this.formItem.landName);
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(536, 280, 115, 95, this.formItem.landName2);
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(537, 401, 115, 95, this.formItem.landName3);
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(537, 523, 115, 95, this.formItem.landName4);
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(536, 644, 115, 95, this.formItem.landName5);
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(537, 766, 115, 95, this.formItem.landName6);
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(538, 887, 115, 95, this.formItem.landName7);
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(437, 160, 115, 95, this.formItem.landNO);
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(337, 162, 115, 95, this.formItem.realArea);
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(240, 161, 115, 95, this.formItem.ifBasefarm);
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(437, 282, 115, 95, this.formItem.landNO2);
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(337, 284, 115, 95, this.formItem.realArea2);
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(240, 283, 115, 95, this.formItem.ifBasefarm2);
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(437, 403, 115, 95, this.formItem.landNO3);
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(337, 405, 115, 95, this.formItem.realArea3);
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(240, 404, 115, 95, this.formItem.ifBasefarm3);
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(238, 527, 115, 95, this.formItem.ifBasefarm4);
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(336, 526, 115, 95, this.formItem.realArea4);
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(436, 526, 115, 95, this.formItem.landNO4);
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(337, 647, 115, 95, this.formItem.realArea5);
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(436, 647, 115, 95, this.formItem.landNO5);
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(239, 648, 115, 95, this.formItem.ifBasefarm5);
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(241, 768, 115, 95, this.formItem.ifBasefarm6);
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(338, 769, 115, 95, this.formItem.realArea6);
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(437, 769, 115, 95, this.formItem.landNO6);
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(242, 888, 115, 95, this.formItem.ifBasefarm7);
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(339, 889, 115, 95, this.formItem.realArea7);
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(438, 889, 115, 95, this.formItem.landNO7);
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(178, 169, 110, 20, this.formItem.east);
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(178, 199, 110, 20, this.formItem.west);
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(178, 228, 110, 20, this.formItem.south);
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
      LODOP.ADD_PRINT_TEXT(178, 254, 110, 20, this.formItem.north);
      LODOP.SET_PRINT_STYLEA(0, "Angle", 90);



    }
  },
  computed: {
    ...mapGetters([
      'getCount',
      'get_currentData'
      // ...
    ])
  }
}
</script>

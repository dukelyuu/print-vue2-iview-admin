<template>
  <div style="background:#eee;padding: 20px;">
    <Table size="small" ref="table" height="30" :columns="tableColumns"></Table>
  
    <div>
      <Form :model="formItem">
        <Row>
          <i-col span="4">
            <Form-item>
              <i-input v-model="formItem.landName" placeholder="请输入地块名称"></i-input>
            </Form-item>
          </i-col>
  
          <i-col span="4">
            <Form-item>
              <i-input v-model="formItem.landNO" placeholder="请输入地块编码"></i-input>
            </Form-item>
          </i-col>
          <i-col span="4">
            <Form-item>
              <i-input v-model="formItem.realArea" placeholder="请输入实测面积"></i-input>
            </Form-item>
          </i-col>
          <i-col span="5">
            <Form-item l>
              <Select v-model="formItem.ifBasefarm">
                <Option value="是" label="是">
                  <span>是</span>
                  <span style="float:right;color:#ccc">Yes</span>
                </Option>
                <Option value="否" label="否">
                  <span>否</span>
                  <span style="float:right;color:#ccc">No</span>
                </Option>
  
              </Select>
            </Form-item>
          </i-col>
          <i-col span="6">
            <Form-item>
              <Row>
                <i-input v-model="formItem.east" placeholder="东："></i-input>
              </Row>
              <Row>
                <i-input v-model="formItem.west" placeholder="西："></i-input>
              </Row>
              <Row>
                <i-input v-model="formItem.south" placeholder="南："></i-input>
              </Row>
              <Row>
                <i-input v-model="formItem.north" placeholder="北："></i-input>
              </Row>
            </Form-item>
          </i-col>
        </Row>
        <Row>
          <i-col span="4">
            <Form-item>
              <i-input v-model="formItem.landName2" placeholder="请输入地块名称"></i-input>
            </Form-item>
          </i-col>
  
          <i-col span="4">
            <Form-item>
              <i-input v-model="formItem.landNO2" placeholder="请输入地块编码"></i-input>
            </Form-item>
          </i-col>
          <i-col span="4">
            <Form-item>
              <i-input v-model="formItem.realArea2" placeholder="请输入实测面积"></i-input>
            </Form-item>
          </i-col>
          <i-col span="5">
            <Form-item l>
              <Select v-model="formItem.ifBasefarm2">
                <Option value="是" label="是">
                  <span>是</span>
                  <span style="float:right;color:#ccc">Yes</span>
                </Option>
                <Option value="否" label="否">
                  <span>否</span>
                  <span style="float:right;color:#ccc">No</span>
                </Option>
  
              </Select>
            </Form-item>
          </i-col>
          <i-col span="6">
            <Form-item>
              <Row>
                <i-input v-model="formItem.east2" placeholder="东："></i-input>
              </Row>
              <Row>
                <i-input v-model="formItem.west2" placeholder="西："></i-input>
              </Row>
              <Row>
                <i-input v-model="formItem.south2" placeholder="南："></i-input>
              </Row>
              <Row>
                <i-input v-model="formItem.north2" placeholder="北："></i-input>
              </Row>
            </Form-item>
          </i-col>
        </Row>
        <Row>
          <i-col span="4">
            <Form-item>
              <i-input v-model="formItem.landName3" placeholder="请输入地块名称"></i-input>
            </Form-item>
          </i-col>
  
          <i-col span="4">
            <Form-item>
              <i-input v-model="formItem.landNO3" placeholder="请输入地块编码"></i-input>
            </Form-item>
          </i-col>
          <i-col span="4">
            <Form-item>
              <i-input v-model="formItem.realArea3" placeholder="请输入实测面积"></i-input>
            </Form-item>
          </i-col>
          <i-col span="5">
            <Form-item l>
              <Select v-model="formItem.ifBasefarm3">
                <Option value="是" label="是">
                  <span>是</span>
                  <span style="float:right;color:#ccc">Yes</span>
                </Option>
                <Option value="否" label="否">
                  <span>否</span>
                  <span style="float:right;color:#ccc">No</span>
                </Option>
  
              </Select>
            </Form-item>
          </i-col>
          <i-col span="6">
            <Form-item>
              <Row>
                <i-input v-model="formItem.east3" placeholder="东："></i-input>
              </Row>
              <Row>
                <i-input v-model="formItem.west3" placeholder="西："></i-input>
              </Row>
              <Row>
                <i-input v-model="formItem.south3" placeholder="南："></i-input>
              </Row>
              <Row>
                <i-input v-model="formItem.north3" placeholder="北："></i-input>
              </Row>
            </Form-item>
          </i-col>
        </Row>
        <Row>
          <i-col span="4">
            <Form-item>
              <i-input v-model="formItem.landName4" placeholder="请输入地块名称"></i-input>
            </Form-item>
          </i-col>
  
          <i-col span="4">
            <Form-item>
              <i-input v-model="formItem.landNO4" placeholder="请输入地块编码"></i-input>
            </Form-item>
          </i-col>
          <i-col span="4">
            <Form-item>
              <i-input v-model="formItem.realArea4" placeholder="请输入实测面积"></i-input>
            </Form-item>
          </i-col>
          <i-col span="5">
            <Form-item l>
              <Select v-model="formItem.ifBasefarm4">
                <Option value="是" label="是">
                  <span>是</span>
                  <span style="float:right;color:#ccc">Yes</span>
                </Option>
                <Option value="否" label="否">
                  <span>否</span>
                  <span style="float:right;color:#ccc">No</span>
                </Option>
  
              </Select>
            </Form-item>
          </i-col>
          <i-col span="6">
            <Form-item>
              <Row>
                <i-input v-model="formItem.east4" placeholder="东："></i-input>
              </Row>
              <Row>
                <i-input v-model="formItem.west4" placeholder="西："></i-input>
              </Row>
              <Row>
                <i-input v-model="formItem.south4" placeholder="南："></i-input>
              </Row>
              <Row>
                <i-input v-model="formItem.north4" placeholder="北："></i-input>
              </Row>
            </Form-item>
          </i-col>
        </Row>
        <Form-item label="填表机关*:" :label-width="80">
          <Row>
            <i-col span="23">
              <Date-picker type="date" placeholder="请选择填表日期" v-model="formItem.issuingDate"></Date-picker>
            </i-col>
            <!--<i-col span="2" style="text-align: center">-</i-col>
                                                  <i-col span="11">
                                                     
                                                  </i-col>-->
          </Row>
        </Form-item>
        <Form-item>
          <i-button type="primary" @click="save">保存</i-button>
          <i-button type="ghost" style="margin-left: 8px">取消</i-button>
          <i-button style="margin-left: 8px" @click="previewPrintFull">打印预览</i-button>
          <i-button style="margin-left: 8px" @click="previewPrint">打印预览2</i-button>
          <i-button style="margin-left: 8px" @click="printDesign">打印设计</i-button>
          <i-button style="margin-left: 8px" @click="onSetup">打印维护</i-button>
          <i-button style="margin-left: 8px" @click="onPrint">选择打印</i-button>
  
          <i-button style="margin-left: 8px" type="primary" @click="prev">上一页</i-button>
          <i-button style="margin-left: 8px" type="primary" @click="next">下一页</i-button>
          <i-button style="margin-left: 8px" type="primary" @click="home">首页</i-button>
        </Form-item>
      </Form>
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



export default {
  data() {
    return {
      landName: '',
      landNO: '',
      realArea: '',
      ifBasefarm: '',
      tableColumns: [

        {
          title: '地块名称',
          key: 'landName',
          //width: 200,
          //fixed: 'left'
          render: (h, params) => {
            debugger
            return h('div', [
              h('Input', {
                ref: 'inputlandName',
                props: {
                  ref: 'inputlandName',
                  placeholder: "输入地块名称",
                  type: 'text',
                  size: 'small',
                  "v-model": h.landName
                },
                watch: {
                  landName(val, oval) {
                    debugger
                    self.landName = val
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
            return h('div', [
              h('Input', {
                props: {
                  placeholder: "输入地块编码",
                  type: 'text',
                  size: 'small',
                  value: ''
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
            return h('div', [
              h('Input', {
                props: {
                  placeholder: "输入实测面积",
                  type: 'text',
                  size: 'small',
                  value: ''
                }
              })
            ])
          }
        },
        {
          title: '是否基本农田',
          key: 'ifBasefarm',
          //width: 200
          render: (h, params) => {
            return h('div', [
              h('Input', {
                props: {
                  placeholder: "输入是否基本农田",
                  type: 'text',
                  size: 'small',
                  value: ''
                }
              })
            ])
          }
        },
        {
          title: '四至',
          key: 'derection',
          //fixed: 'right',
          width: 300,
          render: (h, params) => {
            return h('div', [
              h('Input', {
                props: {
                  placeholder: "东：",
                  type: 'text',
                  size: 'small',
                  value: ''
                }
              }),
              h('Input', {
                props: {
                  placeholder: "西：",
                  type: 'text',
                  size: 'small'
                }
              }),
              h('Input', {
                props: {
                  placeholder: "南：",
                  type: 'text',
                  size: 'small'
                }
              }),
              h('Input', {
                props: {
                  placeholder: "北：",
                  type: 'text',
                  size: 'small'
                }
              })
            ]);
          }
        }

      ],
      tableData: [],
      formItem: {
        totalArea: 0,
        totalNumber: 0,
        landName: '',
        landNO: '',
        realArea: 0,
        ifBasefarm: '',
        east: '',
        west: '',
        south: '',
        north: '',
        landName2: '',
        landNO2: '',
        realArea2: 0,
        ifBasefarm2: '',
        east2: '',
        west2: '',
        south2: '',
        north2: '',
        landName3: '',
        landNO3: '',
        realArea3: 0,
        ifBasefarm3: '',
        east3: '',
        west3: '',
        south3: '',
        north3: '',
        landName4: '',
        landNO4: '',
        realArea4: 0,
        ifBasefarm4: '',
        east4: '',
        west4: '',
        south4: '',
        north4: '',
        landName5: '',
        landNO5: '',
        realArea5: 0,
        ifBasefarm5: '',
        east5: '',
        west5: '',
        south5: '',
        north5: '',
        landName6: '',
        landNO6: '',
        realArea6: 0,
        ifBasefarm6: '',
        east6: '',
        west6: '',
        south6: '',
        north6: '',
        landName7: '',
        landNO7: '',
        realArea7: 0,
        ifBasefarm7: '',
        east7: '',
        west7: '',
        south7: '',
        north7: '',
        issuingDate: new Date()
      }
    }
  },
  methods: {
    save() {
      debugger
      var table = this.$refs.table
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




      LODOP.PRINT_INITA(10, 10, 762, 545, "恩施农村土地确权证");
      LODOP.ADD_PRINT_SETUP_BKIMG("C:\\Users\\AnnieXiong\\Pictures\\打印\\44.png");
      LODOP.ADD_PRINT_TEXT(99, 58, 44, 40, "11");
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(98, 109, 44, 42, "12");
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(402, 112, 50, 55, "62");
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(402, 164, 47, 55, "63");
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(481, 790, 14, 20, "5");
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(99, 160, 44, 41, "13");
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(99, 210, 44, 42, "1是");
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(156, 66, 45, 56, "21");
      LODOP.ADD_PRINT_TEXT(156, 115, 45, 56, "22");
      LODOP.ADD_PRINT_TEXT(156, 165, 45, 56, "23");
      LODOP.ADD_PRINT_TEXT(155, 215, 45, 56, "2是");
      LODOP.ADD_PRINT_TEXT(197, 285, 70, 15, "2n");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(181, 285, 70, 16, "2s");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(136, 284, 70, 15, "1n");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(121, 284, 70, 15, "1s");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(91, 284, 70, 15, "1e");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(106, 284, 70, 15, "1w");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(153, 285, 70, 15, "2e");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(168, 285, 70, 14, "2w");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(402, 65, 45, 55, "61");
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(277, 215, 47, 55, "4是");
      LODOP.ADD_PRINT_TEXT(277, 165, 47, 55, "43");
      LODOP.ADD_PRINT_TEXT(277, 115, 47, 55, "42");
      LODOP.ADD_PRINT_TEXT(276, 63, 48, 57, "41");
      LODOP.ADD_PRINT_TEXT(217, 214, 47, 55, "3是");
      LODOP.ADD_PRINT_TEXT(216, 166, 47, 55, "33");
      LODOP.ADD_PRINT_TEXT(216, 116, 47, 55, "32");
      LODOP.ADD_PRINT_TEXT(215, 64, 48, 57, "31");
      LODOP.ADD_PRINT_TEXT(339, 214, 47, 55, "5是");
      LODOP.ADD_PRINT_TEXT(339, 164, 47, 55, "53");
      LODOP.ADD_PRINT_TEXT(339, 114, 47, 55, "52");
      LODOP.ADD_PRINT_TEXT(338, 64, 48, 57, "51");
      LODOP.ADD_PRINT_TEXT(395, 285, 70, 15, "6e");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(410, 285, 70, 14, "6w");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(423, 285, 70, 16, "6s");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(439, 285, 70, 15, "6n");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(378, 286, 70, 15, "5n");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(362, 286, 70, 16, "5s");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(349, 286, 70, 14, "5w");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(334, 286, 70, 15, "5e");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(317, 286, 70, 15, "4n");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(301, 286, 70, 16, "4s");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(288, 286, 70, 14, "4w");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(273, 286, 70, 15, "4e");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(258, 286, 70, 15, "3n");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(242, 286, 70, 16, "3s");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(229, 286, 70, 14, "3w");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(214, 286, 70, 15, "3e");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(402, 214, 47, 55, "6是");
      LODOP.ADD_PRINT_TEXT(37, 158, 94, 52, "");





    },
    createDataBill() {
      LODOP = getLodop();


      LODOP.PRINT_INITA(10, 10, 762, 545, "恩施农村土地确权证");
      LODOP.ADD_PRINT_SETUP_BKIMG("C:\\Users\\AnnieXiong\\Pictures\\打印\\44.png");
      LODOP.ADD_PRINT_TEXT(99, 58, 44, 40, "11");
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(98, 109, 44, 42, "12");
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(402, 112, 50, 55, "62");
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(402, 164, 47, 55, "63");
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(481, 790, 14, 20, "5");
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(99, 160, 44, 41, "13");
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(99, 210, 44, 42, "1是");
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(156, 66, 45, 56, "21");
      LODOP.ADD_PRINT_TEXT(156, 115, 45, 56, "22");
      LODOP.ADD_PRINT_TEXT(156, 165, 45, 56, "23");
      LODOP.ADD_PRINT_TEXT(155, 215, 45, 56, "2是");
      LODOP.ADD_PRINT_TEXT(197, 285, 70, 15, "2n");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(181, 285, 70, 16, "2s");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(136, 284, 70, 15, "1n");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(121, 284, 70, 15, "1s");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(91, 284, 70, 15, "1e");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(106, 284, 70, 15, "1w");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(153, 285, 70, 15, "2e");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(168, 285, 70, 14, "2w");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(402, 65, 45, 55, "61");
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(277, 215, 47, 55, "4是");
      LODOP.ADD_PRINT_TEXT(277, 165, 47, 55, "43");
      LODOP.ADD_PRINT_TEXT(277, 115, 47, 55, "42");
      LODOP.ADD_PRINT_TEXT(276, 63, 48, 57, "41");
      LODOP.ADD_PRINT_TEXT(217, 214, 47, 55, "3是");
      LODOP.ADD_PRINT_TEXT(216, 166, 47, 55, "33");
      LODOP.ADD_PRINT_TEXT(216, 116, 47, 55, "32");
      LODOP.ADD_PRINT_TEXT(215, 64, 48, 57, "31");
      LODOP.ADD_PRINT_TEXT(339, 214, 47, 55, "5是");
      LODOP.ADD_PRINT_TEXT(339, 164, 47, 55, "53");
      LODOP.ADD_PRINT_TEXT(339, 114, 47, 55, "52");
      LODOP.ADD_PRINT_TEXT(338, 64, 48, 57, "51");
      LODOP.ADD_PRINT_TEXT(395, 285, 70, 15, "6e");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(410, 285, 70, 14, "6w");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(423, 285, 70, 16, "6s");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(439, 285, 70, 15, "6n");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(378, 286, 70, 15, "5n");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(362, 286, 70, 16, "5s");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(349, 286, 70, 14, "5w");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(334, 286, 70, 15, "5e");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(317, 286, 70, 15, "4n");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(301, 286, 70, 16, "4s");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(288, 286, 70, 14, "4w");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(273, 286, 70, 15, "4e");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(258, 286, 70, 15, "3n");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(242, 286, 70, 16, "3s");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(229, 286, 70, 14, "3w");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(214, 286, 70, 15, "3e");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(402, 214, 47, 55, "6是");
      LODOP.ADD_PRINT_TEXT(37, 158, 94, 52, "");




    }
  }
}
</script>

<template>
  <div style="background:#eee;padding: 20px;">
    <Form :model="formItem" :label-width="120">
      <Row>
        <i-col span="11">
          <Form-item label="经营地块实测总面积(亩)">
            <i-input v-model="formItem.totalArea" placeholder="请输入经营地块实测总面积(亩)"></i-input>
          </Form-item>
        </i-col>
  
        <i-col span="11">
          <Form-item label="经营地块总数">
            <i-input v-model="formItem.totalNumber" placeholder="请输入经营地块总数"></i-input>
          </Form-item>
        </i-col>
      </Row>
    </Form>
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
        <Row>
          <i-col span="4">
            <Form-item>
              <i-input v-model="formItem.landName5" placeholder="请输入地块名称"></i-input>
            </Form-item>
          </i-col>
  
          <i-col span="4">
            <Form-item>
              <i-input v-model="formItem.landNO5" placeholder="请输入地块编码"></i-input>
            </Form-item>
          </i-col>
          <i-col span="4">
            <Form-item>
              <i-input v-model="formItem.realArea5" placeholder="请输入实测面积"></i-input>
            </Form-item>
          </i-col>
          <i-col span="5">
            <Form-item l>
              <Select v-model="formItem.ifBasefarm5">
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
                <i-input v-model="formItem.east5" placeholder="东："></i-input>
              </Row>
              <Row>
                <i-input v-model="formItem.west5" placeholder="西："></i-input>
              </Row>
              <Row>
                <i-input v-model="formItem.south5" placeholder="南："></i-input>
              </Row>
              <Row>
                <i-input v-model="formItem.north5" placeholder="北："></i-input>
              </Row>
            </Form-item>
          </i-col>
        </Row>
        <Row>
          <i-col span="4">
            <Form-item>
              <i-input v-model="formItem.landName6" placeholder="请输入地块名称"></i-input>
            </Form-item>
          </i-col>
  
          <i-col span="4">
            <Form-item>
              <i-input v-model="formItem.landNO6" placeholder="请输入地块编码"></i-input>
            </Form-item>
          </i-col>
          <i-col span="4">
            <Form-item>
              <i-input v-model="formItem.realArea6" placeholder="请输入实测面积"></i-input>
            </Form-item>
          </i-col>
          <i-col span="5">
            <Form-item l>
              <Select v-model="formItem.ifBasefarm6">
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
                <i-input v-model="formItem.east6" placeholder="东："></i-input>
              </Row>
              <Row>
                <i-input v-model="formItem.west6" placeholder="西："></i-input>
              </Row>
              <Row>
                <i-input v-model="formItem.south6" placeholder="南："></i-input>
              </Row>
              <Row>
                <i-input v-model="formItem.north6" placeholder="北："></i-input>
              </Row>
            </Form-item>
          </i-col>
        </Row>
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
      east: '',
      west: '',
      south: '',
      north: '',
      tableColumns: [

        {
          title: '地块名称',
          key: 'landName',
          //width: 200,
          //fixed: 'left'
          render: (h, params) => {
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
      tableData: [
      ],
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
      LODOP.ADD_PRINT_TEXT(149, 58, 44, 55, "11");
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(148, 109, 44, 57, "12");
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(482, 102, 50, 55, "62");
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(482, 154, 47, 55, "63");
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(481, 790, 14, 20, "5");
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(149, 160, 44, 56, "13");
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(149, 210, 44, 57, "1是");
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(213, 56, 45, 56, "21");
      LODOP.ADD_PRINT_TEXT(214, 107, 45, 56, "22");
      LODOP.ADD_PRINT_TEXT(214, 158, 45, 56, "23");
      LODOP.ADD_PRINT_TEXT(214, 209, 45, 56, "2是");
      LODOP.ADD_PRINT_TEXT(259, 279, 70, 15, "2n");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(243, 279, 70, 16, "2s");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(195, 278, 70, 15, "1n");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(180, 278, 70, 15, "1s");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(150, 278, 70, 15, "1e");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(165, 278, 70, 15, "1w");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(215, 279, 70, 15, "2e");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(230, 279, 70, 14, "2w");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(482, 55, 45, 55, "61");
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(350, 206, 47, 55, "4是");
      LODOP.ADD_PRINT_TEXT(350, 155, 47, 55, "43");
      LODOP.ADD_PRINT_TEXT(349, 104, 47, 55, "42");
      LODOP.ADD_PRINT_TEXT(346, 52, 48, 57, "41");
      LODOP.ADD_PRINT_TEXT(282, 207, 47, 55, "3是");
      LODOP.ADD_PRINT_TEXT(281, 156, 47, 55, "33");
      LODOP.ADD_PRINT_TEXT(281, 106, 47, 55, "32");
      LODOP.ADD_PRINT_TEXT(278, 54, 48, 57, "31");
      LODOP.ADD_PRINT_TEXT(417, 205, 47, 55, "5是");
      LODOP.ADD_PRINT_TEXT(417, 155, 47, 55, "53");
      LODOP.ADD_PRINT_TEXT(416, 104, 47, 55, "52");
      LODOP.ADD_PRINT_TEXT(414, 53, 48, 57, "51");
      LODOP.ADD_PRINT_TEXT(480, 278, 70, 15, "6e");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(495, 278, 70, 14, "6w");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(508, 278, 70, 16, "6s");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(524, 278, 70, 15, "6n");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(458, 277, 70, 15, "5n");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(442, 277, 70, 16, "5s");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(428, 277, 70, 14, "5w");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(413, 277, 70, 15, "5e");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(391, 279, 70, 15, "4n");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(375, 279, 70, 16, "4s");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(362, 279, 70, 14, "4w");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(348, 279, 70, 15, "4e");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(324, 278, 70, 15, "3n");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(308, 278, 70, 16, "3s");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(295, 278, 70, 14, "3w");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(280, 278, 70, 15, "3e");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(484, 204, 47, 55, "6是");
      LODOP.ADD_PRINT_TEXT(39, 160, 94, 52, "总面积");
      LODOP.ADD_PRINT_TEXT(37, 312, 39, 57, "地块总数");
  






    },
    createDataBill() {
      LODOP = getLodop();

      LODOP.PRINT_INITA(10, 10, 762, 545, "恩施农村土地确权证");
      LODOP.ADD_PRINT_SETUP_BKIMG("C:\\Users\\AnnieXiong\\Pictures\\打印\\44.png");
      LODOP.ADD_PRINT_TEXT(149, 58, 44, 55, this.formItem.landName);
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(148, 109, 44, 57, this.formItem.landNO);
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(482, 102, 50, 55, this.formItem.landNO6);
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(482, 154, 47, 55, this.formItem.realArea6);
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(481, 790, 14, 20, "5");
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(149, 160, 44, 56, this.formItem.realArea);
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(149, 210, 44, 57, this.formItem.ifBasefarm);
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(213, 56, 45, 56, this.formItem.landName2);
      LODOP.ADD_PRINT_TEXT(214, 107, 45, 56, this.formItem.landNO2);
      LODOP.ADD_PRINT_TEXT(214, 158, 45, 56, this.formItem.realArea2);
      LODOP.ADD_PRINT_TEXT(214, 209, 45, 56, this.formItem.ifBasefarm2);
      LODOP.ADD_PRINT_TEXT(259, 279, 70, 15, this.formItem.north2);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(243, 279, 70, 16, this.formItem.south2);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(195, 278, 70, 15, this.formItem.north);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(180, 278, 70, 15, this.formItem.south);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(150, 278, 70, 15, this.formItem.east);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(165, 278, 70, 15, this.formItem.west);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(215, 279, 70, 15, this.formItem.east2);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(230, 279, 70, 14, this.formItem.west2);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(482, 55, 45, 55, this.formItem.landName6);
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(350, 206, 47, 55, this.formItem.ifBasefarm4);
      LODOP.ADD_PRINT_TEXT(350, 155, 47, 55, this.formItem.realArea4);
      LODOP.ADD_PRINT_TEXT(349, 104, 47, 55, this.formItem.landNO4);
      LODOP.ADD_PRINT_TEXT(346, 52, 48, 57, this.formItem.landName4);
      LODOP.ADD_PRINT_TEXT(282, 207, 47, 55, this.formItem.ifBasefarm3);
      LODOP.ADD_PRINT_TEXT(281, 156, 47, 55, this.formItem.realArea3);
      LODOP.ADD_PRINT_TEXT(281, 106, 47, 55, this.formItem.landNO3);
      LODOP.ADD_PRINT_TEXT(278, 54, 48, 57, this.formItem.landName3);
      LODOP.ADD_PRINT_TEXT(417, 205, 47, 55, this.formItem.ifBasefarm5);
      LODOP.ADD_PRINT_TEXT(417, 155, 47, 55, this.formItem.realArea5);
      LODOP.ADD_PRINT_TEXT(416, 104, 47, 55, this.formItem.landNO5);
      LODOP.ADD_PRINT_TEXT(414, 53, 48, 57, this.formItem.landName5);
      LODOP.ADD_PRINT_TEXT(480, 278, 70, 15, this.formItem.east6);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(495, 278, 70, 14, this.formItem.west6);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(508, 278, 70, 16, this.formItem.south6);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(524, 278, 70, 15, this.formItem.north6);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(458, 277, 70, 15, this.formItem.north5);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(442, 277, 70, 16, this.formItem.south5);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(428, 277, 70, 14, this.formItem.west5);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(413, 277, 70, 15, this.formItem.east5);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(391, 279, 70, 15, this.formItem.north4);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(375, 279, 70, 16, this.formItem.south4);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(362, 279, 70, 14, this.formItem.west4);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(348, 279, 70, 15, this.formItem.east4);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(324, 278, 70, 15, this.formItem.north3);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(308, 278, 70, 16, this.formItem.south3);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(295, 278, 70, 14, this.formItem.west3);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(280, 278, 70, 15, this.formItem.east3);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(484, 204, 47, 55,  this.formItem.ifBasefarm6);
      LODOP.ADD_PRINT_TEXT(39, 160, 94, 52, this.formItem.totalArea);
      LODOP.ADD_PRINT_TEXT(37, 312, 39, 57, this.formItem.totalNumber);
     




    }
  }
}
</script>

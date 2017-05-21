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
        <Row>
          <i-col span="4">
            <Form-item>
              <i-input v-model="formItem.landName7" placeholder="请输入地块名称"></i-input>
            </Form-item>
          </i-col>
  
          <i-col span="4">
            <Form-item>
              <i-input v-model="formItem.landNO7" placeholder="请输入地块编码"></i-input>
            </Form-item>
          </i-col>
          <i-col span="4">
            <Form-item>
              <i-input v-model="formItem.realArea7" placeholder="请输入实测面积"></i-input>
            </Form-item>
          </i-col>
          <i-col span="5">
            <Form-item l>
              <Select v-model="formItem.ifBasefarm7">
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
                <i-input v-model="formItem.east7" placeholder="东："></i-input>
              </Row>
              <Row>
                <i-input v-model="formItem.west7" placeholder="西："></i-input>
              </Row>
              <Row>
                <i-input v-model="formItem.south7" placeholder="南："></i-input>
              </Row>
              <Row>
                <i-input v-model="formItem.north7" placeholder="北："></i-input>
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

      LODOP.PRINT_INITA(10, 10, 762, 533, "恩施农村土地确权证");
      LODOP.ADD_PRINT_SETUP_BKIMG("C:\\Users\\AnnieXiong\\Pictures\\打印\\2 (2).jpg");
      LODOP.ADD_PRINT_TEXT(96, 68, 44, 55, this.formItem.landName);
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(96, 115, 44, 57, this.formItem.landNO);
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(402, 112, 50, 55, this.formItem.landNO6);
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(402, 164, 47, 55, this.formItem.realArea6);
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(481, 790, 14, 20, "5");
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(95, 165, 44, 57, this.formItem.realArea);
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(94, 214, 44, 57, this.formItem.ifBasefarm);
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(156, 66, 45, 56, this.formItem.landName2);
      LODOP.ADD_PRINT_TEXT(156, 115, 45, 56, this.formItem.landNO2);
      LODOP.ADD_PRINT_TEXT(156, 165, 45, 56, this.formItem.realArea2);
      LODOP.ADD_PRINT_TEXT(155, 215, 45, 56, this.formItem.ifBasefarm2);
      LODOP.ADD_PRINT_TEXT(197, 285, 70, 15, this.formItem.north2);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(181, 285, 70, 16, this.formItem.south2);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(136, 284, 70, 15, this.formItem.north);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(121, 284, 70, 15, this.formItem.south);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(91, 284, 70, 15, this.formItem.east);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(106, 284, 70, 15, this.formItem.west);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(153, 285, 70, 15, this.formItem.east2);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(168, 285, 70, 14, this.formItem.west2);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(402, 65, 45, 55, this.formItem.landName6);
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(462, 64, 48, 57, this.formItem.landName7);
      LODOP.ADD_PRINT_TEXT(463, 116, 47, 55, this.formItem.landNO7);
      LODOP.ADD_PRINT_TEXT(463, 166, 47, 55, this.formItem.realArea7);
      LODOP.ADD_PRINT_TEXT(463, 216, 47, 55, this.formItem.ifBasefarm7);
      LODOP.ADD_PRINT_TEXT(277, 215, 47, 55, this.formItem.ifBasefarm4);
      LODOP.ADD_PRINT_TEXT(277, 165, 47, 55, this.formItem.realArea4);
      LODOP.ADD_PRINT_TEXT(277, 115, 47, 55, this.formItem.landNO4);
      LODOP.ADD_PRINT_TEXT(276, 63, 48, 57, this.formItem.landName4);
      LODOP.ADD_PRINT_TEXT(217, 214, 47, 55, this.formItem.ifBasefarm3);
      LODOP.ADD_PRINT_TEXT(216, 166, 47, 55, this.formItem.realArea3);
      LODOP.ADD_PRINT_TEXT(216, 116, 47, 55, this.formItem.landNO3);
      LODOP.ADD_PRINT_TEXT(215, 64, 48, 57, this.formItem.landName3);
      LODOP.ADD_PRINT_TEXT(339, 214, 47, 55, this.formItem.ifBasefarm5);
      LODOP.ADD_PRINT_TEXT(339, 164, 47, 55, this.formItem.realArea5);
      LODOP.ADD_PRINT_TEXT(339, 114, 47, 55, this.formItem.landNO5);
      LODOP.ADD_PRINT_TEXT(338, 64, 48, 57, this.formItem.landName5);
      LODOP.ADD_PRINT_TEXT(501, 285, 70, 15, this.formItem.north7);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(485, 285, 70, 16, this.formItem.south7);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(472, 285, 70, 14, this.formItem.west7);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(457, 285, 70, 15, this.formItem.east7);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(395, 285, 70, 15, this.formItem.east6);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(410, 285, 70, 14, this.formItem.west6);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(423, 285, 70, 16, this.formItem.south6);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(439, 285, 70, 15, this.formItem.north6);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(378, 286, 70, 15, this.formItem.north5);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(362, 286, 70, 16, this.formItem.south5);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(349, 286, 70, 14, this.formItem.west5);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(334, 286, 70, 15, this.formItem.east5);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(317, 286, 70, 15, this.formItem.north4);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(301, 286, 70, 16, this.formItem.south4);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(288, 286, 70, 14, this.formItem.west4);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(273, 286, 70, 15, this.formItem.east4);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(258, 286, 70, 15, this.formItem.north3);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(242, 286, 70, 16, this.formItem.south3);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(229, 286, 70, 14, this.formItem.west3);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(214, 286, 70, 15, this.formItem.east3);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(402, 214, 47, 55, this.formItem.ifBasefarm6);





    },
    createDataBill() {
      LODOP = getLodop();



      LODOP.PRINT_INITA(10, 10, 762, 533, "恩施农村土地确权证");
      LODOP.ADD_PRINT_SETUP_BKIMG("C:\\Users\\AnnieXiong\\Pictures\\打印\\2 (2).jpg");
      LODOP.ADD_PRINT_TEXT(96, 68, 44, 55, this.formItem.landName);
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(96, 115, 44, 57, this.formItem.landNO);
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(402, 112, 50, 55, this.formItem.landNO6);
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(402, 164, 47, 55, this.formItem.realArea6);
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(481, 790, 14, 20, "5");
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(95, 165, 44, 57, this.formItem.realArea);
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(94, 214, 44, 57, this.formItem.ifBasefarm);
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(156, 66, 45, 56, this.formItem.landName2);
      LODOP.ADD_PRINT_TEXT(156, 115, 45, 56, this.formItem.landNO2);
      LODOP.ADD_PRINT_TEXT(156, 165, 45, 56, this.formItem.realArea2);
      LODOP.ADD_PRINT_TEXT(155, 215, 45, 56, this.formItem.ifBasefarm2);
      LODOP.ADD_PRINT_TEXT(197, 285, 70, 15, this.formItem.north2);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(181, 285, 70, 16, this.formItem.south2);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(136, 284, 70, 15, this.formItem.north);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(121, 284, 70, 15, this.formItem.south);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(91, 284, 70, 15, this.formItem.east);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(106, 284, 70, 15, this.formItem.west);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(153, 285, 70, 15, this.formItem.east2);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(168, 285, 70, 14, this.formItem.west2);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(402, 65, 45, 55, this.formItem.landName6);
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(462, 64, 48, 57, this.formItem.landName7);
      LODOP.ADD_PRINT_TEXT(463, 116, 47, 55, this.formItem.landNO7);
      LODOP.ADD_PRINT_TEXT(463, 166, 47, 55, this.formItem.realArea7);
      LODOP.ADD_PRINT_TEXT(463, 216, 47, 55, this.formItem.ifBasefarm7);
      LODOP.ADD_PRINT_TEXT(277, 215, 47, 55, this.formItem.ifBasefarm4);
      LODOP.ADD_PRINT_TEXT(277, 165, 47, 55, this.formItem.realArea4);
      LODOP.ADD_PRINT_TEXT(277, 115, 47, 55, this.formItem.landNO4);
      LODOP.ADD_PRINT_TEXT(276, 63, 48, 57, this.formItem.landName4);
      LODOP.ADD_PRINT_TEXT(217, 214, 47, 55, this.formItem.ifBasefarm3);
      LODOP.ADD_PRINT_TEXT(216, 166, 47, 55, this.formItem.realArea3);
      LODOP.ADD_PRINT_TEXT(216, 116, 47, 55, this.formItem.landNO3);
      LODOP.ADD_PRINT_TEXT(215, 64, 48, 57, this.formItem.landName3);
      LODOP.ADD_PRINT_TEXT(339, 214, 47, 55, this.formItem.ifBasefarm5);
      LODOP.ADD_PRINT_TEXT(339, 164, 47, 55, this.formItem.realArea5);
      LODOP.ADD_PRINT_TEXT(339, 114, 47, 55, this.formItem.landNO5);
      LODOP.ADD_PRINT_TEXT(338, 64, 48, 57, this.formItem.landName5);
      LODOP.ADD_PRINT_TEXT(501, 285, 70, 15, this.formItem.north7);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(485, 285, 70, 16, this.formItem.south7);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(472, 285, 70, 14, this.formItem.west7);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(457, 285, 70, 15, this.formItem.east7);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(395, 285, 70, 15, this.formItem.east6);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(410, 285, 70, 14, this.formItem.west6);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(423, 285, 70, 16, this.formItem.south6);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(439, 285, 70, 15, this.formItem.north6);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(378, 286, 70, 15, this.formItem.north5);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(362, 286, 70, 16, this.formItem.south5);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(349, 286, 70, 14, this.formItem.west5);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(334, 286, 70, 15, this.formItem.east5);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(317, 286, 70, 15, this.formItem.north4);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(301, 286, 70, 16, this.formItem.south4);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(288, 286, 70, 14, this.formItem.west4);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(273, 286, 70, 15, this.formItem.east4);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(258, 286, 70, 15, this.formItem.north3);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(242, 286, 70, 16, this.formItem.south3);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(229, 286, 70, 14, this.formItem.west3);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(214, 286, 70, 15, this.formItem.east3);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(402, 214, 47, 55, this.formItem.ifBasefarm6);




    }
  }
}
</script>

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
        <Row>
          <i-col span="4">
            <Form-item>
              <i-input v-model="formItem.landName8" placeholder="请输入地块名称"></i-input>
            </Form-item>
          </i-col>
  
          <i-col span="4">
            <Form-item>
              <i-input v-model="formItem.landNO8" placeholder="请输入地块编码"></i-input>
            </Form-item>
          </i-col>
          <i-col span="4">
            <Form-item>
              <i-input v-model="formItem.realArea8" placeholder="请输入实测面积"></i-input>
            </Form-item>
          </i-col>
          <i-col span="5">
            <Form-item l>
              <Select v-model="formItem.ifBasefarm8">
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
                <i-input v-model="formItem.east8" placeholder="东："></i-input>
              </Row>
              <Row>
                <i-input v-model="formItem.west8" placeholder="西："></i-input>
              </Row>
              <Row>
                <i-input v-model="formItem.south8" placeholder="南："></i-input>
              </Row>
              <Row>
                <i-input v-model="formItem.north8" placeholder="北："></i-input>
              </Row>
            </Form-item>
          </i-col>
        </Row>
        <Row>
          <i-col span="4">
            <Form-item>
              <i-input v-model="formItem.landName9" placeholder="请输入地块名称"></i-input>
            </Form-item>
          </i-col>
  
          <i-col span="4">
            <Form-item>
              <i-input v-model="formItem.landNO9" placeholder="请输入地块编码"></i-input>
            </Form-item>
          </i-col>
          <i-col span="4">
            <Form-item>
              <i-input v-model="formItem.realArea9" placeholder="请输入实测面积"></i-input>
            </Form-item>
          </i-col>
          <i-col span="5">
            <Form-item l>
              <Select v-model="formItem.ifBasefarm9">
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
                <i-input v-model="formItem.east9" placeholder="东："></i-input>
              </Row>
              <Row>
                <i-input v-model="formItem.west9" placeholder="西："></i-input>
              </Row>
              <Row>
                <i-input v-model="formItem.south9" placeholder="南："></i-input>
              </Row>
              <Row>
                <i-input v-model="formItem.north9" placeholder="北："></i-input>
              </Row>
            </Form-item>
          </i-col>
        </Row>
        <Row>
          <i-col span="4">
            <Form-item>
              <i-input v-model="formItem.landName10" placeholder="请输入地块名称"></i-input>
            </Form-item>
          </i-col>
  
          <i-col span="4">
            <Form-item>
              <i-input v-model="formItem.landNO10" placeholder="请输入地块编码"></i-input>
            </Form-item>
          </i-col>
          <i-col span="4">
            <Form-item>
              <i-input v-model="formItem.realArea10" placeholder="请输入实测面积"></i-input>
            </Form-item>
          </i-col>
          <i-col span="5">
            <Form-item l>
              <Select v-model="formItem.ifBasefarm10">
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
                <i-input v-model="formItem.east10" placeholder="东："></i-input>
              </Row>
              <Row>
                <i-input v-model="formItem.west10" placeholder="西："></i-input>
              </Row>
              <Row>
                <i-input v-model="formItem.south10" placeholder="南："></i-input>
              </Row>
              <Row>
                <i-input v-model="formItem.north10" placeholder="北："></i-input>
              </Row>
            </Form-item>
          </i-col>
        </Row>
        <Row>
          <i-col span="4">
            <Form-item>
              <i-input v-model="formItem.landName11" placeholder="请输入地块名称"></i-input>
            </Form-item>
          </i-col>
  
          <i-col span="4">
            <Form-item>
              <i-input v-model="formItem.landNO11" placeholder="请输入地块编码"></i-input>
            </Form-item>
          </i-col>
          <i-col span="4">
            <Form-item>
              <i-input v-model="formItem.realArea11" placeholder="请输入实测面积"></i-input>
            </Form-item>
          </i-col>
          <i-col span="5">
            <Form-item l>
              <Select v-model="formItem.ifBasefarm11">
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
                <i-input v-model="formItem.east11" placeholder="东："></i-input>
              </Row>
              <Row>
                <i-input v-model="formItem.west11" placeholder="西："></i-input>
              </Row>
              <Row>
                <i-input v-model="formItem.south11" placeholder="南："></i-input>
              </Row>
              <Row>
                <i-input v-model="formItem.north11" placeholder="北："></i-input>
              </Row>
            </Form-item>
          </i-col>
        </Row>
        <Form-item label="填表日期*:" :label-width="80">
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
  
          <!--<i-button style="margin-left: 8px" @click="printDesign">打印设计</i-button>
          <i-button style="margin-left: 8px" @click="onSetup">打印维护</i-button>-->
          <i-button style="margin-left: 8px" @click="onPrint">选择打印</i-button>
  
          <i-button style="margin-left: 8px" type="primary" @click="prev">上一页</i-button>
          <!--<i-button style="margin-left: 8px" type="primary" @click="next">下一页</i-button>-->
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
	    LODOP.SET_LICENSES("","647464550565952565559561289003","688858710010010811411756128900","");
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
        landName: '',
        landNO: '',
        realArea: '',
        ifBasefarm: '',
        east: '',
        west: '',
        south: '',
        north: '',
        landName2: '',
        landNO2: '',
        realArea2: '',
        ifBasefarm2: '',
        east2: '',
        west2: '',
        south2: '',
        north2: '',
        landName3: '',
        landNO3: '',
        realArea3: '',
        ifBasefarm3: '',
        east3: '',
        west3: '',
        south3: '',
        north3: '',
        landName4: '',
        landNO4: '',
        realArea4: '',
        ifBasefarm4: '',
        east4: '',
        west4: '',
        south4: '',
        north4: '',
        landName5: '',
        landNO5: '',
        realArea5: '',
        ifBasefarm5: '',
        east5: '',
        west5: '',
        south5: '',
        north5: '',
        landName6: '',
        landNO6: '',
        realArea6: '',
        ifBasefarm6: '',
        east6: '',
        west6: '',
        south6: '',
        north6: '',
        landName7: '',
        landNO7: '',
        realArea7: '',
        ifBasefarm7: '',
        east7: '',
        west7: '',
        south7: '',
        north7: '',
        landName8: '',
        landNO8: '',
        realArea8: '',
        ifBasefarm8: '',
        east8: '',
        west8: '',
        south8: '',
        north8: '',
        landName9: '',
        landNO9: '',
        realArea9: '',
        ifBasefarm9: '',
        east9: '',
        west9: '',
        south9: '',
        north9: '',
        landName10: '',
        landNO10: '',
        realArea10: '',
        ifBasefarm10: '',
        east10: '',
        west10: '',
        south10: '',
        north10: '',
        landName11: '',
        landNO11: '',
        realArea11: '',
        ifBasefarm11: '',
        east11: '',
        west11: '',
        south11: '',
        north11: '',        
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

      
      LODOP.PRINT_INITA(10,10,900,1200,"恩施农村土地确权证");
      LODOP.ADD_PRINT_TEXT(79,127,76,63,"文本7");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(163,129,76,63,"7");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(247,127,76,63,"7");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(331,127,76,63,"7");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(80,227,76,63,"加文本6");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(164,229,76,63,"新加文本6");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(248,227,76,63,"新加文本6");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(332,227,76,63,"文本6");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(80,329,76,63,"加文本5");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(164,331,76,63,"文本5");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(163,432,76,63,"新加文本4");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(79,430,76,63,"加文本4");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(247,430,76,63,"新加文本4");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(248,329,76,63,"新加文本5");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(332,329,76,63,"加文本5");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(331,430,76,63,"新加文本4");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(80,532,76,63,"加文本3");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(164,534,76,63,"新加文本3");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(248,532,76,63,"加文3");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(332,532,76,63,"新加文本3");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(81,742,76,63,"新加文本1");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(165,744,76,63,"新加文本1");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(249,742,76,63,")新加文本1");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(333,742,76,63,"加文本1");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(81,638,76,63,"加文本2");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(165,640,76,63,")新加文本2");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(249,638,76,63,"文本2");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(333,638,76,63,"加文本2");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(455,751,100,20,"1E");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(455,730,100,20,"加文本81");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(455,705,100,20,"新加文本81");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(455,680,100,20,")新加文本81");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(456,648,100,20,"2E");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(456,626,100,20,"22222222");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(456,602,100,20,"新加文本81");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(456,577,100,20,"新加文本81");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(456,543,100,20,"3E");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(456,521,100,20,"333333");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(456,498,100,20,")新加文本81");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(456,475,100,20,"加文本81");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(455,438,100,20,"4E");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(455,418,100,20,"44444");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(455,398,100,20,")新加文本81");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(455,373,100,20,"新加文本81");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(456,336,100,20,"5E");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(456,313,100,20,"55555");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(456,291,100,20,"新加文本81");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(456,267,100,20,")新加文本81");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(456,232,100,20,"6E");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(456,210,100,20,"66666");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(456,185,100,20,"新加文本81");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(456,163,100,20,")新加文本81");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(454,129,100,20,"7E");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(454,107,100,20,"77777");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(454,84,100,20,"加文本81");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(454,62,100,20,"加文本81");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(715,422,76,63,"新加文本11");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(799,424,76,63,"新加文本11");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(883,422,76,63,"加文本11");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(967,422,76,63,"文本11");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(968,524,76,63,"文本10");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(889,524,76,63,"文本10");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(800,526,76,63,"加文本10");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(716,524,76,63,"新加文本10");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(717,630,76,63,"加文本9");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(801,632,76,63,"加文本9");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(885,630,76,63,"加文9本9");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(969,630,76,63,"加文本9");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(971,738,76,63,"文本8");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(885,734,76,63,"加文本8");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(801,736,76,63,"新加文本8");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(717,734,76,63,"8");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1095,750,100,20,"8E");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1095,729,100,20,"加文本81");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1095,704,100,20,"加文本81");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1095,679,100,20,"加文本81");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1096,648,100,20,"9E");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1096,626,100,20,"文本81");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1096,602,100,20,"加文本81");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1096,577,100,20,"新加文本81");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1096,543,100,20,"10E");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1096,521,100,20,"加文本81");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1096,498,100,20,"新加文本81");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1096,475,100,20,"新加文本81");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1095,440,100,20,"11E");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1095,417,100,20,"加文本81");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1095,393,100,20,"文本81");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1094,372,100,20,"加文本81");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1102,104,76,41,"12");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1056,104,76,33,"6");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(988,106,76,33,"2018");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);


    },
    createDataBill() {
      LODOP = getLodop();


      LODOP.PRINT_INITA(10,10,900,1200,"恩施农村土地确权证");

      
      
      LODOP.PRINT_INITA(10,10,900,1200,"恩施农村土地确权证");
      LODOP.ADD_PRINT_TEXT(79,127,76,63,this.formItem.landName7);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(163,129,76,63,this.formItem.landNO7);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(247,127,76,63,this.formItem.realArea7);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(331,127,76,63,this.formItem.ifBasefarm7);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(80,227,76,63,this.formItem.landName6);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(164,229,76,63,this.formItem.landNO6);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(248,227,76,63,this.formItem.realArea6);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(332,227,76,63,this.formItem.ifBasefarm6);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(80,329,76,63,this.formItem.landName5);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(164,331,76,63,this.formItem.landNO5);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(163,432,76,63,this.formItem.landNO4);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(79,430,76,63,this.formItem.landName4);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(247,430,76,63,this.formItem.realArea4);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(248,329,76,63,this.formItem.realArea5);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(332,329,76,63,this.formItem.ifBasefarm5);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(331,430,76,63,this.formItem.ifBasefarm4);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(80,532,76,63,this.formItem.landName3);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(164,534,76,63,this.formItem.landNO3);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(248,532,76,63,this.formItem.realArea3);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(332,532,76,63,this.formItem.ifBasefarm3);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(81,742,76,63,this.formItem.landName);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(165,744,76,63,this.formItem.landNO);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(249,742,76,63,this.formItem.realArea);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(333,742,76,63,this.formItem.ifBasefarm);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(81,638,76,63,this.formItem.landName2);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(165,640,76,63,this.formItem.landNO2);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(249,638,76,63,this.formItem.realArea2);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(333,638,76,63,this.formItem.ifBasefarm2);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(455,751,100,20,this.formItem.east);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(455,730,100,20,this.formItem.west);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(455,705,100,20,this.formItem.south);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(455,680,100,20,this.formItem.north);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(456,648,100,20,this.formItem.east2);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(456,626,100,20,this.formItem.west2);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(456,602,100,20,this.formItem.south2);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(456,577,100,20,this.formItem.north2);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      
      LODOP.ADD_PRINT_TEXT(456,543,100,20,this.formItem.east3);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(456,521,100,20,this.formItem.west3);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(456,498,100,20,this.formItem.south3);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(456,475,100,20,this.formItem.north3);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(455,438,100,20,this.formItem.east4);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(455,418,100,20,this.formItem.west4);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(455,398,100,20,this.formItem.south4);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(455,373,100,20,this.formItem.north5);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(456,336,100,20,this.formItem.east5);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(456,313,100,20,this.formItem.west5);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(456,291,100,20,this.formItem.south5);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(456,267,100,20,this.formItem.north5);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(456,232,100,20,this.formItem.east6);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(456,210,100,20,this.formItem.west6);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(456,185,100,20,this.formItem.south6);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(456,163,100,20,this.formItem.north6);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(454,129,100,20,this.formItem.east7);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(454,107,100,20,this.formItem.west7);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(454,84,100,20,this.formItem.south7);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(454,62,100,20,this.formItem.north7);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);

      LODOP.ADD_PRINT_TEXT(722,422,76,63,this.formItem.landName11);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(806,424,76,63,this.formItem.landNO11);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(890,422,76,63,this.formItem.realArea11);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(974,422,76,63,this.formItem.ifBasefarm11);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(975,524,76,63,this.formItem.ifBasefarm10);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(896,524,76,63,this.formItem.realArea10);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(807,526,76,63,this.formItem.landNO10);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(723,524,76,63,this.formItem.landName10);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(724,630,76,63,this.formItem.landName9);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(808,632,76,63,this.formItem.landNO9);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(892,630,76,63,this.formItem.realArea9);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(976,630,76,63,this.formItem.ifBasefarm9);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(978,738,76,63,this.formItem.ifBasefarm8);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(892,734,76,63,this.formItem.realArea8);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(808,736,76,63,this.formItem.landNO8);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(724,734,76,63,this.formItem.landName8);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1095,750,100,20,this.formItem.east8);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1095,729,100,20,this.formItem.west8);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1095,704,100,20,this.formItem.south8);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1095,679,100,20,this.formItem.north8);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1096,648,100,20,this.formItem.east9);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1096,626,100,20,this.formItem.west9);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1096,602,100,20,this.formItem.south9);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1096,577,100,20,this.formItem.north9);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1096,543,100,20,this.formItem.east10);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1096,521,100,20,this.formItem.west10);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1096,498,100,20,this.formItem.south10);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1096,475,100,20,this.formItem.north10);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1095,440,100,20,this.formItem.east11);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1095,417,100,20,this.formItem.west11);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1095,393,100,20,this.formItem.south11);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1094,372,100,20,this.formItem.north11);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1102,104,76,41,this.formItem.issuingDate.getDate());
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1056,104,76,33,this.formItem.issuingDate.getMonth() + 1);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(988,106,76,33,this.formItem.issuingDate.getFullYear());
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);


    }
  }
}
</script>

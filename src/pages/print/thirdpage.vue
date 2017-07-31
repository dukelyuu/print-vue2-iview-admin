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
        <Row>
          <i-col span="4">
            <Form-item>
              <i-input v-model="formItem.landName12" placeholder="请输入地块名称"></i-input>
            </Form-item>
          </i-col>
  
          <i-col span="4">
            <Form-item>
              <i-input v-model="formItem.landNO12" placeholder="请输入地块编码"></i-input>
            </Form-item>
          </i-col>
          <i-col span="4">
            <Form-item>
              <i-input v-model="formItem.realArea12" placeholder="请输入实测面积"></i-input>
            </Form-item>
          </i-col>
          <i-col span="5">
            <Form-item l>
              <Select v-model="formItem.ifBasefarm12">
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
                <i-input v-model="formItem.east12" placeholder="东："></i-input>
              </Row>
              <Row>
                <i-input v-model="formItem.west12" placeholder="西："></i-input>
              </Row>
              <Row>
                <i-input v-model="formItem.south12" placeholder="南："></i-input>
              </Row>
              <Row>
                <i-input v-model="formItem.north12" placeholder="北："></i-input>
              </Row>
            </Form-item>
          </i-col>
        </Row>
        <Row>
          <i-col span="4">
            <Form-item>
              <i-input v-model="formItem.landName13" placeholder="请输入地块名称"></i-input>
            </Form-item>
          </i-col>
  
          <i-col span="4">
            <Form-item>
              <i-input v-model="formItem.landNO13" placeholder="请输入地块编码"></i-input>
            </Form-item>
          </i-col>
          <i-col span="4">
            <Form-item>
              <i-input v-model="formItem.realArea13" placeholder="请输入实测面积"></i-input>
            </Form-item>
          </i-col>
          <i-col span="5">
            <Form-item l>
              <Select v-model="formItem.ifBasefarm13">
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
                <i-input v-model="formItem.east13" placeholder="东："></i-input>
              </Row>
              <Row>
                <i-input v-model="formItem.west13" placeholder="西："></i-input>
              </Row>
              <Row>
                <i-input v-model="formItem.south13" placeholder="南："></i-input>
              </Row>
              <Row>
                <i-input v-model="formItem.north13" placeholder="北："></i-input>
              </Row>
            </Form-item>
          </i-col>
        </Row>
        <Row>
          <i-col span="4">
            <Form-item>
              <i-input v-model="formItem.landName14" placeholder="请输入地块名称"></i-input>
            </Form-item>
          </i-col>
  
          <i-col span="4">
            <Form-item>
              <i-input v-model="formItem.landNO14" placeholder="请输入地块编码"></i-input>
            </Form-item>
          </i-col>
          <i-col span="4">
            <Form-item>
              <i-input v-model="formItem.realArea14" placeholder="请输入实测面积"></i-input>
            </Form-item>
          </i-col>
          <i-col span="5">
            <Form-item l>
              <Select v-model="formItem.ifBasefarm14">
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
                <i-input v-model="formItem.east14" placeholder="东："></i-input>
              </Row>
              <Row>
                <i-input v-model="formItem.west14" placeholder="西："></i-input>
              </Row>
              <Row>
                <i-input v-model="formItem.south14" placeholder="南："></i-input>
              </Row>
              <Row>
                <i-input v-model="formItem.north14" placeholder="北："></i-input>
              </Row>
            </Form-item>
          </i-col>
        </Row>
        <Form-item>
          <i-button type="primary" @click="save">保存</i-button>
          <i-button type="ghost" style="margin-left: 8px">取消</i-button>
          <i-button style="margin-left: 8px" @click="previewPrintFull">打印预览</i-button>
          <i-button style="margin-left: 8px" @click="previewPrintFullWithArea">打印预览(带面积)</i-button>
          <!--<i-button style="margin-left: 8px" @click="printDesignWithArea">打印设计(带面积)</i-button>
          <i-button style="margin-left: 8px" @click="printDesign">打印设计</i-button>
          <i-button style="margin-left: 8px" @click="onSetup">打印维护</i-button>-->
          <i-button style="margin-left: 8px" @click="onPrint">选择打印</i-button>
          <i-button style="margin-left: 8px" @click="onPrintWithArea">选择打印(带面积)</i-button>
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
        totalArea: '',
        totalNumber: '',
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
        landName12: '',
        landNO12: '',
        realArea12: '',
        ifBasefarm12: '',
        east12: '',
        west12: '',
        south12: '',
        north12: '',
        landName13: '',
        landNO13: '',
        realArea13: '',
        ifBasefarm13: '',
        east13: '',
        west13: '',
        south13: '',
        north13: '',
        landName14: '',
        landNO14: '',
        realArea14: '',
        ifBasefarm14: '',
        east14: '',
        west14: '',
        south14: '',
        north14: '',
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
    //打印预览带面积
    previewPrintFullWithArea() {
      this.createDataBillWithArea();
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
    //选择打印带面积
    onPrintWithArea() {
      this.realPrintWithArea()
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
    //打印设计带面积
    printDesignWithArea() {
      this.createFullBillWithArea();
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
    realPrintWithArea() {
      this.createDataBillWithArea();
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
    LODOP.ADD_PRINT_TEXT(90,638,90,73,"11");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(180,638,89,67,"12");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(269,638,88,68,"13");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(346,640,88,64,"1是");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(454,577,70,15,"1n");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(453,602,70,15,"1s");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(454,644,70,15,"1e");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(454,623,70,15,"1w");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(89,533,90,73,"(复制68)11");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(179,533,89,67,"(复制69)12");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(268,533,88,68,"(复制70)13");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(345,535,88,64,"(复制71)1是");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(455,474,70,15,"(复制72)1n");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(454,499,70,15,"(复制73)1s");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(455,541,70,15,"(复制74)1e");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(455,520,70,15,"(复制75)1w");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(89,428,90,73,"(复制76)11");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(179,428,89,67,"(复制77)12");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(268,428,88,68,"(复制78)13");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(345,430,88,64,"(复制79)1是");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(458,375,70,15,"(复制80)1n");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(457,400,70,15,"(复制81)1s");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(458,442,70,15,"(复制82)1e");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(458,421,70,15,"(复制83)1w");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(89,326,90,73,"(复制92)11");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(179,326,89,67,"(复制93)12");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(268,326,88,68,"(复制94)13");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(345,328,88,64,"(复制95)1是");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(458,267,70,15,"(复制96)1n");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(457,292,70,15,"(复制97)1s");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(458,334,70,15,"(复制98)1e");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(458,313,70,15,"(复制99)1w");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(90,221,90,73,"(复制100)11");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(180,221,89,67,"(复制101)12");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(269,221,88,68,"(复制102)13");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(346,223,88,64,"(复制103)1是");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(459,162,70,15,"(复制104)1n");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(458,187,70,15,"(复制105)1s");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(459,229,70,15,"(复制106)1e");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(459,208,70,15,"(复制107)1w");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(89,113,90,73,"(复制108)11");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(179,113,89,67,"(复制109)12");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(268,113,88,68,"(复制110)13");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(348,115,88,64,"(复制111)1是");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(458,58,70,15,"(复制112)1n");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(457,83,70,15,"(复制113)1s");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(458,125,70,15,"(复制114)1e");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(458,104,70,15,"(复制115)1w");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(726,638,90,68,"(复制296)11");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(816,638,89,62,"(复制297)12");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(905,638,88,63,"(复制298)13");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(982,640,88,59,"(复制299)1是");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(1090,577,70,15,"(复制300)1n");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(1089,602,70,15,"(复制301)1s");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(1090,644,70,15,"(复制302)1e");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(1090,623,70,15,"(复制303)1w");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(725,533,90,68,"(复制304)(复制68)11");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(815,533,89,62,"(复制305)(复制69)12");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(904,533,88,63,"(复制306)(复制70)13");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(981,535,88,64,"(复制307)(复制71)1是");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(1091,474,70,15,"(复制308)(复制72)1n");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(1090,499,70,15,"(复制309)(复制73)1s");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(1091,541,70,15,"(复制310)(复制74)1e");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(1091,520,70,15,"(复制311)(复制75)1w");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(725,428,90,68,"(复制312)(复制76)11");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(815,428,89,62,"(复制313)(复制77)12");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(904,428,88,62,"(复制314)(复制78)13");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(981,430,88,64,"(复制315)(复制79)1是");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(1094,375,70,15,"(复制316)(复制80)1n");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(1093,400,70,15,"(复制317)(复制81)1s");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(1094,442,70,15,"(复制318)(复制82)1e");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(1094,421,70,15,"(复制319)(复制83)1w");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(725,316,90,68,"(复制320)(复制92)11");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(815,316,89,62,"(复制321)(复制93)12");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(904,316,88,63,"(复制322)(复制94)13");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(981,318,88,64,"(复制323)(复制95)1是");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(1094,267,70,15,"(复制324)(复制96)1n");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(1093,292,70,15,"(复制325)(复制97)1s");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(1094,334,70,15,"(复制326)(复制98)1e");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(1094,313,70,15,"(复制327)(复制99)1w");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(726,217,90,68,"(复制328)(复制100)11");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(816,217,89,62,"(复制329)(复制101)12");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(905,217,88,63,"(复制330)(复制102)13");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(982,219,88,64,"(复制331)(复制103)1是");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(1095,167,70,15,"(复制332)(复制104)1n");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(1094,192,70,15,"(复制333)(复制105)1s");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(1095,234,70,15,"(复制334)(复制106)1e");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(1095,213,70,15,"(复制335)(复制107)1w");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(725,121,90,68,"(复制336)(复制108)11");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(815,121,89,62,"(复制337)(复制109)12");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(904,121,88,63,"(复制338)(复制110)13");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(983,123,88,64,"(复制339)(复制111)1是");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(1094,64,70,15,"(复制340)(复制112)1n");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(1093,89,70,15,"(复制341)(复制113)1s");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(1094,131,70,15,"(复制342)(复制114)1e");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(1094,110,70,15,"(复制343)(复制115)1w");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(726,747,90,68,"(复制344)(复制296)11");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(816,747,89,62,"(复制345)(复制297)12");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(905,747,88,63,"(复制346)(复制298)13");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(982,749,88,59,"(复制347)(复制299)1是");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(1090,686,70,15,"(复制348)(复制300)1n");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(1089,711,70,15,"(复制349)(复制301)1s");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(1090,753,70,15,"(复制350)(复制302)1e");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(1090,732,70,15,"(复制351)(复制303)1w");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(91,750,90,73,"(复制107)11");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(181,750,89,67,"(复制108)12");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(270,750,88,68,"(复制109)13");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(347,752,88,64,"(复制110)1是");
    LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
    LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(455,682,70,15,"(复制111)1n");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(454,707,70,15,"(复制112)1s");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(455,749,70,15,"(复制113)1e");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    LODOP.ADD_PRINT_TEXT(455,728,70,15,"(复制114)1w");
    LODOP.SET_PRINT_STYLEA(0,"Angle",-90);

    },
    createDataBill() {
      LODOP = getLodop();


      LODOP.PRINT_INITA(10,10,900,1200,"恩施农村土地确权证");
      LODOP.ADD_PRINT_TEXT(90,638,90,73,this.formItem.landName);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(180,638,89,67,this.formItem.landNO);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(269,638,88,68,this.formItem.realArea);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(346,640,88,64,this.formItem.ifBasefarm);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(454,577,70,15,this.formItem.north);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(453,602,70,15,this.formItem.south);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(454,644,70,15,this.formItem.east);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(454,623,70,15,this.formItem.west);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(89,533,90,73,this.formItem.landName2);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(179,533,89,67,this.formItem.landNO2);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(268,533,88,68,this.formItem.realArea2);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(345,535,88,64,this.formItem.ifBasefarm2);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(455,474,70,15,this.formItem.north2);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(454,499,70,15,this.formItem.south2);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(455,541,70,15,this.formItem.east2);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(455,520,70,15,this.formItem.west2);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(89,428,90,73,this.formItem.landName3);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(179,428,89,67,this.formItem.landNO3);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(268,428,88,68,this.formItem.realArea3);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(345,430,88,64,this.formItem.ifBasefarm3);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(458,375,70,15,this.formItem.north3);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(457,400,70,15,this.formItem.south3);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(458,442,70,15,this.formItem.east3);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(458,421,70,15,this.formItem.west3);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(89,326,90,73,this.formItem.landName4);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(179,326,89,67,this.formItem.landNO4);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(268,326,88,68,this.formItem.realArea4);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(345,328,88,64,this.formItem.ifBasefarm4);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(458,267,70,15,this.formItem.north4);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(457,292,70,15,this.formItem.south4);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(458,334,70,15,this.formItem.east4);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(458,313,70,15,this.formItem.west4);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(90,221,90,73,this.formItem.landName5);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(180,221,89,67,this.formItem.landNO5);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(269,221,88,68,this.formItem.realArea5);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(346,223,88,64,this.formItem.ifBasefarm5);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(459,162,70,15,this.formItem.north5);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(458,187,70,15,this.formItem.south5);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(459,229,70,15,this.formItem.east5);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(459,208,70,15,this.formItem.west5);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(89,113,90,73,this.formItem.landName6);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(179,113,89,67,this.formItem.landNO6);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(268,113,88,68,this.formItem.realArea6);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(348,115,88,64,this.formItem.ifBasefarm6);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(458,58,70,15,this.formItem.north6);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(457,83,70,15,this.formItem.south6);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(458,125,70,15,this.formItem.east6);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(458,104,70,15,this.formItem.west6);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(726,638,90,68,this.formItem.landName8);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(816,638,89,62,this.formItem.landNO8);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(905,638,88,63,this.formItem.realArea8);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(982,640,88,59,this.formItem.ifBasefarm8);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1090,577,70,15,this.formItem.north8);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1089,602,70,15,this.formItem.south8);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1090,644,70,15,this.formItem.east8);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1090,623,70,15,this.formItem.west8);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(725,533,90,68,this.formItem.landName9);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(815,533,89,62,this.formItem.landNO9);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(904,533,88,63,this.formItem.realArea9);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(981,535,88,64,this.formItem.ifBasefarm9);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1091,474,70,15,this.formItem.north9);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1090,499,70,15,this.formItem.south9);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1091,541,70,15,this.formItem.east9);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1091,520,70,15,this.formItem.west9);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(725,428,90,68,this.formItem.landName10);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(815,428,89,62,this.formItem.landNO10);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(904,428,88,62,this.formItem.realArea10);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(981,430,88,64,this.formItem.ifBasefarm10);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1094,375,70,15,this.formItem.north10);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1093,400,70,15,this.formItem.south10);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1094,442,70,15,this.formItem.east10);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1094,421,70,15,this.formItem.west10);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(725,316,90,68,this.formItem.landName11);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(815,316,89,62,this.formItem.landNO11);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(904,316,88,63,this.formItem.realArea11);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(981,318,88,64,this.formItem.ifBasefarm11);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1094,267,70,15,this.formItem.north11);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1093,292,70,15,this.formItem.south11);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1094,334,70,15,this.formItem.east11);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1094,313,70,15,this.formItem.west11);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(726,217,90,68,this.formItem.landName12);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(816,217,89,62,this.formItem.landNO12);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(905,217,88,63,this.formItem.realArea12);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(982,219,88,64,this.formItem.ifBasefarm12);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1095,167,70,15,this.formItem.north12);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1094,192,70,15,this.formItem.south12);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1095,234,70,15,this.formItem.east12);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1095,213,70,15,this.formItem.west12);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(725,121,90,68,this.formItem.landName13);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(815,121,89,62,this.formItem.landNO13);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(904,121,88,63,this.formItem.realArea13);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(983,123,88,64,this.formItem.ifBasefarm13);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1094,64,70,15,this.formItem.north13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1093,89,70,15,this.formItem.south13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1094,131,70,15,this.formItem.east13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1094,110,70,15,this.formItem.west13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(726,747,90,68,this.formItem.landName7);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(816,747,89,62,this.formItem.landNO7);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(905,747,88,63,this.formItem.realArea7);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(982,749,88,59,this.formItem.ifBasefarm7);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1090,681,70,15,this.formItem.north7);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1089,706,70,15,this.formItem.south7);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1090,748,70,15,this.formItem.east7);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1090,727,70,15,this.formItem.west7);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(91,750,90,73,this.formItem.landName14);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(181,750,89,67,this.formItem.landNO14);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(270,750,88,68,this.formItem.realArea14);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(347,752,88,64,this.formItem.ifBasefarm14);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(455,682,70,15,this.formItem.north14);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(454,707,70,15,this.formItem.south14);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(455,749,70,15,this.formItem.east14);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(455,728,70,15,this.formItem.west14);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);

    },
    createFullBillWithArea() {
      LODOP = getLodop();

      LODOP.PRINT_INITA(10,10,900,1200,"恩施农村土地确权证");
      LODOP.ADD_PRINT_TEXT(73,638,90,73,"11");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(136,638,89,67,"12");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(261,638,88,68,"13");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(338,640,88,64,"1是");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(454,577,70,15,"1n");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(453,602,70,15,"1s");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(454,644,70,15,"1e");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(454,623,70,15,"1w");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(269,790,94,52,"总积面");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(514,795,75,57,"地块总数");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(72,533,90,73,"(复制68)11");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(137,533,89,67,"(复制69)12");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(260,533,88,68,"(复制70)13");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(337,535,88,64,"(复制71)1是");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(455,474,70,15,"(复制72)1n");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(454,499,70,15,"(复制73)1s");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(455,541,70,15,"(复制74)1e");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(455,520,70,15,"(复制75)1w");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(72,428,90,73,"(复制76)11");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(137,428,89,67,"(复制77)12");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(260,428,88,68,"(复制78)13");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(337,430,88,64,"(复制79)1是");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(458,375,70,15,"(复制80)1n");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(457,400,70,15,"(复制81)1s");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(458,442,70,15,"(复制82)1e");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(458,421,70,15,"(复制83)1w");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(72,326,90,73,"(复制92)11");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(137,326,89,67,"(复制93)12");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(260,326,88,68,"(复制94)13");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(337,328,88,64,"(复制95)1是");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(458,267,70,15,"(复制96)1n");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(457,292,70,15,"(复制97)1s");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(458,334,70,15,"(复制98)1e");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(458,313,70,15,"(复制99)1w");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(73,221,90,73,"(复制100)11");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(138,221,89,67,"(复制101)12");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(261,221,88,68,"(复制102)13");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(338,223,88,64,"(复制103)1是");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(459,162,70,15,"(复制104)1n");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(458,187,70,15,"(复制105)1s");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(459,229,70,15,"(复制106)1e");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(459,208,70,15,"(复制107)1w");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(72,113,90,73,"(复制108)11");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(137,113,89,67,"(复制109)12");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(260,113,88,68,"(复制110)13");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(340,115,88,64,"(复制111)1是");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(458,58,70,15,"(复制112)1n");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(457,83,70,15,"(复制113)1s");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(458,125,70,15,"(复制114)1e");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(458,104,70,15,"(复制115)1w");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(718,638,90,68,"(复制296)11");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(790,638,89,62,"(复制297)12");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(897,638,88,63,"(复制298)13");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(974,640,88,59,"(复制299)1是");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1090,577,70,15,"(复制300)1n");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1089,602,70,15,"(复制301)1s");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1090,644,70,15,"(复制302)1e");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1090,623,70,15,"(复制303)1w");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(717,533,90,68,"(复制304)(复制68)11");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(789,533,89,62,"(复制305)(复制69)12");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(896,533,88,63,"(复制306)(复制70)13");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(973,535,88,64,"(复制307)(复制71)1是");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1091,474,70,15,"(复制308)(复制72)1n");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1090,499,70,15,"(复制309)(复制73)1s");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1091,541,70,15,"(复制310)(复制74)1e");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1091,520,70,15,"(复制311)(复制75)1w");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(717,428,90,68,"(复制312)(复制76)11");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(789,428,89,62,"(复制313)(复制77)12");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(896,428,88,62,"(复制314)(复制78)13");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(973,430,88,64,"(复制315)(复制79)1是");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1094,375,70,15,"(复制316)(复制80)1n");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1093,400,70,15,"(复制317)(复制81)1s");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1094,442,70,15,"(复制318)(复制82)1e");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1094,421,70,15,"(复制319)(复制83)1w");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(717,316,90,68,"(复制320)(复制92)11");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(789,316,89,62,"(复制321)(复制93)12");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(896,316,88,63,"(复制322)(复制94)13");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(973,318,88,64,"(复制323)(复制95)1是");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1094,267,70,15,"(复制324)(复制96)1n");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1093,292,70,15,"(复制325)(复制97)1s");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1094,334,70,15,"(复制326)(复制98)1e");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1094,313,70,15,"(复制327)(复制99)1w");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(718,217,90,68,"(复制328)(复制100)11");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(790,217,89,62,"(复制329)(复制101)12");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(897,217,88,63,"(复制330)(复制102)13");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(974,219,88,64,"(复制331)(复制103)1是");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1095,167,70,15,"(复制332)(复制104)1n");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1094,192,70,15,"(复制333)(复制105)1s");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1095,234,70,15,"(复制334)(复制106)1e");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1095,213,70,15,"(复制335)(复制107)1w");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(717,121,90,68,"(复制336)(复制108)11");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(789,121,89,62,"(复制337)(复制109)12");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(896,121,88,63,"(复制338)(复制110)13");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(975,123,88,64,"(复制339)(复制111)1是");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1094,64,70,15,"(复制340)(复制112)1n");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1093,89,70,15,"(复制341)(复制113)1s");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1094,131,70,15,"(复制342)(复制114)1e");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1094,110,70,15,"(复制343)(复制115)1w");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(718,747,90,68,"(复制344)(复制296)11");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(790,747,89,62,"(复制345)(复制297)12");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(897,747,88,63,"(复制346)(复制298)13");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(974,749,88,59,"(复制347)(复制299)1是");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1090,681,70,15,"(复制348)(复制300)1n");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1089,706,70,15,"(复制349)(复制301)1s");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1090,748,70,15,"(复制350)(复制302)1e");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1090,727,70,15,"(复制351)(复制303)1w");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    },
    createDataBillWithArea() {
      LODOP = getLodop();
      LODOP.PRINT_INITA(10,10,900,1200,"恩施农村土地确权证");
      LODOP.ADD_PRINT_TEXT(73,638,90,73,this.formItem.landName);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(136,638,89,67,this.formItem.landNO);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(261,638,88,68,this.formItem.realArea);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(338,640,88,64,this.formItem.ifBasefarm);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(454,577,70,15,this.formItem.north);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(453,602,70,15,this.formItem.south);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(454,644,70,15,this.formItem.east);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(454,623,70,15,this.formItem.west);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(269,790,94,52,this.formItem.totalArea);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(514,795,75,57,this.formItem.totalNumber);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(72,533,90,73,this.formItem.landName2);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(137,533,89,67,this.formItem.landNO2);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(260,533,88,68,this.formItem.realArea2);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(337,535,88,64,this.formItem.ifBasefarm2);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(455,474,70,15,this.formItem.north2);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(454,499,70,15,this.formItem.south2);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(455,541,70,15,this.formItem.east2);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(455,520,70,15,this.formItem.west2);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(72,428,90,73,this.formItem.landName3);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(137,428,89,67,this.formItem.landNO3);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(260,428,88,68,this.formItem.realArea3);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(337,430,88,64,this.formItem.ifBasefarm3);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(458,375,70,15,this.formItem.north3);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(457,400,70,15,this.formItem.south3);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(458,442,70,15,this.formItem.east3);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(458,421,70,15,this.formItem.west3);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(72,326,90,73,this.formItem.landName4);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(137,326,89,67,this.formItem.landNO4);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(280,326,88,68,this.formItem.realArea4);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(337,328,88,64,this.formItem.ifBasefarm4);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(458,267,70,15,this.formItem.north4);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(457,292,70,15,this.formItem.south4);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(458,334,70,15,this.formItem.east4);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(458,313,70,15,this.formItem.west4);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(73,221,90,73,this.formItem.landName5);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(138,221,89,67,this.formItem.landNO5);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(261,221,88,68,this.formItem.realArea5);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(338,223,88,64,this.formItem.ifBasefarm5);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(459,162,70,15,this.formItem.north5);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(458,187,70,15,this.formItem.south5);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(459,229,70,15,this.formItem.east5);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(459,208,70,15,this.formItem.west5);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(72,113,90,73,this.formItem.landName6);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(137,113,89,67,this.formItem.landNO6);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(260,113,88,68,this.formItem.realArea6);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(340,115,88,64,this.formItem.ifBasefarm6);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(458,58,70,15,this.formItem.north6);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(457,83,70,15,this.formItem.south6);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(458,125,70,15,this.formItem.east6);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(458,104,70,15,this.formItem.west6);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(718,638,90,68,this.formItem.landName8);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(790,638,89,62,this.formItem.landNO8);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(897,638,88,63,this.formItem.realArea8);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(974,640,88,59,this.formItem.ifBasefarm8);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1090,577,70,15,this.formItem.north8);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1089,602,70,15,this.formItem.south8);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1090,644,70,15,this.formItem.east8);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1090,623,70,15,this.formItem.west8);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(717,533,90,68,this.formItem.landName9);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(789,533,89,62,this.formItem.landNO9);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(896,533,88,63,this.formItem.realArea9);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(973,535,88,64,this.formItem.ifBasefarm9);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1091,474,70,15,this.formItem.north9);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1090,499,70,15,this.formItem.south9);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1091,541,70,15,this.formItem.east9);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1091,520,70,15,this.formItem.west9);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(717,428,90,68,this.formItem.landName10);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(789,428,89,62,this.formItem.landNO10);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(896,428,88,62,this.formItem.realArea10);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(973,430,88,64,this.formItem.ifBasefarm10);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1094,375,70,15,this.formItem.north10);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1093,400,70,15,this.formItem.south10);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1094,442,70,15,this.formItem.east10);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1094,421,70,15,this.formItem.west10);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(717,316,90,68,this.formItem.landName11);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(789,316,89,62,this.formItem.landNO11);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(896,316,88,63,this.formItem.realArea11);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(973,318,88,64,this.formItem.ifBasefarm11);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1094,267,70,15,this.formItem.north11);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1093,292,70,15,this.formItem.south11);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1094,334,70,15,this.formItem.east11);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1094,313,70,15,this.formItem.west11);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(718,217,90,68,this.formItem.landName12);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(790,217,89,62,this.formItem.landNO12);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(897,217,88,63,this.formItem.realArea12);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(974,219,88,64,this.formItem.ifBasefarm12);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1095,167,70,15,this.formItem.north12);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1094,192,70,15,this.formItem.south12);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1095,234,70,15,this.formItem.east12);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1095,213,70,15,this.formItem.west12);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(717,121,90,68,this.formItem.landName13);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(789,121,89,62,this.formItem.landNO13);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(896,121,88,63,this.formItem.realArea13);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(975,123,88,64,this.formItem.ifBasefarm13);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1094,64,70,15,this.formItem.north13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1093,89,70,15,this.formItem.south13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1094,131,70,15,this.formItem.east13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1094,110,70,15,this.formItem.west13);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(718,747,90,68,this.formItem.landName7);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(790,747,89,62,this.formItem.landNO7);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(897,747,88,63,this.formItem.realArea7);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(974,749,88,59,this.formItem.ifBasefarm7);
      LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
      LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1090,681,70,15,this.formItem.north7);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1089,706,70,15,this.formItem.south7);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1090,748,70,15,this.formItem.east7);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
      LODOP.ADD_PRINT_TEXT(1090,727,70,15,this.formItem.west7);
      LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    }
  }
}
</script>

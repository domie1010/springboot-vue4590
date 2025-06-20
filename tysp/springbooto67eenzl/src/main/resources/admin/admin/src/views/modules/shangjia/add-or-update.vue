<template>
	<div class="addEdit-block" :style='{"padding":"30px","fontSize":"14px","color":"#666","background":"none"}'>
		<el-form
			:style='{"border":"1px solid #bababa","padding":"40px 30px 20px","borderRadius":"8px","alignItems":"flex-start","flexWrap":"wrap","background":"rgba(255,255,255,1)","display":"flex","fontSize":"inherit"}'
			class="add-update-preview"
			ref="ruleForm"
			:model="ruleForm"
			:rules="rules"
			label-width="150px"
		>
			<template >
				<el-form-item :style='{"border":"1px solid #eee","padding":"20px 0","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="店铺名称" prop="dianpumingcheng">
					<el-input v-model="ruleForm.dianpumingcheng" placeholder="店铺名称" clearable  :readonly="ro.dianpumingcheng"></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"1px solid #eee","padding":"20px 0","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","width":"100%","fontSize":"inherit"}' v-else class="input" label="店铺名称" prop="dianpumingcheng">
					<el-input v-model="ruleForm.dianpumingcheng" placeholder="店铺名称" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"1px solid #eee","padding":"20px 0","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="密码" prop="mima">
					<el-input v-model="ruleForm.mima" placeholder="密码" clearable  :readonly="ro.mima"></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"1px solid #eee","padding":"20px 0","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","width":"100%","fontSize":"inherit"}' v-else class="input" label="密码" prop="mima">
					<el-input v-model="ruleForm.mima" placeholder="密码" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"1px solid #eee","padding":"20px 0","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="店铺地址" prop="dianpudizhi">
					<el-input v-model="ruleForm.dianpudizhi" placeholder="店铺地址" clearable  :readonly="ro.dianpudizhi"></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"1px solid #eee","padding":"20px 0","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","width":"100%","fontSize":"inherit"}' v-else class="input" label="店铺地址" prop="dianpudizhi">
					<el-input v-model="ruleForm.dianpudizhi" placeholder="店铺地址" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"1px solid #eee","padding":"20px 0","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="经营范围" prop="jingyingfanwei">
					<el-input v-model="ruleForm.jingyingfanwei" placeholder="经营范围" clearable  :readonly="ro.jingyingfanwei"></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"1px solid #eee","padding":"20px 0","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","width":"100%","fontSize":"inherit"}' v-else class="input" label="经营范围" prop="jingyingfanwei">
					<el-input v-model="ruleForm.jingyingfanwei" placeholder="经营范围" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"1px solid #eee","padding":"20px 0","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="营业时间" prop="yingyeshijian">
					<el-input v-model="ruleForm.yingyeshijian" placeholder="营业时间" clearable  :readonly="ro.yingyeshijian"></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"1px solid #eee","padding":"20px 0","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","width":"100%","fontSize":"inherit"}' v-else class="input" label="营业时间" prop="yingyeshijian">
					<el-input v-model="ruleForm.yingyeshijian" placeholder="营业时间" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"1px solid #eee","padding":"20px 0","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="联系电话" prop="lianxidianhua">
					<el-input v-model="ruleForm.lianxidianhua" placeholder="联系电话" clearable  :readonly="ro.lianxidianhua"></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"1px solid #eee","padding":"20px 0","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","width":"100%","fontSize":"inherit"}' v-else class="input" label="联系电话" prop="lianxidianhua">
					<el-input v-model="ruleForm.lianxidianhua" placeholder="联系电话" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"1px solid #eee","padding":"20px 0","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","width":"100%","fontSize":"inherit"}' class="upload" v-if="type!='info'&& !ro.yingyezhizhao" label="营业执照" prop="yingyezhizhao">
					<file-upload
						tip="点击上传营业执照"
						action="file/upload"
						:limit="1"
						:type="3"
						:multiple="true"
						:fileUrls="ruleForm.yingyezhizhao?ruleForm.yingyezhizhao:''"
						@change="yingyezhizhaoUploadChange"
					></file-upload>
				</el-form-item>  
				<el-form-item :style='{"border":"1px solid #eee","padding":"20px 0","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","width":"100%","fontSize":"inherit"}' v-else-if="ruleForm.yingyezhizhao" label="营业执照" prop="yingyezhizhao">
					<el-button :style='{"cursor":"pointer","padding":"0 30px","margin":"0 20px 0 0","borderColor":"#ddd","color":"#333","outline":"none","borderRadius":"0px","background":"none","borderWidth":"0 0 1px","width":"auto","lineHeight":"36px","fontSize":"14px","borderStyle":"solid","height":"36px"}' type="text" size="small" @click="download($base.url+ruleForm.yingyezhizhao)">下载</el-button>
				</el-form-item>
				<el-form-item :style='{"border":"1px solid #eee","padding":"20px 0","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","width":"100%","fontSize":"inherit"}' v-else-if="!ruleForm.yingyezhizhao" label="营业执照" prop="yingyezhizhao">
					<el-button :style='{"cursor":"pointer","padding":"0 30px","margin":"0 20px 0 0","borderColor":"#ddd","color":"#333","outline":"none","borderRadius":"0px","background":"none","borderWidth":"0 0 1px","width":"auto","lineHeight":"36px","fontSize":"14px","borderStyle":"solid","height":"36px"}' type="text" size="small">无</el-button>
				</el-form-item>
				<el-form-item :style='{"border":"1px solid #eee","padding":"20px 0","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","width":"100%","fontSize":"inherit"}' class="upload" v-if="type!='info' && !ro.dianpuzhaopian" label="店铺照片" prop="dianpuzhaopian">
					<file-upload
						tip="点击上传店铺照片"
						action="file/upload"
						:limit="3"
						:multiple="true"
						:fileUrls="ruleForm.dianpuzhaopian?ruleForm.dianpuzhaopian:''"
						@change="dianpuzhaopianUploadChange"
					></file-upload>
				</el-form-item>
				<el-form-item :style='{"border":"1px solid #eee","padding":"20px 0","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","width":"100%","fontSize":"inherit"}' class="upload" v-else-if="ruleForm.dianpuzhaopian" label="店铺照片" prop="dianpuzhaopian">
					<img v-if="ruleForm.dianpuzhaopian.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.dianpuzhaopian.split(',')[0]" width="100" height="100">
					<img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.dianpuzhaopian.split(',')" :src="$base.url+item" width="100" height="100">
				</el-form-item>
			</template>
				<el-form-item :style='{"border":"1px solid #eee","padding":"20px 0","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","width":"100%","fontSize":"inherit"}' v-if="type!='info'"  label="店铺简介" prop="dianpujianjie">
					<editor 
						style="min-width: 200px; max-width: 600px;"
						v-model="ruleForm.dianpujianjie" 
						class="editor" 
						action="file/upload">
					</editor>
				</el-form-item>
				<el-form-item :style='{"border":"1px solid #eee","padding":"20px 0","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","width":"100%","fontSize":"inherit"}' v-else-if="ruleForm.dianpujianjie" label="店铺简介" prop="dianpujianjie">
                    <span :style='{"fontSize":"14px","lineHeight":"40px","color":"inherit","fontWeight":"500","display":"inline-block"}' v-html="ruleForm.dianpujianjie"></span>
                </el-form-item>
			<el-form-item :style='{"padding":"0","margin":"30px 0","alignItems":"center","textAlign":"center","display":"flex","width":"100%","perspective":"320px","-webkitPerspective":"320px","fontSize":"48px","justifyContent":"flex-start"}' class="btn">
				<el-button class="btn3"  v-if="type!='info'" type="success" @click="onSubmit">
					<span class="icon iconfont icon-tijiao16" :style='{"margin":"0 2px","fontSize":"18px","color":"inherit","display":"none"}'></span>
					保存
				</el-button>
				<el-button class="btn4" v-if="type!='info'" type="success" @click="back()">
					<span class="icon iconfont icon-quxiao09" :style='{"margin":"0 2px","fontSize":"18px","color":"inherit","display":"none"}'></span>
					取消
				</el-button>
				<el-button class="btn5" v-if="type=='info'" type="success" @click="back()">
					<span class="icon iconfont icon-fanhui01" :style='{"margin":"0 2px","fontSize":"18px","color":"inherit","display":"none"}'></span>
					返回
				</el-button>
			</el-form-item>
		</el-form>
    

  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
export default {
	data() {
		let self = this
		var validateIdCard = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!checkIdCard(value)) {
				callback(new Error("请输入正确的身份证号码"));
			} else {
				callback();
			}
		};
		var validateUrl = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isURL(value)) {
				callback(new Error("请输入正确的URL地址"));
			} else {
				callback();
			}
		};
		var validateMobile = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isMobile(value)) {
				callback(new Error("请输入正确的手机号码"));
			} else {
				callback();
			}
		};
		var validatePhone = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isPhone(value)) {
				callback(new Error("请输入正确的电话号码"));
			} else {
				callback();
			}
		};
		var validateEmail = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isEmail(value)) {
				callback(new Error("请输入正确的邮箱地址"));
			} else {
				callback();
			}
		};
		var validateNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isNumber(value)) {
				callback(new Error("请输入数字"));
			} else {
				callback();
			}
		};
		var validateIntNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isIntNumer(value)) {
				callback(new Error("请输入整数"));
			} else {
				callback();
			}
		};
		return {
			id: '',
			type: '',
			
			
			ro:{
				dianpumingcheng : false,
				mima : false,
				dianpudizhi : false,
				jingyingfanwei : false,
				yingyeshijian : false,
				lianxidianhua : false,
				yingyezhizhao : false,
				dianpujianjie : false,
				dianpuzhaopian : false,
				sfsh : false,
				shhf : false,
				storeupnum : false,
				money : false,
			},
			
			
			ruleForm: {
				dianpumingcheng: '',
				mima: '',
				dianpudizhi: '',
				jingyingfanwei: '',
				yingyeshijian: '',
				lianxidianhua: '',
				yingyezhizhao: '',
				dianpujianjie: '',
				dianpuzhaopian: '',
				shhf: '',
			},
		

			
			rules: {
				dianpumingcheng: [
					{ required: true, message: '店铺名称不能为空', trigger: 'blur' },
				],
				mima: [
					{ required: true, message: '密码不能为空', trigger: 'blur' },
				],
				dianpudizhi: [
					{ required: true, message: '店铺地址不能为空', trigger: 'blur' },
				],
				jingyingfanwei: [
				],
				yingyeshijian: [
				],
				lianxidianhua: [
					{ validator: validateMobile, trigger: 'blur' },
				],
				yingyezhizhao: [
				],
				dianpujianjie: [
				],
				dianpuzhaopian: [
				],
				sfsh: [
				],
				shhf: [
				],
				storeupnum: [
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				money: [
					{ validator: validateNumber, trigger: 'blur' },
				],
			}
		};
	},
	props: ["parent"],
	computed: {



	},
    components: {
    },
	created() {
	},
	methods: {
		
		// 下载
		download(file){
			window.open(`${file}`)
		},
		// 初始化
		init(id,type) {
			if (id) {
				this.id = id;
				this.type = type;
			}
			if(this.type=='info'||this.type=='else'){
				this.info(id);
			}else if(this.type=='logistics'){
				this.logistics=false;
				this.info(id);
			}else if(this.type=='cross'){
				var obj = this.$storage.getObj('crossObj');
				for (var o in obj){
						if(o=='dianpumingcheng'){
							this.ruleForm.dianpumingcheng = obj[o];
							this.ro.dianpumingcheng = true;
							continue;
						}
						if(o=='mima'){
							this.ruleForm.mima = obj[o];
							this.ro.mima = true;
							continue;
						}
						if(o=='dianpudizhi'){
							this.ruleForm.dianpudizhi = obj[o];
							this.ro.dianpudizhi = true;
							continue;
						}
						if(o=='jingyingfanwei'){
							this.ruleForm.jingyingfanwei = obj[o];
							this.ro.jingyingfanwei = true;
							continue;
						}
						if(o=='yingyeshijian'){
							this.ruleForm.yingyeshijian = obj[o];
							this.ro.yingyeshijian = true;
							continue;
						}
						if(o=='lianxidianhua'){
							this.ruleForm.lianxidianhua = obj[o];
							this.ro.lianxidianhua = true;
							continue;
						}
						if(o=='yingyezhizhao'){
							this.ruleForm.yingyezhizhao = obj[o];
							this.ro.yingyezhizhao = true;
							continue;
						}
						if(o=='dianpujianjie'){
							this.ruleForm.dianpujianjie = obj[o];
							this.ro.dianpujianjie = true;
							continue;
						}
						if(o=='dianpuzhaopian'){
							this.ruleForm.dianpuzhaopian = obj[o];
							this.ro.dianpuzhaopian = true;
							continue;
						}
						if(o=='storeupnum'){
							this.ruleForm.storeupnum = obj[o];
							this.ro.storeupnum = true;
							continue;
						}
						if(o=='money'){
							this.ruleForm.money = obj[o];
							this.ro.money = true;
							continue;
						}
				}
				













			}
			
			// 获取用户信息
			this.$http({
				url: `${this.$storage.get('sessionTable')}/session`,
				method: "get"
			}).then(({ data }) => {
				if (data && data.code === 0) {
					
					var json = data.data;
				} else {
					this.$message.error(data.msg);
				}
			});
			
			
		},
    // 多级联动参数

    info(id) {
      this.$http({
        url: `shangjia/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        this.ruleForm = data.data;
        //解决前台上传图片后台不显示的问题
        let reg=new RegExp('../../../upload','g')//g代表全部
        this.ruleForm.dianpujianjie = this.ruleForm.dianpujianjie.replace(reg,'../../../springbooto67eenzl/upload');
        } else {
          this.$message.error(data.msg);
        }
      });
    },


    // 提交
    onSubmit() {







	if(this.ruleForm.yingyezhizhao!=null) {
		this.ruleForm.yingyezhizhao = this.ruleForm.yingyezhizhao.replace(new RegExp(this.$base.url,"g"),"");
	}


	if(this.ruleForm.dianpuzhaopian!=null) {
		this.ruleForm.dianpuzhaopian = this.ruleForm.dianpuzhaopian.replace(new RegExp(this.$base.url,"g"),"");
	}





var objcross = this.$storage.getObj('crossObj');
      //更新跨表属性
       var crossuserid;
       var crossrefid;
       var crossoptnum;
       if(this.type=='cross'){
                var statusColumnName = this.$storage.get('statusColumnName');
                var statusColumnValue = this.$storage.get('statusColumnValue');
                if(statusColumnName!='') {
                        var obj = this.$storage.getObj('crossObj');
                       if(statusColumnName && !statusColumnName.startsWith("[")) {
                               for (var o in obj){
                                 if(o==statusColumnName){
                                   obj[o] = statusColumnValue;
                                 }
                               }
                               var table = this.$storage.get('crossTable');
                             this.$http({
                                 url: `${table}/update`,
                                 method: "post",
                                 data: obj
                               }).then(({ data }) => {});
                       } else {
                               crossuserid=this.$storage.get('userid');
                               crossrefid=obj['id'];
                               crossoptnum=this.$storage.get('statusColumnName');
                               crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                        }
                }
        }
		this.$refs["ruleForm"].validate(valid => {
			if (valid) {
				if(crossrefid && crossuserid) {
					this.ruleForm.crossuserid = crossuserid;
					this.ruleForm.crossrefid = crossrefid;
					let params = { 
						page: 1, 
						limit: 10, 
						crossuserid:this.ruleForm.crossuserid,
						crossrefid:this.ruleForm.crossrefid,
					} 
				this.$http({ 
					url: "shangjia/page", 
					method: "get", 
					params: params 
				}).then(({ 
					data 
				}) => { 
					if (data && data.code === 0) { 
						if(data.data.total>=crossoptnum) {
							this.$message.error(this.$storage.get('tips'));
							return false;
						} else {
							this.$http({
								url: `shangjia/${!this.ruleForm.id ? "save" : "update"}`,
								method: "post",
								data: this.ruleForm
							}).then(({ data }) => {
								if (data && data.code === 0) {
									this.$message({
										message: "操作成功",
										type: "success",
										duration: 1500,
										onClose: () => {
											this.parent.showFlag = true;
											this.parent.addOrUpdateFlag = false;
											this.parent.shangjiaCrossAddOrUpdateFlag = false;
											this.parent.search();
											this.parent.contentStyleChange();
										}
									});
								} else {
									this.$message.error(data.msg);
								}
							});

						}
					} else { 
				} 
			});
		} else {
			this.$http({
				url: `shangjia/${!this.ruleForm.id ? "save" : "update"}`,
				method: "post",
			   data: this.ruleForm
			}).then(({ data }) => {
				if (data && data.code === 0) {
					this.$message({
						message: "操作成功",
						type: "success",
						duration: 1500,
						onClose: () => {
							this.parent.showFlag = true;
							this.parent.addOrUpdateFlag = false;
							this.parent.shangjiaCrossAddOrUpdateFlag = false;
							this.parent.search();
							this.parent.contentStyleChange();
						}
					});
				} else {
					this.$message.error(data.msg);
			   }
			});
		 }
         }
       });
    },
    // 获取uuid
    getUUID () {
      return new Date().getTime();
    },
    // 返回
    back() {
      this.parent.showFlag = true;
      this.parent.addOrUpdateFlag = false;
      this.parent.shangjiaCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
    yingyezhizhaoUploadChange(fileUrls) {
	    this.ruleForm.yingyezhizhao = fileUrls;
    },
    dianpuzhaopianUploadChange(fileUrls) {
	    this.ruleForm.dianpuzhaopian = fileUrls;
    },
  }
};
</script>
<style lang="scss" scoped>
	.amap-wrapper {
		width: 100%;
		height: 500px;
	}
	
	.search-box {
		position: absolute;
	}
	
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  	  padding: 0 10px 0 0;
	  	  color: #333;
	  	  font-weight: 500;
	  	  display: inline-block;
	  	  width: 150px;
	  	  font-size: inherit;
	  	  line-height: 40px;
	  	  text-align: right;
	  	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 150px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  	  padding: 0 12px;
	  	  color: inherit;
	  	  font-size: 14px;
	  	  border-color: #ddd;
	  	  border-radius: 0px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  background: none;
	  	  width: auto;
	  	  border-width: 0 0 1px;
	  	  border-style: solid;
	  	  min-width: 350px;
	  	  height: 39px;
	  	}
	.add-update-preview .el-input-number /deep/ .el-input__inner {
		text-align: left;
	  	  padding: 0 12px;
	  	  color: inherit;
	  	  font-size: 14px;
	  	  border-color: #ddd;
	  	  border-radius: 0px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  background: none;
	  	  width: auto;
	  	  border-width: 0 0 1px;
	  	  border-style: solid;
	  	  min-width: 350px;
	  	  height: 39px;
	  	}
	.add-update-preview .el-input-number /deep/ .el-input-number__decrease {
		display: none;
	}
	.add-update-preview .el-input-number /deep/ .el-input-number__increase {
		display: none;
	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  	  border-radius: 0px;
	  	  padding: 0 10px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: inherit;
	  	  background: none;
	  	  width: auto;
	  	  font-size: 14px;
	  	  border-color: #ddd;
	  	  border-width: 0 0 1px;
	  	  border-style: solid;
	  	  height: 39px;
	  	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  	  border-radius: 0px;
	  	  padding: 0 10px 0 30px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: inherit;
	  	  background: none;
	  	  width: auto;
	  	  font-size: 14px;
	  	  border-color: #ddd;
	  	  border-width: 0 0 1px;
	  	  border-style: solid;
	  	  height: 39px;
	  	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  	  cursor: pointer;
	  	  color: #bbb;
	  	  object-fit: cover;
	  	  font-size: 24px;
	  	  border-color: #ddd;
	  	  line-height: 60px;
	  	  border-radius: 0px;
	  	  background: none;
	  	  width: 140px;
	  	  border-width: 0 0 1px;
	  	  border-style: solid;
	  	  text-align: center;
	  	  height: 60px;
	  	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  	  cursor: pointer;
	  	  color: #bbb;
	  	  object-fit: cover;
	  	  font-size: 24px;
	  	  border-color: #ddd;
	  	  line-height: 60px;
	  	  border-radius: 0px;
	  	  background: none;
	  	  width: 140px;
	  	  border-width: 0 0 1px;
	  	  border-style: solid;
	  	  text-align: center;
	  	  height: 60px;
	  	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  	  cursor: pointer;
	  	  color: #bbb;
	  	  object-fit: cover;
	  	  font-size: 24px;
	  	  border-color: #ddd;
	  	  line-height: 60px;
	  	  border-radius: 0px;
	  	  background: none;
	  	  width: 140px;
	  	  border-width: 0 0 1px;
	  	  border-style: solid;
	  	  text-align: center;
	  	  height: 60px;
	  	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  	  padding: 12px;
	  	  color: inherit;
	  	  font-size: 14px;
	  	  border-color: #ddd;
	  	  border-radius: 0px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  background: none;
	  	  width: auto;
	  	  border-width: 0 0 1px;
	  	  border-style: solid;
	  	  min-width: 50%;
	  	  height: auto;
	  	}
	
	.add-update-preview .btn .btn1 {
				border: 1px solid #a768f3;
				cursor: pointer;
				padding: 0 20px;
				margin: 0px 4px;
				color: #a768f3;
				display: inline-block;
				font-size: 14px;
				line-height: 24px;
				border-radius: 4px;
				outline: none;
				background: none;
				width: auto;
				height: 36px;
			}
	
	.add-update-preview .btn .btn1:hover {
				transform: scale(0.9) translate3d(0px, -10px, 0px);
				opacity: 0.8;
			}
	
	.add-update-preview .btn .btn2 {
				border: 0px solid rgba(126, 96, 16, .2);
				cursor: pointer;
				border-radius: 4px;
				padding: 0 20px;
				margin: 0px 4px;
				outline: none;
				color: #fff;
				background: #34bfa3;
				width: auto;
				font-size: 14px;
				line-height: 24px;
				height: 36px;
			}
	
	.add-update-preview .btn .btn2:hover {
				transform: scale(0.9) translate3d(0px, -10px, 0px);
				opacity: 0.8;
			}
	
	.add-update-preview .btn .btn3 {
				border: 1px solid #0260ad;
				cursor: pointer;
				border-radius: 4px;
				padding: 0 20px;
				margin: 0px 4px;
				outline: none;
				color: #0260ad;
				background: none;
				width: auto;
				font-size: 14px;
				line-height: 24px;
				height: 36px;
			}
	
	.add-update-preview .btn .btn3:hover {
				transform: scale(0.9) translate3d(0px, -10px, 0px);
				opacity: 0.8;
			}
	
	.add-update-preview .btn .btn4 {
				border: 0px solid rgba(126, 96, 16, .2);
				cursor: pointer;
				border-radius: 4px;
				padding: 0 20px;
				margin: 0px 4px;
				outline: none;
				color: #fff;
				background: #ff518a;
				width: auto;
				font-size: 14px;
				line-height: 24px;
				height: 36px;
			}
	
	.add-update-preview .btn .btn4:hover {
				transform: scale(0.9) translate3d(0px, -10px, 0px);
				opacity: 0.8;
			}
	
	.add-update-preview .btn .btn5 {
				border: 1px solid #6c757d;
				cursor: pointer;
				border-radius: 4px;
				padding: 0 20px;
				margin: 4px;
				outline: none;
				color: #6c757d;
				background: none;
				width: auto;
				font-size: 14px;
				line-height: 24px;
				height: 36px;
			}
	
	.add-update-preview .btn .btn5:hover {
				transform: scale(0.9) translate3d(0px, -10px, 0px);
				opacity: 0.8;
			}
</style>

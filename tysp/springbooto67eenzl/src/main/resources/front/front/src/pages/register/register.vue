<template>
	<div>

	<div class="container" :style='{"minHeight":"100vh","alignItems":"center","background":"url(http://codegen.caihongy.cn/20240225/947418f72d214efd8bedab3cbfea25cc.jpg)","display":"flex","width":"100%","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","justifyContent":"flex-start"}'>
		<el-form class='rgs-form' v-if="pageFlag=='register'" :style='{"minHeight":"88vh","padding":"130px 40px 40px","boxShadow":"0px 26px 26px -30px #999","margin":"40px 0 40px 80px","borderRadius":"30px","flexWrap":"wrap","background":"#fff","display":"flex","width":"800px","position":"relative","justifyContent":"center","height":"auto"}' ref="registerForm" :model="registerForm" :rules="rules">
			<div v-if="false" :style='{"width":"100%","margin":"0 0 10px 0","lineHeight":"44px","fontSize":"20px","color":"rgba(64, 158, 255, 1)","textAlign":"center"}'>USER / REGISTER</div>
			<div v-if="true" :style='{"margin":"0 auto","color":"#000","textAlign":"center","letterSpacing":"2px","top":"0","borderRadius":"30px 30px 0 0","left":"0","background":"#f5c720","width":"100%","lineHeight":"100px","fontSize":"24px","position":"absolute","fontWeight":"600"}'>基于SpringBoot体育商品推荐设计与实现注册</p></div>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 20px","height":"auto"}' v-if="tableName=='yonghu'" prop="yonghuzhanghao">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-100px","background":"none","display":"inline-block","width":"100px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('yonghuzhanghao')?'required':''">用户账号：</div>
				<el-input v-model="registerForm.yonghuzhanghao"  placeholder="请输入用户账号" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 20px","height":"auto"}' v-if="tableName=='yonghu'" prop="mima">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-100px","background":"none","display":"inline-block","width":"100px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('mima')?'required':''">密码：</div>
				<el-input v-model="registerForm.mima" type="password" placeholder="请输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 20px","height":"auto"}' v-if="tableName=='yonghu'" prop="mima2">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-100px","background":"none","display":"inline-block","width":"100px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('mima')?'required':''">确认密码：</div>
				<el-input v-model="registerForm.mima2" type="password" placeholder="请再次输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 20px","height":"auto"}' v-if="tableName=='yonghu'" prop="yonghuxingming">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-100px","background":"none","display":"inline-block","width":"100px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('yonghuxingming')?'required':''">用户姓名：</div>
				<el-input v-model="registerForm.yonghuxingming"  placeholder="请输入用户姓名" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 20px","height":"auto"}' v-if="tableName=='yonghu'" prop="xingbie">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-100px","background":"none","display":"inline-block","width":"100px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('xingbie')?'required':''">性别：</div>
                <el-select v-model="registerForm.xingbie" placeholder="请选择性别" >
                  <el-option
                      v-for="(item,index) in yonghuxingbieOptions"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 20px","height":"auto"}' v-if="tableName=='yonghu'" prop="dianhua">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-100px","background":"none","display":"inline-block","width":"100px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('dianhua')?'required':''">电话：</div>
				<el-input v-model="registerForm.dianhua"  placeholder="请输入电话" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 20px","height":"auto"}' v-if="tableName=='yonghu'" prop="touxiang">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-100px","background":"none","display":"inline-block","width":"100px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('touxiang')?'required':''">头像：</div>
                <file-upload
					tip="点击上传头像"
					action="file/upload"
					:limit="1"
					:multiple="true"
					:fileUrls="registerForm.touxiang?registerForm.touxiang:''"
					@change="yonghutouxiangUploadChange"
				></file-upload>
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 20px","height":"auto"}' v-if="tableName=='shangjia'" prop="dianpumingcheng">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-100px","background":"none","display":"inline-block","width":"100px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('dianpumingcheng')?'required':''">店铺名称：</div>
				<el-input v-model="registerForm.dianpumingcheng"  placeholder="请输入店铺名称" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 20px","height":"auto"}' v-if="tableName=='shangjia'" prop="mima">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-100px","background":"none","display":"inline-block","width":"100px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('mima')?'required':''">密码：</div>
				<el-input v-model="registerForm.mima" type="password" placeholder="请输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 20px","height":"auto"}' v-if="tableName=='shangjia'" prop="mima2">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-100px","background":"none","display":"inline-block","width":"100px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('mima')?'required':''">确认密码：</div>
				<el-input v-model="registerForm.mima2" type="password" placeholder="请再次输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 20px","height":"auto"}' v-if="tableName=='shangjia'" prop="dianpudizhi">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-100px","background":"none","display":"inline-block","width":"100px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('dianpudizhi')?'required':''">店铺地址：</div>
				<el-input v-model="registerForm.dianpudizhi"  placeholder="请输入店铺地址" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 20px","height":"auto"}' v-if="tableName=='shangjia'" prop="jingyingfanwei">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-100px","background":"none","display":"inline-block","width":"100px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('jingyingfanwei')?'required':''">经营范围：</div>
				<el-input v-model="registerForm.jingyingfanwei"  placeholder="请输入经营范围" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 20px","height":"auto"}' v-if="tableName=='shangjia'" prop="yingyeshijian">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-100px","background":"none","display":"inline-block","width":"100px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('yingyeshijian')?'required':''">营业时间：</div>
				<el-input v-model="registerForm.yingyeshijian"  placeholder="请输入营业时间" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 20px","height":"auto"}' v-if="tableName=='shangjia'" prop="lianxidianhua">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-100px","background":"none","display":"inline-block","width":"100px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('lianxidianhua')?'required':''">联系电话：</div>
				<el-input v-model="registerForm.lianxidianhua"  placeholder="请输入联系电话" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 20px","height":"auto"}' v-if="tableName=='shangjia'" prop="yingyezhizhao">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-100px","background":"none","display":"inline-block","width":"100px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('yingyezhizhao')?'required':''">营业执照：</div>
                <file-upload
					tip="点击上传营业执照"
					action="file/upload"
					:limit="1"
					:type="3"
					:multiple="true"
					:fileUrls="registerForm.yingyezhizhao?registerForm.yingyezhizhao:''"
					@change="shangjiayingyezhizhaoUploadChange"
				></file-upload>
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 20px","height":"auto"}' v-if="tableName=='shangjia'" prop="dianpuzhaopian">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-100px","background":"none","display":"inline-block","width":"100px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('dianpuzhaopian')?'required':''">店铺照片：</div>
                <file-upload
					tip="点击上传店铺照片"
					action="file/upload"
					:limit="1"
					:multiple="true"
					:fileUrls="registerForm.dianpuzhaopian?registerForm.dianpuzhaopian:''"
					@change="shangjiadianpuzhaopianUploadChange"
				></file-upload>
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 20px","height":"auto"}' v-if="tableName=='shangjia'" prop="dianpujianjie">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-100px","background":"none","display":"inline-block","width":"100px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('dianpujianjie')?'required':''">店铺简介：</div>
			    <editor
			        :style='{"minHeight":"250px","border":"0px solid #1abc9e30","borderRadius":"0px","color":"#666","background":"#fff","width":"400px","clear":"both","minWidth":"300px","height":"auto"}'
			        v-model="registerForm.dianpujianjie" 
			        class="editor" 
			        action="file/upload">
			    </editor>
			</el-form-item>
			<el-button :style='{"border":"0","cursor":"pointer","padding":"0 24px","margin":"0 20px","color":"#000","borderRadius":"4px","background":"#f7c420","display":"block","width":"150px","fontSize":"16px","height":"44px","order":"30"}' type="primary" @click="submitForm('registerForm')">注册</el-button>
			<el-button :style='{"border":"0","cursor":"pointer","padding":"0 0px","margin":"0 20px","color":"#fff","textAlign":"center","display":"block","borderRadius":"4px","background":"#000","width":"150px","fontSize":"14px","height":"44px","order":"40"}' @click="resetForm('registerForm')">重置</el-button>
			<router-link :style='{"cursor":"pointer","padding":"0 0px","margin":"0 auto 20px","color":"#666","textAlign":"center","display":"block","width":"100%","lineHeight":"1","fontSize":"14px","textDecoration":"none","order":"20"}' to="/login">已有账户登录</router-link>
			<div class="idea1" :style='{"width":"100%","background":"red","display":"none","height":"40px"}'></div>
			<div class="idea2" :style='{"width":"100%","background":"blue","display":"none","height":"40px"}'></div>
		</el-form>
    </div>
  </div>
</div>
</template>

<script>

export default {
    //数据集合
    data() {
		return {
            pageFlag : '',
			tableName: '',
			registerForm: {},
			forgetForm: {},
			rules: {},
			requiredRules: {},
            yonghuxingbieOptions: [],
		}
    },
	mounted() {
		if(this.$route.query.pageFlag=='register'){
			this.tableName = this.$route.query.role;
			if(this.tableName=='yonghu'){
				this.registerForm = {
					yonghuzhanghao: '',
					mima: '',
					mima2: '',
					yonghuxingming: '',
					xingbie: '',
					dianhua: '',
					touxiang: '',
					money: '',
				}
			}
			if(this.tableName=='shangjia'){
				this.registerForm = {
					dianpumingcheng: '',
					mima: '',
					mima2: '',
					dianpudizhi: '',
					jingyingfanwei: '',
					yingyeshijian: '',
					lianxidianhua: '',
					yingyezhizhao: '',
					dianpujianjie: '',
					dianpuzhaopian: '',
					sfsh: '',
					shhf: '',
					storeupnum: '',
					money: '',
				}
			}
			if ('yonghu' == this.tableName) {
				this.requiredRules.yonghuzhanghao = [{ required: true, message: '请输入用户账号', trigger: 'blur' }]
			}
			if ('yonghu' == this.tableName) {
				this.requiredRules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
			if ('yonghu' == this.tableName) {
				this.requiredRules.yonghuxingming = [{ required: true, message: '请输入用户姓名', trigger: 'blur' }]
			}
			if ('shangjia' == this.tableName) {
				this.requiredRules.dianpumingcheng = [{ required: true, message: '请输入店铺名称', trigger: 'blur' }]
			}
			if ('shangjia' == this.tableName) {
				this.requiredRules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
			if ('shangjia' == this.tableName) {
				this.requiredRules.dianpudizhi = [{ required: true, message: '请输入店铺地址', trigger: 'blur' }]
			}
		}
	},
    created() {
		this.pageFlag = this.$route.query.pageFlag;
		if(this.$route.query.pageFlag=='register'){
		  if ('yonghu' == this.tableName) {
			this.rules.yonghuzhanghao = [{ required: true, message: '请输入用户账号', trigger: 'blur' }];
		  }
		  if ('yonghu' == this.tableName) {
			this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }];
		  }
		  if ('yonghu' == this.tableName) {
			this.rules.yonghuxingming = [{ required: true, message: '请输入用户姓名', trigger: 'blur' }];
		  }
			this.yonghuxingbieOptions = "男,女".split(',');
		  if ('yonghu' == this.tableName) {
			this.rules.dianhua = [{ required: true, validator: this.$validate.isMobile, trigger: 'blur' }];
		  }
		  if ('yonghu' == this.tableName) {
			this.rules.money = [{ required: true, validator: this.$validate.isNumber, trigger: 'blur' }];
		  }
		  if ('shangjia' == this.tableName) {
			this.rules.dianpumingcheng = [{ required: true, message: '请输入店铺名称', trigger: 'blur' }];
		  }
		  if ('shangjia' == this.tableName) {
			this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }];
		  }
		  if ('shangjia' == this.tableName) {
			this.rules.dianpudizhi = [{ required: true, message: '请输入店铺地址', trigger: 'blur' }];
		  }
		  if ('shangjia' == this.tableName) {
			this.rules.lianxidianhua = [{ required: true, validator: this.$validate.isMobile, trigger: 'blur' }];
		  }
		  if ('shangjia' == this.tableName) {
			this.rules.storeupnum = [{ required: true, validator: this.$validate.isIntNumer, trigger: 'blur' }];
		  }
		  if ('shangjia' == this.tableName) {
			this.rules.money = [{ required: true, validator: this.$validate.isNumber, trigger: 'blur' }];
		  }
		}
    },
    //方法集合
    methods: {
		changeRules(name){
			if(this.requiredRules[name]){
				return true
			}
			return false
		},
      // 获取uuid
      getUUID () {
        return new Date().getTime();
      },
        // 下二随
      yonghutouxiangUploadChange(fileUrls) {
          this.registerForm.touxiang = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },
      shangjiayingyezhizhaoUploadChange(fileUrls) {
          this.registerForm.yingyezhizhao = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },
      shangjiadianpuzhaopianUploadChange(fileUrls) {
          this.registerForm.dianpuzhaopian = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },

        // 多级联动参数


      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var url=this.tableName+"/register";
				if((!this.registerForm.yonghuzhanghao) && `yonghu` == this.tableName){
					this.$message.error(`用户账号不能为空`);
					return
				}
               if(`yonghu` == this.tableName && this.registerForm.mima!=this.registerForm.mima2) {
                this.$message.error(`两次密码输入不一致`);
                return
               }
				if((!this.registerForm.mima) && `yonghu` == this.tableName){
					this.$message.error(`密码不能为空`);
					return
				}
				if((!this.registerForm.yonghuxingming) && `yonghu` == this.tableName){
					this.$message.error(`用户姓名不能为空`);
					return
				}
					if(`yonghu` == this.tableName && this.registerForm.dianhua &&(!this.$validate.isMobile2(this.registerForm.dianhua))){
						this.$message.error(`电话应输入手机格式`);
						return
					}
			  if(this.tableName=='shangjia'){
				  this.registerForm.sfsh = '待审核'
			  }
				if((!this.registerForm.dianpumingcheng) && `shangjia` == this.tableName){
					this.$message.error(`店铺名称不能为空`);
					return
				}
               if(`shangjia` == this.tableName && this.registerForm.mima!=this.registerForm.mima2) {
                this.$message.error(`两次密码输入不一致`);
                return
               }
				if((!this.registerForm.mima) && `shangjia` == this.tableName){
					this.$message.error(`密码不能为空`);
					return
				}
				if((!this.registerForm.dianpudizhi) && `shangjia` == this.tableName){
					this.$message.error(`店铺地址不能为空`);
					return
				}
					if(`shangjia` == this.tableName && this.registerForm.lianxidianhua &&(!this.$validate.isMobile2(this.registerForm.lianxidianhua))){
						this.$message.error(`联系电话应输入手机格式`);
						return
					}
            this.$http.post(url, this.registerForm).then(res => {
              if (res.data.code === 0) {
                this.$message({
                  message: '注册成功',
                  type: 'success',
                  duration: 1500,
                  onClose: () => {
                    this.$router.push('/login');
                  }
                });
              } else {
                this.$message.error(res.data.msg);
              }
            });
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.container {
		position: relative;
		background: url(http://codegen.caihongy.cn/20240225/947418f72d214efd8bedab3cbfea25cc.jpg);
		
		.el-input {
		  width: auto;
		}
		
		.el-date-editor.el-input {
			width: auto;
		}
		
		.el-form-item /deep/ .el-form-item__content {
						display: flex;
						flex-wrap: wrap;
					}
		
		.rgs-form .el-input /deep/ .el-input__inner {
						border-radius: 4px;
						padding: 0 10px;
						color: #666;
						background: #fff;
						width: 400px;
						font-size: 14px;
						border-color: #333;
						border-width: 1px;
						border-style: solid;
						height: 44px;
					}
		
		.rgs-form .el-select /deep/ .el-input__inner {
						border-radius: 4px;
						padding: 0 10px;
						color: #666;
						background: #fff;
						width: 400px;
						font-size: 14px;
						border-color: #333;
						border-width: 1px;
						border-style: solid;
						min-width: 300px;
						height: 44px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border-radius: 4px;
						padding: 0 10px 0 30px;
						outline: none;
						color: #666;
						background: #fff;
						width: 400px;
						font-size: 14px;
						border-color: #333;
						border-width: 1px;
						border-style: solid;
						min-width: 300px;
						height: 44px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border-radius: 4px;
						padding: 0 10px 0 30px;
						outline: none;
						color: #666;
						background: #fff;
						width: 400px;
						font-size: 14px;
						border-color: #333;
						border-width: 1px;
						border-style: solid;
						min-width: 300px;
						height: 44px;
					}
		
		.rgs-form /deep/ .el-upload--picture-card {
			background: transparent;
			border: 0;
			border-radius: 0;
			width: auto;
			height: auto;
			line-height: initial;
			vertical-align: middle;
		}
		
		.rgs-form /deep/ .upload .upload-img {
		  		  cursor: pointer;
		  		  color: #002355;
		  		  font-weight: 600;
		  		  font-size: 32px;
		  		  border-color: #333;
		  		  line-height: 60px;
		  		  border-radius: 4px;
		  		  background: #fff;
		  		  width: 120px;
		  		  border-width: 1px;
		  		  border-style: solid;
		  		  text-align: center;
		  		  height: 60px;
		  		}
		
		.rgs-form /deep/ .el-upload-list .el-upload-list__item {
		  		  cursor: pointer;
		  		  color: #002355;
		  		  font-weight: 600;
		  		  font-size: 32px;
		  		  border-color: #333;
		  		  line-height: 60px;
		  		  border-radius: 4px;
		  		  background: #fff;
		  		  width: 120px;
		  		  border-width: 1px;
		  		  border-style: solid;
		  		  text-align: center;
		  		  height: 60px;
		  		}
		
		.rgs-form /deep/ .el-upload .el-icon-plus {
		  		  cursor: pointer;
		  		  color: #002355;
		  		  font-weight: 600;
		  		  font-size: 32px;
		  		  border-color: #333;
		  		  line-height: 60px;
		  		  border-radius: 4px;
		  		  background: #fff;
		  		  width: 120px;
		  		  border-width: 1px;
		  		  border-style: solid;
		  		  text-align: center;
		  		  height: 60px;
		  		}
	}
	.required {
		position: relative;
	}
	.required::after{
				color: red;
				left: 90px;
				position: absolute;
				content: "*";
				order: 2;
			}
</style>

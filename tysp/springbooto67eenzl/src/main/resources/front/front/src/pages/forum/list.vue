<template>
<div class="forum-preview" :style='{"width":"100%","padding":"30px 10% 40px","margin":"0px auto","position":"relative","background":"none"}'>
    <div :style='{"width":"100%","padding":"36px 0 0","margin":"40px auto 0","textAlign":"center","background":"url(http://codegen.caihongy.cn/20240303/4a00266e357e47d5856d30e525467334.png) no-repeat center center / 100% 100%","height":"92px"}'>
		<div :style='{"padding":"0 20px 0 0","color":"#000","textAlign":"left","background":"none","display":"inline-block","width":"auto","fontSize":"24px","fontWeight":"600"}'>论坛交流</div>
	</div>
    <el-form :style='{"padding":"0px 0","margin":"30px 0","alignItems":"center","flexWrap":"wrap","background":"none","display":"flex","width":"100%","justifyContent":"flex-end","height":"auto"}' :inline="true" :model="formSearch" class="list-form-pv">
		<el-form-item :style='{"margin":"0 0px"}'>
			<el-input v-model="title" placeholder="标题"></el-input>
		</el-form-item>
		<div :style='{"display":"flex"}'>
			<el-button class="searchBtn" type="primary" @click="getForumList(1)">
				<span class="icon iconfont icon-fangdajing01" :style='{"color":"#fff","margin":"0 10px 0 0","fontSize":"14px"}'></span>
				查询
			</el-button>
			<el-button class="pubBtn" type="primary" @click="toForumAdd">
				<span class="icon iconfont icon-tianjia14" :style='{"color":"#333","margin":"0 10px 0 0","fontSize":"14px"}'></span>
				发布帖子
			</el-button>
		</div>
    </el-form>
	<div class="z-box" :style='{"width":"100%","padding":"0px","margin":"20px 0 0","flexWrap":"wrap","background":"none","display":"flex"}'>
		<div class="section-content" v-for="item in forumList" :key="item.id" @click="toForumDetail(item)">
		  <div :style='{"color":"#333","width":"calc(100% - 0px)","fontSize":"14px"}' class="item-style">{{item.title}}</div>
		  <div :style='{"fontSize":"14px","minWidth":"180px","color":"#999","order":"3"}' class="item-style">发布人：{{item.username}}</div>
		  <div :style='{"margin":"0 50px 0 0","fontSize":"14px","minWidth":"200px","color":"#999"}' class="item-style">{{item.addtime}}</div>
		</div>
	</div>
	
    <el-pagination
      background
      id="pagination" class="pagination"
      :pager-count="7"
      :page-size="pageSize"
      :page-sizes="pageSizes"
	  prev-text="上一页"
      next-text="下一页"
      :hide-on-single-page="false"
      :layout='["prev","pager","next"].join()'
      :total="total"
      :style='{"padding":"5px 10%","margin":"20px auto","color":"#333","textAlign":"center","width":"100%","clear":"both","lineHeight":"40px","fontWeight":"500","height":"40px","order":"50"}'
      @current-change="curChange"
      @prev-click="prevClick"
      @next-click="nextClick"
    ></el-pagination>
	
</div>
</template>

<script>
  export default {
    //数据集合
    data() {
      return {
		formSearch: {},
        title: '',
        layouts: '',
        forumList: [],
        total: 1,
        pageSize: 10,pageSizes: [10,20,30,50],
        totalPage: 1
      }
    },
    created() {
      this.getForumList(1);
    },
    //方法集合
    methods: {
      getForumList(page) {
        let params = {page, limit: this.pageSize, isdone: '开放', sort: 'istop,toptime', order: 'desc,desc'};
        let searchWhere = {};
        if(this.title != '') searchWhere.title = '%' + this.title + '%';
        this.$http.get('forum/flist', {params: Object.assign(params, searchWhere)}).then(res => {
          if (res.data.code == 0) {
            this.forumList = res.data.data.list;
            this.total = res.data.data.total;
            this.pageSize = res.data.data.pageSize;this.pageSizes = [this.pageSize, this.pageSize*2, this.pageSize*3, this.pageSize*5];
            this.totalPage = res.data.data.totalPage;
          }
        });
      },
      curChange(page) {
        this.getForumList(page);
      },
      prevClick(page) {
        this.getForumList(page);
      },
      nextClick(page) {
        this.getForumList(page);
      },
      toForumAdd() {
        this.$router.push('/index/forumAdd');
      },
      toForumDetail(item) {
        this.$router.push({path: '/index/forumDetail', query: {id: item.id}});
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .section {
    width: 900px;
    margin: 0 auto;
  }

  .section-content {
    display: flex;
    justify-content: space-between;
    line-height: 60px;
    cursor: pointer;
    box-sizing: border-box;
    padding: 0 10px;
  }
  .section-content:hover {
    background-color: #E4E7ED;
    color: #fff;
  }
  .item-style {
    color: #909399;
    font-weight: 400;
  }
  .section-btn {
    text-align: right;
    margin-bottom: 15px;
    padding-right: 10px;
  }
  
	.forum-preview .el-form-item /deep/ .el-form-item__content {
				display: flex;
				align-items: center;
			}
	
	.forum-preview .el-form-item .el-input /deep/ .el-input__inner {
				border: 1px solid #eee;
				border-radius: 4px 0 0 4px;
				padding: 0 10px;
				margin: 0;
				color: #666;
				width: 280px;
				font-size: 14px;
				line-height: 36px;
				height: 36px;
			}
	
	.forum-preview .searchBtn {
				cursor: pointer;
				border: 0;
				border-radius: 0 4px 4px 0;
				padding: 0px 15px;
				margin: 0 10px 0 0;
				color: #fff;
				background: #f7c420;
				width: auto;
				font-size: 14px;
				line-height: 36px;
				height: 36px;
			}
	
	.forum-preview .searchBtn:hover {
			}
	
	.forum-preview .pubBtn {
				cursor: pointer;
				border: 0px solid #ddd;
				border-radius: 4px;
				padding: 0px 15px;
				margin: 0;
				color: #333;
				background: #f7c42050;
				width: auto;
				font-size: 14px;
				line-height: 36px;
				height: 36px;
			}
	
	.forum-preview .pubBtn:hover {
			}
	
	.forum-preview .z-box .section-content {
				cursor: pointer;
				padding: 10px;
				margin: 0 0 20px;
				color: #333;
				display: flex;
				border-color: #000;
				line-height: 24px;
				background: #fff;
				width: 100%;
				border-width: 0 0 2px;
				align-items: center;
				border-style: solid;
				height: auto;
			}
	
	.forum-preview .z-box .section-content:hover {
				color: #fff;
				background: #ffffff;
			}
  
  #pagination.el-pagination /deep/ .el-pagination__total {
  	  	margin: 0 10px 0 0;
  	  	color: #666;
  	  	font-weight: 400;
  	  	display: inline-block;
  	  	vertical-align: top;
  	  	font-size: 13px;
  	  	line-height: 28px;
  	  	height: 28px;
  	  }
  
  #pagination.el-pagination /deep/ .btn-prev {
  	  	border: none;
  	  	border-radius: 2px;
  	  	padding: 0 6px;
  	  	margin: 0 5px;
  	  	color: #666;
  	  	background: #fff;
  	  	display: inline-block;
  	  	vertical-align: top;
  	  	font-size: 13px;
  	  	line-height: 28px;
  	  	min-width: 35px;
  	  	height: 28px;
  	  }
  
  #pagination.el-pagination /deep/ .btn-next {
  	  	border: none;
  	  	border-radius: 2px;
  	  	padding: 0 6px;
  	  	margin: 0 5px;
  	  	color: #666;
  	  	background: #fff;
  	  	display: inline-block;
  	  	vertical-align: top;
  	  	font-size: 13px;
  	  	line-height: 28px;
  	  	min-width: 35px;
  	  	height: 28px;
  	  }
  
  #pagination.el-pagination /deep/ .btn-prev:disabled {
  	  	border: none;
  	  	cursor: not-allowed;
  	  	border-radius: 2px;
  	  	padding: 0 6px;
  	  	margin: 0 5px;
  	  	color: #C0C4CC;
  	  	background: #fff;
  	  	display: inline-block;
  	  	vertical-align: top;
  	  	font-size: 13px;
  	  	line-height: 28px;
  	  	height: 28px;
  	  }
  
  #pagination.el-pagination /deep/ .btn-next:disabled {
  	  	border: none;
  	  	cursor: not-allowed;
  	  	border-radius: 2px;
  	  	padding: 0 6px;
  	  	margin: 0 5px;
  	  	color: #C0C4CC;
  	  	background: #fff;
  	  	display: inline-block;
  	  	vertical-align: top;
  	  	font-size: 13px;
  	  	line-height: 28px;
  	  	height: 28px;
  	  }
  
  #pagination.el-pagination /deep/ .el-pager {
  	  	padding: 0;
  	  	margin: 0;
  	  	display: inline-block;
  	  	vertical-align: top;
  	  }
  
  #pagination.el-pagination /deep/ .el-pager .number {
  	  	cursor: pointer;
  	  	padding: 0 4px;
  	  	margin: 0 5px;
  	  	color: #666;
  	  	display: inline-block;
  	  	vertical-align: top;
  	  	font-size: 13px;
  	  	line-height: 28px;
  	  	border-radius: 2px;
  	  	background: #fff;
  	  	text-align: center;
  	  	min-width: 30px;
  	  	height: 28px;
  	  }
  
  #pagination.el-pagination /deep/ .el-pager .number:hover {
  	  	cursor: pointer;
  	  	padding: 0 4px;
  	  	margin: 0 5px;
  	  	color: #fff;
  	  	display: inline-block;
  	  	vertical-align: top;
  	  	font-size: 13px;
  	  	line-height: 28px;
  	  	border-radius: 2px;
  	  	background: #f7c420;
  	  	text-align: center;
  	  	min-width: 30px;
  	  	height: 28px;
  	  }
  
  #pagination.el-pagination /deep/ .el-pager .number.active {
  	  	cursor: default;
  	  	padding: 0 4px;
  	  	margin: 0 5px;
  	  	color: #FFF;
  	  	display: inline-block;
  	  	vertical-align: top;
  	  	font-size: 13px;
  	  	line-height: 28px;
  	  	border-radius: 2px;
  	  	background: #f7c420;
  	  	text-align: center;
  	  	min-width: 30px;
  	  	height: 28px;
  	  }
  
  #pagination.el-pagination /deep/ .el-pagination__sizes {
  	  	display: inline-block;
  	  	vertical-align: top;
  	  	font-size: 13px;
  	  	line-height: 28px;
  	  	height: 28px;
  	  }
  
  #pagination.el-pagination /deep/ .el-pagination__sizes .el-input {
  	  	margin: 0 5px;
  	  	width: 100px;
  	  	position: relative;
  	  }
  
  #pagination.el-pagination /deep/ .el-pagination__sizes .el-input .el-input__inner {
  	  	border: 1px solid #DCDFE6;
  	  	cursor: pointer;
  	  	padding: 0 25px 0 8px;
  	  	color: #606266;
  	  	display: inline-block;
  	  	font-size: 13px;
  	  	line-height: 28px;
  	  	border-radius: 3px;
  	  	outline: 0;
  	  	background: #FFF;
  	  	width: 100%;
  	  	text-align: center;
  	  	height: 28px;
  	  }
  
  #pagination.el-pagination /deep/ .el-pagination__sizes .el-input span.el-input__suffix {
  	  	top: 0;
  	  	position: absolute;
  	  	right: 0;
  	  	height: 100%;
  	  }
  
  #pagination.el-pagination /deep/ .el-pagination__sizes .el-input .el-input__suffix .el-select__caret {
  	  	cursor: pointer;
  	  	color: #C0C4CC;
  	  	width: 25px;
  	  	font-size: 14px;
  	  	line-height: 28px;
  	  	text-align: center;
  	  }
  
  #pagination.el-pagination /deep/ .el-pagination__jump {
  	  	margin: 0 0 0 24px;
  	  	color: #606266;
  	  	display: inline-block;
  	  	vertical-align: top;
  	  	font-size: 13px;
  	  	line-height: 28px;
  	  	height: 28px;
  	  }
  
  #pagination.el-pagination /deep/ .el-pagination__jump .el-input {
  	  	border-radius: 3px;
  	  	padding: 0 2px;
  	  	margin: 0 2px;
  	  	display: inline-block;
  	  	width: 50px;
  	  	font-size: 14px;
  	  	line-height: 18px;
  	  	position: relative;
  	  	text-align: center;
  	  	height: 28px;
  	  }
  
  #pagination.el-pagination /deep/ .el-pagination__jump .el-input .el-input__inner {
  	  	border: 1px solid #DCDFE6;
  	  	cursor: pointer;
  	  	padding: 0 3px;
  	  	color: #606266;
  	  	display: inline-block;
  	  	font-size: 14px;
  	  	line-height: 28px;
  	  	border-radius: 3px;
  	  	outline: 0;
  	  	background: #FFF;
  	  	width: 100%;
  	  	text-align: center;
  	  	height: 28px;
  	  }
</style>

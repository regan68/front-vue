<template>
  <div class="create">
    <div style="float: left;width:20%">
      <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <el-menu-item index="1"><i class="el-icon-message"></i>对象</el-menu-item>
        <el-menu-item index="2"><i class="el-icon-menu"></i>文件</el-menu-item>
        <el-menu-item index="3"><i class="el-icon-setting"></i>展示</el-menu-item>
        <el-menu-item index="4"><i class="el-icon-message"></i>导航4</el-menu-item>
        <el-menu-item index="5"><i class="el-icon-menu"></i>导航5</el-menu-item>
        <el-menu-item index="6"><i class="el-icon-setting"></i>导航6</el-menu-item>
        <el-menu-item index="7"><i class="el-icon-message"></i>导航4</el-menu-item>
        <el-menu-item index="8"><i class="el-icon-menu"></i>导航5</el-menu-item>
        <el-menu-item index="9"><i class="el-icon-setting"></i>导航6</el-menu-item>
      </el-menu>
    </div>
    <div style="float: left;width:80%" class="createDiv">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="line-height: 36px;">{{isCreate?'创建成功':'创建演示'}}</span>
        </div>
        <div class="loginShow" v-if="!isCreate">
          <el-upload
            style="float: left"
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="user.imageUrl" :src="user.imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon" style="margin-top: 70px"></i>
          </el-upload>
          <div style="float: left;width: 250px;margin-left: 10px">
            <select v-model="user.company" placeholder="请选择" size="large" style="width: 100%; height:42px">
              <option
                v-for="item in typeList"
                :key="item.key"
                :value="item.key">
                {{item.value}}
              </option>
            </select>
            <el-input v-model="user.name" size="large" placeholder="名称" style="margin-top: 10px"></el-input>
            <el-input-number v-model="user.age" size="large" :min="1" :max="100"
                             style="margin-top: 10px;width: 100%"></el-input-number>
            <el-radio-group v-model="user.type" style="margin-top: 10px">
              <el-radio :label="1">经理</el-radio>
              <el-radio :label="2">组长</el-radio>
              <el-radio :label="3">员工</el-radio>
            </el-radio-group>
          </div>
          <el-button type="primary" @click="toCreate()" style="margin-top: 30px">创建</el-button>
          <el-button type="primary" style="margin-top: 30px">清空</el-button>
        </div>
        <div class="loginShow" v-if="isCreate">
          <div style="float: left; width: 178px; height:178px">
            <img :src="user.imageUrl" class="image">
          </div>
          <div style="float: left; width: 230px; margin-left: 10px">
            <div style="text-align: left">部门：{{user.company}}</div>
            <div style="text-align: left">名称：{{user.name}}</div>
            <div style="text-align: left">年龄：{{user.age}}</div>
            <div style="text-align: left">类型：{{user.type}}</div>
            <div style="text-align: left; margin-top: 120px">
              <el-button type="warning" @click="deleteUser">删除</el-button>
            </div>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'create',
    data () {
      return {
        isCreate: false,
        user: {name: '', age: 0, type: 0, fileId: '', company: 1, imageUrl: ''},
        typeList: [{key: 1, value: '选择部门'}, {key: 1, value: 'AA部门'}, {key: 2, value: 'BB部门'}, {key: 3, value: 'CC部门'}]
      };
    },
    created: function () {
      // TODO
    },
    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath);
      },
      toCreate () {
        this.isCreate = true;
      },
      deleteUser () {
        this.isCreate = false;
      },
      handleAvatarSuccess (res, file) {
        this.user.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload (file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }

  .image {
    width: 100%;
    display: block;
  }

  .createDiv {
    position: absolute;
    left: 50%;
    margin-left: -240px;
    font-size: 16px;
    text-align: center;
    display: block;
  }

  .loginShow {
    height: 250px;
  }

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

</style>

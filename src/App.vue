<template>
  <div id="app">
    <!-- <div class="row">
      <fan-button @click2num="fn">A</fan-button>
      <fan-button type="primary">A</fan-button>
      <fan-button type="success">A</fan-button>
      <fan-button type="info">A</fan-button>
      <fan-button type="warning">A</fan-button>
      <fan-button type="danger">A</fan-button>
    </div>
    <div class="row">
      <fan-button plain>A</fan-button>
      <fan-button plain type="primary">A</fan-button>
      <fan-button plain type="success">A</fan-button>
      <fan-button plain type="info">A</fan-button>
      <fan-button plain type="warning">A</fan-button>
      <fan-button plain type="danger">A</fan-button>
    </div>
    <div class="row">
      <fan-button @click2num="fn" disable plain>A</fan-button>
      <fan-button @click2num="fn" disable plain type="primary">A</fan-button>
      <fan-button disable plain type="success">A</fan-button>
      <fan-button disable plain type="info">A</fan-button>
      <fan-button disable plain type="warning">A</fan-button>
      <fan-button disable plain type="danger">A</fan-button>
    </div>
    <div class="row">
      <fan-button round icon='shanchu'  plain>A</fan-button>
      <fan-button round icon='qianbao'  plain type="primary">A</fan-button>
      <fan-button round icon='wenjian'  plain type="success">A</fan-button>
      <fan-button round icon='cunchu' plain type="info">A</fan-button>
      <fan-button round icon='tongxun'  plain type="warning">A</fan-button>
      <fan-button round icon='zhangdan' plain type="danger">A</fan-button>
    </div>
    <div class="row">
      <fan-button circle plain>进</fan-button>
      <fan-button circle plain type="primary">击</fan-button>
      <fan-button circle plain type="success">的</fan-button>
      <fan-button circle plain type="info">巨</fan-button>
      <fan-button circle plain type="warning">人</fan-button>
      <fan-button circle plain type="danger">呢</fan-button>
    </div>
    <div class="row">
      <fan-button circle icon='shanchu' plain></fan-button>
      <fan-button circle icon='qianbao' plain type="primary"></fan-button>
      <fan-button circle icon='wenjian' plain type="success"></fan-button>
      <fan-button circle icon='cunchu' plain type="info"></fan-button>
      <fan-button circle icon='tongxun' plain type="warning"></fan-button>
      <fan-button circle icon='zhangdan' plain type="danger"></fan-button>
      <fan-button circle icon='baseline-close-px' plain type="danger"></fan-button>
    </div> -->
    <fan-button type="primary" @click="visiable=true">出现</fan-button>
    <fan-dialog title="欢迎提示" width="50%" top="200px" :visiable.sync="visiable">
      这是一段信息
      <!-- <template v-slot:title>
        <h1 style="color:red">哈哈哈哈</h1>
      </template> -->
      <template v-slot:footer>
        <fan-button @click="visiable=false">取消</fan-button>
        <fan-button type="danger" @click="visiable=false">确定</fan-button>
      </template>
    </fan-dialog>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      visiable: false
    }
  }
}
</script>

<style lang="scss">
.row {
  margin-bottom: 20px;
  .fan-button{
    margin-right: 20px;
  }
}
</style>

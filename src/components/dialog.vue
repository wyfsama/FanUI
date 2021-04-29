<template>
  <div class="fan-dialog_wrapper" v-show="visiable" @click.self="close">
   <div class="fan-dialog" :style="{width,marginTop:top}">
     <div class="fan-dialog_header">
       <span class="fan-dialog_title">
         <slot name="title">
           {{title}}
         </slot>
       </span>
       <button class="fan-dialog_headerbtn"  @click="close">
         <i class="icon-baseline-close-px"></i>
       </button>
     </div>
     <div class="fan-dialog_body">
       <span>
         <slot>
         </slot>
       </span>
     </div>
     <div class="fan-dialog_footer"  v-show="$slots.footer">
       <slot name="footer"></slot>
     </div>
   </div>
 </div>
</template>

<script>
export default {
  name: 'FanDialog',
  methods: {
    close () {
      this.$emit('update:visiable', false)
    }
  },
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '150px'
    },
    visiable: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.fan-dialog_wrapper{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0,0,0,0.5);
  .fan-dialog{
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.3);
    box-sizing: border-box;
    width: 30%;
    &_header{
      padding: 20px 20px 10px;
      .fan-dialog_title{
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .fan-dialog_headerbtn{
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .baseline-close-px{
          color:909399
        }
      }
    }
    &_body{
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &_footer{
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      ::v-deep .fan-button:first-child{
        margin-right: 20px;
      }
    }
  }
}
</style>

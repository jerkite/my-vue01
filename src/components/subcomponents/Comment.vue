<template>
  <div class="comment-container">
    <h3>发表评论</h3>
    <textarea placeholder="别问，问就是吐槽(最多输入120字)" maxlength="120" v-model="msg"></textarea>
    <mt-button type="primary" size="large" @click="PostComment">发表评论</mt-button>
    <div class="comment-list" v-for="(item, i) in comments" :key="item.add_time">
      <div class="comment-item">
        <h3>第{{i+1}}楼&nbsp&nbsp用户:{{item.user_name}}&nbsp&nbsp发表时间：{{ item.add_time | dataFormat }}</h3>
        <h2>{{item.content==null?"此用户很懒什么都没有吐槽":item.content }}</h2>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>
 
<script>
import { Toast } from 'mint-ui'
export default {
  data() {
    return {
      pageindex: 1,
      comments: [], //保存评论数据
      msg: ''
    }
  },
  created() {
    this.getComments()
  },
  methods: {
    getComments() {
      this.$http
        .get('api/getcomments/' + this.id + '?pageindex=' + this.pageindex)
        .then(result => {
          if (result.body.status == 0) {
            this.comments = this.comments.concat(result.body.message) //获取评论数据由于有多页需要用数组拼接方法concat
          } else {
            Toast('获取评论失败')
          }
        })
    },
    getMore() {
      this.pageindex++ //点击加载更多 页数加一
      this.getComments() //重新加载获取评论数据方法
    },
    PostComment() {
      //发送评论数据
      if (this.msg.trim() == '') {
        return Toast('评论不能为空')
      }
      this.$http
        .post('api/postcomment/' + this.id, { content: this.msg.trim() })
        .then(result => {
          if (result.body.status === 0) {
            var cmt = {
              user_name: '匿名用户',
              add_time: Date.now(),
              content: this.msg.trim()
            }
            this.comments.unshift(cmt) //加入评论数组中
            this.msg = '' //文本域重新清空
          } else {
            Toast('评论失败')
          }
        })
    }
  },
  props: ['id'] //接受从父组件传递过来的值
}
</script>

<style lang="scss" scoped>
.comment-container {
  h3 {
    font-size: 16px;
  }
  textarea {
    font-size: 12px;
    margin: 0;
  }
  .comment-list {
    .comment-item {
      h3 {
        font-weight: 400;
        font-size: 14px;
        background-color: #ccc;
        line-height: 30px;
      }
      h2 {
        font-weight: 400;
        font-size: 14px;
        line-height: 30px;
        text-indent: 2em;
      }
    }
  }
  .mint-button--danger.is-plain {
    margin-bottom: 10px;
  }
}
</style>
<template>
  <div class="app-home">
    <!--两列布局-->
    <!--左侧-->
    <article class="app-home--article">
      <!--话题-->
      <section></section>
      <!--列表-->
      <section class="app-home--list">
        <div class="app-home--list__header"></div>
        <ul class="app-home--list__body">
          <li class="app-home--list__item" v-for="item in list" :key="item.id">
            <a class="app-home--user__avatar" href="">
              <img :src="item.avatar" alt="" />
            </a>
            <a class="app-home--topic" href="">
              <span>
                {{ item.topic }}
              </span>
            </a>
            <a class="app-home--article-title" href="">
              <img :src="item.category" alt="" />
              <span>{{ item.title }}</span>
            </a>
          </li>
        </ul>
      </section>
    </article>
    <!--右侧-->
    <aside class="app-home--aside">
      <!--广告-->
      <div class="app-home--aside__ads"></div>
      <!--友链-->
      <div class="app-home--aside__Links"></div>
    </aside>
  </div>
</template>

<script>
export default {
  name: "AppHome",
  data() {
    return {
      list: [
        {
          id: 0,
          avatar: "https://cdn.learnku.com/uploads/avatars/58200_1582980730.jpeg!/both/100x100",
          topic: "博客",
          category: "https://cdn.learnku.com//uploads/communities/h3Xef7s3mLKYmqwBRIiA.png",
          title: "如何编写makefile文件，将C代码和RUST代码编译成ko文件",
        },
        {
          id: 1,
          avatar: "https://cdn.learnku.com/uploads/avatars/58200_1582980730.jpeg!/both/100x100",
          topic: "博客",
          category: "https://cdn.learnku.com//uploads/communities/h3Xef7s3mLKYmqwBRIiA.png",
          title: "如何编写makefile文件，将C代码和RUST代码编译成ko文件",
        },
        {
          id: 2,
          avatar: "https://cdn.learnku.com/uploads/avatars/58200_1582980730.jpeg!/both/100x100",
          topic: "博客",
          category: "https://cdn.learnku.com//uploads/communities/h3Xef7s3mLKYmqwBRIiA.png",
          title: "如何编写makefile文件，将C代码和RUST代码编译成ko文件",
        },
        {
          id: 3,
          avatar: "https://cdn.learnku.com/uploads/avatars/58200_1582980730.jpeg!/both/100x100",
          topic: "博客",
          category: "https://cdn.learnku.com//uploads/communities/h3Xef7s3mLKYmqwBRIiA.png",
          title: "如何编写makefile文件，将C代码和RUST代码编译成ko文件",
        },
        {
          id: 4,
          avatar: "https://cdn.learnku.com/uploads/avatars/58200_1582980730.jpeg!/both/100x100",
          topic: "博客",
          category: "https://cdn.learnku.com//uploads/communities/h3Xef7s3mLKYmqwBRIiA.png",
          title: "如何编写makefile文件，将C代码和RUST代码编译成ko文件",
        },
        {
          id: 5,
          avatar: "https://cdn.learnku.com/uploads/avatars/58200_1582980730.jpeg!/both/100x100",
          topic: "博客",
          category: "https://cdn.learnku.com//uploads/communities/h3Xef7s3mLKYmqwBRIiA.png",
          title: "如何编写makefile文件，将C代码和RUST代码编译成ko文件",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.app-home {
  width: 100%;
  //height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.app-home--article {
  width: calc(75% - 34px);
  background: #fff;
  -webkit-box-shadow: 0 1px 2px 0 rgb(34 36 38 / 15%);
  box-shadow: 0 1px 2px 0 rgb(34 36 38 / 15%);
  margin: 16px 0;
  padding: 16px;
  border-radius: 5px;
  border: 1px solid rgba(34, 36, 38, 0.15);
}
.app-home--list {
  letter-spacing: 1.5px;
  color: rgba(0, 0, 0, 0.6);
  .app-home--list__header {
  }
  .app-home--list__body {
    .app-home--list__item {
      width: 100%;
      padding: 8px 0;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #f2f2f2;
      .app-home--user__avatar {
        margin-right: 10px;
        img {
          width: 40px;
          height: 40px;
        }
      }
      .app-home--topic {
        margin-right: 10px;
        span {
          width: 45px;
          color: rgba(0, 0, 0, 0.6);
          background-color: #f0f2f5;
          padding: 0.3em 0.6em;
          font-size: 12px;
          font-weight: 400;
          text-align: center;
          border-radius: 3px;
        }
      }
      .app-home--article-title {
        img {
          width: 16px;
          height: 16px;
          margin-right: 3px;
        }
        span {
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
}
.app-home--aside {
  width: calc(25% - 34px);
  margin: 16px 0;
  padding: 16px;
  .app-home--aside__ads {
    width: 100%;
    height: 203px;
    background: #fff;
    -webkit-box-shadow: 0 1px 2px 0 rgb(34 36 38 / 15%);
    box-shadow: 0 1px 2px 0 rgb(34 36 38 / 15%);
    border-radius: 5px;
    border: 1px solid rgba(34, 36, 38, 0.15);
  }
  .app-home--aside__Links {
    width: 100%;
    margin-top: 15px;
    height: 203px;
    background: #fff;
    -webkit-box-shadow: 0 1px 2px 0 rgb(34 36 38 / 15%);
    box-shadow: 0 1px 2px 0 rgb(34 36 38 / 15%);
    border-radius: 5px;
    border: 1px solid rgba(34, 36, 38, 0.15);
  }
}
</style>

<template>
  <div class="editor">
    <header class="header editor-header">
      <div class="left-box"></div>
      <input v-model="form.title" placeholder="输入文章标题..." spellcheck="false" maxlength="80" class="title-input" />
      <div class="right-box">
        <div title="" class="status-text status-text with-padding">文章将自动保存至草稿箱</div>
        <button class="xitu-btn with-padding xitu-btn-outline">草稿箱</button>
        <div class="publish-popup with-padding">
          <button class="xitu-btn" @click="handleSubmit">发布</button>
          <!--          <div class="panel" style="display: none">-->
          <!--            <div class="title">发布文章</div>-->
          <!--            <div class="form-item">-->
          <!--              <div class="label required category-label">分类：</div>-->
          <!--              <div class="form-item-content category-list">-->
          <!--                <div class="item">后端</div>-->
          <!--                <div class="item">前端</div>-->
          <!--                <div class="item">Android</div>-->
          <!--                <div class="item">iOS</div>-->
          <!--                <div class="item">人工智能</div>-->
          <!--                <div class="item">开发工具</div>-->
          <!--                <div class="item">代码人生</div>-->
          <!--                <div class="item">阅读</div>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--            <div class="form-item">-->
          <!--              <div class="label required">添加标签：</div>-->
          <!--              <div class="form-item-content">-->
          <!--                <div data-v-fa1609d6="" class="tag-input select">-->
          <!--                  <div data-v-fa1609d6="" class="select-plus byte-select byte-select&#45;&#45;normal" style="width: 100%">-->
          <!--                    <div class="byte-select__wrap">-->
          <!--                      <div class="byte-select__content-wrap">-->
          <!--                        <div class="byte-select__placeholder">请搜索添加标签</div>-->
          <!--                        &lt;!&ndash;&ndash;&gt;<input class="byte-select__input" style="width: 100%" />-->
          <!--                      </div>-->
          <!--                      <div class="byte-select__icon-wrap">-->
          <!--                        &lt;!&ndash;&ndash;&gt;<span class="byte-select__suffix byte-select__suffix&#45;&#45;down"-->
          <!--                          ><i class="byte-icon byte-icon&#45;&#45;up" style="width: 12px; height: 12px"-->
          <!--                            ><svg-->
          <!--                              t="1561636079192"-->
          <!--                              class="icon"-->
          <!--                              viewBox="0 0 1024 1024"-->
          <!--                              version="1.1"-->
          <!--                              xmlns="http://www.w3.org/2000/svg"-->
          <!--                              p-id="396971"-->
          <!--                              xmlns:xlink="http://www.w3.org/1999/xlink"-->
          <!--                            >-->
          <!--                              <path-->
          <!--                                d="M512 393.6l-346.88 346.88a21.12 21.12 0 0 1-30.08 0l-30.08-30.08a21.12 21.12 0 0 1 0-30.08l376.96-377.6a42.24 42.24 0 0 1 60.16 0l376.96 377.6a21.12 21.12 0 0 1 0 30.08l-30.08 30.08a21.12 21.12 0 0 1-30.08 0z"-->
          <!--                                p-id="396972"-->
          <!--                              ></path></svg></i-->
          <!--                        ></span>-->
          <!--                      </div>-->
          <!--                      <span-->
          <!--                        class="byte-select__input"-->
          <!--                        style="height: 0px; overflow: hidden; position: absolute; max-width: 100%"-->
          <!--                      ></span>-->
          <!--                      <div-->
          <!--                        class="byte-select-dropdown byte-select-dropdown&#45;&#45;multiple tag-select-add-margin"-->
          <!--                        style="width: 0px; display: none"-->
          <!--                      >-->
          <!--                        <div class="byte-select-dropdown__wrap" style="">-->
          <!--                          &lt;!&ndash;&ndash;&gt;-->
          <!--                          <div data-v-fa1609d6="" class="tag-number-container">-->
          <!--                            你还能添加 <span data-v-fa1609d6="" class="tag-number">2</span> 个标签-->
          <!--                          </div>-->
          <!--                          <li-->
          <!--                            data-v-fa1609d6=""-->
          <!--                            class="byte-select-option byte-select-option&#45;&#45;hover"-->
          <!--                            classname="tag-option"-->
          <!--                          >-->
          <!--                            前端-->
          <!--                          </li>-->
          <!--                          <li data-v-fa1609d6="" class="byte-select-option" classname="tag-option">后端</li>-->
          <!--                          <li data-v-fa1609d6="" class="byte-select-option" classname="tag-option">JavaScript</li>-->
          <!--                          <li data-v-fa1609d6="" class="byte-select-option" classname="tag-option">GitHub</li>-->
          <!--                          <li data-v-fa1609d6="" class="byte-select-option" classname="tag-option">面试</li>-->
          <!--                          <li data-v-fa1609d6="" class="byte-select-option" classname="tag-option">架构</li>-->
          <!--                          <li data-v-fa1609d6="" class="byte-select-option" classname="tag-option">代码规范</li>-->
          <!--                          <li data-v-fa1609d6="" class="byte-select-option" classname="tag-option">Vue.js</li>-->
          <!--                          <li data-v-fa1609d6="" class="byte-select-option" classname="tag-option">算法</li>-->
          <!--                          <li data-v-fa1609d6="" class="byte-select-option" classname="tag-option">CSS</li>-->
          <!--                        </div>-->
          <!--                        &lt;!&ndash;&ndash;&gt;-->
          <!--                      </div>-->
          <!--                    </div>-->
          <!--                  </div>-->
          <!--                </div>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--            <div class="form-item">-->
          <!--              <div class="label">文章封面：</div>-->
          <!--              <div class="form-item-content">-->
          <!--                <div data-v-0338d66e="" class="coverselector_container">-->
          <!--                  <div data-v-0338d66e="">-->
          <!--                    <button data-v-0338d66e="" class="select-btn">-->
          <!--                      <div data-v-0338d66e="" class="button-slot">-->
          <!--                        <img-->
          <!--                          data-v-0338d66e=""-->
          <!--                          src="//lf-cdn-tos.bytescm.com/obj/static/xitu_juejin_web_editor/img/add.0e2d17b6.svg"-->
          <!--                          height="20"-->
          <!--                          alt="add_cover"-->
          <!--                        />-->
          <!--                        <div data-v-0338d66e="" class="upload">上传封面</div>-->
          <!--                      </div>-->
          <!--                    </button>-->
          <!--                    <div data-v-0338d66e="" class="addvice">建议尺寸：1303*734px</div>-->
          <!--                  </div>-->
          <!--                  <input data-v-0338d66e="" type="file" style="display: none" />-->
          <!--                </div>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--            <div class="form-item column-line">-->
          <!--              <div class="label">收录至专栏：</div>-->
          <!--              <div class="form-item-content">-->
          <!--                <div data-v-5c289105="" class="container select">-->
          <!--                  <div data-v-5c289105="" class="byte-select byte-select&#45;&#45;normal" style="width: 100%">-->
          <!--                    <div class="byte-select__wrap">-->
          <!--                      <div class="byte-select__content-wrap">-->
          <!--                        <div class="byte-select__placeholder">请搜索添加专栏，同一篇文章最多添加三个专栏</div>-->
          <!--                        &lt;!&ndash;&ndash;&gt;<input class="byte-select__input" style="width: 100%" />-->
          <!--                      </div>-->
          <!--                      <div class="byte-select__icon-wrap">-->
          <!--                        &lt;!&ndash;&ndash;&gt;<span class="byte-select__suffix byte-select__suffix&#45;&#45;down"-->
          <!--                          ><i class="byte-icon byte-icon&#45;&#45;up" style="width: 12px; height: 12px"-->
          <!--                            ><svg-->
          <!--                              t="1561636079192"-->
          <!--                              class="icon"-->
          <!--                              viewBox="0 0 1024 1024"-->
          <!--                              version="1.1"-->
          <!--                              xmlns="http://www.w3.org/2000/svg"-->
          <!--                              p-id="396971"-->
          <!--                              xmlns:xlink="http://www.w3.org/1999/xlink"-->
          <!--                            >-->
          <!--                              <path-->
          <!--                                d="M512 393.6l-346.88 346.88a21.12 21.12 0 0 1-30.08 0l-30.08-30.08a21.12 21.12 0 0 1 0-30.08l376.96-377.6a42.24 42.24 0 0 1 60.16 0l376.96 377.6a21.12 21.12 0 0 1 0 30.08l-30.08 30.08a21.12 21.12 0 0 1-30.08 0z"-->
          <!--                                p-id="396972"-->
          <!--                              ></path></svg></i-->
          <!--                        ></span>-->
          <!--                      </div>-->
          <!--                      <span-->
          <!--                        class="byte-select__input"-->
          <!--                        style="height: 0px; overflow: hidden; position: absolute; max-width: 100%"-->
          <!--                      ></span>-->
          <!--                      <div-->
          <!--                        class="byte-select-dropdown byte-select-dropdown&#45;&#45;multiple"-->
          <!--                        style="width: 0px; display: none"-->
          <!--                      >-->
          <!--                        <div class="byte-select-dropdown__wrap" style="display: none">&lt;!&ndash;&ndash;&gt;</div>-->
          <!--                        <div data-v-31e37a92="" data-v-5c289105="" class="container">-->
          <!--                          <p data-v-31e37a92="" class="first-line">-->
          <!--                            <img-->
          <!--                              data-v-31e37a92=""-->
          <!--                              src="//lf-cdn-tos.bytescm.com/obj/static/xitu_juejin_web_editor/img/refresh.6a3492ad.svg"-->
          <!--                              alt="refresh"-->
          <!--                              class="icon"-->
          <!--                            />-->
          <!--                          </p>-->
          <!--                          <p data-v-31e37a92="" class="content">-->
          <!--                            你还没有创建任何专栏，快去-->
          <!--                            <a data-v-31e37a92="" href="/creator/content/column?action=create" target="_blank">-->
          <!--                              创建专栏-->
          <!--                            </a>-->
          <!--                            吧~-->
          <!--                          </p>-->
          <!--                        </div>-->
          <!--                      </div>-->
          <!--                    </div>-->
          <!--                  </div>-->
          <!--                </div>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--            <div class="summary-box form-item">-->
          <!--              <div class="label">编辑摘要：</div>-->
          <!--              <div class="summary form-item-content">-->
          <!--                <span style="color: rgb(238, 77, 56)"> 0/100 </span>-->
          <!--                <div class="summary-textarea byte-input byte-input&#45;&#45;normal">-->
          <!--                  <textarea-->
          <!--                    maxlength="100"-->
          <!--                    rows="5"-->
          <!--                    placeholder=""-->
          <!--                    autocomplete=""-->
          <!--                    name=""-->
          <!--                    aria-label=""-->
          <!--                    spellcheck="false"-->
          <!--                    class="byte-input__textarea"-->
          <!--                  ></textarea>-->
          <!--                </div>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--            <div class="footer">-->
          <!--              &lt;!&ndash;&ndash;&gt;-->
          <!--              <div class="btn-container">-->
          <!--                <button-->
          <!--                  data-v-2d4f7d48=""-->
          <!--                 -->
          <!--                  class="ui-btn btn line medium default"-->
          <!--                  style="margin-right: 16px"-->
          <!--                >-->
          <!--                  &lt;!&ndash;&ndash;&gt;-->
          <!--                  取消</button-->
          <!--                ><button-->
          <!--                  data-v-2d4f7d48=""-->
          <!--                 -->
          <!--                  class="ui-btn btn primary medium default"-->
          <!--                  st:name="publishBtn"-->
          <!--                >-->
          <!--                  &lt;!&ndash;&ndash;&gt;-->
          <!--                  确定并发布-->
          <!--                </button>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--          </div>-->
        </div>
        <!--        <div-->
        <!--          data-v-8af99a28=""-->
        <!--          -->
        <!--          st:block="editorSwitcher"-->
        <!--          class="editor-switcher editor-switcher with-padding"-->
        <!--        >-->
        <!--          <div data-v-8af99a28="" class="toggle-btn">-->
        <!--            <svg-->
        <!--              data-v-8af99a28=""-->
        <!--              width="24"-->
        <!--              height="24"-->
        <!--              viewBox="0 0 24 24"-->
        <!--              fill="none"-->
        <!--              xmlns="http://www.w3.org/2000/svg"-->
        <!--            >-->
        <!--              <path-->
        <!--                data-v-8af99a28=""-->
        <!--                d="M4.7998 9.6001L19.1998 9.6001L15.1998 5.6001"-->
        <!--                stroke="#86909C"-->
        <!--                stroke-width="1.5"-->
        <!--                stroke-linecap="round"-->
        <!--                stroke-linejoin="round"-->
        <!--              ></path>-->
        <!--              <path-->
        <!--                data-v-8af99a28=""-->
        <!--                d="M19.1997 14.3999L4.79971 14.3999L8.79971 18.3999"-->
        <!--                stroke="#86909C"-->
        <!--                stroke-width="1.5"-->
        <!--                stroke-linecap="round"-->
        <!--                stroke-linejoin="round"-->
        <!--              ></path>-->
        <!--            </svg>-->
        <!--          </div>-->
        <!--          <div data-v-8af99a28="" st:name="switchBtn" st:state="richText" class="panel" style="display: none">-->
        <!--            切换为富文本编辑器-->
        <!--          </div>-->
        <!--          &lt;!&ndash;&ndash;&gt;-->
        <!--        </div>-->
        <!--        <nav data-v-93577b52=""  class="navigator main-navigator with-padding">-->
        <!--          <div-->
        <!--            data-v-93577b52=""-->
        <!--            class="toggle-btn"-->
        <!--            style="-->
        <!--              background-image: url('https://sf1-ttcdn-tos.pstatp.com/img/user-avatar/192c653b4d92166d2445dc581db32c2a~300x300.image?imageView2/1/w/64/h/64/q/85/interlace/1');-->
        <!--            "-->
        <!--          ></div>-->
        <!--          <div data-v-93577b52="" class="menu root-menu" style="display: none">-->
        <!--            <div data-v-93577b52="" class="item-group">-->
        <!--              <a data-v-93577b52="" href="/editor/drafts/new?v=2" class="item">写文章</a-->
        <!--              >&lt;!&ndash;&ndash;&gt;<a data-v-93577b52="" href="/editor/drafts?v=2" class="item">草稿</a>-->
        <!--            </div>-->
        <!--            &lt;!&ndash;&ndash;&gt;-->
        <!--            <div data-v-93577b52="" class="item-group">-->
        <!--              <a data-v-93577b52="" href="/user/131597125291368" class="item">我的主页</a-->
        <!--              ><a data-v-93577b52="" href="/user/131597125291368/likes" class="item">我喜欢的</a-->
        <!--              >&lt;!&ndash;&ndash;&gt;<a data-v-93577b52="" href="/user/131597125291368/collections" class="item"> 我的收藏集 </a-->
        <!--              ><a data-v-93577b52="" href="/subscribe/subscribed" class="item">标签管理</a>-->
        <!--            </div>-->
        <!--            <div data-v-93577b52="" class="item-group">-->
        <!--              <a data-v-93577b52="" href="/user/settings/profile" class="item">设置</a-->
        <!--              ><a data-v-93577b52="" class="item">-->
        <!--                关于 <i data-v-93577b52="" class="icon ion-chevron-right"></i>-->
        <!--                <div data-v-93577b52="" class="menu sub-menu">-->
        <!--                  <div data-v-93577b52="" class="item-group">-->
        <!--                    <a data-v-93577b52="" href="/app" target="_blank" class="item">下载应用</a-->
        <!--                    ><a data-v-93577b52="" href="/about" target="_blank" class="item">关于</a-->
        <!--                    ><a data-v-93577b52="" href="https://xitu.io/jobs" target="_blank" class="item"> 加入我们 </a-->
        <!--                    ><a data-v-93577b52="" href="https://github.com/xitu/gold-miner" target="_blank" class="item">-->
        <!--                      翻译计划 </a-->
        <!--                    ><a data-v-93577b52="" href="https://bd.juejin.cn" target="_blank" class="item"> 合作伙伴 </a>-->
        <!--                  </div>-->
        <!--                </div></a-->
        <!--              >-->
        <!--            </div>-->
        <!--          </div>-->
        <!--          <div data-v-e196e394="" data-v-93577b52="" class="article-importer" style="display: none">-->
        <!--            <input data-v-e196e394="" type="file" multiple="multiple" class="file-input" />-->
        <!--            <div data-v-e196e394="" class="text"></div>-->
        <!--          </div>-->
        <!--        </nav>-->
      </div>
    </header>
    <Editor class="main" :value="form.body" :locale="locale" @change="handleChange" />
  </div>
</template>

<script>
import "bytemd/dist/index.min.css";
import { Editor } from "@bytemd/vue";
import locale from "bytemd/lib/locales/zh_Hans.json";
import { create } from "@/api/article";
// import gfm from "@bytemd/plugin-gfm";

// const plugins = [
//   gfm(),
//   // Add more plugins here
// ];

export default {
  name: "Editors",
  components: { Editor },
  data() {
    return {
      locale,
      form: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    handleChange(v) {
      this.form.body = v;
    },
    async handleSubmit() {
      await create({
        author: "martinageradams", // 文章作者
        ...this.form,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 27px;
  height: 5.334rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  z-index: 100;
}

.left-box {
  padding-right: 14px;
  cursor: pointer;
}

.title-input {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  height: 100%;
  margin: 0;
  padding: 0;
  font-size: 24px;
  font-weight: 500;
  color: #1d2129;
  border: none;
  outline: none;
}

.right-box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
}

.with-padding {
  margin-left: 8px;
  margin-right: 8px;
}

.status-text {
  font-size: 14px;
  white-space: nowrap;
  color: #c9cdd4;
  cursor: default;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.xitu-btn {
  height: 32px;
  padding: 2px 16px;
  font-size: 14px;
  line-height: 22px;
  border: 1px solid #1d7dfa;
  border-radius: 2px;
  cursor: pointer;
  color: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #1d7dfa;
}

.with-padding:last-child {
  padding-right: 0;
}

.with-padding {
  margin-left: 8px;
  margin-right: 8px;
}

.navigator {
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.main {
  ::v-deep .bytemd {
    height: calc(100vh - 5.334rem);
    border: 0;
  }
}
</style>

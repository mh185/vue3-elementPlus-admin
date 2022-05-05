<template>
  <div class="content">
    <div class="con">
      <div class="title" @click="changeName()">Element-plus</div>
      <el-form :model="ruleForm" :rules="rules" ref="login">
        <el-form-item prop="username" label-width=" ">
          <el-input
            class="input"
            v-model="ruleForm.username"
            placeholder="username"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password" label-width=" ">
          <el-input
            class="input"
            v-model="ruleForm.password"
            placeholder="password"
          ></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" class="login" @click="addChange"
        >登录</el-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { ref, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import { useStore } from "@/store";
import { setToken } from "@/until/auth";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const preson = reactive({
      ruleForm: {
        username: "admin",
        password: "123456",
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    });
    const login: any = ref(null);
    const addChange = () => {
      login.value.validate((valid: any) => {
        if (valid) {
          store.dispatch("login/userLogin", preson.ruleForm).then((res) => {
            if (res.code === 200) {
              setToken("admin");
              router.push({
                path: "/",
              });
              ElMessage.success(res.msg);
            } else if (res.code === 0) {
              ElMessage.error(res.msg);
            } else if (res.code === 1) {
              ElMessage.error(res.msg);
            }
          });
        } else {
          ElMessage.success("登录失败");
        }
      });
    };
    return {
      ...toRefs(preson),
      addChange,
      login,
    };
  },
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #333;
  .con {
    width: 400px;
    height: 300px;
    padding: 0.25rem;
    border-radius: 20px;
    background: #fff;
    .title {
      text-align: left;
      font-size: 0.25rem;
      margin-bottom: 0.25rem;
      font-weight: bold;
    }
    .login {
      width: 100%;
      margin-top: 0.25rem;
    }
    &:deep(.input) {
      margin-bottom: 0.25rem;
    }
    &:deep(.el-input__inner) {
      background-color: rgba(255, 255, 255, 0.3);
      color: #333;
    }
  }
}
</style>

import { Module } from 'vuex'
import NumFactoryStateTypes from './types'
import RootStateTypes from '../../types'
// Create a new store Modules.
const login: Module<NumFactoryStateTypes, RootStateTypes> = {
    namespaced: true,
    state: {
        username: "admin",
        password: '123456'
    },
    mutations: {},
    actions: {
        userLogin({ state }, ruleForm: any) {
            const { username, password } = ruleForm
            const con: any = {}
            if (state.username === username && state.password === password) {
                con.code = 200;
                con.msg = "登录成功";
            } else if (state.username != username) {
                con.code = 0
                con.msg = "用户不存在";
            } else if (state.password != password) {
                con.code = 1
                con.msg = "密码错误";
            }
            return con
        }
    }
}

export default login

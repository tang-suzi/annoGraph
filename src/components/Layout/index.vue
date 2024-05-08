<template>
    <el-container class="container">
        <el-header class="header">AnnoGraphPro</el-header>
        <el-container>
            <el-aside class="aside">
                <Menu />
            </el-aside>
            <el-main class="main">
                <RouterView />
            </el-main>
        </el-container>
        <el-footer class="footer">footer</el-footer>
    </el-container>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import {
    ElHeader,
    ElContainer,
    ElAside,
    ElMain,
    ElFooter,
} from "element-plus";
import Menu from "../Menu/index.vue"
import "./index.less"
</script>

<style scoped></style>

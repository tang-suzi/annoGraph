<template>
    <el-menu router class="menu-bar">
        <el-sub-menu index="1">
            <template #title>
                <span>Vue 基础</span>
            </template>
            <!-- <el-menu-item-group title="Group One">
                <el-menu-item index="1-1">item one</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group> -->
            <!-- <el-sub-menu index="1-4">
                <template #title>item four</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu> -->
            <el-menu-item index="/vueBasic">Vue</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="pinia">
            <template #title>
                <span>Pinia</span>
            </template>
            <el-menu-item index="/piniaBasic">Pinia基础</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="3">
            <template #title>
                插件
            </template>
            <el-menu-item index="/annoGraph">
                <span>绘图</span>
            </el-menu-item>
        </el-sub-menu>
    </el-menu>
</template>
<script setup lang="ts">
import { ElMenu, ElSubMenu, ElMenuItemGroup, ElMenuItem } from 'element-plus'
import './index.less'
</script>

<template>
    <el-menu class="el-menu">
        <el-sub-menu index="1">
            <template #title>
                <span>Navigator One</span>
            </template>
            <el-menu-item-group title="Group One">
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
                <template #title>item four</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
            <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
            <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
            <span>Navigator Four</span>
        </el-menu-item>
    </el-menu>
</template>
<script setup lang="ts">
import { ElMenu, ElSubMenu, ElIcon, ElMenuItemGroup, ElMenuItem } from 'element-plus'
</script>

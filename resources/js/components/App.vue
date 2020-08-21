<template>
    <div class="container">
        <div class="header">
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <router-link
                        class="nav-link"
                        :class="[{active: $route.name === 'admin.category.index'}]"
                        to="/admin/category"
                    >Index</router-link>
                </li>
                <li class="nav-item">
                    <router-link
                        class="nav-link"
                        :class="[{active: $route.name === 'admin.category.create'}]"
                        to="/admin/category/create"
                    >Create</router-link>
                </li>
                <li class="nav-item">
                    <router-link
                        class="nav-link"
                        :class="[{active: $route.name === 'admin.category.edit'}]"
                        to="/admin/category/edit"
                    >Edit</router-link>
                </li>
            </ul>
        </div>

        <div class="main mt-4">
            <div class="row">
                <div class="col-md-8 offset-2 text-center">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "App",
};
</script>
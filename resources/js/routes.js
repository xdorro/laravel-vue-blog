// Views
import CategoryIndex from "./components/backend/category/CategoryIndex.vue";
import CategoryCreate from "./components/backend/category/CategoryCreate.vue";
import CategoryEdit from "./components/backend/category/CategoryEdit.vue";

export const routes = [
    {
        path: "/admin/category",
        name: "admin.category.index",
        component: CategoryIndex
    },
    {
        path: "/admin/category/create",
        name: "admin.category.create",
        component: CategoryCreate
    },
    {
        path: "/admin/category/edit",
        name: "admin.category.edit",
        component: CategoryEdit
    }
];

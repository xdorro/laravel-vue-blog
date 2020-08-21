<template>
    <div class="categories">
        <div class="loading" v-if="loading">Loading...</div>

        <div v-if="error" class="error">{{ error }}</div>

        <ul v-if="categories">
            <li v-for="{ name, slug, description } in categories" :key="name    ">
                <strong>Name:</strong>
                {{ name }},
                <strong>Slug:</strong>
                {{ slug }},
                <strong>Description:</strong>
                {{ description }}
            </li>
        </ul>
    </div>
</template>
<script>
import axios from "axios";

export default {
    data() {
        return {
            loading: false,
            categories: null,
            error: null,
        };
    },
    created() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            this.error = this.categories = null;
            this.loading = true;
            axios
                .get("/api/categories")
                .then((response) => {
                    console.log(response);
                    this.loading = false;
                    this.categories = response.data;
                })
                .catch((error) => {
                    this.loading = false;
                    this.error = error.response.data.message || error.message;
                });
        },
    },
};
</script>
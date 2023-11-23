<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Vue Routing</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
                <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/form" class="nav-link">Form</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/table" class="nav-link">Table</router-link>
            </li>
        </ul>
    </div>
</nav>
</template>

<script>
export default {
    name: 'TheNavigation',
};
</script>

<style scoped>
a.active {
    background-color: #bbb;
}
</style>

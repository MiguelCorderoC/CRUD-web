<template>
    <nav class="menu">
        <RouterLink to="/">
            <img src="@/assets/logo.png" alt="">
        </RouterLink>
        <ul>
            <span>CRUD</span>
            <br>
            <span>Peliculas y series</span>
        </ul>
    </nav>
</template>

<style scoped>
nav {
    align-items: center;
    background-color: #26355D;
    color: white;
    display: flex;
    justify-content: space-between;
    padding: 10px;
}

nav img {
    width: 80px;
}

nav ul {
    text-align: center;
}

nav ul span {
    font-size: 1.3em;
}
</style>
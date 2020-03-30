<template>
    <footer :class="{dark: settings.dark_mode}">
        <div class="footer">
            <div>
                <span v-html="settings.footer" />
            </div>
            <div>
                <g-link to="/mentions-legales">Mentions légales</g-link>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            settings: require("../../data/theme.json")
        }
    }
}
</script>

<style scoped>
footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
}
.footer {
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
    padding: 1rem 2rem;
}
.footer > div > a{
  text-decoration: none;
}

footer.dark {
  background-color: rgb(39, 39, 41);
}
</style>

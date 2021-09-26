<template>
    <div class="menu-content">
        <a class="
            toggle text-decoration-none center flex 
            hover:bg-green-600 transition duration-200 
            focus-within:text-gray-600
            p-2 h-3/2
            " 
            @click="toggleMenu" v-if="!hideToggle"
        >
            <i class="fa fa-lg" :class="icon"></i>
        </a>
        <h2 class="font-mono text-sm">Web moderno</h2>
    </div>
</template>


<script>
    export default {
        name: 'MenuContent',
        props: {
            hideToggle: Boolean,
        },
        computed: {
            icon() {
                return this.$store.state.isMenuVisible ? "fa-angle-left" : "fa-angle-down"
            }
        },
        methods: {
            toogleMenu() {
                this.$store.commit('toggleMenu')
            }
        }
    }
</script>

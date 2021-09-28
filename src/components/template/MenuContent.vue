<template>
    <div class="menu-content flex flex-col">
        <a class="
            toggle text-decoration-none center flex 
            hover:bg-gray-900 transition duration-200 
            focus-within:text-gray-600
            p-2 h-3/2
            " 
            @click="toggleMenu" v-if="!hideToggle"
        >
            <i class="fa fa-lg mt-2" :class="icon"></i>
            <ul>
                <li class="font-poppins text-xl text-white ml-12">Web Moderno</li>
                <li>CSS</li>
                <li>CSS Grid</li>
            </ul>
        </a>
    </div>
</template>


<script>

    export default {
        name: 'MenuContent',
        components: {},
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

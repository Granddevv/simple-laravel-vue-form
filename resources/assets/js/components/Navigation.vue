<template>
    <nav class="navbar navbar-default navbar-static-top">
        <div class="container">
            <div class="navbar-header">

                <!-- Collapsed Hamburger -->
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
                    <span class="sr-only">Toggle Navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>

                <!-- Branding Image -->
                <router-link class="navbar-brand" to="/">
                    Laravel-vue
                </router-link>
            </div>

            <div class="collapse navbar-collapse" id="app-navbar-collapse">
                <!-- Left Side Of Navbar -->
                <ul class="nav navbar-nav">
                    <li><router-link :to="{ name: 'articles'}">Articles</router-link></li>
                    <li v-if="authorized"><router-link :to="{ name: 'createArticle'}">Create article</router-link></li>
                </ul>

                <!-- Right Side Of Navbar -->
                <ul class="nav navbar-nav navbar-right">

                    <li v-if="!authorized"><router-link :to="{ name: 'login'}">Login</router-link></li>
                    <li v-if="!authorized"><router-link :to="{ name: 'register'}">Register</router-link></li>

                    <li class="dropdown" v-if="authorized">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                            {{ email }} <span class="caret"></span>
                        </a>

                        <ul class="dropdown-menu" role="menu">
                            <li>
                                <a href="" @click.prevent="logout()">
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    import { mapState } from 'vuex'
    import { LOGOUT_MUTATION } from 'store/user/mutations'

    export default {
        computed: mapState({
            authorized: state => state.User.authorized,
            email: state => state.User.email,
        }),
        methods: {
            logout() {
                this.$store.commit('User/' + LOGOUT_MUTATION)
            }
        }
    }
</script>
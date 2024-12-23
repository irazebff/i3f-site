<template>
  <div id="app">
    <AppHeader/>
    <AppHome/>
    <AppFooter/>
    
  </div>
</template>

<script>
import './styles/global.css'

import AppHeader from './components/AppHeader'
import AppHome from './pages/AppHome'
import AppFooter from './components/AppFooter'


export default {
  name: 'App',
  components: {
    AppHeader,
    AppHome,
    AppFooter
    
    
  }
}
</script>


import Vue from 'vue'
import Router from 'vue-router'
import RouterPath from './paths'

Vue.use(Router)

const PATH = new Router({
    mode: 'history',
    routes: RouterPath
})

PATH.beforeEach( (to,from,next)=>{
    next()    
})

export default PATH
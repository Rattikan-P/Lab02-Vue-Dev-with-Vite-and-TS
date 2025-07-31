import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '@/views/EventListView.vue'
import AboutView from '@/views/AboutView.vue'
import EventDetailView from '@/views/event/DetailView.vue'
import EventRegisterView from '@/views/event/RegisterView.vue'
import EventEditView from '@/views/event/EditView.vue'
import EventLayoutView from '@/views/event/LayoutView.vue'
import StudentListView from '../views/StudentListView.vue'
import NotFoundView from '@/views/NotFound.vue'
import NetworkErrorView from '@/views/NetworkErrorView.vue'
import nProgress from 'nprogress'
import EventService from '@/services/EventService'
import { useEventStore } from '@/stores/event'

// ✅ Config nprogress
nProgress.configure({
  showSpinner: true,
  minimum: 0.2,
  speed: 500,
  trickleSpeed: 200
})

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list-view',
      component: EventListView,
      props: (route) => ({
        page: parseInt(route.query.page?.toString() || '1'),
        pageSize: parseInt(route.query.pageSize?.toString() || '2'),
      }),
    },
    {
      path: '/event/:id',
      name: 'event-layout-view',
      component: EventLayoutView,
      props: true,
      beforeEnter: (to) => {
        // put API call here
        const id = parseInt(to.params.id as string)
        const eventStore = useEventStore()
        return EventService.getEvent(id)
        .then((response) => {
          // need to setup the data for the event
          eventStore.setEvent(response.data)
        }).catch ((error) => {
          if (error.response && error.response.status === 404) {
            return {
              name: '404-resource-view',
              params: {resource: 'event'}
            }
          } else {
            return { name: 'network-error-view'}
          }
        })
      },
      children: [
        {
          path: '',
          name: 'event-detail-view',
          component: EventDetailView,
          props: true,
        },
        {
          path: 'register',
          name: 'event-register-view',
          component: EventRegisterView,
          props: true,
        },
        {
          path: 'edit',
          name: 'event-edit-view',
          component: EventEditView,
          props: true,
        },
      ],
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView,
    },
    {
      path: '/404/:resource',
      name: '404-resource-view',
      component: NotFoundView,
      props: true,
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView,
    },
    {
      path: '/network-error',
      name: 'network-error-view',
      component: NetworkErrorView
    },
    {
      path: '/students',
      name: 'student-list',
      component: StudentListView,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0}
    }
  }
})

router.beforeEach((to, from) => {
  console.log(`Route changing: ${from.name} → ${to.name}`)
  console.log('Starting Progress...')
  nProgress.start()
})

router.afterEach((to, from) => {
  console.log(`Route changed: ${from.name} → ${to.name}`)
  console.log('Progress Done!')
  
  setTimeout(() => {
    nProgress.done()
  }, 300)
})

export default router
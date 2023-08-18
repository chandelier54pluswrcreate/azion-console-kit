import { createRouter, createWebHistory } from 'vue-router'
import VariablesView from '@/views/Variables/ListView.vue'
import CreateVariablesView from '@/views/Variables/CreateView.vue'
import * as VariablesService from '@/services/variables-services'
import EdgeApplicationsListView from '@/views/EdgeApplications/ListView.vue'
import DigitalCertificatesView from '@/views/DigitalCertificates/ListView.vue'
import DomainsListView from '@/views/Domains/ListView.vue'
import { listEdgeApplicationsService, deleteEdgeApplicationService } from '@/services/edge-application-services'
import { listDomainsService, deleteDomainService } from '@/services/domains-services'
import { listDigitalCertificatesService,deleteDigitalCertificatesService } from '@/services/digital-certificates'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: EdgeApplicationsListView,
      props: {
        listEdgeApplicationsService: listEdgeApplicationsService,
        deleteEdgeApplicationService: deleteEdgeApplicationService
      },
      meta:{
        breadCrumbs:[
          {
            label:'Edge Applications',
            to:'/edge-applications'
          }
        ]
      }
    },
    {
      path: '/edge-applications',
      name: 'edge-applications',
      component: EdgeApplicationsListView,
      props: {
        listEdgeApplicationsService: listEdgeApplicationsService,
        deleteEdgeApplicationService: deleteEdgeApplicationService
      },
      meta:{
        breadCrumbs:[
          {
            label:'Edge Applications',
            to:'/edge-applications'
          }
        ]
      }
    },
    {
      path: '/domains',
      name: 'domains',
      component: DomainsListView,
      props: {
        listDomainsService: listDomainsService,
        deleteDomainsService: deleteDomainService,
      },
      meta:{
        breadCrumbs:[
          {
            label:'Domains',
            to:'/domains'
          }
        ]
      }
    },
    {
      path: '/digital-certificates',
      name: 'digital-certificates',
      component: DigitalCertificatesView,
      props: {
        listDigitalCertificatesService: listDigitalCertificatesService,
        deleteDigitalCertificatesService:
        deleteDigitalCertificatesService,
      },
      meta:{
        breadCrumbs:[
          {
            label:'Digital Certificates',
            to:'/digital-certificates'
          }
        ]
      }
    },
    {
      path: '/variables',
      name: 'variables',
      children:[
        {
          path:'',
          name:'list-variables',
          component: VariablesView,
          props: {
            listVariablesService: VariablesService.listVariablesService,
            deleteVariablesService:VariablesService.deleteVariablesService
          },
          meta:{
            breadCrumbs:[
              {
                label:'Variables',
                to:'/variables'
              }
            ]
          }
        }
        ,{
          path: 'create',
          name: 'create-variables',
          component: CreateVariablesView,
          props: {
            createVariablesService: VariablesService.createVariablesService
          },
          meta:{
            breadCrumbs:[
              {
                label:'Variables',
                to:'/variables'
              },
              {
                label:'Create Variables',
                to:'/variables/create'
              }
            ]
          }
        }
      ]
    },
    // example of lazy route
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (Home.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/HomeView.vue')
    // }
  ]
})

export default router

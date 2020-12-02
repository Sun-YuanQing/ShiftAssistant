/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const usersCustomer = {
  path: '/',
  redirect: 'projects/projectsAudit',
  component: Layout,
  name: 'usersCustomer',
  meta: {
    title: 'usersCustomer',
    icon: 'table'
  },
  children: [{
      path: 'projects',
      name: 'projects',
      component: () => import('@/views/users-Customer/index'),
      redirect: 'users-Customer/projects/projects_list',
      meta: {
        title: 'projects'
      },
      children: [
        {
          path: 'projectsAudit',
          name: 'projectsAudit',
          component: () => import('@/views/users-Customer/index'),
          meta: {
            title: 'projectsAudit'
          },
          children: [{
              path: 'first',
              component: () => import('@/views/users-Customer/projects-audit/first'),
              name: 'users-Customer/projects-audit/first',
              meta: {
                title: 'first'
              }
            },
            {
              path: 'retry',
              component: () => import('@/views/users-Customer/projects-audit/retry'),
              name: 'users-Customer/projects-audit/retry',
              meta: {
                title: 'retry'
              }
            }
          ]
        },
        {
          path: 'projects_list',
          component: () => import('@/views/users-Customer/projects/projects_list'),
          name: 'projects_list',
          meta: {
            title: 'projects_list'
          }
        },
        {
          path: 'projects_details',
          component: () => import('@/views/users-Customer/projects/projects_details'),
          name: 'projects_details',
          meta: {
            title: 'projects_details'
          }
        },
        {
          path: 'onPricing',
          component: () => import('@/views/users-Customer/projects/projects-OnPricing/onPricing'),
          name: 'users-Customer/projects/projects-OnPricing/onPricing',
          meta: {
            title: 'onPricing'
          }
        },
        {
          path: 'projectsMortgage',
          component: () => import('@/views/users-Customer/projects/projects-OnPricing/projectsMortgage'),
          name: 'users-Customer/projects/projects-OnPricing/projectsMortgage',
          meta: {
            title: 'projectsMortgage'
          }
        },
        {
          path: 'publishCompute',
          component: () => import('@/views/users-Customer/projects/projects-OnPricing/publishCompute'),
          name: 'users-Customer/projects/projects-OnPricing/publishCompute',
          meta: {
            title: 'publishCompute'
          }
        },
        {
          path: 'assetsPublish',
          component: () => import('@/views/users-Customer/projects/projects-OnPricing/assetsPublish'),
          name: 'users-Customer/projects/projects-OnPricing/assetsPublish',
          meta: {
            title: 'assetsPublish'
          }
        }
      ]
    },

    {
      path: 'underwriters',
      name: 'underwriters',
      component: () => import('@/views/users-Customer/index'),
      meta: {
        title: 'underwriters'
      },
      children: [{
          path: 'underwriters_list',
          component: () => import('@/views/users-Customer/underwriters/underwriters_list'),
          name: 'users-Customer/underwriters/underwriters_list',
          meta: {
            title: 'underwriters_list'
          },

        },
        {
          path: 'underwritersDetails',
          component: () => import('@/views/users-Customer/underwriters/underwritersDetails'),
          name: 'underwritersDetails',
          meta: {
            title: 'underwritersDetails'
          }
        }
      ]
    },
    {
      path: 'userTrials',
      name: 'userTrials',
      component: () => import('@/views/users-Customer/index'),
      meta: {
        title: 'userTrials'
      },
      children: [{
          path: 'userTrialsList',
          component: () => import('@/views/users-Customer/userTrials/userTrialsList'),
          name: 'users-Customer/userTrials/userTrialsList',
          meta: {
            title: 'userTrialsList'
          },

        },
        {
          path: 'lawDetails',
          component: () => import('@/views/users-Customer/userTrials/lawDetails'),
          name: 'lawDetails',
          meta: {
            title: 'lawDetails'
          }
        },
        {
          path: 'accDetails',
          component: () => import('@/views/users-Customer/userTrials/accDetails'),
          name: 'accDetails',
          meta: {
            title: 'accDetails'
          }
        },
        {
          path: 'supDetails',
          component: () => import('@/views/users-Customer/userTrials/supDetails'),
          name: 'supDetails',
          meta: {
            title: 'supDetails'
          }
        }
      ]
    },
    {
      path: 'authorizes',
      name: 'authorizes',
      component: () => import('@/views/users-Customer/index'),
      meta: {
        title: 'authorizes'
      },
      children: [{
          path: 'authorizesList',
          component: () => import('@/views/users-Customer/authorizes/authorizesList'),
          name: 'users-Customer/authorizes/authorizesList',
          meta: {
            title: 'authorizesList'
          },

        },
        {
          path: 'authorizesDetails',
          component: () => import('@/views/users-Customer/authorizes/authorizesDetails'),
          name: 'authorizesDetails',
          meta: {
            title: 'authorizesDetails'
          }
        }
      ]
    },
    {
      path: 'userOrdinary',
      name: 'userOrdinary',
      component: () => import('@/views/users-Customer/index'),
      meta: {
        title: 'userOrdinary'
      },
      children: [{
          path: 'userOrdinaryList',
          component: () => import('@/views/users-Customer/userOrdinary/userOrdinaryList'),
          name: 'users-Customer/userOrdinary/userOrdinaryList',
          meta: {
            title: 'userOrdinaryList'
          }
        },
        {
          path: 'userOrdinaryDetails',
          component: () => import('@/views/users-Customer/userOrdinary/userOrdinaryDetails'),
          name: 'userOrdinaryDetails',
          meta: {
            title: 'userOrdinaryDetails'
          }
        }
      ]
    },
  ]
}


export default usersCustomer

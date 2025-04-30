
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './pages/Root'
import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage'
import DetailsPage from './pages/DetailsPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/search',
        element: <SearchPage />,
        loader: async ({ request }) => {
          // console.log(request)
          const { searchParams } = new URL(request.url)
          const term = searchParams.get('term')

          if (!term) {
            throw new Error('search term must be provided')
          }
          // console.log(term)
          const res = await fetch(
            `https://registry.npmjs.org/-/v1/search?text=${term}`
          )

          const data = await res.json()
          return data.objects
        },
      },
      {
        path: '/packages/:name',
        element: <DetailsPage />
      }
    ],

  }
])
function App() {

  return (
    <>
      <RouterProvider router={router}>

      </RouterProvider>

    </>
  )
}

export default App

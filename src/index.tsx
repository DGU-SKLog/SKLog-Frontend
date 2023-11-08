import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routerInfo } from 'constants/routerInfo'
import 'globals.css'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const router = createBrowserRouter(routerInfo)

root.render(<RouterProvider router={router} />)

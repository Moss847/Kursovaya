import { createBrowserRouter } from 'react-router-dom'
import {
    ABOUT_ROUTE,
    CONTACTS_ROUTE,
    PRODUCTS_ROUTE,
    SERVICES_ROUTE,
} from '../constants'
import { BaseLayout } from '../../components/BaseLayout/BaseLayout'
import { AboutPage } from '../../pages/about/about-page'
import { ServicesPage } from '../../pages/services/services-page'
import { ProductsPage } from '../../pages/products/products-page'
import { ContactsPage } from '../../pages/contacts/contacts-page'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <BaseLayout />,
        children: [
            {
                path: '/',
                element: <AboutPage />,
            },
            {
                path: ABOUT_ROUTE,
                element: <AboutPage />,
            },
            {
                path: SERVICES_ROUTE,
                element: <ServicesPage />,
            },
            {
                path: PRODUCTS_ROUTE,
                element: <ProductsPage />,
            },
            {
                path: CONTACTS_ROUTE,
                element: <ContactsPage />,
            },
        ],
    },
])

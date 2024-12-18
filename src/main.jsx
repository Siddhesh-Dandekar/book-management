import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import About from './components/about.jsx';
import Contact from './components/contact.jsx';
import Error from './components/error.jsx';
import Booklist from './components/booklist.jsx';
import Bookdetails from './components/bookdetails.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
            {
                path: "/",
                element: <Booklist />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: '/book/:id',
                element: <Bookdetails/>
            }
        ],
        errorElement: <Error />
    }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={appRouter} />
)

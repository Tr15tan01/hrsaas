import * as React from 'react'
import { Link } from 'react-router-dom'


const NavigationComponent = () => {
    return (
        <nav>
            <Link
                variant="button"
                color="text.primary"
                href="/"
                sx={{ my: 1, mx: 1.5 }}
            >
                Homepage
            </Link>
            <Link
                variant="button"
                color="text.primary"
                href="#"
                sx={{ my: 1, mx: 1.5 }}
            >
                Features
            </Link>
            <Link
                variant="button"
                color="text.primary"
                href="#"
                sx={{ my: 1, mx: 1.5 }}
            >
                Enterprise
            </Link>
            <Link
                variant="button"
                color="text.primary"
                href="#"
                sx={{ my: 1, mx: 1.5 }}
            >
                Support
            </Link>
        </nav>
    )
}

export default NavigationComponent;
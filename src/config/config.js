const currency = '$';

export const config = {
    themesDefaultConfig: [
        {
            name: 'Folio',
            description: 'Creative Agencey Portfolio Theme',
            category: 'Landing & Corporate',
            rating: 5,
            image_path: 'folio0',
            currency: currency,
            price: 59.00,
            showPrevBtn: false,
            added_at: '2021-02-18T23:47:54Z',
            visible: true,
            totalSold: 5
        },
        {
            name: 'AppStack',
            description: 'Admin & Dashboard Template (Dark/Light)',
            category: 'Admin & Dashboard',
            rating: 4.5,
            image_path: 'appstack0',
            currency: currency,
            price: 49.00,
            showPrevBtn: false,
            added_at: '2021-02-16T23:47:54Z',
            visible: true,
            totalSold: 3
        },
        {
            name: 'Front',
            description: 'Multipurpose Responsive Template',
            category: 'Landing & Corporate',
            rating: 5,
            image_path: 'front0',
            currency: currency,
            price: 49.00,
            showPrevBtn: false,
            added_at: '2021-02-15T23:47:54Z',
            visible: true,
            totalSold: 23
        },
        {
            name: 'Hyper',
            description: 'Admin & Dashboard Template (Dark/Light)',
            category: 'Admin & Dashboard',
            rating: 5,
            image_path: 'hyper0',
            currency: currency,
            price: 49.00,
            showPrevBtn: false,
            added_at: '2021-02-14T23:47:54Z',
            visible: true,
            totalSold: 25
        },
        {
            name: 'Cube',
            description: 'Multipurpose Template + UI Kit',
            category: 'Landing & Corporate',
            rating: 4,
            image_path: 'cube0',
            currency: currency,
            price: 49.00,
            showPrevBtn: false,
            added_at: '2021-02-17T23:47:54Z',
            visible: true,
            totalSold: 15
        },
        {
            name: 'Landkit',
            description: 'Landkit – Multipurpose Template + UI Kit',
            category: 'Landing & Corporate',
            rating: 5,
            image_path: 'landkit0',
            currency: currency,
            price: 49.00,
            showPrevBtn: false,
            added_at: '2021-02-13T23:47:54Z',
            visible: true,
            totalSold: 32
        },
        {
            name: 'Dashkit',
            description: 'Admin & Dashboard Template (Dark/Light)',
            category: 'Admin & Dashboard',
            rating: 5,
            image_path: 'dashkit0',
            currency: currency,
            price: 49.00,
            showPrevBtn: false,
            added_at: '2021-02-12T23:47:54Z',
            visible: true,
            totalSold: 34
        },
        {
            name: 'Keen',
            description: 'Multi Demo Bootstrap Admin Dashboard Theme',
            category: 'Admin & Dashboard',
            rating: 4.5,
            image_path: 'keen0',
            currency: currency,
            price: 49.00,
            showPrevBtn: false,
            added_at: '2021-02-11T23:47:54Z',
            visible: true,
            totalSold: 25
        },
        {
            name: 'Cartzilla',
            description: 'Multipurpose eCommerce Template',
            category: 'E-Commerce & Retail',
            rating: 5,
            image_path: 'cartzilla0',
            currency: currency,
            price: 49.00,
            showPrevBtn: false,
            added_at: '2021-02-10T23:47:54Z',
            visible: true,
            totalSold: 21
        },
        {
            name: 'Front',
            description: 'Admin & Dashboard Template',
            category: 'Admin & Dashboard',
            rating: 5,
            image_path: 'front1',
            currency: currency,
            price: 49.00,
            showPrevBtn: false,
            added_at: '2021-02-09T23:47:54Z',
            visible: true,
            totalSold: 22
        },
        {
            name: 'Falcon',
            description: 'Admin Dashboard & WebApp Template',
            category: 'Admin & Dashboard',
            rating: 4.5,
            image_path: 'falcon0',
            currency: currency,
            price: 49.00,
            showPrevBtn: false,
            added_at: '2021-02-08T23:47:54Z',
            visible: true,
            totalSold: 26
        },
        {
            name: 'Falcon',
            description: 'Admin Dashboard & WebApp Template [React]',
            category: 'Admin & Dashboard',
            rating: 5,
            image_path: 'falcon1',
            currency: currency,
            price: 49.00,
            showPrevBtn: false,
            added_at: '2021-02-07T23:47:54Z',
            visible: true,
            totalSold: 29
        }
    ],
    categories: [ 
        {
            value: 'admin-and-dashboard',
            displayText: 'Admin & Dashboard'
        },
        {
            value: 'landing-and-corporate',
            displayText: 'Landing & Corporate'
        },
        {
            value: 'application',
            displayText: 'Application'
        },
        {
            value: 'ecommerce-and-retail',
            displayText: 'E-Commerce & Retail'
        },
        {
            value: 'portfolio-and-blog',
            displayText: 'Portfolio & Blog'
        },
        {
            value: 'speciality',
            displayText: 'Speciality'
        }
    ],
    footerLinks: [
        {
            value: 'help',
            displayText: 'Help Center'
        },
        {
            value: 'terms',
            displayText: 'Terms of Service'
        },
        {
            value: 'licenses',
            displayText: 'Licenses'
        },
        {
            value: 'sell',
            displayText: 'Sell Themes'
        }
    ],
    themeHolders: [
        {
            type: 'Latest',
            description: "Most recently added to our collection.",
            showViewAll: true,
            themeState: "latestThemes"
        },
        {
            type: 'Popular',
            description: "Top-sellers in the past week!",
            showViewAll: false,
            themeState: "popularThemes"
        }
    ],
    banner: {
        title: "Build anything",
        subTitle: "Themes built by or reviewed by Bootstrap's creators.",
        bannerLink: {
            displayText: "Why our themes?",
            link: "official-themes"
        } 
    }
};
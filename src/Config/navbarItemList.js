import {
  LoginIcon,
  IdentificationIcon,
  UserIcon,
  ClipboardListIcon,
  HeartIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline'

const NAVIGATION = [
  {
    id: 1,
    name: "Login",
    link: "/",
    icon: <LoginIcon className="mr-2 my-auto h-5 w-5" aria-hidden="true" />,
    underlined: false,
  },
  {
    id: 2,
    name: "Sign Up",
    link: "/",
    icon: (
      <IdentificationIcon
        className="mr-2 my-auto h-5 w-5"
        aria-hidden="true"
      />
    ),
    underlined: true,
  },
  {
    id: 4,
    name: "Cart",
    link: "/cart",
    icon: (
      <ShoppingCartIcon className="mr-2 my-auto h-5 w-5" aria-hidden="true" />
    ),
    underlined: false,
  },
  
  {
    id: 6,
    name: "Favorites",
    link: "/favorites",
    icon: <HeartIcon className="mr-2 my-auto h-5 w-5" aria-hidden="true" />,
    underlined: true,
  },
]

export default NAVIGATION
// Modules Import
import { IconType } from 'react-icons'
import Link from 'next/link'
import cs from 'clsx'

// Application Import
import { NavItemState } from '@typings/index'

interface NavItemProps {
  Icon: IconType
  pathname: string
  state: NavItemState
}

export const NavItem: React.FC<NavItemProps> = ({ Icon, pathname, state }) => {
  return (
    <li
      className={cs('nav-item', {
        active: state === NavItemState.active,
      })}
    >
      <Link href={pathname}>
        <a>
          <Icon className="nav-item-icon" />
        </a>
      </Link>
    </li>
  )
}

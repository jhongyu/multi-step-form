'use client'

import { css } from '@styles/css'
import { usePathname } from 'next/navigation'

const steps = [{
  value: 1,
  route: '/info',
  title: 'YOUR INFO',
}, {
  value: 2,
  route: '/plan',
  title: 'SELECT PLAN',
}, {
  value: 3,
  route: '/add-on',
  title: 'ADD-ONS',
}, {
  value: 4,
  route: '/finish',
  title: 'SUMMARY',
}]

const sectionDesktopStyles = css.raw({
  backgroundImage: 'url(../../public/background-desktop.svg)',
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  gap: '8',
  borderRadius: 'xl',
  paddingInlineStart: '32px',
  paddingBlockStart: '40px',
})

const sectionBaseStyles = css.raw({
  backgroundImage: 'url(../../public/background.svg)',
  backgroundSize: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '4',
  paddingBlockStart: '32px',
})

export default function Steps() {
  const currentPathname = usePathname()

  return (
    <div className={css({
      width: '100%',
      height: '100%',
      backgroundRepeat: 'no-repeat',
      base: sectionBaseStyles,
      md: sectionDesktopStyles,
    })}
    >
      {
        steps.map(({ value, route, title }) => (
          <div
            key={value}
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '4',
            })}
          >
            <span
              className={css({
                width: '2em',
                height: '2em',
                borderRadius: 'full',
                border: currentPathname === route ? 'none' : '1px solid white',
                display: 'grid',
                placeContent: 'center',
                color: currentPathname === route ? 'denim' : 'white',
                backgroundColor: currentPathname === route ? 'skyBlue' : 'transparent',
              })}
            >
              {value}
            </span>
            <div className={css({
              hideBelow: 'md',
              display: 'flex',
              flexDirection: 'column',
            })}
            >
              <span className={css({
                fontSize: 'xs',
                color: 'lightBlue',
              })}
              >
                Step
                {value}
              </span>
              <span className={css({
                fontSize: 'sm',
                fontWeight: 'bold',
                color: 'white',
              })}
              >
                {title}
              </span>
            </div>
          </div>
        ))
      }
    </div>
  )
}

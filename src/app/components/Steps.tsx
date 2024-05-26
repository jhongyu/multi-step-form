'use client'

import { css } from '@styles/css'
import { usePathname } from 'next/navigation'

const steps = [{
  value: 1,
  route: '/info',
}, {
  value: 2,
  route: '/plan',
}, {
  value: 3,
  route: 'add-on',
}, {
  value: 4,
  route: 'finish',
}]

export default function Steps() {
  const currentPathname = usePathname()

  return (
    <section className={css({
      marginBlock: '32px',
      display: 'flex',
      justifyContent: 'center',
      gap: '16px',
    })}
    >
      {
        steps.map(({ value, route }) => (
          <span
            key={value}
            className={css({
              width: '2em',
              height: '2em',
              borderRadius: '50%',
              border: currentPathname === route ? 'none' : '1px solid white',
              display: 'grid',
              placeContent: 'center',
              color: currentPathname === route ? '#022959' : 'white',
              backgroundColor: currentPathname === route ? '#BEE2FD' : 'transparent',
            })}
          >
            {value}
          </span>
        ))
      }
    </section>
  )
}

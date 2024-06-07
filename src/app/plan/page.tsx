'use client'

import { css } from '@styles/css'
import Link from 'next/link'
import Plans from '@/app/plan/components/Plans'
import Steps from '@/app/info/components/Steps'

export default function Plan() {
  return (
    <div className={
      css({
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
        md: {
          width: '100%',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'max(20%, 250px) 1fr',
          columnGap: '10%',
        },
      })
    }
    >
      <div className={css({
        width: '100%',
        mdDown: {
          height: '172px',
        },
        md: {
          gridArea: '1/1/3/2',
        },
      })}
      >
        <Steps />
      </div>
      <div className={css({
        backgroundColor: 'white',
        mdDown: {
          marginInline: '4',
          marginBlockStart: '-80px',
          borderRadius: 'xl',
          padding: '32px 24px',
        },
      })}
      >
        <p className={css({
          color: 'denim',
          fontSize: '2xl',
          fontWeight: 'bold',
          md: {
            fontSize: '2rem',
          },
        })}
        >
          Select your plan
        </p>
        <p className={
          css({
            color: 'gray',
          })
        }
        >
          You have the option of monthly or yearly billing
        </p>
        <div className={css({
          marginBlockStart: '6',
          md: {
            marginBlockStart: '8',
          },
        })}
        >
          <Plans />
        </div>
      </div>
      <div className={css({
        width: '100%',
        marginBlockStart: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mdDown: {
          backgroundColor: 'white',
          height: '72px',
          padding: '16px',
        },
        md: {
          marginBlockEnd: '4',
        },
      })}
      >
        <Link
          href="/info"
          className={css({
            fontSize: 'sm',
            fontWeight: 'medium',
            color: 'gray',
            _hover: {
              color: 'denim',
            },
          })}
        >
          Go Back
        </Link>
        <button
          type="button"
          className={css({
            'backgroundColor': 'denim',
            'color': 'white',
            'padding': '12px 16px',
            'fontWeight': 'medium',
            'display': 'grid',
            'placeContent': 'center',
            'borderRadius': 'sm',
            'cursor': 'pointer',
            'mdDown': {
              fontSize: 'sm',
            },
            '&:hover': {
              backgroundColor: 'blue',
            },
          })}
        >
          Next Step
        </button>
      </div>
    </div>
  )
}

import * as RadioGroup from '@radix-ui/react-radio-group'
import * as Switch from '@radix-ui/react-switch'
import { css } from '@styles/css'
import Image from 'next/image'
import { useState } from 'react'

const planStyles = css({
  'flexBasis': '100%',
  'minHeight': '100px',
  'border': '1px solid {colors.lightGray}',
  'borderRadius': 'lg',
  'display': 'flex',
  'padding': '4',
  'gap': '3.5',
  '&:has(button[data-state=checked])': {
    borderColor: 'purple',
    backgroundColor: 'lighterGray',
  },
  '_hover': {
    borderColor: 'purple',
  },
  'md': {
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '160px',
  },
})

const radioItemStyles = css({
  _focusVisible: {
    outline: '0px',
  },
})

const labelStyles = css({
  flexGrow: '1',
  display: 'flex',
  flexDirection: 'column',
})

const labelTitleStyles = css({
  fontWeight: 'medium',
  color: 'denim',
})

const labelTextStyles = css({
  fontSize: 'sm',
  color: 'gray',
})

const labelTipStyles = css({
  fontSize: 'xs',
  color: 'denim',
})

export default function Plans() {
  const [billingOption, setBillingOption] = useState<'monthly' | 'yearly'>('monthly')
  const yearlyBilling = billingOption === 'yearly'

  function handleBillingOption(checked: boolean) {
    if (checked) {
      setBillingOption('yearly')
    }
    else {
      setBillingOption('monthly')
    }
  }

  return (
    <>
      <RadioGroup.Root
        defaultValue="arcade"
        className={css({
          display: 'flex',
          flexDirection: 'column',
          gap: '3',
          md: {
            flexDirection: 'row',
          },
        })}
      >
        <div className={planStyles}>
          <RadioGroup.Item id="arcade" value="arcade" className={radioItemStyles}>
            <Image src="/arcade.svg" alt="" width={40} height={40} />
          </RadioGroup.Item>
          <label
            htmlFor="arcade"
            className={labelStyles}
          >
            <span className={labelTitleStyles}>Arcade</span>
            <span className={labelTextStyles}>
              $9
              {yearlyBilling ? '0/yr' : '/mo'}
            </span>
            {yearlyBilling && <span className={labelTipStyles}>2 months free</span>}
          </label>
        </div>
        <div className={planStyles}>
          <RadioGroup.Item id="advanced" value="advanced" className={radioItemStyles}>
            <Image src="/advanced.svg" alt="" width={40} height={40} />
          </RadioGroup.Item>
          <label htmlFor="advanced" className={labelStyles}>
            <span className={labelTitleStyles}>Advanced</span>
            <span className={labelTextStyles}>
              $12
              {yearlyBilling ? '0/yr' : '/mo'}
            </span>
            {yearlyBilling && <span className={labelTipStyles}>2 months free</span>}
          </label>
        </div>
        <div className={planStyles}>
          <RadioGroup.Item id="pro" value="pro" className={radioItemStyles}>
            <Image src="/pro.svg" alt="" width={40} height={40} />
          </RadioGroup.Item>
          <label htmlFor="pro" className={labelStyles}>
            <span className={labelTitleStyles}>Pro</span>
            <span className={labelTextStyles}>
              $15
              {yearlyBilling ? '0/yr' : '/mo'}
            </span>
            {yearlyBilling && <span className={labelTipStyles}>2 months free</span>}
          </label>
        </div>
      </RadioGroup.Root>
      <div className={css({
        marginBlockStart: '6',
        backgroundColor: 'lighterGray',
        paddingBlock: '16px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 'lg',
        gap: '6',
        md: {
          marginBlockStart: '8',
        },
      })}
      >
        <span>Monthly</span>
        <Switch.Root
          className={css({
            width: '10',
            height: '5',
            backgroundColor: 'denim',
            borderRadius: 'xl',
            position: 'relative',
            cursor: 'pointer',
          })}
          onCheckedChange={handleBillingOption}
        >
          <Switch.Thumb className={css({
            'display': 'block',
            'width': '3',
            'height': '3',
            'borderRadius': 'full',
            'backgroundColor': 'white',
            'transform': 'translateX({spacing.1})',
            'transition': 'transform 200ms',
            'willChange': 'transform',

            '&[data-state=checked]': {
              transform: 'translateX({spacing.6})',
            },
          })}
          />
        </Switch.Root>
        <span>Yearly</span>
      </div>
    </>
  )
}

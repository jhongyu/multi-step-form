'use client'

import { css } from '@styles/css'
import { useForm } from 'react-hook-form'
import Steps from './components/Steps'

type FieldName = 'name' | 'email' | 'tel'

interface Field {
  label: string
  type: string
  id: string
  name: FieldName
  placeHolder: string
}

const fields: Field[] = [
  {
    label: 'Name',
    type: 'text',
    id: 'name',
    name: 'name',
    placeHolder: 'e.g. Stephen King',
  },
  {
    label: 'Email Address',
    type: 'email',
    id: 'email',
    name: 'email',
    placeHolder: 'e.g. stephenking@lorem.com',
  },
  {
    label: 'Phone Number',
    type: 'tel',
    id: 'tel',
    name: 'tel',
    placeHolder: 'e.g. +1 234 567 890',
  },
]

type Inputs = {
  [key in FieldName]: string
}

export default function Info() {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    mode: 'onBlur',
  })

  return (
    <div className={css({
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
    })}
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
          Personal Info
        </p>
        <p className={
          css({
            color: 'gray',
          })
        }
        >
          Please provide your name, email address, and phone number.
        </p>
        <form className={css({
          display: 'flex',
          flexDirection: 'column',
          marginBlockStart: '5',
          md: {
            gap: '6',
            marginBlockStart: '10',
          },
        })}
        >
          {
            fields.map(({ label, type, id, name, placeHolder }) => (
              <div
                key={id}
                className={css({
                  display: 'grid',
                  gridTemplateRows: '{spacing.6} 1fr {spacing.6}',
                  gridTemplateAreas: `
                    "label"
                    "input"
                    "error"
                  `,
                  alignItems: 'center',
                  md: {
                    gridTemplateColumns: '1fr auto',
                    gridTemplateRows: '{spacing.6} 1fr',
                    gridTemplateAreas: `
                      "label error"
                      "input input"
                    `,
                  },
                })}
              >
                <label
                  htmlFor={id}
                  className={css({
                    color: 'denim',
                    fontSize: 'xs',
                    md: {
                      fontSize: 'sm',
                      fontWeight: 'bold',
                    },
                    gridArea: 'label',
                  })}
                >
                  {label}
                </label>
                {errors[name]?.type === 'required' && (
                  <p
                    role="alert"
                    className={
                    css({
                      gridArea: 'error',
                      fontSize: 'xs',
                      fontWeight: 'bold',
                      color: 'red',
                      md: {
                        fontSize: 'sm',
                      },
                    })
                  }
                  >
                    {errors[name]?.message}
                  </p>
                )}
                <input
                  className={css({
                    'border': '1px solid {colors.border}',
                    'borderRadius': 'sm',
                    'padding': '12px 0 12px 16px',
                    'color': 'gray',
                    'fontWeight': 'medium',
                    'outline': '0px',
                    'gridArea': 'input',
                    'md': {
                      borderRadius: 'lg',
                    },
                    '&:focus-visible:not([data-error=true])': {
                      border: '1px solid {colors.purple}',
                    },
                    '&[data-error=true]': {
                      border: '1px solid {colors.red}',
                    },
                  })}
                  data-error={!!errors[name]}
                  aria-invalid={errors[name] ? 'true' : 'false'}
                  type={type}
                  id={id}
                  placeholder={placeHolder}
                  {...register(name, { required: 'This field is required' })}
                />
              </div>
            ))
          }
        </form>
      </div>
      <div className={css({
        width: '100%',
        marginTop: 'auto',
        display: 'flex',
        justifyContent: 'flex-end',
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
          onClick={handleSubmit(() => {})}
        >
          Next Step
        </button>
      </div>
    </div>
  )
}

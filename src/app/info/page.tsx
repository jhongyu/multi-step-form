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
          marginInline: '16px',
          marginBlockStart: '-80px',
          borderRadius: '10px',
          padding: '32px 24px',
        },
      })}
      >
        <p className={css({
          color: '#022959',
          fontSize: 'calc(24 / 16 * 1rem)',
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
            color: '#9699AA',
            lineHeight: 'calc(25 / 16)',
          })
        }
        >
          Please provide your name, email address, and phone number.
        </p>
        <form className={css({
          display: 'flex',
          flexDirection: 'column',
          marginBlockStart: '20px',
          md: {
            gap: '24px',
            marginBlockStart: '40px',
          },
        })}
        >
          {
            fields.map(({ label, type, id, name, placeHolder }) => (
              <div
                key={id}
                className={css({
                  display: 'grid',
                  gridTemplateRows: '24px 1fr 24px',
                  gridTemplateAreas: `
                    "label"
                    "input"
                    "error"
                  `,
                  alignItems: 'center',
                  md: {
                    gridTemplateColumns: '1fr auto',
                    gridTemplateRows: '25px 1fr',
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
                    color: '#022959',
                    fontSize: 'calc(12 / 16 * 1rem)',
                    md: {
                      fontSize: 'calc(14 / 16 * 1rem)',
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
                      fontSize: 'calc(12rem / 16)',
                      fontWeight: 'bold',
                      color: '#EE374A',
                      md: {
                        fontSize: 'calc(14 / 16 * 1rem)',
                      },
                    })
                  }
                  >
                    {errors[name]?.message}
                  </p>
                )}
                <input
                  className={css({
                    'border': '1px solid #D6D9E6',
                    'borderRadius': '4px',
                    'padding': '12px 0 12px 16px',
                    'color': '#9699AA',
                    'fontWeight': 'medium',
                    'outline': '0px',
                    'gridArea': 'input',
                    'md': {
                      borderRadius: '8px',
                    },
                    '&:focus-visible:not([data-error=true])': {
                      border: '1px solid #483EFF',
                    },
                    '&[data-error=true]': {
                      border: '1px solid #EE374A',
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
          marginBlockEnd: '16px',
        },
      })}
      >
        <button
          type="button"
          className={css({
            'backgroundColor': '#022959',
            'color': 'white',
            'padding': '12px 16px',
            'fontWeight': 'medium',
            'display': 'grid',
            'placeContent': 'center',
            'borderRadius': '4px',
            'cursor': 'pointer',
            'mdDown': {
              fontSize: 'calc(14 / 16 * 1rem)',
            },
            '&:hover': {
              backgroundColor: '#164A8A',
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

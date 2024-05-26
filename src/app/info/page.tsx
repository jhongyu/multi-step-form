import { css } from '@styles/css'

const inputs = [
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

export default function Info() {
  return (
    <>
      <div className={css({
        marginInline: '16px',
        backgroundColor: 'white',
        borderRadius: '10px',
        padding: '32px 24px',
      })}
      >
        <p className={css({
          color: '#022959',
          fontSize: 'calc(24 / 16 * 1rem)',
          fontWeight: 'bold',
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
          gap: '16px',
          marginBlockStart: '20px',
        })}
        >
          {
              inputs.map(({ label, type, id, name, placeHolder }) => (
                <div
                  key={id}
                  className={css({
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2px',
                  })}
                >
                  <label
                    htmlFor={id}
                    className={css({
                      color: '#022959',
                      fontSize: 'calc(12 / 15 * 1rem)',
                    })}
                  >
                    {label}
                  </label>
                  <input
                    className={css({
                      border: '1px solid #D6D9E6',
                      borderRadius: '4px',
                      padding: '12px 0 12px 16px',
                      color: '#9699AA',
                      fontWeight: 'medium',
                    })}
                    type={type}
                    name={name}
                    id={id}
                    placeholder={placeHolder}
                  />
                </div>
              ))
            }
        </form>
      </div>
      <div className={css({
        backgroundColor: 'white',
        width: '100%',
        height: '72px',
        marginTop: 'auto',
        display: 'flex',
        padding: '16px',
        justifyContent: 'flex-end',
      })}
      >
        <button
          type="button"
          className={css({
            backgroundColor: '#022959',
            color: 'white',
            padding: '12px 16px',
            fontSize: 'calc(14 / 16 * 1rem)',
            fontWeight: 'medium',
            display: 'grid',
            placeContent: 'center',
          })}
        >
          Next Step
        </button>
      </div>
    </>
  )
}

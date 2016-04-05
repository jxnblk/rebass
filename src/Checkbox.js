
import React from 'react'
import classnames from 'classnames'
import Base from './Base'
import Label from './Label'
import config from './config'
import mergeClassName from './util/mergeClassName'

/**
 * Checkbox input with label
 */

const Checkbox = ({
  label,
  name,
  checked,
  children,
  backgroundColor,
  theme,
  inverted,
  rounded,
  ...props
}, { rebass }) => {
  const { scale, colors, borderRadius } = { ...config, ...rebass }

  const invalid = props['aria-invalid'] || props.invalid

  const baseProps = {
    backgroundColor,
    theme,
    inverted,
    rounded
  }

  const sx = {
    root: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      paddingBottom: scale[1],
      color: invalid ? colors.error : null,
      cursor: 'pointer'
    },
    input: {
      position: 'absolute',
      zIndex: -1,
      opacity: 0
    },
    box: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: scale[2],
      height: scale[2],
      backgroundColor: checked ? 'currentcolor' : 'transparent',
      borderRadius,
      borderStyle: 'solid',
      borderWidth: 2,
      borderColor: checked ? null : colors.gray,
      transition: 'background-color .1s ease-out'
    },
    icon: {
      display: checked ? null : 'none',
      width: '75%',
      height: '75%',
      marginTop: 1,
      fill: colors.white
    }
  }

  const cx = classnames('Checkbox', {
    'isInvalid': invalid,
    'isDisabled': props.disabled,
    'isReadonly': props.readOnly
  })

  return (
    <Base
      {...props}
      tagName={Label}
      className={mergeClassName(props, cx)}
      baseStyle={sx.root}>
      <input
        {...props}
        name={name}
        type='checkbox'
        checked={checked}
        style={sx.input} />
      <Base
        {...props}
        {...baseProps}
        className='Checkbox_box'
        m={0}
        ml={0}
        mr={1}
        my={0}
        p={0}
        px={0}
        py={0}
        baseStyle={sx.box}>
        <svg
          viewBox='0 0 32 32'
          style={sx.icon}>
          <path d='M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z' />
        </svg>
      </Base>
      {label}
    </Base>
  )
}

Checkbox.propTypes = {
  /** Label for form element */
  label: React.PropTypes.string.isRequired,
  /** Name attribute for form element */
  name: React.PropTypes.string.isRequired
}

export default Checkbox


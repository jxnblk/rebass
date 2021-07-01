import React, { forwardRef } from 'react'
import { Box, Flex } from 'reflexbox'
import { props as systemProps } from '@styled-system/should-forward-prop'

const rebassProps = [
  ...systemProps,
  'sx',
  'variant',
]

const PRE = new RegExp(`^(${rebassProps.join('|')})$`)
const MRE = /^m[trblxy]?$/

const getProps = (test) => (props) => {
  const next = {}
  for (const key in props) {
    if (test(key || '')) next[key] = props[key]
  }
  return next
}

const getSystemProps = getProps(k => PRE.test(k))
const getMarginProps = getProps(k => MRE.test(k))
const omitMarginProps = getProps(k => !MRE.test(k))

const SVG = ({ size = 24, ...props }) =>
  <Box
    as='svg'
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill='currentcolor'
    {...props}
  />

export const Label = forwardRef((props, ref) =>
  <Flex
    ref={ref}
    as='label'
    tx='forms'
    variant='label'
    {...props}
    __css={{
      width: '100%',
    }}
  />
)

export const Input = forwardRef((props, ref) =>
  <Box
    ref={ref}
    as='input'
    type='text'
    tx='forms'
    variant='input'
    {...props}
    __css={{
      display: 'block',
      width: '100%',
      p: 2,
      appearance: 'none',
      fontSize: 'inherit',
      lineHeight: 'inherit',
      border: '1px solid',
      borderRadius: 'default',
      color: 'inherit',
      bg: 'transparent',
    }}
  />
)

const DownArrow = props =>
  <SVG {...props}>
    <path d="M7 10l5 5 5-5z" />
  </SVG>

export const Select = forwardRef((props, ref) =>
  <Flex {...getMarginProps(props)}>
    <Box
      ref={ref}
      as='select'
      tx='forms'
      variant='select'
      {...omitMarginProps(props)}
      __css={{
        display: 'block',
        width: '100%',
        p: 2,
        appearance: 'none',
        fontSize: 'inherit',
        lineHeight: 'inherit',
        border: '1px solid',
        borderRadius: 'default',
        color: 'inherit',
        bg: 'transparent',
      }}
    />
    <DownArrow
      sx={{
        ml: -28,
        alignSelf: 'center',
        pointerEvents: 'none',
      }}
    />
  </Flex>
)

export const Textarea = forwardRef((props, ref) =>
  <Box
    ref={ref}
    as='textarea'
    tx='forms'
    variant='textarea'
    {...props}
    __css={{
      display: 'block',
      width: '100%',
      p: 2,
      appearance: 'none',
      fontSize: 'inherit',
      lineHeight: 'inherit',
      border: '1px solid',
      borderRadius: 'default',
      color: 'inherit',
      bg: 'transparent',
    }}
  />
)

const RadioChecked = props =>
  <SVG {...props}>
    <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
  </SVG>

const RadioUnchecked = props =>
  <SVG {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
  </SVG>

const RadioIcon = props =>
  <>
    <RadioChecked
      {...props}
      __css={{
        display: 'none',
        'input:checked ~ &': {
          display: 'block',
        }
      }}
    />
    <RadioUnchecked
      {...props}
      __css={{
        display: 'block',
        'input:checked ~ &': {
          display: 'none',
        }
      }}
    />
  </>

export const Radio = forwardRef(({
  className,
  sx,
  variant = 'radio',
  ...props
}, ref) => (
  <Box>
    <Box
      ref={ref}
      as='input'
      type='radio'
      {...props}
      sx={{
        position: 'absolute',
        opacity: 0,
        zIndex: -1,
        width: 1,
        height: 1,
        overflow: 'hidden',
      }}
    />
    <Box
      as={RadioIcon}
      aria-hidden='true'
      tx='forms'
      variant={variant}
      className={className}
      sx={sx}
      {...getSystemProps(props)}
      __css={{
        mr: 2,
        borderRadius: 9999,
        color: 'gray',
        'input:checked ~ &': {
          color: 'primary',
        },
        'input:focus ~ &': {
          bg: 'highlight',
        }
      }}
    />
  </Box>
))

const CheckboxChecked = props =>
  <SVG {...props}>
    <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </SVG>

const CheckboxUnchecked = props =>
  <SVG {...props}>
    <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
  </SVG>

const CheckboxIcon = props =>
  <>
    <CheckboxChecked
      {...props}
      __css={{
        display: 'none',
        'input:checked ~ &': {
          display: 'block',
        }
      }}
    />
    <CheckboxUnchecked
      {...props}
      __css={{
        display: 'block',
        'input:checked ~ &': {
          display: 'none',
        }
      }}
    />
  </>

export const Checkbox= forwardRef(({
  className,
  sx,
  variant = 'checkbox',
  ...props
}, ref) =>
  <Box>
    <Box
      ref={ref}
      as='input'
      type='checkbox'
      {...props}
      sx={{
        position: 'fixed',
        opacity: 0,
        zIndex: -1,
        width: 1,
        height: 1,
        overflow: 'hidden',
      }}
    />
    <Box
      as={CheckboxIcon}
      aria-hidden='true'
      tx='forms'
      variant={variant}
      className={className}
      sx={sx}
      {...getSystemProps(props)}
      __css={{
        mr: 2,
        borderRadius: 4,
        color: 'gray',
        'input:checked ~ &': {
          color: 'primary',
        },
        'input:focus ~ &': {
          color: 'primary',
          bg: 'highlight',
        },
      }}
    />
  </Box>
)

export const Slider = forwardRef(({
  ...props
}, ref) =>
  <Box
    ref={ref}
    as='input'
    type='range'
    tx='forms'
    variant='slider'
    {...props}
    __css={{
      display: 'block',
      width: '100%',
      height: 4,
      my: 2,
      cursor: 'pointer',
      appearance: 'none',
      borderRadius: 9999,
      color: 'inherit',
      bg: 'gray',
      ':focus': {
        outline: 'none',
        color: 'primary',
      },
      '&::-webkit-slider-thumb': {
        appearance: 'none',
        width: 16,
        height: 16,
        bg: 'currentcolor',
        border: 0,
        borderRadius: 9999,
        variant: 'forms.slider.thumb',
      },
    }}
  />
)

export const Switch = forwardRef(({
  checked,
  ...props
}, ref) =>
  <Box
    ref={ref}
    as='button'
    type='button'
    role='switch'
    tx='forms'
    variant='switch'
    aria-checked={checked}
    {...props}
    __css={{
      appearance: 'none',
      m: 0,
      p: 0,
      width: 40,
      height: 24,
      color: 'primary',
      bg: 'transparent',
      border: '1px solid',
      borderColor: 'primary',
      borderRadius: 9999,
      '&[aria-checked=true]': {
        bg: 'primary',
      },
      ':focus': {
        outline: 'none',
        boxShadow: '0 0 0 2px'
      },
    }}>
    <Box
      aria-hidden
      style={{
        transform: checked ? 'translateX(16px)' : 'translateX(0)',
      }}
      sx={{
        mt: '-1px',
        ml: '-1px',
        width: 24,
        height: 24,
        borderRadius: 9999,
        border: '1px solid',
        borderColor: 'primary',
        bg: 'background',
        transitionProperty: 'transform',
        transitionTimingFunction: 'ease-out',
        transitionDuration: '0.1s',
        variant: 'forms.switch.thumb',
      }}
    />
  </Box>
)

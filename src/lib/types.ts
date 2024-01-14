export type Color =
  | `#${string}`
  | `hsl(${string})`
  | `hsla(${string})`
  | `rgb(${string})`
  | `rgba(${string})`
  | `var(${string})`
  | `${string}-${string}`
  | `${string}-${string}-${string}`

export const color_var = (prop: string | undefined) => prop ? `var(--${prop}-color)` : 'inherit';
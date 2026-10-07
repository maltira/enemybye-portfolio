export * from './useDragScroll'
export * from './useColorScheme'

export const cn = (...classes: (string | boolean | undefined | null)[]): string => {
  return classes.filter(Boolean).join(' ')
}

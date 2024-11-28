import { generate } from '@ant-design/colors'

export interface TwoToneColorPalette {
  primary: string
  secondary?: string
}

export type TwoToneColor = string | [string, string]

export const twoToneColorPalette: TwoToneColorPalette = {
  primary: '#333',
  secondary: '#E6E6E6',
}

export function getSecondaryColor(primary: string): string {
  return generate(primary)[0]
}

export function normalizeTwoToneColor(
  twoToneColor: TwoToneColor,
): [string, string] | [string] {
  return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor]
}

export function setTwoToneColor(twoToneColor: TwoToneColor): void {
  const [primary, secondary] = normalizeTwoToneColor(twoToneColor)
  twoToneColorPalette.primary = primary
  twoToneColorPalette.secondary = secondary || getSecondaryColor(primary)
}

export function getTwoToneColor(): TwoToneColor {
  if (!twoToneColorPalette.secondary) {
    return twoToneColorPalette.primary
  }
  return [twoToneColorPalette.primary, twoToneColorPalette.secondary]
}

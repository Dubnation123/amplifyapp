import Typography from "typography"
import elkGlenTheme from 'typography-theme-elk-glen'

elkGlenTheme.overrideThemeStyles = () => ({
  a: {
    textShadow: null,
  }
});

const typography = new Typography(elkGlenTheme)

export const { scale, rhythm, options } = typography
export default typography
import { createTheme } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from 'next-themes';

const lightTheme = createTheme({
  type: 'light',
})

const darkTheme = createTheme({
  type: 'dark',
})

export default function ThemeProvider({ children }) {
    return (
    <NextThemesProvider
        defaultTheme="system"
        attribute="class"
        value={{
            light: lightTheme.className,
            dark: darkTheme.className
        }}
    >
        {children}
    </NextThemesProvider>
    )
}

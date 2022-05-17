// these APIs are auto-imported from @vueuse/core
const isDark = useDark()
const toggleDark = useToggle(isDark)
const preferredDark = usePreferredDark()

export default function useDarkMode() {
  return {
    isDark,
    toggleDark,
    preferredDark,
  }
}

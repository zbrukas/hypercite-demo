export function tryAutomaticDownload(url) {
  try {
    if (typeof window !== "undefined") {
      const element = document.createElement("a")
      element.setAttribute("href", url)
      element.setAttribute("download", "final")

      element.style.display = "none"
      document.body.appendChild(element)

      element.click()

      document.body.removeChild(element)
    }
  } catch {
    console.error("Could not automatically download file")
  }
}

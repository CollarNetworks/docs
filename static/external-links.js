function updateExternalLinks() {
  const currentHost = window.location.hostname

  document.querySelectorAll('a[href^="http"]').forEach((link) => {
    const linkHost = new URL(link.href).hostname

    if (linkHost !== currentHost) {
      link.setAttribute("target", "_blank")
      link.setAttribute("rel", "noopener")

      // Accessibility improvement: Add screen reader-only label
      const srText = document.createElement("span")
      srText.textContent = " (opens in a new tab)"
      srText.classList.add("sr-only")

      // Visual cue for external links (optional icon)
      const icon = document.createElement("span")
      icon.textContent = " ↗" // or use an icon font if you prefer
      icon.setAttribute("aria-hidden", "true")

      // Append only if not already appended
      if (!link.querySelector(".sr-only")) {
        link.appendChild(srText)
        link.appendChild(icon)
      }
    }
  })
}

document.addEventListener("DOMContentLoaded", updateExternalLinks)
document.addEventListener("retype.page.loaded", updateExternalLinks)

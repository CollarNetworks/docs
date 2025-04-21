function updateExternalLinks() {
  const currentHost = window.location.hostname

  document.querySelectorAll('a[href^="http"]').forEach((link) => {
    const linkHost = new URL(link.href).hostname

    if (linkHost !== currentHost) {
      link.setAttribute("target", "_blank")
      link.setAttribute("rel", "noopener")

      // Check if we’ve already added the icon
      if (!link.querySelector(".sr-only")) {
        const srText = document.createElement("span")
        srText.textContent = " (opens in a new tab)"
        srText.classList.add("sr-only")

        const icon = document.createElement("span")
        icon.textContent = " ↗"
        icon.setAttribute("aria-hidden", "true")

        link.appendChild(srText)
        link.appendChild(icon)
      }
    }
  })
}

// Fire after Retype finishes loading content
document.addEventListener("retype.ready", updateExternalLinks)
document.addEventListener("retype.page.loaded", updateExternalLinks)

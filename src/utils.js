export function humanize(value) {
  return (
    value.toLowerCase()
      .replace(/[_-]/g, ' ')
      .replace(/(?:^|\s)\S/g, (c) => c.toUpperCase())
  )
}

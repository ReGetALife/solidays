function resolveMd (raw) {
  const res = {}
  if (typeof raw === 'string' || raw instanceof String) {
    const strings = raw.split('---\n', 2)
    if (strings.length === 2) {
      const heads = strings[0].split('\n')
      for (const kv of heads) {
        if (kv.indexOf(':') > 0) {
          const kvArr = kv.split(':', 2)
          if (kvArr.length === 2) {
            const k = kvArr[0].trim()
            res[k] = kvArr[1].trim()
          }
        }
      }
      res.content = strings[1]
    }
  }
  return res
}

export default resolveMd

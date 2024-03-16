function resolveMd (raw) {
  const res = {}
  if (typeof raw === 'string' || raw instanceof String) {
    const strings = raw.split('---\n', 3)
    if (strings.length === 3) {
      const heads = strings[1].split('\n')
      for (const kv of heads) {
        if (kv.indexOf(':') > 0) {
          const k = kv.slice(0, kv.indexOf(':')).trim()
          res[k] = kv.slice(kv.indexOf(':') + 1).trim()
        }
      }
      res.content = strings[2]
    }
  }
  return res
}

module.exports = resolveMd

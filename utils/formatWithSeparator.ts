const formatWithSeparator = (value?: number | string, decimals?: number) => {
  if (value === undefined || value === null || value === '') {
    return undefined
  }

  const num = typeof value === 'string' ? parseFloat(value) : value
  if (isNaN(num)) {
    return undefined
  }

  return num.toLocaleString('en-US', {
    minimumFractionDigits: decimals ?? 2,
    maximumFractionDigits: decimals ?? 2,
  })
}

export default formatWithSeparator

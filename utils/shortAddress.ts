export const toShortAddress = (address: string | undefined, digits = 4) => {
  if (!address) return ''
  return `${address?.slice(0, 2 + digits)}...${address?.slice(-digits)}`
}

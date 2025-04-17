export const toShortAddress = (address: `0x${string}` | undefined) => {
  if (!address) return ''
  return `${address?.slice(0, 6)}...${address?.slice(-4)}`
}

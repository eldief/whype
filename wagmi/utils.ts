export const hasShortMessage = (err: unknown): err is { shortMessage: string } => {
  return (
    typeof err === 'object' &&
    err !== null &&
    'shortMessage' in err &&
    typeof (err as Record<string, unknown>).shortMessage === 'string'
  )
}

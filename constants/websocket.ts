declare global {
  type WebSocketReadyState =
    | typeof WebSocket.CONNECTING
    | typeof WebSocket.OPEN
    | typeof WebSocket.CLOSING
    | typeof WebSocket.CLOSED
}

export {}

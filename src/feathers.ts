import socketio from '@feathersjs/socketio-client'
import io from 'socket.io-client'

import { createClient } from 'feathers-pinia-api'

const socket = io('http://localhost:3030', { transports: ['websocket'] })

export const api = createClient(socketio(socket), { storage: window.localStorage })

import socket from './connect'

//LOGIN

const login = (user, cb) => {
  socket.emit('LOGIN', user)
  socket.on('LOGINSUCCESS', userId => {
    cb(userId)
  })
}

const register = async (user) => {
  socket.emit('REGISTER', user)
  await socket.on('REGISTERSUCCESS', userId => {
    return userId
  })
  return false
}

const getUserDisplayInfo = (cb) => {
  socket.emit('GETUSERDISPLAYINFO')
  socket.on('USERDISPLAYINFO', data => {
    console.log(data)
    cb(data)
  })
}

const userHelper = {
    login,
    register,
    getUserDisplayInfo
}

export default userHelper
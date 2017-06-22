const Const = {
  server: {
    local: location.origin.indexOf('localhost') > -1 ? 'http://localhost:8000' : location.origin,
    amazon: 'http://ec2-52-200-3-121.compute-1.amazonaws.com',
    api_v1_5: 'http://api-catalogo-v2.biodiversidad.co/api/v1.5'
  },
  TOKEN: 'token-c4t4l0go',
  USER: 'user-c4t4l0go'
}

export default Const;

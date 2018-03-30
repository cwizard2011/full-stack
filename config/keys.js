
if (process.env.NODE_ENV === 'production'){
  export default require('./prod')
} else {
  export default require('./dev')
}
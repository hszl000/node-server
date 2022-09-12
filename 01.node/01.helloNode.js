console.log('hello Node')

const x = 100
const y = 200

// exports.x = x
// exports.y = y
// exports.fn = () => { }

module.exports = {
  x,
  y,
  fn: () => { }
}
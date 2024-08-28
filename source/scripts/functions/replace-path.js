export function replacePath(path) {
  const address = window.location.href;
  const regex = /\//g;
  let defaultPath = './'
  const matches = address.match(regex);
  const count = matches ? (matches.length - 2) : 0;
  let newPath = '';
  const levelPath = () => {
    for (let i = 0; i <= count - 2; i++) {
      newPath = defaultPath += '../'
    }
    return newPath;
  }
  const endPath = levelPath() + path
  console.log(count)
  console.log(endPath)
  return endPath;
}

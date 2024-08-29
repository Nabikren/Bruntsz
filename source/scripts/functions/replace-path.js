export function replacePath(path) {
  const address = window.location.href;
  const regex = /\//g;
  let defaultPath = '/'
  const matches = address.match(regex);
  const count = matches ? (matches.length - 2) : 0;
  let newPath = '';
  if (count > 0) {
    for (let i = 0; i <= count - 2; i++) {
      newPath = newPath + '../'
    }
  }
  const endPath = defaultPath + newPath + path

  return endPath;
}

export function query(state, options) {
  //return this.editor.read(options);
  const dataSource = gridView.get('dataSource');
  const read = dataSource.read;
  return read(options);
}

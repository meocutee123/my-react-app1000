declare global {
  interface String {
    hasValue(): boolean;
  }
}


String.prototype.hasValue = function () {
  if (this === undefined) return false
  if (this === null) return false
  if (this === '') return false
  if (this.trim() === '') return false

  return true
};

export { }
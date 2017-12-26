/* eslint-disable import/prefer-default-export  */

export const defaultExcludeModifier = function(defaultValue) {
  if (this.isSet) {
    return this.value;
  }
  if (this.operator) {
    return this.unset();
  }
  return defaultValue;
}

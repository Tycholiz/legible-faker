module.exports = function uuidFormater(decimalValue) {
  
  // Function that formats the hexadecimal into UUID
  const generateUUIDFormat = (hexValue) => {
      const zeroAsUUID = '00000000-0000-0000-0000-000000000000'
      // remove the appropriate number of 0's and replace them with the hexValue
      return zeroAsUUID.substring(0, zeroAsUUID.length - hexValue.length) + hexValue
  }

  // Function that converts a decimal number into hexadecimal
  const convertToUUID = (decimalValue) => {
      const hexValue = decimalValue.toString(16)
      return generateUUIDFormat(hexValue)
  }

  return convertToUUID(decimalValue)
}
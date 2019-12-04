
var countryCodes = [ 
  "AF", "AX", "AL", "DZ", "AS", "AD", "AO", "AI", "AQ", "AG", "AR", "AM", "AW", "AU", "AT", "AZ", "BH", "BS", "BD", "BB", 
  "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BQ", "BA", "BW", "BV", "BR", "IO", "BN", "BG", "BF", "BI", "KH", "CM", "CA", 
  "CV", "KY", "CF", "TD", "CL", "CN", "CX", "CC", "CO", "KM", "CG", "CD", "CK", "CR", "CI", "HR", "CU", "CW", "CY", "CZ", 
  "DK", "DJ", "DM", "DO", "EC", "EG", "SV", "GQ", "ER", "EE", "ET", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "TF", "GA", 
  "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GU", "GT", "GG", "GN", "GW", "GY", "HT", "HM", "VA", "HN", "HK", 
  "HU", "IS", "IN", "ID", "IR", "IQ", "IE", "IM", "IL", "IT", "JM", "JP", "JE", "JO", "KZ", "KE", "KI", "KP", "KR", "KW", 
  "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO", "MK", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", 
  "MR", "MU", "YT", "MX", "FM", "MD", "MC", "MN", "ME", "MS", "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "NC", "NZ", "NI", 
  "NE", "NG", "NU", "NF", "MP", "NO", "OM", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR", "QA", 
  "RE", "RO", "RU", "RW", "BL", "SH", "KN", "LC", "MF", "PM", "VC", "WS", "SM", "ST", "SA", "SN", "RS", "SC", "SL", "SG", 
  "SX", "SK", "SI", "SB", "SO", "ZA", "GS", "SS", "ES", "LK", "SD", "SR", "SJ", "SZ", "SE", "CH", "SY", "TW", "TJ", "TZ", 
  "TH", "TL", "TG", "TK", "TO", "TT", "TN", "TR", "TM", "TC", "TV", "UG", "UA", "AE", "GB", "US", "UM", "UY", "UZ", "VU", 
  "VE", "VN", "VG", "VI", "WF", "EH", "YE", "ZM", "ZW" ];

var monthCodes = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L" ];

function isCountryCode(code) {
  return countryCodes.includes(code);
}

function isManufacturerCode(code) {
  if (code.indexOf('0') > -1)
    return false;
  if (code.indexOf('1') > -1)
    return false;
  return true;
}

function isSerialNumber(code) {
  if (code.indexOf('I') > -1)
    return false;
  if (code.indexOf('O') > -1)
    return false;
  if (code.indexOf('Q') > -1)
    return false;
  return true;
}

function isMonthOfManufacture(code) {
  return monthCodes.includes(code);
}

function isYearOfManufacture(code) {
  return code >= 0 && code <= 9;
}

function isModelYear(code) {
  return code >= 0 && code <= 99;
}

exports.ishin = (hin) => {

  if (hin.length != 15)
    return false;
  else if (hin.charAt(2) != '-')
    return false;
  else if (!isCountryCode(hin.substring(0, 2)))
    return false;
  else if (!isManufacturerCode(hin.substring(3, 5)))
    return false;
  else if (!isSerialNumber(hin.substring(6, 11)))
    return false;
  else if (!isMonthOfManufacture(hin.substring(11, 12)))
    return false;
  else if (!isYearOfManufacture(hin.substring(12, 13)))
    return false;
  else if (!isModelYear(hin.substring(13, 15)))
    return false;

  return true;
}
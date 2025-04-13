const nested = {
  isActive: true,
  phone: null,
  testArr: [1, 2, 3, 4],
  user: {
    name: 'Alice',
    address: {
      city: 'Wonderland',
      zip: 12345,
    },
  },
};

// expected output
/* 
    {
        'user.name': 'Alice',
        'user.address.city': 'Wonderland',
        'user.address.zip': 12345,
        'isActive': true
    }
*/

function flattenObject(
  obj: any,
  parentKey = '',
  result: any = {}
): Record<string, any> {
  for (const key in obj) {
    const value = obj[key];
    const fullKey = parentKey ? `${parentKey}.${key}` : key;

    if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
      flattenObject(value, fullKey, result);
    } else {
      result[fullKey] = value;
    }
  }

  return result;
}

console.log(flattenObject(nested));

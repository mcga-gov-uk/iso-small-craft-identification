# iso-small-craft-identification
Node.js utilities to support BS EN ISO 10087 Small craft. Craft identification. Coding system. 
Use this package if you want to check the validity of Hull Identification Numbers (HINs) for small boats.

#### Supported versions of the standard:
- BS EN ISO 10087:2019 <https://www.iso.org/obp/ui/#iso:std:iso:10087:ed-4:v1:en>

#### Usage:
```javascript
const isci = require('@mcga/iso-small-craft-identification')

// Valid HIN
isci.ishin('NL-HXAB7A33G293'); // returns true

// Invalid HIN ( 'ZZ' is not a valid country code )
isci.ishin('ZZ-HXZZ7A33G293'); // returns false

// State a supported specification version
isci.ishin('NL-HXAB7A33G293','10087:2019'); // returns true

// State an unsupported specification version
isci.ishin('NL-HXAB7A33G293','10087:1847'); // throws an Error
```

#### Tests:
```shell
 PASS  test/10087-2019.test.js
  Hull Identification Number ( 10087:2019 )
    ✓ should pass ( default specification version ) (5ms)
    ✓ should pass ( specific specification version ) (1ms)
    ✓ should throw an error ( unsupported specification version ) (2ms)
    ✓ should fail ( too short )
    ✓ should fail ( no '-' ) (1ms)
    ✓ should fail ( invalid country code )
    ✓ should fail ( invalid manufacturer code '0' at position 0 )
    ✓ should fail ( invalid manufacturer code '1' at position 1 ) (1ms)
    ✓ should fail ( serial number includes 'O' at position 0 )
    ✓ should fail ( serial number includes 'Q' at position 0 )
    ✓ should fail ( serial number includes 'I' at position 0 ) (1ms)
    ✓ should fail ( invalid month of manufacture 'Z' )
    ✓ should fail ( invalid year of manufacture 'Z' )
    ✓ should fail ( invalid model year 'ZZ' )

---------------|----------|----------|----------|----------|-------------------|
File           |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
---------------|----------|----------|----------|----------|-------------------|
All files      |      100 |      100 |      100 |      100 |                   |
 10087-2019.js |      100 |      100 |      100 |      100 |                   |
---------------|----------|----------|----------|----------|-------------------|
Test Suites: 1 passed, 1 total
Tests:       14 passed, 14 total
Snapshots:   0 total
Time:        1.153s
```
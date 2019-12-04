
const supertest = require('supertest');

const ihi = require('../index.js');

describe('Hull Identification Number ( 10087:2019 )', () => {

  it("should pass ( default specification version )", async () => {
    expect(ihi.ishin("NL-HXAB7A33G293")).toStrictEqual(true)
  })

  it("should pass ( specific specification version )", async () => {
    expect(ihi.ishin("NL-HXAB7A33G293", "10087:2019")).toStrictEqual(true)
  })

  it("should throw an error ( unsupported specification version )", async () => {
    expect(() => {
      ihi.ishin("NL-HXAB7A33G293", "10087:1876");
    }).toThrow();
  })

  it("should fail ( too short )", async () => {
    expect(ihi.ishin("NLHXAB7A33G293")).toEqual(false)
  })

  it("should fail ( no '-' )", async () => {
    expect(ihi.ishin("NL_HXAB7A33G293")).toStrictEqual(false)
  })

  it("should fail ( invalid country code )", async () => {
    expect(ihi.ishin("ZZ-HXZZ7A33G293")).toStrictEqual(false)
  })

  it("should fail ( invalid manufacturer code '0' at position 0 )", async () => {
    expect(ihi.ishin("NL-0XAB7A33G293")).toStrictEqual(false)
  })
  it("should fail ( invalid manufacturer code '1' at position 1 )", async () => {
    expect(ihi.ishin("NL-H1AB7A33G293")).toStrictEqual(false)
  })

  it("should fail ( serial number includes 'O' at position 0 )", async () => {
    expect(ihi.ishin("NL-HXAO7A33G293")).toStrictEqual(false)
  })
  it("should fail ( serial number includes 'Q' at position 0 )", async () => {
    expect(ihi.ishin("NL-HXAQ7A33G293")).toStrictEqual(false)
  })

  it("should fail ( serial number includes 'I' at position 0 )", async () => {
    expect(ihi.ishin("NL-HXAI7A33G293")).toStrictEqual(false)
  })

  it("should fail ( invalid month of manufacture 'Z' )", async () => {
    expect(ihi.ishin("NL-HXAB7A33Z293")).toStrictEqual(false)
  })

  it("should fail ( invalid year of manufacture 'Z' )", async () => {
    expect(ihi.ishin("NL-HXAB7A33GZ93")).toStrictEqual(false)
  })

  it("should fail ( invalid model year 'ZZ' )", async () => {
    expect(ihi.ishin("NL-HXAB7A33G2ZZ")).toStrictEqual(false)
  })

})
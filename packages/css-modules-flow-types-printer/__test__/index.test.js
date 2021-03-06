/* eslint-env jest */
import printer, { EOL, HEADER } from '../index';

describe('printer', () => {
  it('prints given tokens', () => {
    const result = printer(['btn1', 'btn2'], EOL.LF);
    expect(result).toBe(
      `${HEADER}
declare module.exports: {|
  +'btn1': string,
  +'btn2': string,
|};
`
    );
  });
});

import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { decodeImageBase64ToUint8 } from "./image-decode";

describe("decodeImageBase64ToUint8", () => {
  it("decodes a valid bse64 string to Uint8Array", () => {
    const inputText = "Hello";
    const base64 = btoa(inputText); // "SGVsbG8="

    const result = decodeImageBase64ToUint8(base64);
    const exptected = new Uint8Array(
      [...inputText].map((c) => c.charCodeAt(0))
    );

    expect(result).toBeInstanceOf(Uint8Array);
    expect(result).toEqual(exptected);
  });

  it('returns an empty Uint8Array when given an empty string', () => {
    const result = decodeImageBase64ToUint8("")
    expect(result).toBeInstanceOf(Uint8Array)
    expect(result).toHaveLength(0)
  })

  it('throws an Error for invalid base 64 string', () => {
    expect(() => {
        decodeImageBase64ToUint8('this-is-not-base64')
    }).toThrow('Failed to decode base64 string. Ensure the input is a valid base64-encoded string')
  })

    it('throws a TypeError when input is not a string', () => {
    // @ts-expect-error: Testing runtime error, not TypeScript
    expect(() => decodeImageBase64ToUint8({ buffer: 123 })).toThrow(TypeError);
  });
});
